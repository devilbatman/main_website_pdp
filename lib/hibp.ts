/**
 * Have I Been Pwned — breach catalogue (Troy Hunt).
 * API: https://haveibeenpwned.com/api/v3
 * Attribution required when displaying breach data.
 */

export interface HibpBreach {
  name: string;
  title: string;
  domain: string;
  breachDate: string;
  pwnCount: number;
  description: string;
  dataClasses: string[];
  isVerified: boolean;
  isSensitive: boolean;
  hibpUrl: string;
}

/** Domains & brands with strong Indonesia user base — curated allowlist */
const INDONESIA_RELEVANCE = [
  '.id',
  'tokopedia.com',
  'bukalapak.com',
  'bhinneka.com',
  'traveloka.com',
  'gojek.com',
  'go-jek.com',
  'ovo.id',
  'dana.id',
  'linkaja.id',
  'blibli.com',
  'tiket.com',
  'pegipegi.com',
  'kreditplus.com',
  'jamtangan.com',
  'qraved.com',
  'travelio.com',
  'indihome',
  'pertamina',
  'redmart.lazada',
  'youthmanual.com',
  'cermati.com',
  'ruangguru.com',
  'zenius.net',
  'pegadaian',
  'kominfo',
  'bpjs',
];

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function isIndonesiaRelevant(breach: {
  Domain?: string;
  Title?: string;
  Name?: string;
  Description?: string;
}): boolean {
  const haystack = `${breach.Domain ?? ''} ${breach.Title ?? ''} ${breach.Name ?? ''} ${breach.Description ?? ''}`.toLowerCase();
  return INDONESIA_RELEVANCE.some((token) => haystack.includes(token.toLowerCase()));
}

export async function fetchIndonesiaHibpBreaches(): Promise<HibpBreach[]> {
  try {
    const res = await fetch('https://haveibeenpwned.com/api/v3/breaches', {
      next: { revalidate: 86400 },
      headers: {
        'User-Agent': 'PatuhData-BreachTracker/1.0 (https://patuhdata.id/kebocoran-data)',
      },
    });

    if (!res.ok) return [];

    const raw = (await res.json()) as Array<{
      Name: string;
      Title: string;
      Domain?: string;
      BreachDate: string;
      PwnCount: number;
      Description: string;
      DataClasses: string[];
      IsVerified: boolean;
      IsSensitive: boolean;
    }>;

    return raw
      .filter(isIndonesiaRelevant)
      .map((b) => ({
        name: b.Name,
        title: b.Title,
        domain: b.Domain ?? '—',
        breachDate: b.BreachDate,
        pwnCount: b.PwnCount,
        description: stripHtml(b.Description),
        dataClasses: b.DataClasses ?? [],
        isVerified: b.IsVerified,
        isSensitive: b.IsSensitive,
        hibpUrl: `https://haveibeenpwned.com/PwnedWebsites#${encodeURIComponent(b.Name)}`,
      }))
      .sort((a, b) => b.breachDate.localeCompare(a.breachDate));
  } catch {
    return [];
  }
}

export function formatPwnCount(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)} juta`;
  if (count >= 1_000) return `${Math.round(count / 1_000)} ribu`;
  return count.toLocaleString('id-ID');
}

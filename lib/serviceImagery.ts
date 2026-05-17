/**
 * Professional stock-style photography (Unsplash) per service slug.
 * Replace URLs with your Shutterstock-licensed assets in /public when available.
 */
export type ServiceImagery = {
  hero: string;
  heroAlt: string;
  challenge: string;
  challengeAlt: string;
  collaboration: string;
  collaborationAlt: string;
};

const defaultImagery: ServiceImagery = {
  hero: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop',
  heroAlt: 'Tim profesional berdiskusi tentang tata kelola dan kepatuhan',
  challenge:
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80&auto=format&fit=crop',
  challengeAlt: 'Tim merencanakan prioritas dan tindak lanjut di ruang kerja',
  collaboration:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop',
  collaborationAlt: 'Kolaborasi mitra bisnis dan komitmen kerja sama',
};

const bySlug: Record<string, Partial<ServiceImagery>> = {
  'risk-orchestration-readiness': {
    hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
    heroAlt: 'Rapat tim membahas register risiko dan prioritas perbaikan',
    challenge:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80&auto=format&fit=crop',
    challengeAlt: 'Workshop manajemen risiko dan whiteboard prioritas',
  },
  'pdp-readiness-assessment': {
    hero: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop',
    heroAlt: 'Dokumen kepatuhan, kontrak, dan perlindungan data di meja kerja',
    challenge:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80&auto=format&fit=crop',
    challengeAlt: 'Profesional hukum dan kepatuhan meninjau kerangka regulasi',
  },
  'operational-data-governance': {
    hero: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop',
    heroAlt: 'Tim lintas fungsi membahas alur data dan tata kelola operasional',
    collaboration:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80&auto=format&fit=crop',
    collaborationAlt: 'Kolaborasi tim dengan laptop dan dokumentasi proses',
  },
  'ai-governance-readiness': {
    hero: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop',
    heroAlt: 'Antarmuka dan visualisasi terkait AI serta pengambilan keputusan',
    challenge:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format&fit=crop',
    challengeAlt: 'Profesional mengevaluasi model dan risiko teknologi',
  },
  'vendor-risk-review': {
    hero: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop',
    heroAlt: 'Jabat tangan dan kemitraan vendor yang profesional',
    collaboration:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80&auto=format&fit=crop',
    collaborationAlt: 'Diskusi evaluasi mitra dan rantai pasokan',
  },
  'advisory-retainer': {
    hero: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop',
    heroAlt: 'Tim konsultasi bekerja bersama di ruang kerja modern',
    challenge:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80&auto=format&fit=crop',
    challengeAlt: 'Sesi advisory dan mentoring kepatuhan berkala',
  },
};

export function getServiceImagery(slug: string): ServiceImagery {
  const extra = bySlug[slug] ?? {};
  return {
    ...defaultImagery,
    ...extra,
    hero: extra.hero ?? defaultImagery.hero,
    heroAlt: extra.heroAlt ?? defaultImagery.heroAlt,
    challenge: extra.challenge ?? defaultImagery.challenge,
    challengeAlt: extra.challengeAlt ?? defaultImagery.challengeAlt,
    collaboration: extra.collaboration ?? defaultImagery.collaboration,
    collaborationAlt: extra.collaborationAlt ?? defaultImagery.collaborationAlt,
  };
}

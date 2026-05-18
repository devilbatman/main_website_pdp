import { ImageResponse } from 'next/og';

export const alt = 'PatuhData — Tata kelola data & UU PDP untuk sektor keuangan Indonesia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(145deg, #0f172a 0%, #1e3a5f 45%, #1d4ed8 100%)',
          color: '#ffffff',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: '#60a5fa',
            }}
          />
          <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: '0.08em', opacity: 0.9 }}>
            PATUHDATA
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 980 }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Tata kelola data & UU PDP
          </div>
          <div style={{ fontSize: 30, fontWeight: 400, lineHeight: 1.4, color: '#cbd5e1' }}>
            Gap assessment, vendor risk, dan bukti audit untuk bank, BPR, dan fintech Indonesia
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: '#94a3b8',
          }}
        >
          <span>patuhdata.id</span>
          <span>Kedalaman regulasi · Kontrol terlindungi</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

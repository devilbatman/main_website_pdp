export function getServiceCta(slug: string): { label: string; eventLabel: string } {
  if (slug === 'pdp-readiness-assessment') {
    return { label: 'Minta Gap Assessment', eventLabel: 'gap_assessment_pdp' };
  }
  return { label: 'Ajukan konsultasi', eventLabel: 'consultation' };
}

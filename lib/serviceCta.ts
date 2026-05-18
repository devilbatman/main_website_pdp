export function getServiceCta(slug: string): { label: string; eventLabel: string } {
  if (slug === 'pdp-readiness-assessment') {
    return { label: 'Minta Gap Assessment', eventLabel: 'gap_assessment_pdp' };
  }
  if (slug === 'vendor-risk-review') {
    return { label: 'Ajukan Vendor Readiness Sprint', eventLabel: 'vendor_readiness_sprint' };
  }
  return { label: 'Ajukan konsultasi', eventLabel: 'consultation' };
}

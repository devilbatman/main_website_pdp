export const FREE_RESOURCE_DOWNLOADS = {
  pdf: {
    filename: 'patuhdata-pdp-readiness-checklist.pdf',
    label: 'Ceklist Kesiapan Operasional UU PDP (PDF)',
    description: '15 pertanyaan praktis di 8 domain — untuk tim legal, DPO, IT, dan operasi.',
  },
  excel: {
    filename: 'patuhdata-ropa-starter.xlsx',
    label: 'Template ROPA Starter (Excel)',
    description: 'Register aktivitas pemrosesan dengan petunjuk dan 2 contoh baris.',
  },
} as const;

export const RESOURCES_STORAGE_KEY = 'patuhdata_resources_unlocked';
export const RESOURCES_LEAD_KEY = 'patuhdata_resources_lead';

export interface Service {
  slug: string;
  title: string;
  description: string;
  heroDescription: string;
  intro: string;
  idealFor: string[];
  deliverables: string[];
  process: string[];
  outcomes: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: 'gap-assessment',
    title: 'UU PDP Gap Assessment',
    description: 'Discover where your infrastructure stands before the regulators do.',
    heroDescription: 'End-to-end evaluation of your current data privacy posture against UU PDP requirements.',
    intro: 'Our Gap Assessment is a rigorous, structured review of your enterprise data privacy controls, designed specifically for highly regulated industries like banking and fintech.',
    idealFor: [
      'Enterprises preparing for UU PDP compliance',
      'Organizations handling large volumes of personal data',
      'Companies facing upcoming regulatory audits',
    ],
    deliverables: [
      'Comprehensive Gap Assessment Report',
      'Risk Prioritization Matrix',
      'Actionable Remediation Roadmap',
      'Executive Summary Presentation',
    ],
    process: [
      'Scoping and initial discovery',
      'Documentation and policy review',
      'Interviews with key stakeholders',
      'Control gap analysis against UU PDP',
      'Delivery of final report and roadmap',
    ],
    outcomes: [
      'Clear visibility into compliance gaps',
      'Prioritized remediation strategy',
      'Confidence in regulatory alignment',
    ],
    keywords: ['gap assessment', 'UU PDP', 'compliance audit', 'data privacy'],
  },
  {
    slug: 'ropa',
    title: 'Record of Processing Activities (ROPA)',
    description: 'Total visibility over your enterprise data lifecycle.',
    heroDescription: 'Map and document every data flow across your organization to ensure full transparency and compliance.',
    intro: 'A ROPA is the foundational blueprint of your data compliance program. We help you map out exactly what data you collect, why you collect it, where it goes, and who has access.',
    idealFor: [
      'Organizations with complex data ecosystems',
      'Companies required to maintain mandatory records under UU PDP',
      'Firms undergoing digital transformation',
    ],
    deliverables: [
      'Complete ROPA Documentation',
      'Data Flow Diagrams (DFDs)',
      'Data Lifecycle Inventory',
      'Departmental Data Registers',
    ],
    process: [
      'Departmental questionnaires and interviews',
      'Data mapping and flow tracking',
      'Validation of legal basis for processing',
      'Compilation of the centralized ROPA',
    ],
    outcomes: [
      'Centralized visibility of all personal data',
      'Clear understanding of legal basis and retention',
      'Readiness for regulatory inquiries',
    ],
    keywords: ['ROPA', 'data mapping', 'data flow diagram', 'record of processing'],
  },
  {
    slug: 'dpia',
    title: 'Data Protection Impact Assessment (DPIA)',
    description: 'Pre-empt high-risk processing liabilities.',
    heroDescription: 'Systematically identify and mitigate privacy risks before launching new products or services.',
    intro: 'For high-risk data processing activities, a DPIA is not just best practice—it is a regulatory requirement. We help you systematically assess and mitigate risks to data subjects.',
    idealFor: [
      'Teams launching new apps or financial products',
      'Organizations implementing new AI or data analytics tools',
      'Firms processing sensitive personal data at scale',
    ],
    deliverables: [
      'Formal DPIA Report',
      'Risk Mitigation Strategy',
      'Privacy-by-Design Recommendations',
      'Stakeholder Sign-off Documentation',
    ],
    process: [
      'Identify the need for a DPIA',
      'Describe the data processing activity',
      'Assess necessity and proportionality',
      'Identify and assess privacy risks',
      'Determine mitigation measures',
    ],
    outcomes: [
      'Proactive identification of privacy risks',
      'Documented compliance with UU PDP obligations',
      'Enhanced trust through Privacy-by-Design',
    ],
    keywords: ['DPIA', 'privacy impact assessment', 'risk mitigation', 'privacy by design'],
  },
  {
    slug: 'dpo-as-a-service',
    title: 'DPO as a Service',
    description: 'Executive-level privacy expertise without the overhead.',
    heroDescription: 'Outsource your Data Protection Officer role to our team of certified privacy experts.',
    intro: 'Appointing a DPO is mandatory for many organizations. Our DPO as a Service provides you with on-demand, executive-level privacy leadership, guidance, and regulatory liaison services.',
    idealFor: [
      'Organizations requiring a DPO under UU PDP',
      'Firms needing independent privacy oversight',
      'Companies seeking cost-effective compliance leadership',
    ],
    deliverables: [
      'Designated Data Protection Officer',
      'Regular Compliance Status Reports',
      'Regulatory Liaison and Breach Reporting Support',
      'Ongoing Advisory and Training',
    ],
    process: [
      'Onboarding and context gathering',
      'Establishment of reporting lines and protocols',
      'Regular compliance monitoring and audits',
      'Ad-hoc advisory for new initiatives',
      'Annual compliance review',
    ],
    outcomes: [
      'Fulfillment of the mandatory DPO requirement',
      'Continuous independent oversight',
      'Access to deep privacy expertise on-demand',
    ],
    keywords: ['DPO', 'Data Protection Officer', 'DPO as a service', 'outsourced DPO'],
  },
  {
    slug: 'caas-platform',
    title: 'Compliance-as-a-Service (CaaS) Platform',
    description: 'Move from manual spreadsheets to automated, continuous compliance.',
    heroDescription: 'Streamline and automate your privacy operations with our enterprise-grade compliance platform.',
    intro: 'Managing compliance via spreadsheets is unsustainable. Our CaaS platform digitizes your ROPA, DPIAs, consent management, and vendor risk assessments into a single source of truth.',
    idealFor: [
      'Mature organizations looking to automate compliance',
      'Teams struggling with spreadsheet sprawl',
      'Enterprises needing continuous compliance monitoring',
    ],
    deliverables: [
      'Access to the PatuhData CaaS Platform',
      'Automated ROPA and DPIA Modules',
      'Vendor Risk Management Dashboard',
      'Real-time Compliance Posture Scoring',
    ],
    process: [
      'Platform provisioning and setup',
      'Data migration from existing spreadsheets',
      'User training and onboarding',
      'Integration with existing enterprise systems',
      'Continuous automated monitoring',
    ],
    outcomes: [
      'Significant reduction in manual compliance effort',
      'Real-time visibility into compliance status',
      'Scalable privacy operations',
    ],
    keywords: ['CaaS', 'compliance platform', 'automated compliance', 'privacy software'],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

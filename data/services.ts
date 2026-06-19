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
    slug: 'corporate-governance-training',
    title: 'Corporate Governance & Training',
    description: 'Over 8 years of expertise in building resilient privacy cultures and governance frameworks.',
    heroDescription: 'From drafting internal data policies to executing executive workshops and anti-phishing simulations, we build your human firewall.',
    intro: 'With over 8 years of industry experience, we understand that policies alone do not prevent breaches. We help you establish robust corporate governance frameworks, vendor DPAs, and deliver hands-on training (including phishing simulations) to ensure your workforce is your strongest defense.',
    idealFor: [
      'Enterprises needing comprehensive data protection policies',
      'Organizations wanting to build a culture of privacy awareness',
      'Teams requiring executive-level compliance training and phishing simulations',
    ],
    deliverables: [
      'Customized Internal Data Protection Policies',
      'Vendor Data Processing Agreements (DPAs)',
      'Executive & Staff Privacy Workshops',
      'Simulated Phishing Campaigns & Awareness Reporting',
    ],
    process: [
      'Audit existing governance frameworks and policies',
      'Draft and implement robust DPAs and internal policies',
      'Assess current employee knowledge gaps',
      'Deliver tailored workshops and phishing simulations',
      'Provide management with progress and risk reporting',
    ],
    outcomes: [
      'Legally defensible corporate governance structures',
      'Drastically reduced risk of human error through training',
      'Documented evidence of compliance for regulators',
    ],
    keywords: ['corporate governance', 'privacy training', 'phishing simulation', 'data policies', 'DPA'],
  },
  {
    slug: 'employee-privacy-training',
    title: 'Employee Privacy & Security Awareness Training',
    description: 'Transform your workforce into a human firewall.',
    heroDescription: 'Equip your employees with the practical knowledge to handle personal data securely and recognize cyber threats.',
    intro: 'Human error is the leading cause of data breaches. Our training programs are designed to be engaging, practical, and tailored to the specific roles within your organization.',
    idealFor: [
      'Organizations wanting to build a culture of privacy',
      'Companies needing to demonstrate compliance training to regulators',
      'Teams handling sensitive personal or financial data',
    ],
    deliverables: [
      'Customized Training Modules',
      'Interactive Workshops or E-Learning',
      'Phishing Simulation Exercises',
      'Certificates of Completion (for compliance evidence)',
    ],
    process: [
      'Assess current employee knowledge gaps',
      'Customize training material to your business context',
      'Deliver live workshops or digital modules',
      'Conduct simulated attacks (e.g., phishing)',
      'Provide management with progress reporting',
    ],
    outcomes: [
      'Drastically reduced risk of human error',
      'Documented evidence of organizational compliance measures',
      'A proactive "Privacy First" company culture',
    ],
    keywords: ['awareness training', 'privacy training', 'human firewall', 'security awareness'],
  },
  {
    slug: 'data-breach-response',
    title: 'Data Breach Response Plan & Tabletop Exercises',
    description: 'Prepare for the worst before it happens.',
    heroDescription: 'Develop a robust playbook to handle data breaches within the mandatory 3x24 hour regulatory window.',
    intro: 'When a breach occurs, time is your enemy. We help you build a comprehensive incident response plan and train your executive team through simulated tabletop exercises.',
    idealFor: [
      'Enterprises wanting to minimize post-breach liability',
      'Organizations processing high-volumes of personal data',
      'Firms seeking to improve incident readiness',
    ],
    deliverables: [
      'Data Breach Incident Response Playbook',
      'Pre-drafted Regulatory Notification Templates',
      'Executive Tabletop Simulation Session',
      'Post-Simulation Readiness Report',
    ],
    process: [
      'Audit existing incident handling capabilities',
      'Draft the step-by-step response playbook',
      'Establish the Incident Response Team (IRT)',
      'Conduct a simulated breach scenario (Tabletop Exercise)',
      'Refine the playbook based on simulation results',
    ],
    outcomes: [
      'Ability to confidently meet the 3x24h reporting window',
      'Coordinated response across Legal, IT, and PR',
      'Minimized financial and reputational damage',
    ],
    keywords: ['data breach', 'incident response', 'tabletop exercise', 'breach notification'],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

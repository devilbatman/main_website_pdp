export const trustedBreachSources = [
  {
    name: 'Have I Been Pwned',
    description: 'Katalog insiden terverifikasi oleh Troy Hunt — standar industri untuk breach yang sudah dikonfirmasi.',
    url: 'https://haveibeenpwned.com/',
    checkUrl: 'https://haveibeenpwned.com/',
    checkLabel: 'Periksa email Anda',
  },
  {
    name: 'BSSN',
    description:
      'Badan Siber dan Sandi Negara — koordinasi insiden keamanan siber nasional. Portal CSIRT untuk pelaporan insiden.',
    url: 'https://www.bssn.go.id/',
    checkUrl: 'https://csirt.id/',
    checkLabel: 'Portal CSIRT',
  },
  {
    name: 'Kemkomdigi',
    description: 'Kementerian Komunikasi dan Digital — pengawasan ruang digital & UU PDP (sementara).',
    url: 'https://komdigi.go.id/',
  },
  {
    name: 'Brinztech',
    description: 'Threat intelligence & alert kebocoran data regional.',
    url: 'https://www.brinztech.com/breach-alerts/',
  },
] as const;

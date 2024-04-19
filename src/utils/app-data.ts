interface NavItem {
  id: string;
  name: string;
  to: string;
}

export const userNavItems: NavItem[] = [
  {
    id: '1',
    name: 'Login',
    to: '/',
  },
  {
    id: '2',
    name: 'Yatris',
    to: '/yatri-data',
  },
];

export const adminNavItems: NavItem[] = [
  {
    id: '1',
    name: 'Login',
    to: '/admin',
  },
  {
    id: '2',
    name: 'Create New User',
    to: '/admin/create-new',
  },
  {
    id: '3',
    name: 'Control Data',
    to: 'admin/data-control',
  },
];

export const trains = [
  '17603 (काचेगुड़ा एक्सप्रेस)',
  '12628 (कर्नाटका एक्सप्रेस)',
  '22691 (राजधानी एक्सप्रेस)',
  '12976 (जयपुर मैसूर एक्सप्रेस)',
  '12252 (वैनगंगा एक्सप्रेस)',
  '12648  (कांगो एक्सप्रेस)',
  '11301 (उद्यान एक्सप्रेस)',
  '19301 (डॉ. अंबेडकर नगर - यशवंतपुर साप्ताहिक एक्सप्रेस)',
  '12591 (गोरखपुर यशवंतपुर एक्सप्रेस)',
  '18643 (प्रशांति एक्सप्रेस)',
];

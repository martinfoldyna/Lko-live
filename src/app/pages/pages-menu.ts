import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Nástěnka',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Fotografie',
    icon: 'camera-outline',
    link: '/pages/photos',
  },
  {
    title: 'Příspěvky',
    icon: 'edit-2-outline',
    link: '/pages/articles',
  },
  {
    title: 'Předměty',
    icon: 'archive-outline',
    children: [
      {
        title: 'WEB',
        link: '/pages/subjects/web'
      },
      {
        title: 'MME',
        link: '/pages/subjects/mme'
      },
      {
        title: 'Výkresy',
        link: '/pages/subjects/drawings'
      },
    ]
  }
];

import { NbMenuItem } from '@nebular/theme';
import {UserService} from "./user/user.service";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'PŘEDMĚTY',
    group: true
  },
  {
    title: 'WEB',
    icon: 'browser-outline',
    link: '/pages/subjects/web',
  },
  {
    title: 'MME',
    icon: 'camera-outline',
    link: '/pages/subjects/mme'
  },
  {
    title: 'Výkresy',
    icon: 'edit-2-outline',
    link: '/pages/subjects/drawings'
  },
  {
    title: 'Uživatelé',
    group: true,
  },
  {
    title: 'Autorizování uživatelů',
    link: '/pages/users/',
    icon: 'person-outline',
  }

];

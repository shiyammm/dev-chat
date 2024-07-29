import {
  HomeIcon,
  DashboardIcon,
  AvatarIcon,
  RadiobuttonIcon,
} from '@radix-ui/react-icons';

export const NavLinks = [
  {
    name: 'Home',
    link: '/',
    icon: HomeIcon,
  },
  {
    name: 'Rooms',
    link: 'rooms',
    icon: DashboardIcon,
  },
  {
    name: 'Recordings',
    link: 'recordings',
    icon: RadiobuttonIcon,
  },
  {
    name: 'Personal Room',
    link: 'personal-rooms',
    icon: AvatarIcon,
  },
];

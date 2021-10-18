import { ReactNode } from 'react';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'Dashboard',
    items: [
      {
        name: 'Dashboard',
        icon: HomeIcon,
        link: '/dashboard'
      }
    ]
  },
  {
    heading: 'Management',
    items: [
      {
        name: 'Building information',
        icon: HomeWorkIcon,
        link: '/management/building-information'
      },
      {
        name: 'Employees',
        icon: PeopleIcon,
        link: '/management/employees'
      },
      {
        name: 'Staff building',
        icon: PeopleOutlineIcon,
        link: '/management/staff-building'
      },
      {
        name: 'Companies',
        icon: ApartmentIcon,
        link: '/management/companies'
      },
      {
        name: 'Services',
        icon: MiscellaneousServicesIcon,
        link: '/management/services'
      }
    ]
  }
];

export default menuItems;

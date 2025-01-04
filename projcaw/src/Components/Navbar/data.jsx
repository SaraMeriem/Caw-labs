import {
  
  FaChartPie ,
 
  FaCreditCard,
 
  
} from 'react-icons/fa';
import { FaChartBar } from "react-icons/fa";





export const links = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <FaChartPie  className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Transaction',
    icon: <FaCreditCard className='nav__icon' />,
    path: '/Transaction',
  },


  {
    id: 4,
    name: 'Reports',
    icon: < FaChartBar  className='nav__icon' />,
    path: '/Reports',
  },
];


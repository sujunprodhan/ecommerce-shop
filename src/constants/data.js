import { Gift, Percent, StarIcon, Truck, Wallet } from 'lucide-react';

const { isHmrRefresh } = require('next/dist/server/app-render/work-unit-async-storage.external');

const navItem = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Shop',
    href: '/shop',
  },
  {
    title: 'HotDeal',
    href: '/hotdeal',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];
const signUpFits = [
  {
    icon: Gift,
    title: 'Welcome Bonus',
    description:
      'Sign up today and receive an exclusive.',
  },
  {
    icon: Percent,
    title: '10% First Order Discount',
    description:
      'Enjoy a special 10% discount first purchase.',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Get free delivery on your first order.',
  },
  {
    icon: Wallet,
    title: 'Reward Points',
    description:
      'Earn reward points instantly after signing up.',
  },
  {
    icon: StarIcon,
    title: 'Exclusive Member Deals',
    description:
      'Access members-only discounts, early product.',
  },
];
export { navItem, signUpFits };

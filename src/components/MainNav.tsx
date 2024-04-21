'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

const NAV_ITEMS = [
  {
    href: '/dashboard',
    label: 'Dashboard',
  },
  {
    href: '/settings',
    label: 'Settings'
  },
  {
    href: '/login',
    label: 'Login'
  }
] as const;

export default function MainNav() {
  return (
    <NavigationMenu className="my-4">
      <NavigationMenuList className="border border-gray-200 rounded-lg">
        {NAV_ITEMS.map(({href, label}) => (
          <NavigationMenuItem key={href}>
            <Link href={href} legacyBehavior passHref prefetch={false}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

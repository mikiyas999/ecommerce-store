"use client";

import { usePathname } from "next/navigation";

import { Category } from "@/types";
import Link from "next/link";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data?.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav>
      {routes?.map((route) => (
        <Link key={route.href} href={route.href} className="">
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;

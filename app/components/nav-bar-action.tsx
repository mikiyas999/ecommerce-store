"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";

const NavbarAction = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-2">
      <Button className="flex items-center bg-black px-4 py-2 gap-x-2">
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium ml-auto text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarAction;

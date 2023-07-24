"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarAction = () => {
  const [mounted, setMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-2">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-black px-4 py-2 gap-x-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium ml-auto text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarAction;

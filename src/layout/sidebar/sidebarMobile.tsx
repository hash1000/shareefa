import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search, X } from "lucide-react";
import { SidebarButton } from "./sidebarButton";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SidebarMenuProps } from "@/shared/type";
import ShareefaLogo from "@/components/shared/shareefaLogo";
import { Input } from "@/components/ui/input";

interface SidebarMobileProps {
  sidebarItems: SidebarMenuProps[];
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ sidebarItems }) => {
  const location = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="fixed top-5 left-3 ">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" hideClose>
        <SheetHeader>
          <div className="flex justify-between gap-1">
            <ShareefaLogo className="flex gap-x-2" size={24} />
            <SheetClose asChild>
              <Button className="p-0 pb-1" variant="ghost">
                <X size={15} />
              </Button>
            </SheetClose>
          </div>
          <Input
            type="text"
            position="right-3"
            icon={<Search size={13} />}
            placeholder="Appointment"
            className="h-[32px] rounded-md pl-14 bg-custom-bright-gray"
          />
        </SheetHeader>
        <div className="pt-5 grid gap gap-y-2">
          {sidebarItems.map((item, idx) => (
            <Link key={idx} to={item.path}>
              <SidebarButton
                variant={item.path === location.pathname ? "default" : "ghost"} // Set variant based on active state
                icon={item.icons}
                className="w-full"
              >
                {item.title}
              </SidebarButton>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;

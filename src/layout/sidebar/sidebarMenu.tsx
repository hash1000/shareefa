import React from "react";
import { Link, useLocation } from "react-router-dom";
import ShareefaLogo from "@/components/shared/shareefaLogo";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { SidebarMenuProps } from "@/shared/type";
import { SidebarButton } from "./sidebarButton";

interface SidebarProps {
  sidebarItems: SidebarMenuProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarItems }) => {
  const location = useLocation();

  return (
    <div className=" px-16  w-full h-screen overflow-y-auto bg-white">
      <div className="px-14 py-30">
        <ShareefaLogo className="flex gap-x-5" size={24} />
        <Input
          type="text"
          position="right-3"
          icon={<Search size={13} />}
          placeholder="Appointment"
          className="h-[32px] rounded-md pl-14 bg-custom-bright-gray"
        />
      </div>

      <ul className="grid gap gap-y-4">
        {sidebarItems.map((item: SidebarMenuProps, index: number) => (
          <Link key={index} to={item?.path}>
            <li
              className={`${
                (item.path === location?.pathname ||
                  item.path.toLowerCase() === location?.pathname) &&
                " bg-white  text-custom-dark-gray"
              } duration-500 mt-2 rounded-full cursor-pointer font-sm flex gap-x-4 text-custom-dark-gray
                items-center hover:bg-white hover:bg-opacity-[0.1] hover:text-custom-dark-gray font-sm justify-start`}
            >
              <SidebarButton
                variant={item.path === location.pathname ? "default" : "ghost"}
                icon={item.icons}
                className="w-full"
              >
                {item.title}
              </SidebarButton>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

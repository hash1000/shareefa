
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, ChevronDown, LogOutIcon, MessageCircleMore, Settings } from "lucide-react";
import { SidebarButton } from "./sidebarButton";

 function Header() {

  const navigation = useNavigate();

  function logout() {
    localStorage.clear();
    navigation("/");
  }
  return (
    <>
        <header className="bg-white w-full py-20 px-30">
          <div className=" flex  justify-between items-center ">
            <div className="text-xl font-bold pl-20">Patient List</div>
            <div className="flex items-center ">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="simple" className="w-full justify-start p-0 ">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-2">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="https://github.com/max-programming.png" />
                          <AvatarFallback>Jhon Smith</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-base text-custom-dark-gray">
                            Jhon Smith
                          </p>
                          <p className="text-[10px] flex text-[#8595AD]">
                            Profile Settings
                            <span>
                              <ChevronDown size={15} />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem value="top">
                    <Link to="/">
                      <SidebarButton
                        size="sm"
                        icon={Settings}
                        className="w-full"
                      >
                        Account Settings
                      </SidebarButton>
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    <SidebarButton size="sm" icon={LogOutIcon} className="w-full" onClick={logout}>
                      Log Out
                    </SidebarButton>
                  </DropdownMenuRadioItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Separator orientation="vertical" className="mx-3  h-[36px]"/>
              <div className="bg-custom-bright-gray rounded-full p-[10px]">
                <Bell size={15} />
              </div>
              <div className="bg-custom-bright-gray ml-2 rounded-full p-[10px]">
              <MessageCircleMore size={15}/>
              </div>
            </div>
          </div>
        </header>
    </>
  );
}
export default Header;
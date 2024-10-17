import * as React from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import SidebarMobile from "./sidebar/sidebarMobile";
import Header from "./sidebar/header";
import Sidebar from "./sidebar/sidebarMenu";
import { SidebarMenuProps } from "@/shared/type";
import {
  CalendarDays,
  LayoutDashboard,
  NotebookPen,
  NotepadText,
  Stethoscope,
  UserRoundCog,
  UserRoundPlus,
} from "lucide-react";

const sidebarItems: SidebarMenuProps[] = [
  { title: "Dashboard", icons: LayoutDashboard, path: "/dashboard" },
  { title: "Patient", icons: UserRoundCog, path: "/patient" },
  {
    title: "Patient Management",
    icons: UserRoundPlus,
    path: "/patient-management",
  },
  { title: "Provider", icons: Stethoscope, path: "/provider" },
  { title: "My Appointment", icons: CalendarDays, path: "/appointment" },
  {
    title: "Book an Appointment",
    icons: CalendarDays,
    path: "/book-appointment",
  },
  { title: "Prescription", icons: NotepadText, path: "/prescription" },
  { title: "Invoices", icons: NotebookPen, path: "/invoices" },
];

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isDesktop = useMediaQuery("(min-width: 1000px)", {
    initializeWithValue: false,
  });

  return (
    <div className="flex w-full h-full">
      <div className={isDesktop ? "w-72" : "w-0"}>
        {isDesktop ? (
          <Sidebar sidebarItems={sidebarItems} />
        ) : (
          <SidebarMobile sidebarItems={sidebarItems} />
        )}
      </div>
      <div className="main-window pl-[0.15em] flex-1 overflow-y-auto h-screen">
        <Header />
        <div className="bg-custom-gray-bg p-30">
          {children ? children : <Outlet />}
        </div>
      </div>
    </div>
  );
}

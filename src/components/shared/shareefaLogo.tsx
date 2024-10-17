import { cn } from "@/lib/utils";
import Logo from "../../assets/images/shareefa-logo.png";

export default function ShareefaLogo({ className, size }: { className: string; size: number }) {
  return (
    <div className={cn("justify-items-center items-center xs:mb-[20px] md:mb-[25px] lg:mb-[30px]", className)}>
      <img
        src={Logo}
        alt="shareefa-logo"
        className={size?`text-center`:`mb-[10px] text-center`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
      <h2 className={`text-custom-orange font-inter font-bold ${size?"text-[16px]":"xs:text-[20px] md:text-[25px] lg:text-[36px]"} leading-[36px] text-center`}>
        Shareefa Medical
      </h2>
    </div>
  );
}

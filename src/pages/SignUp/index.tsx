import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Auth_Img from "../../assets/images/auth-img.png";
import AppleIcon from "../../assets/svgs/appleIcon";
import GoogleIcon from "../../assets/svgs/googleIcon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SignUpSchema } from "@/shared/validations/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ShareefaLogo from "@/components/shared/shareefaLogo";
import { PasswordInput } from "@/components/shared/passwordInput";
import { CircleUserRound, Mail, LockKeyhole } from "lucide-react";
import { toast } from "sonner";

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = async (data: SignUpSchemaType) => {
    toast("Event has been created.")
    setLoading(true);
  };

  const roles = [
    { value: "doctor", label: "Doctor" },
    { value: "patient", label: "Patient" },
    { value: "admin", label: "Admin" },
  ];

  return (
    <section className="h-screen flex ">
      <div className="flex-1 xs:px-[10px] md:px-[20px] flex justify-center items-center">
        <div className="flex max-w-[500px] flex-col">
          <ShareefaLogo className="grid" size={32} />
          <header className="text-center xs:mb-[15px] md:mb-[25px] lg:mb-[25px]">
            <h2 className="md:text-[25px] lg:text-[30px] mb-[3px] font-bold text-custom-dark-gray">
              Sign Up
            </h2>
            <p>
              Already a member? &nbsp;
              <Link to="/" className="text-custom-peach">
                Login
              </Link>
            </p>
          </header>

          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="flex justify-between xs:mb-2 lg:mb-3 xs:gap-x-[5px] lg:gap-x-[10px]">
                <div className="flex-1">
                  <Input
                    type="text"
                    icon={<CircleUserRound size={13} />}
                    placeholder="First Name"
                    className="h-[38px]"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <Input
                    type="text"
                    icon={<CircleUserRound size={13} />}
                    placeholder="Last Name"
                    className="h-[38px]"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="xs:mb-2 lg:mb-3">
                <Input
                  type="email"
                  icon={<Mail size={13} />}
                  placeholder="Email"
                  className="h-[38px]"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between xs:mb-2  lg:mb-3 xs:gap-x-[5px] lg:gap-x-[10px]">
                <div className="flex-1">
                  <PasswordInput
                    placeholder="Password"
                    icon={<LockKeyhole size={13} />}
                    className="h-[38px]"
                    {...register("password")}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <PasswordInput
                    placeholder="Confirm Password"
                    icon={<LockKeyhole size={13} />}
                    className="h-[38px]"
                    {...register("confirmPassword")}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="confirm-password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="xs:mb-[20px] lg:mb-[30px]">
                <Select>
                  <SelectTrigger className="h-[38px]" {...register("role")}>
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {roles.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              <div className="w-full xs:mb-[5px] md:mb-[10px] lg:mb-[15px]">
                <Button type="submit" variant="default">
                  {loading ? "loading..." : "Sign Up"}
                </Button>
              </div>

              <div className="flex items-center gap-[10px] xs:mb-[5px] md:mb-[10px] lg:mb-[15px]">
                <hr className="h-px w-[190px] bg-custom-light-gray" />
                <p className="text-custom-dark-gray text-center text-[14px]">
                  or login with
                </p>
                <hr className="h-px w-[190px] bg-custom-light-gray" />
              </div>
            </form>
          </div>

          <div className="w-full">
            <Button type="submit" variant="outline">
              <GoogleIcon color="black" width={20} height={20} />
              <span className="ml-2">Continue with Google</span>
            </Button>
            <Button type="submit" variant="outline">
              <AppleIcon color="black" width={20} height={20} />
              <span className="ml-2">Continue with Apple</span>
            </Button>
            <p className="text-center text-custom-dark-gray text-[14px]">
              Already have an account?&nbsp;
              <Link to="/" className="text-custom-peach">
                Log In.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden md:block">
        <img
          src={Auth_Img}
          alt="Auth-img"
          className="object-fill h-full w-full"
        />
      </div>
    </section>
  );
};

export default SignUp;

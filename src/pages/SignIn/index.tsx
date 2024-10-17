import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Auth_Img from "../../assets/images/auth-img.png";
import { Link } from "react-router-dom";
import AppleIcon from "../../assets/svgs/appleIcon";
import GoogleIcon from "../../assets/svgs/googleIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { SignInSchema } from "@/shared/validations/formSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import ShareefaLogo from "@/components/shared/shareefaLogo";
import { PasswordInput } from "@/components/shared/passwordInput";
import { LockKeyhole, Mail } from "lucide-react";
import { toast } from "sonner";

type SignInSchemaType = z.infer<typeof SignInSchema>;

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });
  const [currentPassword, setCurrentPassword] = useState("");

  const onSubmit = async (data: SignInSchemaType) => {
    console.log(data);
    toast("Event has been created.")
  };
  const isLoading = isSubmitting;
  return (
    <section className="h-screen flex ">
      <div className="flex-1 xs:px-[10px] md:px-[20px] flex justify-center items-center">
        <div className="flex max-w-[500px] flex-col">
          <ShareefaLogo  className="grid" size={32} />
          <header className="text-center xs:mb-[15px] md:mb-[25px] lg:mb-[25px]">
            <h2 className="md:text-[25px] lg:text-[30px] mb-[3px] font-bold text-custom-dark-gray">
              Sign Up
            </h2>
            <p>
              or &nbsp;
              <Link to="/sign-up" className="text-custom-peach">
                create an account
              </Link>
              &nbsp;if not registered yet
            </p>
          </header>

          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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

              <div className="xs:mb-2 lg:mb-3">
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

              <div className="flex justify-between items-center xs:mb-3 md:mb-4 lg:mb-5">
                <div className="flex items-center">
                  <Checkbox id="rememberMe" />
                  <Label className="ml-2" htmlFor="rememberMe">
                    Remember Me
                  </Label>
                </div>
                <Link
                  to={{
                    pathname: "/forget-password",
                  }}
                  className="text-custom-blue text-xs"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="w-full xs:mb-[5px] md:mb-[10px] lg:mb-[18px]">
                <Button type="submit" variant="default">
                  {isLoading ? "loading..." : "Login"}
                </Button>
              </div>
              <div className="flex items-center gap-[10px] xs:mb-[5px] md:mb-[10px] lg:mb-[20px]">
                <hr className="h-px w-[190px] bg-custom-light-gray" />
                <p className="text-custom-dark-gray text-center text-[14px]">
                  or login with
                </p>
                <hr className="h-px w-[190px] bg-custom-light-gray" />
              </div>
            </form>
          </div>
          <div className="w-full">
            <Button type="button" variant="outline">
              <GoogleIcon color="black" width={20} height={20} />
              <span className="ml-2">Continue with Google</span>
            </Button>
            <Button type="button" variant="outline">
              <AppleIcon color="black" width={20} height={20} />
              <span className="ml-2">Continue with Apple</span>
            </Button>
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

export default SignIn;

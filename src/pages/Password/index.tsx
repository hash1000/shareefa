import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Auth_Img from "../../assets/images/auth-img.png";
// import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetSchema } from "@/shared/validations/formSchema";
import { z } from "zod";
import ShareefaLogo from "@/components/shared/shareefaLogo";
import { LockKeyhole, Mail } from "lucide-react";

// type LocationState = {
//   state: {
//     fromForgotPassword?: boolean;
//   };
// };

type ForgetSchemaType = z.infer<typeof forgetSchema>;
const Password: React.FC = () => {
  // const location: LocationState = useLocation();
  // const { fromForgotPassword } = location.state || {};
  const [fromForgotPassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetSchemaType>({ resolver: zodResolver(forgetSchema) });

  const onSubmit = async (data: ForgetSchemaType) => {
    console.log("Success", data);
    // Add your logic here
  };

  return (
    <section className="h-screen flex ">
      <div className="flex-1 xs:px-[10px] md:px-[20px] flex justify-center items-center">
        <div className="flex max-w-[500px] flex-col">
          <ShareefaLogo className="grid" size={32} />
          <header className="text-center mb-[35px]">
            <h2 className="text-[30px] mb-[3px] font-bold text-custom-dark-gray">
              {fromForgotPassword
                ? "Forgot Your Password?"
                : "Update Your Password"}
            </h2>
            <p className="text-custom-dark-gray text-[16px]">
              {fromForgotPassword
                ? "Confirm your email, reset password is sent to your email"
                : "Reset your password and don't share it with anyone."}
            </p>
          </header>

          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              {fromForgotPassword && (
                <div className="xs:mb-2 lg:mb-3">
                  <Input
                    id="email"
                    icon={<Mail size={13} />}
                    placeholder="Email"
                    type="email"
                    className="rounded-full h-[38px]"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}

              {!fromForgotPassword && (
                <>
                  <div className="xs:mb-2 md:mb-3 lg:mb-5">
                    <Input
                      id="password"
                      icon={<LockKeyhole size={13} />}
                      placeholder="Password"
                      type="password"
                      className="rounded-full h-[38px]"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="xs:mb-2 md:mb-3 lg:mb-5">
                    <Input
                      type="password"
                      icon={<LockKeyhole size={13} />}
                      placeholder="Confirm Password"
                      className="h-[38px]"
                      {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className="w-full mb-[16px]">
                <Button
                  type="submit"
                  variant="default"
                  className="w-full bg-custom-peach rounded-full py-[10px] text-[14px] text-white h-[36px]"
                >
                  {fromForgotPassword ? "Change Password" : "Send Email"}
                </Button>
              </div>
            </form>
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

export default Password;

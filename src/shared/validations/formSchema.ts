import * as z from "zod";
import { passwordRegex } from "./Regex";

export const SignInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .refine((password) => passwordRegex.test(password), {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. It should be at least 8 characters long.",
    }),
});

export const SignUpSchema = z
  .object({
    firstName: z.string().min(3, { message: "First Name is required" }).max(50),
    lastName: z.string().min(3, { message: "Last Name is required" }).max(50),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z.string().refine((password) => passwordRegex.test(password), {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. It should be at least 8 characters long.",
    }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    role: z.string({
      required_error: "Please select a Role to display.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const forgetSchema = z
  .object({
    email: z.string().email({ message: "Must be a valid email" }).optional(),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .refine((password) => passwordRegex.test(password), {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. It should be at least 8 characters long.",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const ChangePasswordSchema = z
  .object({
    oldPassword: z.string().min(1, {
      message: "Old Password is required ",
    }),
    password: z.string().refine((password) => passwordRegex.test(password), {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. It should be at least 8 characters long.",
    }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine(
    (value) => {
      return value.password.trim() === value.confirmPassword.trim();
    },
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }
  );

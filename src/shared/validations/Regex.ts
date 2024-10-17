// Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. It should be at least 8 characters long.
export const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;

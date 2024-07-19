export interface User {
  id?: string | number;
  email: string;
  password: string;
  confirmPassword?: string;
}

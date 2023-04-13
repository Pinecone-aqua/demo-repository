export interface UserType {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  phoneNumber?: string;
  role: "admin" | "client" | "moderator";
}

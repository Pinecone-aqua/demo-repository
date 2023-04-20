export interface UserType {
  _id: string;
  name: string;
  email: string;
  address?: string;
  phoneNumber?: string;
  role: "admin" | "client" | "moderator";
}

export interface ProductType {
  price: number;
  name: string;
  quantity: number;
  category: string;
  brand: string;
}

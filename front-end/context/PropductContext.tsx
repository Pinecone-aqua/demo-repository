import React, { createContext, useContext, useState } from "react";

interface PropType {
  children: React.ReactNode;
}

interface ProductType {
  name: string;
  price: number;
  quantity: number;
}

interface ContextType {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

const productContext = createContext<ContextType>({} as ContextType);

export const useProduct = (value: string) => {
  console.log(value);
  return useContext(productContext);
};

export default function ProductProvider({ children }: PropType) {
  const [products, setProducts] = useState<ProductType[]>([]);
  return (
    <productContext.Provider value={{ products, setProducts }}>
      {children}
    </productContext.Provider>
  );
}

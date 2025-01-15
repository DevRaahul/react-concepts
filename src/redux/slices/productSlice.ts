import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface IProductList {
  products: IProduct[] | [];
}

const initialState: IProductList = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state: IProductList, action: PayloadAction<IProduct[]>) => {
      return {
        products: [...action.payload],
      };
    },
    getProducts: (state: IProductList) => {
      return {
        products: state.products,
      };
    },
  },
});

export const { setProducts, getProducts } = productSlice.actions;
export default productSlice;

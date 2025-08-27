import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import { TProduct } from "@types";

interface FetchProductsParams {
  offset: number;
  limit: number;
}

interface IProductsResponse {
  products: TProduct[];
  total: number;
}

const actGetProducts = createAsyncThunk<IProductsResponse, FetchProductsParams>(
  "products/actGetProducts",
  async ({ offset, limit }: FetchProductsParams, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get(`/products?offset=${offset}&limit=${limit}`, { signal });

      const total = 50; 

      return { products: response.data, total };
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
export default actGetProducts;
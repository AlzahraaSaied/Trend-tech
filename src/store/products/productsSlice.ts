import { createSlice, createAsyncThunk,PayloadAction  } from "@reduxjs/toolkit"; 
import actGetProducts from "./act/actGetProducts";
import axios from "axios";
import { TProduct, TLoading, isString } from "@types";


export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.get(`/products/${id}`);
      return res.data;
    } catch (error: unknown) {
      let message = "Failed to fetch product";
      if (error instanceof Error) message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

interface IProductsState {
  product: TProduct | null;
  records: TProduct[];
  loading: TLoading;
  error: string | null;
  currentPage: number;
  totalProducts: number;
  limit: number;
}

const initialState: IProductsState = {
  product: null,
  records: [],
  loading: "idle",
  error: null,
  currentPage: 1,
  totalProducts: 0,
  limit: 10, 
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsRecordsCleanUp: (state) => {
      state.records = [];
      state.currentPage = 1;
      state.totalProducts = 0;
    },
    resetProduct: (state) => {
      state.product = null;
      state.loading = "idle";
      state.error = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
extraReducers: (builder) => {

    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload.products;
      state.totalProducts = action.payload.total;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });


    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action: PayloadAction<TProduct>) => {
      state.loading = "succeeded";
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});


export { actGetProducts };
export const { productsRecordsCleanUp, resetProduct, setCurrentPage } =
  productsSlice.actions;
export default productsSlice.reducer;

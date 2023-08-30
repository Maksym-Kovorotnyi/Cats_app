import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY =
  "live_AohvBOWPLgdivtAFtFowt3hfddVfxaBWQHpHlCERAwDMnMBxJudX1v64vjQMzy2S";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";

export const getImages = createAsyncThunk(
  "voting/getImageToVoting",
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(`/images/search?limit=1&page=${page}`, {
        headers: {
          "x-api-key": API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getImgByBreed = createAsyncThunk(
  "voting/getImageByBreed",
  async (breed, thunkAPI) => {
    try {
      const response = await axios.get(`/images/search?breed_ids=${breed}`, {
        headers: {
          "x-api-key": API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [], 
};

export const ServicesSlice = createSlice({
  name: "service_slice",
  initialState,
  reducers: {
    updateService: (state, action) => {
        const { index, data } = action.payload;
        if (index >= 0 && index < state.services.length) {
          state.services[index] = { ...state.services[index], ...data };
        }
      },
    
  }
});

export const { updateService } = ServicesSlice.actions;
export const ServicesFormReducer = ServicesSlice.reducer;
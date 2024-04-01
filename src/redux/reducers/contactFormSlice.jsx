import { createSlice } from "@reduxjs/toolkit";
import { updateFormData } from "../actions/contactFormActions";

const initialValue = {
    fullName: "",
    email: "",
    contactPurpose: [],
    hireAs: [],
    message: ""
}

export const contactForm = createSlice({
    name: "contactForm",
    initialState: initialValue,
    reducers: {
        // Register all action functions here, define them in ../actions/
        updateFormAction: updateFormData
    }
});

export const { updateFormAction } = contactForm.actions;
export default contactForm.reducer;
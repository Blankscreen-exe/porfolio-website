export const updateFormData = (state, payload) => {
    return {
        ...state,
        ...payload,
      };
}
export const ReduceFn = (state, action) => {
  switch (action.type) {
    case "modal":
      return { ...state, ContextModal: true };
  }
  return { ...state };
};

export const ReduceFn = (state, action) => {
  switch (action.type) {
    case "acao":
      return { ...state, title: true };
  }
  return { ...state };
};

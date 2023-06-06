const intialdata = {
  List: [],
};

const todoreducer = (state = intialdata, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { id, data } = action.payload;
      return {
        ...state,
        List: [
          ...state.List,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETETODO":
      const newList = state.List.filter((item) => item.id != action.id);
      return {
        ...state,
        List: newList,
      };
    case "REMOVETODO":
      return {
        ...state,
        List: [],
      };

    default:
      return state;
  }
};
export default todoreducer;

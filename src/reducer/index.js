const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};
export let is = [{ ...initialState }];
export const TitleReducer = (state = is, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.payload === "") {
        return state;
      }
      console.log("This is for adding new chores to the list", state);
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return [...state, newTodo];
    case "COMPLETE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "REMOVE_COMPLETED":
      return state.filter((item) => !item.completed);
    case "REMOVE_ALL":
      return [];
    default:
      return state;
  }
};
// export default TitleReducer;

export const initialState = [
  {
    item: "example",
    completed: false,
    id: 3892987589
  }
];

export const Reducer = (state, action) => {
  console.log("understanding", state);
  switch (action.type) {
    case "ADD_TODO": {
      console.log("from add case", state);
      return [
        ...state,
        { item: action.data, completed: false, id: Date.now() }
      ];
    }
    case "ISIT_COMPLETE": {
      let ourID = state.find(todo => todo.id === Number(action.data));
      let place = state.indexOf(ourID);
      let newState = [...state];
      newState[place].completed = !newState[place].completed;
      return newState;
    }
    case "REMOVE_COMPLETE": {
      let newState = [...state];
      let filtered = newState.filter(todo => {
        return todo.completed === false;
      });
      return filtered;
    }
    default: {
      return state;
    }
  }
};

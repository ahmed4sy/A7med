let reducer = (action, state = { count: 1 }) => {
  if (action) {
    state.count++;
  }
  return state;
};
console.log(reducer(true));

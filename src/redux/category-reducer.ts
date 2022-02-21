const initialState = {
  category: [
    { id: 0, name: 'All'}
  ]
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default categoryReducer;

const initialState = {
  destinations: [],
};

const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DESTINATION':
      return {
        ...state,
        destinations: [...state.destinations, action.payload],
      };
    case 'REMOVE_DESTINATION':
      return {
        ...state,
        destinations: state.destinations.filter(
          (destination) => destination.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default destinationReducer;
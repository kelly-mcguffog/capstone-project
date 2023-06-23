export const addDestination = (destination) => ({
    type: 'ADD_DESTINATION',
    payload: destination,
  });
  
  export const removeDestination = (destinationId) => ({
    type: 'REMOVE_DESTINATION',
    payload: destinationId,
  });
  
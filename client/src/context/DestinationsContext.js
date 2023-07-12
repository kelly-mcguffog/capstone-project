import React, { createContext, useState, useEffect } from 'react';

const DestinationsContext = createContext();

const DestinationsProvider = ({ children }) => {
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    fetch('/destinations')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch destinations data.');
        }
      })
      .then((data) => setDestinations(data))
      .catch((error) => {
        console.error(error);
        setDestinations(null);
      });
  }, []);

  return (
    <DestinationsContext.Provider value={{ destinations, setDestinations }}>
      {children}
    </DestinationsContext.Provider>
  );
};

export { DestinationsContext, DestinationsProvider };
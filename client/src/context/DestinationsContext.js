import React, {useState, useEffect} from 'react'

const DestinationsContext = React.createContext();

const DestinationsProvider = ({ children }) => {
    const [destinations, setDestinations] = useState(null);
    
    useEffect(() => {
        fetch("/destinations").then((r) => {
          if (r.ok) {
            r.json().then((destinations) => setDestinations(destinations));
          }
        });
      }, []);

  return (
    <DestinationsContext.Provider value={{destinations, setDestinations}}>
        {children}
    </DestinationsContext.Provider>
  )
}

export {DestinationsContext, DestinationsProvider}
import React, { createContext, useState, useEffect } from 'react';

const AllUsersContext = createContext();

const AllUsersProvider = ({ children }) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('/users')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch users data.');
        }
      })
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error(error);
        setUsers(null);
      });
  }, []);

  return (
    <AllUsersContext.Provider value={{ users, setUsers }}>
      {children}
    </AllUsersContext.Provider>
  );
};

export { AllUsersContext, AllUsersProvider };
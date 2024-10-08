import React, { createContext, useContext, useState } from 'react';

// Cria um contexto para o usuário
const UserContext = createContext(null);

// Provedor de contexto para gerenciar o estado do usuário
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para armazenar os dados do usuário

  // Função para definir os dados do usuário
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser,login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para acessar os dados do usuário em outros componentes
export const useUser = () => {
  return useContext(UserContext);
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

// Cria um contexto para o banco de dados
const DatabaseContext = createContext(null);

// Provedor de contexto que inicializa o banco de dados
export const DatabaseProvider = ({ children }) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initializeDatabase = async () => {
      // Abre ou cria o banco de dados chamado 'viascholae.db'
      const database = await SQLite.openDatabaseAsync('viascholae.db');

      // Executa comandos SQL para deletar a tabela 'Responsavel' se existir e criá-la novamente
      await database.execAsync(`
        DROP TABLE IF EXISTS Responsavel;

        CREATE TABLE IF NOT EXISTS Responsavel (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          phone TEXT NOT NULL UNIQUE,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `);

      // Atualiza o estado com a instância do banco de dados
      setDb(database);
    };

    // Chama a função para inicializar o banco de dados
    initializeDatabase();
  }, []);

  return (
    <DatabaseContext.Provider value={db}>{children}</DatabaseContext.Provider>
  );
};

// Hook customizado para acessar a instância do banco de dados em outros componentes
export const useDatabase = () => {
  return useContext(DatabaseContext);
};

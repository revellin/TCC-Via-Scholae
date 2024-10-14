import React, { createContext, useContext, useState, useEffect } from 'react'
import * as SQLite from 'expo-sqlite'

// Cria um contexto para o banco de dados
const DatabaseContext = createContext(null)

// Provedor de contexto que inicializa o banco de dados
export const DatabaseProvider = ({ children }) => {
  const [db, setDb] = useState(null)

  useEffect(() => {
    const initializeDatabase = async () => {
      const database = await SQLite.openDatabaseAsync('viascholae.db')

      // Criação das tabelas 'Responsavel' e 'Motorista'
      await database.execAsync(`
        CREATE TABLE IF NOT EXISTS Responsavel (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          phone TEXT NOT NULL UNIQUE,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL,
          type TEXT NOT NULL DEFAULT 'responsavel'
        );

        CREATE TABLE IF NOT EXISTS Motorista (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          phone TEXT NOT NULL UNIQUE,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL,
          cnhFrente TEXT,
          cnhVerso TEXT,
          type TEXT NOT NULL DEFAULT 'motorista'
        );
      `)

      setDb(database)
    }

    initializeDatabase()
  }, [])

  return (
    <DatabaseContext.Provider value={db}>{children}</DatabaseContext.Provider>
  )
}

// Hook customizado para acessar a instância do banco de dados em outros componentes
export const useDatabase = () => {
  return useContext(DatabaseContext)
}

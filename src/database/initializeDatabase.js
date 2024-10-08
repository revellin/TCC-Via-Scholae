import React, { createContext, useContext, useState, useEffect } from 'react'
import * as SQLite from 'expo-sqlite'

// Cria um contexto para o banco de dados, permitindo que outros componentes acessem a instância do banco
const DatabaseContext = createContext(null)

// Provedor de contexto que inicializa o banco de dados e fornece a instância para outros componentes
export const DatabaseProvider = ({ children }) => {
  // Estado para armazenar a instância do banco de dados
  const [db, setDb] = useState(null)

  useEffect(() => {
    // Função assíncrona para inicializar o banco de dados
    const initializeDatabase = async () => {
      // Abre ou cria o banco de dados chamado 'viascholae.db'
      const database = await SQLite.openDatabaseAsync('viascholae.db')

      // Executa comandos SQL para criar a tabela 'Responsavel' se ela não existir
      await database.execAsync(`
        CREATE TABLE IF NOT EXISTS Responsavel (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          phone TEXT NOT NULL UNIQUE,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `)

      // Atualiza o estado com a instância do banco de dados
      setDb(database)
    }

    // Chama a função para inicializar o banco de dados
    initializeDatabase()
  }, []) // O array vazio [] significa que esse efeito será executado apenas uma vez, ao montar o componente

  return (
    // Provedor de contexto que fornece a instância do banco de dados para seus filhos
    <DatabaseContext.Provider value={db}>{children}</DatabaseContext.Provider>
  )
}

// Hook customizado para acessar a instância do banco de dados em outros componentes
export const useDatabase = () => {
  return useContext(DatabaseContext)
}


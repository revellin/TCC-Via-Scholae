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

      try {
        // Removendo tabelas se existirem
        //await database.execAsync(`DROP TABLE IF EXISTS Vagas;`)
        //await database.execAsync(`DROP TABLE IF EXISTS Responsavel;`)
        //await database.execAsync(`DROP TABLE IF EXISTS Motorista;`)
        //await database.execAsync(`DROP TABLE IF EXISTS Rota;`)
        //await database.execAsync(`DROP TABLE IF EXISTS Crianca;`)

        // Criando tabelas
        await database.execAsync(`
          CREATE TABLE IF NOT EXISTS Responsavel (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            end TEXT NOT NULL,
            cep TEXT NOT NULL,
            password TEXT NOT NULL,
            profilePic TEXT,
            type TEXT NOT NULL DEFAULT 'responsavel'
          );
        `)

        await database.execAsync(`
          CREATE TABLE IF NOT EXISTS Motorista (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            end TEXT NOT NULL,
            cep TEXT NOT NULL,
            password TEXT NOT NULL,
            profilePic TEXT,
            cnhFrente TEXT,
            cnhVerso TEXT,
            vagas TEXT NOT NULL,
            type TEXT NOT NULL DEFAULT 'motorista'
          );
        `)

        await database.execAsync(`
          CREATE TABLE IF NOT EXISTS Rota (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            startpoint TEXT NOT NULL,
            cep_start TEXT NOT NULL,
            endpoint TEXT NOT NULL,
            cep_end TEXT NOT NULL,
            regiao TEXT NOT NULL,
            nome_escola TEXT NOT NULL,
            numero_escola TEXT NOT NULL,
            motoristaId INTEGER,
            FOREIGN KEY (motoristaId) REFERENCES Motorista(id) ON DELETE CASCADE
          );
        `)

        await database.execAsync(`
          CREATE TABLE IF NOT EXISTS Crianca (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            idade TEXT NOT NULL,
            parentesco TEXT NOT NULL,
            imagem TEXT,
            type TEXT NOT NULL DEFAULT 'crianca',
            responsavelId INTEGER,
            FOREIGN KEY (responsavelId) REFERENCES Responsavel(id) ON DELETE CASCADE
          );
        `)

        await database.execAsync(`
          CREATE TABLE IF NOT EXISTS Vagas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            responsavelId INTEGER,
            motoristaId INTEGER,
            status TEXT NOT NULL DEFAULT 'pendente',
            data_solicitacao DATETIME,
            detalhes_rota TEXT,
            routeId INTEGER,
            type TEXT NOT NULL DEFAULT 'vaga',
            FOREIGN KEY (responsavelId) REFERENCES Responsavel(id) ON DELETE CASCADE,
            FOREIGN KEY (motoristaId) REFERENCES Motorista(id) ON DELETE CASCADE
          );
        `)

        setDb(database)
      } catch (error) {
        console.error('Erro ao inicializar o banco de dados:', error)
      }
    }

    initializeDatabase()
  }, [])

  return (
    <DatabaseContext.Provider value={db}>{children}</DatabaseContext.Provider>
  )
}

export const useDatabase = () => {
  return useContext(DatabaseContext)
}

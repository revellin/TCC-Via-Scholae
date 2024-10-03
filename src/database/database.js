import * as SQLite from 'expo-sqlite';

// Inicialize o banco de dados de forma assíncrona
const initDatabase = async () => {
  const db = await SQLite.openDatabaseAsync('viascholae.db');
  console.log("Banco de dados inicializado:", db);
  return db;
};

// Criação das tabelas
export const init = async () => {
  const db = await initDatabase(); // Chame a função para inicializar o banco de dados

  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Responsavel (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          telefone TEXT NOT NULL UNIQUE,
          email TEXT NOT NULL UNIQUE,
          senha TEXT NOT NULL
        );`,
        [],
        () => {
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS Motorista (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              nome TEXT NOT NULL,
              telefone TEXT NOT NULL UNIQUE,
              email TEXT NOT NULL UNIQUE,
              cnh TEXT NOT NULL UNIQUE,
              senha TEXT NOT NULL
            );`,
            [],
            () => {
              tx.executeSql(
                `CREATE TABLE IF NOT EXISTS Crianca (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  nome TEXT NOT NULL,
                  idade INTEGER NOT NULL,
                  responsavelId INTEGER,
                  FOREIGN KEY (responsavelId) REFERENCES Responsavel(id)
                );`,
                [],
                () => resolve(),
                (_, error) => {
                  console.error('Erro ao criar a tabela Criança:', error);
                  reject(error);
                }
              );
            },
            (_, error) => {
              console.error('Erro ao criar a tabela Motorista:', error);
              reject(error);
            }
          );
        },
        (_, error) => {
          console.error('Erro ao criar a tabela Responsável:', error);
          reject(error);
        }
      );
    });
  });
};

export const insertResponsavel = async (nome, telefone, email, senha) => {
  const db = await initDatabase(); // Certifique-se de ter a instância do banco de dados

  console.log("Tentando inserir:", nome, telefone, email, senha);
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      console.log("Transação iniciada");
      tx.executeSql(
        'INSERT INTO Responsavel (nome, telefone, email, senha) VALUES (?, ?, ?, ?)',
        [nome, telefone, email, senha],
        (_, result) => {
          console.log("Inserido com sucesso:", result);
          resolve(result.insertId);
        },
        (_, error) => {
          console.error("Erro ao inserir responsável:", error);
          reject(error);
        }
      );
    });
  });
};

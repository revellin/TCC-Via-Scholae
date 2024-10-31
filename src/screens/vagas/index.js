import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useDatabase } from '../../database';

export const Vagas = () => {
  const db = useDatabase();
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const fetchVagas = async () => {
      if (!db) return;

      try {
        const result = await db.execAsync(`
          SELECT * FROM Vagas WHERE status = 'pendente';
        `);
        setVagas(result.rows._array);
      } catch (error) {
        console.error('Erro ao buscar vagas:', error);
      }
    };

    fetchVagas();
  }, [db]);

  const aceitarVaga = async (vagaId, motoristaId) => {
    try {
      await db.execAsync(`
        UPDATE Vagas SET status = 'aceita', motoristaId = ${motoristaId}
        WHERE id = ${vagaId};
      `);
      // Recarregar as vagas após aceitar
      fetchVagas();
    } catch (error) {
      console.error('Erro ao aceitar vaga:', error);
    }
  };

  const rejeitarVaga = async (vagaId) => {
    try {
      await db.execAsync(`
        UPDATE Vagas SET status = 'rejeitada' WHERE id = ${vagaId};
      `);
      // Recarregar as vagas após rejeitar
      fetchVagas();
    } catch (error) {
      console.error('Erro ao rejeitar vaga:', error);
    }
  };

  return (
    <View>
      {vagas.map(vaga => (
        <View key={vaga.id}>
          <Text>Vaga ID: {vaga.id}</Text>
          <Text>Status: {vaga.status}</Text>
          <Button title="Aceitar" onPress={() => aceitarVaga(vaga.id, /* ID do motorista */)} />
          <Button title="Rejeitar" onPress={() => rejeitarVaga(vaga.id)} />
        </View>
      ))}
    </View>
  );
};

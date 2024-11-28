export const saveProfilePic = async (path) => {
  const db = useDatabase()
  const { user } = useUser()

  console.log('Banco de dados:', db)
  console.log('Usuário:', user)
  console.log('Caminho da imagem:', path)

  if (!db) {
    console.error('Banco de dados não disponível')
    return
  }

  if (!user) {
    console.error('Usuário não encontrado')
    return
  }

  try {
    const query = `
      UPDATE Responsavel 
      SET profilePic = ? 
      WHERE id = ?;
    `
    await db.execAsync(query, [path, user.id])

    const queryMotorista = `
      UPDATE Motorista 
      SET profilePic = ? 
      WHERE id = ?;
    `
    await db.execAsync(queryMotorista, [path, user.id])
  } catch (error) {
    console.error('Erro ao salvar foto de perfil:', error)
  }
}

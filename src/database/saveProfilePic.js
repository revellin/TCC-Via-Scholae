export const saveProfilePic = async (db, userId, profilePicUri, userType) => {
  try {
    // Escolhe a tabela correta com base no tipo de usuário
    const table = userType === 'motorista' ? 'Motorista' : 'Responsavel'

    await db.execAsync(`UPDATE ${table} SET profilePic = ? WHERE id = ?`, [
      profilePicUri,
      userId,
    ])
    console.log('Imagem de perfil salva com sucesso!')
  } catch (error) {
    console.error('Erro ao salvar imagem de perfil:', error)
  }
}

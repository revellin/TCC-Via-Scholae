export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },

  return: {
    position: 'absolute', // Faz com que o ícone seja posicionado relativamente ao contêiner pai
    top: 50, // Distância do topo
    left: 2, // Distância da borda esquerda
    zIndex: 1, // Garante que o ícone fique sobre a imagem
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Alinha itens ao topo do contêiner
    justifyContent: 'center', // Centraliza a imagem no contêiner
    paddingHorizontal: 26,
    width: '100%',
    height: 250,
    position: 'relative', // Necessário para posicionar o botão de retorno sobre a imagem
  },

  img: {
    width: 300,
    height: 300,
  },

  title: {
    fontSize: 40,
    paddingRight: 242,
  },

  form: {
    paddingHorizontal: 10, // Adiciona um pouco de espaço nas laterais do formulário
  },

  line: {
    height: 1,
    backgroundColor: '#D2A236',
    marginVertical: 3,
    marginBottom: 10,
  },
});

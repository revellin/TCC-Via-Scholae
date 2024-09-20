import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row', // Organiza os itens horizontalmente
    alignItems: 'center', // Alinha os itens verticalmente no centro
    justifyContent: 'space-between', // Distribui os itens com espaço entre eles
    width: '100%', // Garante que o cabeçalho ocupe toda a largura disponível
    marginTop: 20, // Espaço acima do cabeçalho
    marginBottom: 25, // Espaço abaixo do cabeçalho
  },

  back: {
    marginTop: 3,
  },

  title: {
    position: 'absolute',
    fontWeight: '700',
    marginLeft: 35,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editPictureText: {
    color: '#FFA500',
  },
  formContainer: {
    marginTop: 20,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
    marginBottom: 20,
    fontSize: 16,
  },
});

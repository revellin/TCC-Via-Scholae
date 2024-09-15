import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // Permite que o container cresça conforme o conteúdo
        padding: 20, // Adiciona espaçamento interno
        backgroundColor: '#ffffff', // Cor de fundo do container
    },

    header: {
        flexDirection: 'row', // Organiza os itens horizontalmente
        alignItems: 'center', // Alinha os itens verticalmente no centro
        justifyContent: 'space-between', // Distribui os itens com espaço entre eles
        width: '100%', // Garante que o cabeçalho ocupe toda a largura disponível
        marginTop: 20, // Espaço acima do cabeçalho
        marginBottom: 25, // Espaço abaixo do cabeçalho
    },

    return: {
        // Estilo para o botão de retorno (nenhum estilo definido ainda)
    },

    title: {
        fontSize: 30, // Tamanho da fonte do título
        fontWeight: 'bold', // Torna o texto em negrito
    },

    check: {
        marginTop: 7, // Espaço acima do botão de confirmação
    },

    label: {
        fontSize: 20, // Tamanho da fonte do rótulo
        marginLeft: 20, // Espaço à esquerda do rótulo
    },

    input: {
        height: 40, // Altura do campo de entrada
        width: 350, // Largura do campo de entrada
        borderColor: '#262626', // Cor da borda do campo de entrada
        borderWidth: 1, // Largura da borda do campo de entrada
        marginBottom: 10, // Espaço abaixo do campo de entrada
        paddingHorizontal: 8, // Espaçamento interno horizontal do campo de entrada
        borderRadius: 10, // Bordas arredondadas do campo de entrada
        marginLeft: 20, // Espaço à esquerda do campo de entrada
    },
});
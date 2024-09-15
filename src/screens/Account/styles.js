import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#ffffff',
  },

  profileContainer: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#DADADA', // Cor de fundo atrás da foto
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    width: 358,
    height: 185,
    elevation: 4,
    marginTop: 90,
  },

  profilePic: {
    position: 'absolute',
    zIndex: 1,
    marginTop: -60,
  },

  profileName: {
    fontSize: 30,
    fontFamily: 'SourceSansPro_400Regular',
    marginTop: 25,
    marginBottom: 3,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  subTitle: {
    alignSelf: 'flex-start',
    paddingLeft: 50,
    color: '#ACACAC',
  },
})

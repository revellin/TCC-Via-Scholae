import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
      marginTop: 30,
    },

    header: {
      flexDirection: 'row',
    },

    back: {
      marginTop: 7,
    },

    title: {
      marginLeft: 20,
    },

    search: {
      width: 340,
      height: 35,
      alignSelf: 'center',
    },

    languageOption: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },

    languageText: {
      fontSize: 18,
      color: '#000',
    },
    
    checkMark: {
      fontSize: 18,
      color: 'orange',
    },
  });
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },

    header: {
      marginTop: 30,
      padding: 15,
      flexDirection: 'row',
      width: 411,
      height: 84,
    },

    back: {
      marginTop: 15,
    },

    pic: {
      width: 55,
      height: 55,
      marginLeft: 20,
    },

    name: {
      fontSize: 16,
      color: '#262626',
      marginLeft: 10,
      marginTop: 18,
    },

    messageContainer: {
      backgroundColor: '#E6E6E6',
      borderRadius: 10,
      padding: 10,
      marginVertical: 7,
      alignSelf: 'flex-end',
      marginRight: 20,
      maxWidth: '65%', 
    },
    messageText: {
      fontSize: 16,
      color: '#262626',
    },

    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderTopWidth: 1,
      borderColor: '#E9B224',
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: '#262626',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 10,
      marginRight: 10,
    },
    sendButton: {
      backgroundColor: '#E9B224',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    sendButtonText: {
      color: '#ffffff',
      fontSize: 15,
    },
  });
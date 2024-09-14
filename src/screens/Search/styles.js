import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 16,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F0F0F0',
      borderRadius: 8,
      padding: 8,
      marginBottom: 16,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      fontSize: 16,
    },
    recentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    recentText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cleanText: {
      fontSize: 14,
      color: 'blue',
    },
    recentItem: {
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    recentItemContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    recentItemText: {
      marginLeft: 12,
    },
    recentItemName: {
      fontSize: 16,
    },
    recentItemInfo: {
      fontSize: 14,
      color: 'gray',
    },
  });
  
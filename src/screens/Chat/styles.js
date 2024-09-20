import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 30,
    marginBottom: 20,
    marginRight: 294,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
  },

  chatItem: {
    padding: 15,
    backgroundColor: '#DADADA',
    borderRadius: 10,
    marginBottom: 10,
    height: 76,
  },

  pic: {
    width: 45,
    height: 45,
  },

  chatContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  chatTextContainer: {
    marginLeft: 10,
  },
  
  chatName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#262626',
  },

  chatMessage: {
    fontSize: 14,
    color: '#ACACAC',
  },
});

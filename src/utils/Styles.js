import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  borderCountry: {
    backgroundColor: 'white',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    elevation: 5
  },
  countryTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    height: 250,
    width: '100%',
    resizeMode: 'contain'
  },
  countryImage: {
    height: 150,
    flex: 1,
    backgroundColor: 'blue',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
    resizeMode: 'stretch'
  },
  countryCardDetails: {
    flex: 1,
    padding: 30,
    height: 160,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'hsl(0, 0%, 98%)',
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  iconButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4
      },
      android: {
        elevation: 10
      }
    })
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 30,
    paddingVertical: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4
      },
      android: {
        elevation: 15
      }
    })
  },
  card: {
    height: 'auto',
    borderRadius: 8,
    marginVertical: 20,
    width: 300,
    marginHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4
      },
      android: {
        elevation: 3
      }
    })
  }
})

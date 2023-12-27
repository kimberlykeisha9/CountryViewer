import { styles } from '../utils/Styles'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function CountryCard(props) {
  const { country } = props
  const { name, population, capital, region, image } = country
  const navigation = useNavigation()

  const navigateToCountryScreen = () => {
    navigation.navigate('Country', { country })
  }
  return (
    <TouchableOpacity onPress={() => navigateToCountryScreen()}>
      <View style={styles.card}>
        <Image
          style={styles.countryImage}
          source={{
            uri: image
          }}
        />
        <View style={styles.countryCardDetails}>
          <Text style={styles.countryTitle}>{name}</Text>
          <View style={{ marginTop: 10 }} />
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Population:</Text> {population}
          </Text>
          <View style={{ marginTop: 5 }} />
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Region:</Text> {region}
          </Text>
          <View style={{ marginTop: 5 }} />
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Capital:</Text> {capital}
          </Text>
          <View style={{ marginTop: 10 }} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

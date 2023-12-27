import { View, Text, Image } from 'react-native'
import { styles } from '../utils/Styles'
import IconButton from '../components/IconButton'

export default function CountryScreen({ route, navigation }) {
  const { container } = styles
  const { country } = route.params
  const { name, population, capital, region, image } = country
  return (
    <View style={container}>
      <IconButton title="Back" icon="arrowleft" onPress={{}} />
      <View style={{ marginTop: 20 }} />
      <Image style={styles.image} source={{ uri: image }} />
      <View style={{ marginTop: 10 }} />
      <Text style={[styles.countryTitle, { fontSize: 24 }]}>{name}</Text>
      <View style={{ marginTop: 20 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Native Name:</Text> {population}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Population:</Text> {population}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Region:</Text> {region}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Sub Region:</Text> {population}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Capital:</Text> {population}
      </Text>
      <View style={{ marginTop: 30 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Top Level Domain:</Text>{' '}
        {population}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Currencies:</Text> {population}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Languages:</Text> {population}
      </Text>
      <View style={{ marginTop: 30 }} />
      <Text style={styles.countryTitle}>Border Countries:</Text>
      <View style={{ marginTop: 10 }} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.borderCountry}>Country A</Text>
        <Text style={styles.borderCountry}>Country B</Text>
        <Text style={styles.borderCountry}>Country C</Text>
      </View>
    </View>
  )
}

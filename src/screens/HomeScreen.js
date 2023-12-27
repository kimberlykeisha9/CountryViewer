import { View, ScrollView } from 'react-native'
import { styles } from '../utils/Styles'
import { Input } from '../components/Input'
import Dropdown from '../components/Dropdown'
import CountryCard from '../components/CountryCard'

export default function HomeScreen() {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  const { container } = styles
  return (
    <View style={container}>
      <Input placeholder="Search for a country..." />
      <View style={{ marginTop: 20 }} />
      <Dropdown defaultText="Filter by Region" listItems={regions} />
      <View style={{ marginTop: 20 }} />
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <CountryCard
          country={{
            name: 'Germany',
            population: 1000,
            region: 'Europe',
            capital: 'Munich',
            image: 'https://flagcdn.com/w320/de.png'
          }}
        />
        <CountryCard
          country={{
            name: 'Belgium',
            population: 2000,
            region: 'Europe',
            capital: 'Brussels',
            image: 'https://flagcdn.com/w320/be.png'
          }}
        />
        <CountryCard
          country={{
            name: 'Kenya',
            population: 3000,
            region: 'Africa',
            capital: 'Nairobi',
            image: 'https://flagcdn.com/w320/ke.png'
          }}
        />
      </ScrollView>
    </View>
  )
}

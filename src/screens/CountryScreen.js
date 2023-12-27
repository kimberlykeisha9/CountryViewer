import { View, Text } from 'react-native'
import { styles } from '../utils/Styles'

export default function CountryScreen() {
  const { container } = styles
  return (
    <View style={container}>
      <Text>Country Screen</Text>
    </View>
  )
}

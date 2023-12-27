import { View, Text } from 'react-native'
import { styles } from '../utils/Styles'

export default function HomeScreen() {
  const { container } = styles
  return (
    <View style={container}>
      <Text>Home Screen</Text>
    </View>
  )
}

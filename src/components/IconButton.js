import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from '../utils/Styles'
import { AntDesign } from '@expo/vector-icons'

export default function IconButton(props) {
  return (
    <TouchableOpacity>
      <View style={styles.iconButton}>
        <AntDesign
          name={props.icon}
          size={20}
          color="black"
          style={{ marginRight: 10 }}
        />
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

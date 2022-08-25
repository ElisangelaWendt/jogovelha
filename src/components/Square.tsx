import { Text, TouchableHighlight, View, TouchableHighlightProps } from "react-native";
import { styles } from '../../styles'

interface SquareProps extends TouchableHighlightProps{
  text: string;
}

export default function Square({ text, ...rest }: SquareProps) {
  return (
    <TouchableHighlight
      underlayColor="#eeeeee"
      style={styles.square}
      {...rest}
      >
      <View>
        <Text style={styles.selected}>{text}</Text>
      </View>
    </TouchableHighlight>
  )
}
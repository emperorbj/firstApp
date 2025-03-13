import { Image, Pressable, Text, TouchableOpacity, View ,} from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
     style={styles.container}
    >
      <Image
        style={styles.image}
        source={require("../../assets/images/img.jpg")}/>
      <Text style={styles.text}>This is the first am building</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Hello World')}>
        <Text>Click here</Text>
      </TouchableOpacity>

      
      
    </View>
  );
}



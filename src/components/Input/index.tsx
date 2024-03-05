import {Text, TextInput, View} from 'react-native';
import styles from './styles';
interface PropTypes {
  title: string;
  value: string;
  onChange: (val: string) => void;
}
const Input = (props: PropTypes) => {
  const {title, onChange, value} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={title}
        onChangeText={onChange}
        value={value}
        style={styles.input}
      />
    </View>
  );
};
export default Input;

import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
export enum ButtonType {
  ROUNDED = 'ROUNDED',
  DEFAULT = 'DEFAULT',
}
interface PropTypes {
  title: string;
  type: ButtonType;
  onClick: () => void;
  disable?: boolean;
}
const Button = (props: PropTypes) => {
  const {onClick, type, title, disable = false} = props;
  const buttonStyle =
    type == ButtonType.ROUNDED ? styles.roundedStyle : styles.defaultStyle;
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      disabled={disable}
      onPress={onClick}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

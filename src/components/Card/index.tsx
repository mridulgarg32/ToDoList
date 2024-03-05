import {
  Text,
  View,
  Animated,
  PanResponder,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import {ToDoStatus, TodoTask} from '../../types';
interface PropTypes extends TodoTask {
  onRemove: () => void;
  onClick: () => void;
}
const Card = (props: PropTypes) => {
  const {id, title, description, status, onRemove, onClick} = props;
  const pan = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (e, gesture) => {
      if (gesture.dx > 50) {
        // Swipe right (delete)
        Animated.timing(pan, {
          toValue: {x: 200, y: 0},
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          // Remove item from todos
          onRemove();
        });
      } else if (gesture.dx < -50) {
        // Swipe left (delete)
        Animated.timing(pan, {
          toValue: {x: -200, y: 0},
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          // Remove item from todos
          onRemove();
        });
      } else {
        // Return to original position
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <Animated.View
      key={id}
      {...panResponder.panHandlers}
      style={[
        styles.container,
        {
          backgroundColor:
            status == ToDoStatus.COMPLETED
              ? 'red'
              : status == ToDoStatus.IN_PROGRESS
              ? 'green'
              : 'grey',
        },
        {transform: [{translateX: pan.x}]},
      ]}>
      <View style={styles.containerWrapper}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {description}
          </Text>
        </View>
        <TouchableOpacity onPress={onClick}>
          <Image
            source={require('../../images/Edit.png')}
            resizeMode="contain"
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
export default Card;

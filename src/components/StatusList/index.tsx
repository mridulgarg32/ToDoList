import {Text, TouchableOpacity, View} from 'react-native';
import {ToDoStatus} from '../../types';
import styles from './styles';
interface PropTypes {
  title: ToDoStatus;
  onSelect: (val: ToDoStatus) => void;
  selected: ToDoStatus;
}
const Status = ({title, onSelect, selected}: PropTypes) => {
  const current = selected === title;
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          borderColor: current ? 'blue' : 'grey',
        },
      ]}
      onPress={() => onSelect(title)}>
      <Text style={{padding: 10, color: current ? 'blue' : 'grey'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
interface ListPropInterface {
  selected: ToDoStatus;
  onChange: (val: ToDoStatus) => void;
}
const StatusList = (props: ListPropInterface) => {
  const {selected, onChange} = props;
  let statusList = [
    ToDoStatus.COMPLETED,
    ToDoStatus.IN_PROGRESS,
    ToDoStatus.PENDING,
  ];
  return (
    <>
      <Text style={styles.title}>Status</Text>
      <View style={styles.wrapperContainer}>
        {statusList.map(item => {
          return (
            <Status
              title={item}
              onSelect={(val: ToDoStatus) => {
                onChange(val);
              }}
              selected={selected}
            />
          );
        })}
      </View>
    </>
  );
};
export default StatusList;

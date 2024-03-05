import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import {ToDoStatus, TodoTask} from '../../types';
import Button, {ButtonType} from '../../components/Button';
import useClock from '../../hooks/useClock';
import useTodos from '../../hooks/useTodos';

const HomeScreen = ({navigation}: any) => {
  const {time} = useClock();
  const {todoList, removeTask} = useTodos();
  return (
    <View style={styles.container}>
      <Text>{time.toLocaleTimeString()}</Text>
      <FlatList
        data={todoList}
        renderItem={({item, index}) => (
          <Card
            onClick={() => {
              navigation.navigate('AddScreen', {
                newTask: false,
                todo: item,
                index,
              });
            }}
            id={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
            onRemove={() => {
              removeTask(index);
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
      <View style={{position: 'absolute', bottom: 30, right: 30}}>
        <Button
          type={ButtonType.ROUNDED}
          title="+"
          onClick={() => {
            navigation.navigate('AddScreen', {newTask: true});
          }}
        />
      </View>
    </View>
  );
};
export default HomeScreen;

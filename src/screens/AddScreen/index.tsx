import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';
import Button, {ButtonType} from '../../components/Button';
import {uid} from '../../helpers';
import Input from '../../components/Input';
import StatusList from '../../components/StatusList';
import {ToDoStatus, TodoTask} from '../../types';
import useAddTask, {ActionType} from '../../hooks/useAddTask';

const AddScreen = ({navigation, route}: any) => {
  const {newTask, todo, index} = route?.params;
  const initialState: TodoTask = newTask
    ? {
        id: uid(),
        title: '',
        description: '',
        status: ToDoStatus.PENDING,
      }
    : todo;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: newTask ? 'Add Task' : 'Edit Task',
    });
  }, [navigation]);
  const {task, dispatch, setTask} = useAddTask(initialState);
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <Input
        onChange={val => {
          dispatch({type: ActionType.UpdateTitle, payload: val});
        }}
        title={'Title'}
        value={task.title}
      />
      <Input
        onChange={val => {
          dispatch({type: ActionType.UpdateDescription, payload: val});
        }}
        title={'Description'}
        value={task.description}
      />
      <StatusList
        selected={task.status}
        onChange={(val: ToDoStatus) => {
          dispatch({type: ActionType.UpdateStatus, payload: val});
        }}
      />
      <Button
        disable={!task.title || !task.description}
        type={ButtonType.DEFAULT}
        title={newTask ? 'ADD TASK' : 'UPDATE'}
        onClick={() => {
          setTask(newTask, task, index);
          navigation.goBack();
        }}
      />
    </View>
  );
};
export default AddScreen;

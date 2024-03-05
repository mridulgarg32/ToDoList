import {useEffect} from 'react';
import {MMKV} from 'react-native-mmkv';
import {TodoTask} from '../types';
import {useRecoilState} from 'recoil';
import {todoState} from '../atoms/atoms';
const useTodos = () => {
  const storage = new MMKV();
  const ToDoListKey = 'ToDoList';
  const [todoList, setTodoList] = useRecoilState(todoState);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    if (todoList == null) {
      let tasks = storage.getString(ToDoListKey);
      let finalList = tasks ? JSON.parse(tasks) : [];
      setTodoList(finalList);
      return finalList;
    }
    return todoList;
  };
  const addToDoTask = (task: TodoTask) => {
    let tasks = getTodos();
    let updatedTasks = [...tasks, task];
    setTodoList(updatedTasks);
    storage.set(ToDoListKey, JSON.stringify(updatedTasks));
  };

  const updateTask = (task: TodoTask, index: number) => {
    let tasks = getTodos();
    let updatedTasks = [...tasks];
    updatedTasks[index] = task;
    setTodoList(updatedTasks);
    storage.set(ToDoListKey, JSON.stringify(updatedTasks));
  };

  const removeTask = (index: number) => {
    let tasks = getTodos();
    let updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTodoList(updatedTasks);
    storage.set(ToDoListKey, JSON.stringify(updatedTasks));
  };
  return {todoList, addToDoTask, updateTask, removeTask};
};

export default useTodos;

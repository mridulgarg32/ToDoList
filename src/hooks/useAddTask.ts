import {ToDoStatus, TodoTask} from '../types';
import {useReducer} from 'react';
import useTodos from './useTodos';
export enum ActionType {
  UpdateTitle = 'UPDATE_TITLE',
  UpdateDescription = 'UPDATE_DESCRIPTION',
  UpdateStatus = 'UPDATE_STATUS',
}
interface UpdateTitleAction {
  type: ActionType.UpdateTitle;
  payload: string;
}

interface UpdateDescriptionAction {
  type: ActionType.UpdateDescription;
  payload: string;
}

interface UpdateStatusAction {
  type: ActionType.UpdateStatus;
  payload: ToDoStatus;
}

const useAddTask = (initialState: TodoTask) => {
  const reducer = (
    state: TodoTask,
    action: UpdateTitleAction | UpdateDescriptionAction | UpdateStatusAction,
  ): TodoTask => {
    switch (action.type) {
      case ActionType.UpdateTitle:
        return {...state, title: action.payload};
      case ActionType.UpdateDescription:
        return {...state, description: action.payload};
      case ActionType.UpdateStatus:
        return {...state, status: action.payload};
      default:
        return state;
    }
  };
  const [task, dispatch] = useReducer(reducer, initialState);
  const {addToDoTask, updateTask} = useTodos();
  const setTask = (newTask: boolean, task: TodoTask, index: number) => {
    if (newTask) {
      addToDoTask(task);
    } else {
      updateTask(task, index);
    }
  };
  return {task, dispatch, setTask};
};
export default useAddTask;

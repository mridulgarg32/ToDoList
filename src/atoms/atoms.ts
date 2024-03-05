import {atom} from 'recoil';
import {TodoTask} from '../types';

export const todoState = atom<Array<TodoTask> | null>({
  key: 'todoState',
  default: null,
});

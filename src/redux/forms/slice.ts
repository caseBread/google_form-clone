import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, questionInit } from '../../types/question';
import { Title } from '../../types/title';
import { RootState } from '../store';
import formsState from './state';

const formsSlice = createSlice({
  name: 'forms',
  initialState: formsState,
  reducers: {
    updateTitle: (state, action: PayloadAction<Title>) => {
      state.title = action.payload;
    },
    addQuestion: (state) => {
      state.questions.push(questionInit);
    },
    updateQuestion: (state, action: PayloadAction<Question>) => {
      state.questions[action.payload.id] = action.payload;
    },
    deleteQuestion: (state, action: PayloadAction<number>) => {
      state.questions = state.questions.filter((question, idx) => question.id !== action.payload);
    },
  },
});

export const { updateTitle, addQuestion, updateQuestion, deleteQuestion } = formsSlice.actions;
export const selectTitle = (state: RootState) => state.forms.title;
export const selectQuestions = (state: RootState) => state.forms.questions;

export default formsSlice;

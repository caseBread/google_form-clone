import { createSlice } from '@reduxjs/toolkit';
import formsState from './state';

const formsSlice = createSlice({
  name: 'forms',
  initialState: formsState,
  reducers: {
    updateTitle: (state) => {},
    addQuestion: (state) => {},
    updateQuestion: (state) => {},
    deleteQuestion: (state) => {},
  },
});

export const { updateTitle, addQuestion, updateQuestion, deleteQuestion } = formsSlice.actions;

export default formsSlice;

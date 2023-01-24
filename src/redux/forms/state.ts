interface FormsStateType {
  formTitle: {
    title: string;
    explanation: string;
  };
  questions: { id: number; title: string; type: string; options: { id: number; content: string }[] }[];
}

const formsState: FormsStateType = {
  formTitle: {
    title: '',
    explanation: '',
  },
  questions: [{ id: 0, title: '', type: '', options: [{ id: 0, content: '' }] }],
};
export default formsState;

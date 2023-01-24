export interface Option {
  id: number;
  content: string;
}

export interface Question {
  id: number;
  question: string;
  type: string;
  essential: boolean;
  options: Option[];
}

export const questionInit = {
  id: 0,
  question: '',
  type: '',
  essential: false,
  options: [{ id: 0, content: '' }],
};

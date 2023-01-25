import { Option } from '../../../types/question';

const ObjectiveOptionPreview = ({ type, options }: { type: string; options: Option[] }) => {
  return (
    <fieldset className="w-full flex flex-col">
      {options.map(
        (option, idx) =>
          option.content && (
            <label key={option.id} htmlFor={`${option.id}`}>
              <input id={`${option.id}`} type={type === '체크박스' ? 'checkbox' : 'radio'} name="option" />
              {option.content}
            </label>
          )
      )}
    </fieldset>
  );
};
export default ObjectiveOptionPreview;

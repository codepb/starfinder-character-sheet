import * as React from "react";

interface MultipleTextInput {
  value: string[];
  onChange?: (value: string[]) => void;
}

const updateItem = (array: string[], index: number, newItem: string) =>
  array.map((item, i) => (index === i ? newItem : item));

const removeItem = (array: string[], index: number) =>
  array.filter((item, i) => i !== index);

const addEmptyToEnd = (array: string[]) => [...array, ""];

const MultipleTextInput: React.FC<MultipleTextInput> = ({
  value,
  onChange
}) => {
  return (
    <>
      {value.map((d, i) => (
        <div key={i}>
          <input
            value={d}
            onChange={e =>
              onChange && onChange(updateItem(value, i, e.target.value))
            }
          />
          <button onClick={() => onChange && onChange(removeItem(value, i))}>
            remove
          </button>
        </div>
      ))}
      <button onClick={() => onChange && onChange(addEmptyToEnd(value))}>
        add
      </button>
    </>
  );
};

export default MultipleTextInput;

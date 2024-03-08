import React from "react";

export default function Form({ inputValue, setInputValue, onSubmit }) {
  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="flex pt-2 ">
      <input
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        type="text"
        placeholder="해야 할 일을 입력하세요."
        name="value"
        onChange={onChange}
        value={inputValue}
      />
      <input
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        type="submit"
        value="입력"
      />
    </form>
  );
}

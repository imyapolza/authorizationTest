import React, { useState } from 'react';

export const Form = ({ takeContact, items }) => {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    takeContact(input);
    setInput('');
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  return (
    <>
      <form className="form">
        <input
          className="input"
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Контакт..."
          maxLength={13}
        />
        <input className="button" type="submit" value="Добавить" onClick={handleSubmit} />
      </form>
    </>
  );
};

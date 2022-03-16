import React from 'react';

export const Contact = ({ contact, id, deleteContact, items, changeContact }) => {
  const [updatedItem, setUpdatedItem] = React.useState(null);
  const [first, setfirst] = React.useState(null);
  const [btn, setBtn] = React.useState(true);

  const isCurrentBeingUpdated = updatedItem === id;

  function handleInputChange(e) {
    setfirst(e.target.value);
  }

  const renderTitleOrInput = () => {
    return isCurrentBeingUpdated ? (
      <input
        className="change-input"
        value={first === null ? contact.text : first}
        onChange={handleInputChange}
        maxLength={13}
      />
    ) : (
      ''
    );
  };
  function handleSave() {
    const newItems = items.map((item) => (item.id === id ? { ...item, text: first } : item));
    changeContact(newItems);
  }

  return (
    <div className="item-contact">
      <div className="contact-text">{isCurrentBeingUpdated ? '' : contact.text}</div>

      <div>{renderTitleOrInput()}</div>

      <button
        className="save-btn"
        disabled={btn}
        onClick={() => {
          handleSave();
          setUpdatedItem(isCurrentBeingUpdated ? null : id);
        }}>
        Сохранить
      </button>

      <button
        className="change-btn"
        onClick={() => {
          setUpdatedItem(isCurrentBeingUpdated ? null : id);
          setBtn(false);
        }}>
        {'✏️'}
      </button>

      <button className="delete-btn" onClick={() => deleteContact(id)}>
        ❌
      </button>
    </div>
  );
};

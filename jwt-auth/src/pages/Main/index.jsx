import React from 'react';

import { Form } from './components/Form';
import { Contact } from './components/Contact';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact, removeContact, editContact } from '../../redux/actionCreators/contacts';

function Main() {
  const dispatch = useDispatch();
  const items = useSelector(({ contacts }) => contacts);
  const count = useSelector(({ contacts }) => contacts.length);

  React.useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(items));
  }, [items]);

  const takeContact = (input) => {
    const id = new Date().valueOf();

    if (input) {
      dispatch(addContact(id, input));
    }
  };

  const deleteContact = (id) => {
    const newItems = items.filter((obj) => obj.id !== id);

    dispatch(removeContact(newItems));
  };

  const changeContact = (newItems) => {
    dispatch(editContact(newItems));
  };

  return (
    <div className="container">
      <header style={{ width: '240px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h1 className="home-text">КОНТАКТЫ</h1>
        <h2 className="home-text">Всего контактов: {count}</h2>
      </header>

      <Form items={items} takeContact={takeContact}></Form>
      {items &&
        items.map((obj, index) => (
          <Contact
            key={`${obj.id}_${index}`}
            contact={obj}
            id={obj.id}
            deleteContact={deleteContact}
            changeContact={changeContact}
            items={items}></Contact>
        ))}
    </div>
  );
}

export default Main;

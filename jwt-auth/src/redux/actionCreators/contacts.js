export const addContact = (id, text) => ({
  type: 'ADD_CONTACT',
  id,
  text,
});

export const removeContact = (contacts) => ({
  type: 'REMOVE_CONTACT',
  payload: contacts,
});

export const editContact = (contacts) => ({
  type: 'EDIT_CONTACT',
  payload: contacts,
});


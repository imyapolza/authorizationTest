const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, { id: action.id, text: action.text }];

    case 'REMOVE_CONTACT':
      return action.payload;

    case 'EDIT_CONTACT':
      return action.payload;

    default:
      return state;
  }
};

export default contacts;

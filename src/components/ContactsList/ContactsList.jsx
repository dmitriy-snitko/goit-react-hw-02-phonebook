import React from 'react';
import { List, Item } from '../ContactsList/ContactsList.styles';

const ContactsList = (props) => {
  return (
    <List>
      {props.filtredContacts().map(cont => {
        return (
          <Item key={cont.id}>
            <p>{`${cont.name}: ${cont.number}`}</p>
            <button onClick={() => props.deleteContact(cont.id)}>Delete</button>
          </Item>
        )
      })}
    </List>
  )
};

export default ContactsList;

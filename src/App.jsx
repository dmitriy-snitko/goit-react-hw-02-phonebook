import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { Container, Title } from './App.styles.jsx';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const a = this.state.contacts.find(el => el.name.toLowerCase() === normalizedName);

    if (a) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number
    }

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        
        <Title>Contacts</Title>
        <ContactsList filtredContacts={this.getFiltredContacts} deleteContact={this.deleteContact}/>
    </Container>
  )};
}

export default App;

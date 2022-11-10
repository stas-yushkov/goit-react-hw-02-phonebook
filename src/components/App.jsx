import { PureComponent } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-qwe', name: 'qwe', number: '666-66-66' },
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  onSubmit = elem => {
    this.setState(prev => ({
      ...prev,
      contacts: [...prev.contacts, elem],
    }));
  };

  handleFilterChange = e => {
    this.setState(prev => ({
      ...prev,
      filter: e.target.value,
    }));
  };

  handleDelete = idToDelete => {
    this.setState(prev => ({
      ...prev,
      contacts: this.state.contacts.filter(({ id }) => id !== idToDelete),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    if (filter) {
      return contacts.filter(contact => contact.name.includes(filter));
    }

    return contacts;
  };

  render() {
    const { contacts } = this.state;
    const { onSubmit, handleFilterChange, handleDelete, filteredContacts } =
      this;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <section>
          <h1>Phonebook</h1>
          <ContactForm contactList={contacts} onSubmit={onSubmit} />
          <h2>Contacts</h2>
          <Filter handleFilterChange={handleFilterChange} />
          <ContactList
            listOfContacts={filteredContacts()}
            onDelete={handleDelete}
          />
        </section>
      </div>
    );
  }
}

import { PureComponent } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'qwe', number: '459-12-56' },
        // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
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

  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    const renderContacts = () => {
      if (!filter) {
        return contacts.map(elem => (
          <li key={elem.id}>{`${elem.name}: ${elem.number}`}</li>
        ));
      }
      if (filter) {
        return contacts
          .filter(elem => elem.name.includes(filter))
          .map(elem => <li key={elem.id}>{`${elem.name}: ${elem.number}`}</li>);
      }
    };

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
          <ContactForm
            contactList={this.state.contacts}
            onSubmit={this.onSubmit}
          />
          <h2>Contacts</h2>
          <Filter handleFilterChange={this.handleFilterChange} />
          <ContactList renderContacts={renderContacts} />
        </section>
      </div>
    );
  }
}

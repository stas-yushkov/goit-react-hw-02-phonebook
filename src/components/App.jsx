import { PureComponent } from 'react';

import { nanoid } from 'nanoid';

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          name: this.state.name,
          number: this.state.number,
          id: nanoid(),
        },
      ],
      name: '',
      number: '',
    }));
  };

  handleInputChange = e => {
    const name = e.target.name;

    this.setState(prev => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  handleFilterChange = e => {
    const name = e.target.name;

    this.setState(prev => ({
      ...prev,
      [name]: e.target.value,
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
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid black',
            }}
            onSubmit={this.handleSubmit}
          >
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // value={this.state.filter}
              onChange={this.handleFilterChange}
            />
          </label>
          <ul>{renderContacts()}</ul>
        </section>
      </div>
    );
  }
}

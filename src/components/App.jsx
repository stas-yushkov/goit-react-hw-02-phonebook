import { PureComponent } from 'react';

import { nanoid } from 'nanoid';

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          name: prev.name,
          id: nanoid(),
        },
      ],
      name: '',
    }));
  };

  handleInputChange = e => {
    this.setState(prev => ({
      ...prev,
      name: e.target.value,
    }));
  };

  render() {
    const contacts = this.state.contacts;

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
          <form onSubmit={this.handleSubmit}>
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
            <button type="submit">Add contact</button>
          </form>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(elem => (
              <li key={elem.id}>{elem.name}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

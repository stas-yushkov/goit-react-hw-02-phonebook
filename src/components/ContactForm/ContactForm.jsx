import { PureComponent } from 'react';
import { nanoid } from 'nanoid';

import { StyledButton } from 'components/StyledComponents';

import { StyledForm } from './StyledComponents';

export class ContactForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: '', number: '' };
    this.onSubmit = this.props.onSubmit;
  }

  isDulpicate = name => {
    return this.props.contactList.find(contact => contact.name === name);
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.isDulpicate(name)) {
      return alert(`${name} is is already in contacts.`);
    }

    this.onSubmit({
      name,
      number,
      id: nanoid(),
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
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
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}

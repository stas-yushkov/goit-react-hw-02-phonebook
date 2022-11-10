import { PureComponent } from 'react';
import { nanoid } from 'nanoid';

import { StyledForm } from './StyledComponents';

export class ContactForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: '', number: '' };
    this.onSubmit = this.props.onSubmit;
  }

  handleInputChange = e => {
    const name = e.target.name;

    this.setState(prev => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.onSubmit({
      name: this.state.name,
      number: this.state.number,
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
        <button type="submit">Add contact</button>
      </StyledForm>
    );
  }
}

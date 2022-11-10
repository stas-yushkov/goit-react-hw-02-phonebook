import { StyledList } from './StyledComponents';

export const ContactList = ({ listOfContacts, onDelete }) => {
  return (
    <StyledList>
      <ul>
        {listOfContacts.map(({ id, name, number }) => (
          <li key={id}>
            {`${name}: ${number}`}
            <button onClick={() => onDelete(id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </StyledList>
  );
};

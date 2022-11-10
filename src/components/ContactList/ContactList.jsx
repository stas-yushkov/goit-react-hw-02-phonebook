import { StyledButton } from 'components/StyledComponents';

import { StyledList, ListItem, ItemText } from './StyledComponents';

export const ContactList = ({ listOfContacts, onDelete }) => {
  return (
    <StyledList>
      {listOfContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ItemText>{`${name}: ${number}`}</ItemText>
          <StyledButton onClick={() => onDelete(id)} type="button">
            Delete
          </StyledButton>
        </ListItem>
      ))}
    </StyledList>
  );
};

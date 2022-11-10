import { StyledList } from './StyledComponents';

export const ContactList = ({ renderContacts }) => {
  return (
    <StyledList>
      <ul>{renderContacts()}</ul>
    </StyledList>
  );
};

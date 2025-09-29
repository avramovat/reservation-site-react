import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styled from 'styled-components';

export const StyledPhoneInput = styled(PhoneInput)`
  .form-control {
    width: 100%;
    padding: 1vh 1vw;
    font-size: clamp(12px, 1.2vw, 16px);
    border-radius: clamp(4px, 0.3vw, 8px);
    border: 1px solid #ccc;
    padding-left: 50px;
  }

  .flag-dropdown {
    border-radius: clamp(4px, 0.3vw, 8px) 0 0 clamp(4px, 0.3vw, 8px);
  }

  .country-list {
    font-size: clamp(12px, 1.2vw, 16px);
  }
`;

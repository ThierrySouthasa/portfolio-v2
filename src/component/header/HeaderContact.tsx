import React from 'react';
import { styled } from 'styled-components';
import { colors } from '../../assets/theme'

const HeaderContact = () => {
    return (
        <HeaderContactStyled>
            <p>Github</p>
            <p>Linkedin</p>
            <p>Mail</p>
            <p>Cv</p>
        </HeaderContactStyled>
    );
};

const HeaderContactStyled = styled.div`
  color: ${colors.white};
  padding-right: 50px;
  display: flex;
  flex-direction: row;
   p {
    padding-left: 30px;
   }
`;

export default HeaderContact;
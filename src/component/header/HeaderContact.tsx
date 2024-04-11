import React from 'react';
import { styled } from 'styled-components';
import { colors } from '../../assets/theme'

const HeaderContact = () => {
    return (
        <HeaderContactStyled>
            <p><a href="https://github.com/ThierrySouthasa">Github</a></p>
            <p><a href="www.linkedin.com/in/thierry-southasa-9905aba9">Linkedin</a></p>
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
   a {
    text-decoration: none;
    color: ${colors.white};
   }
`;

export default HeaderContact;
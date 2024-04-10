import React from 'react';
import { styled } from 'styled-components';

const HeaderTitle = () => {
    return (
        <HeaderTitleStyled>
            <h2>Thierry Southasa</h2>
            <h3>Développeur Front End</h3>
        </HeaderTitleStyled>
    );
};

const HeaderTitleStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
`;

export default HeaderTitle;
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <h2>Thierry Southasa</h2>
            <h1>Développeur Front End</h1>
        </HeaderStyled>
    );
};

const HeaderStyled = styled.div`
    color: #DFAC8C;
    background-color: #071b29;
    height: 100px;
    text-align: center;
    font-weight: lighter;
`;

export default Header;
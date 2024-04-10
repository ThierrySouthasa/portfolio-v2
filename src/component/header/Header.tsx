import styled from 'styled-components';
import { colors } from '../../assets/theme'
import HeaderTitle from './HeaderTitle';
import HeaderContact from './HeaderContact';

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderTitle />
            <HeaderContact />
        </HeaderStyled>
    );
};

const HeaderStyled = styled.div`
    color: ${colors.gold};
    background-color: ${colors.blueNavy};
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default Header;
import { styled } from "styled-components"
import { colors } from "../assets/theme";

const Footer = () => {
    return (
        <FooterStyled>
            <p>Copyright © 2024 Thierry Southasa. All rights reserved.</p>
        </FooterStyled>
    );
};

const FooterStyled = styled.div`
    color: ${colors.gold};
    background-color: ${colors.blueNavy};
    height: 50px;
    width: 100vw;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
`;

export default Footer;
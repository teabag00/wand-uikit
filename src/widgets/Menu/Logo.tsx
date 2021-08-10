import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;


const Title = styled.h1`
  font-size: 16px;
  font-family: 'Kanit';

  color: #fff;
  text-shadow:
          0 0 5px #dd33fa

          ,
          0 0 10px #dd33fa

          ,
          0 0 20px #dd33fa

          ,
          0 0 40px #d500f9,
          0 0 80px #d500f9,
          0 0 90px #d500f9,
          0 0 100px #d500f9,
          0 0 150px #d500f9;

 

`

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {/* <LogoIcon className="mobile-icon" /> */}
      {/* <LogoWithText className="desktop-icon" isDark={isDark} /> */}
      <Flex className="desktop-icon">
        <Title>WAND</Title>
      </Flex>
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;

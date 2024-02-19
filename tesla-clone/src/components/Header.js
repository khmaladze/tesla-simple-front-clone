import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  // State to manage burger menu visibility
  const [burgerStatus, setBurgerStatus] = useState(false);

  // Fetching car data from Redux store
  const cars = useSelector(selectCars);

  return (
    <Container>
      {/* Logo */}
      <a href="/">
        <img src="/images/logo.svg" alt="logoimage" />
      </a>

      {/* Main menu */}
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="/" onClick={() => setBurgerStatus(false)}>
              {car}
            </a>
          ))}
      </Menu>

      {/* Right menu including Shop and Tesla Account */}
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        {/* Burger menu icon */}
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      {/* Burger menu */}
      <BurgerNav show={burgerStatus}>
        {/* Close button */}
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        {/* Dynamic car menu items */}
        {cars &&
          cars.map((car, index) => (
            <MenuItem key={index}>
              <a href="/">{car}</a>
            </MenuItem>
          ))}

        {/* Static menu items */}
        <MenuItem>
          <a href="/">Existing Inventory</a>
        </MenuItem>
        <MenuItem>
          <a href="/">Used Inventory</a>
        </MenuItem>
        <MenuItem>
          <a href="/">Trade-in</a>
        </MenuItem>
        <MenuItem>
          <a href="/">Roadster</a>
        </MenuItem>
      </BurgerNav>
    </Container>
  );
}

export default Header;

// Styled components

const Container = styled.div`
  background: white;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 150px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  a {
    font-weight: 600;
  }
`;

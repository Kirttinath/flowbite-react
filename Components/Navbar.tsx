"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/f-logo.png";

const Navbar = () => {
  return (
    <Nav>
      <Navleft>
        <Logo>
          <Imagecomponent src={logo} alt="flowbite logo error" />
          <Title href="#">Flowbite-React</Title>
        </Logo>
        <Links>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">Contact</NavLink>
        </Links>
      </Navleft>
      <NavRight>
        <Button1>Log In</Button1>
        <Button2>Get Started</Button2>
      </NavRight>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 0em 5em;

  background-color: #ffffff;
`;

const Navleft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;
const Imagecomponent = styled(Image)`
  width: 2em;
`;
const Title = styled(Link)`
  font-weight: bold;
  font-size: 1.5em;
`;
const Links = styled.div`
  display: space-between;
  justify-content: center;
  align-items: center;
  @media screen and(min-width:280px) and (max-width: 1000px) {
    display: none;
  }
`;
const NavLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: #007bff;
    transform: 0.2s ease-in-out;
  }
`;
const NavRight = styled.div`
  display: flex;
  padding: var(--25, 10px) var(--5, 20px);
  justify-content: center;
  align-items: center;
  gap: var(--2, 8px);
`;
const Button1 = styled.button`
  border-radius: var(--rounded-lg, 8px);
  background: var(--primary-700, #d7e02e);
  color: var(--white, #000000);

  font-size: 14px;
  padding: var(--25, 10px) var(--5, 20px);
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const Button2 = styled.button`
  border-radius: var(--rounded-lg, 8px);
  background: var(--primary-700, #1a56db);
  color: var(--white, #fff);

  font-size: 14px;
  padding: var(--25, 10px) var(--5, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
export default Navbar;

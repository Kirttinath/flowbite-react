import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Nav = styled.nav`
  display: flex;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
  padding: 0em 5em;
  background-color: #ffffff;
`;

export const Navleft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;
export const Imagecomponent = styled(Image)`
  width: 2em;
`;
export const Title = styled(Link)`
  font-weight: bold;
  font-size: 1.5em;
  color: #3a3838;
`;
export const Links = styled.div`
  display: space-between;
  justify-content: center;
  margin-right: 10px;
  align-items: center;
`;
export const NavLink = styled.a`
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
export const NavRight = styled.div`
  display: flex;
  padding: var(--25, 10px) var(--5, 20px);
  justify-content: center;
  align-items: center;
  gap: var(--2, 8px);
`;
export const Button1 = styled.button`
  border-radius: var(--rounded-lg, 8px);

  font-size: 14px;
  padding: var(--25, 10px) var(--5, 20px);
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
export const Button2 = styled.button`
  border-radius: var(--rounded-lg, 8px);
  background: var(--primary-700, #1a56db);
  color: var(--white, #fff);

  font-size: 14px;
  padding: var(--25, 10px) var(--5, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

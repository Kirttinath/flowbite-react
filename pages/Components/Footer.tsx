import { Footerdiv, Footleft, Footright } from "./styles/Footer.styled";
import Image from "next/image";
import facebbok from "../../public/facebook.png";
import twitter from "../../public/twitter.png";
import dribble from "../../public/dribble.png";
import github from "../../public/githubb.png";

const Footer = () => {
  return (
    <Footerdiv>
      <Footleft>© 2021 Flowbite, LLC. All rights reserved.</Footleft>
      <Footright>
        <Image src={facebbok} alt="Facebook icon" />
        <Image src={twitter} alt="Twitter Icon" />
        <Image src={github} alt="Git Icon" />
        <Image src={dribble} alt="Dribble Icon" />
      </Footright>
    </Footerdiv>
  );
};
export default Footer;

"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Formpage from "./Components/Formpage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {
  FooterBrand,
  FooterComponent,
  FooterCopyright,
  NavbarBrand,
} from "flowbite-react";
type Props = {};

const Signin = ({}: Props) => {
  // const session = useSession();

  // const signOutpg = () => {
  //   signOut();
  // };

  return (
    <>
      <div className="flex justify-center items-center text-lg font-bold text-green-500 mt-60">
        <div>Authenticated User</div>

        <br />
      </div>
    </>
  );
};
export default Signin;

// export const SubmitData = (data: any) => {
//   if (data.email === "K@gmail.com" && data.password === "kirtti") {
//     console.log("Authenticated User");
//     console.log(data.email, data.password);
//     return <Formpage />;
//   } else throw new Error("Invalid Request");
// };

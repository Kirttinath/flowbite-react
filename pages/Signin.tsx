"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { signOut } from "next-auth/react";
type Props = {};

const Signin = ({}: Props) => {
  const session = useSession();

  const signOutpg = () => {
    signOut();
  };

  return (
    <>
      <div>
        <div>{session?.data?.user?.name}</div>
        <br />
        <div>{session?.data?.user?.email}</div>
        <br />
      </div>
    </>
  );
};
export default Signin;

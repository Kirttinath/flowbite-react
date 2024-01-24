"use client";
import React from "react";
import { useSession } from "next-auth/react";

type Props = {};

export default function Signin({}: Props) {
  const session = useSession();
  console.log(session);

  return <div>Signin</div>;
}

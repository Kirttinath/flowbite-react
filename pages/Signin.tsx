import React from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { log } from "console";
import Router from "next/router";
import {
  authenticatedStyle,
  unauthenticatedStyle,
} from "./Components/styles/Signin.styled";

type Props = {};

const Signin = (props: Props) => {
  const { status, data } = useSession();
  console.log(status, data);

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/");
  }, [status]);
  if (status === "authenticated")
    return (
      <div style={authenticatedStyle}>
        Authenticated User{JSON.stringify(data.user, null, 2)}
      </div>
    );

  return <div>Loading...</div>;
};

export default Signin;

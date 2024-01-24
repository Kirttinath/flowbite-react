import React from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { log } from "console";
import Router from "next/router";
import {
  authenticatedStyle,
  unauthenticatedStyle,
} from "./Components/styles/Signin.styled";

type Props = {
  email: string;
  password: string;
};

const Signin = (props: Props) => {
  const { status, data } = useSession();
  console.log(status, data);

  if (status === "unauthenticated") throw new Error("Invalid Credentials");
  else if (status === "authenticated") {
    return (
      <div style={authenticatedStyle}>
        Authenticated User{JSON.stringify(data.user?.email, null, 2)}
      </div>
    );
    Router.push("/Signin");
  } else return <div>Loading...</div>;
};

export default Signin;

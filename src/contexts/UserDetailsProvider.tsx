import React, { createContext, useState, JSX } from "react";
import { ISignInRes } from "../types/siginInRes.d";
export const emptyUserState = {
  id: 0,
  accessToken: "",
  roles: [''],
  tokenType: "",
  username: "",
}
//create a context, with createContext api
export const userDetailsContext = createContext({});

export const UserDetailsProvider = (props: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [userDetails, setUserDetails] = useState<ISignInRes>(emptyUserState);

  return (
    <userDetailsContext.Provider value={[userDetails, setUserDetails]}>
      {props.children}
    </userDetailsContext.Provider>
  );
};

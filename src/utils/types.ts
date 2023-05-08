import { HTMLAttributes, FormEventHandler, ReactNode } from "react";

export interface PropPages extends HTMLAttributes<HTMLElement> {}

export interface FormEventSubmit extends FormEventHandler<HTMLFormElement> {}

export interface User {
  avatar_url: string;
  html_url: string;
  login: string;
}
export interface ProfileProp {
  username: User;
}

export type Ctx = {
  username: User | null;
  GET: (profile: string) => Promise<void>;
  userNotFound: boolean;
};

export type ContextProp = {
  children: ReactNode;
};

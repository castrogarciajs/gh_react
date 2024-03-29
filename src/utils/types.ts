import { HTMLAttributes, FormEventHandler, ReactNode } from "react";

export interface PropPages extends HTMLAttributes<HTMLElement> {}

export interface FormEventSubmit extends FormEventHandler<HTMLFormElement> {}

export interface User {
  avatar_url: string;
  html_url: string;
  login: string;
  followers: number;
  following: number;
}
export interface ProfileProp {
  username: User;
}

export type Ctx = {
  username: User | null;
  repositorios: IRepositories[] | null;
  GET: (profile: string) => Promise<void>;
  userNotFound: boolean;
  REPOSITORIES: (profile: string) => Promise<void>;
};

export type ContextProp = {
  children: ReactNode;
};

export interface IRepositories {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  license: string;
}

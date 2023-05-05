import { HTMLAttributes, FormEventHandler, ReactNode } from "react";

export interface PropPages extends HTMLAttributes<HTMLElement> {}

export interface FormEventSubmit extends FormEventHandler<HTMLFormElement> {}

export interface User {
  avatar_url: string;
  html_url: string;
  login: string;
}

export type Ctx = {
  sebastian: User | null;
  SEBASTIAN: () => Promise<void>;
};

export type ContextProp = {
  children: ReactNode;
};

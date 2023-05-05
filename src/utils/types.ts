import { HTMLAttributes, FormEventHandler, ReactNode } from "react";

export interface PropPages extends HTMLAttributes<HTMLElement> {}

export interface FormEventSubmit extends FormEventHandler<HTMLFormElement> {}

export interface User {
  avatarUrl: string;
  github: string;
  login: string;
}

export type Ctx = {
  username: User | null;
  SEBASTIAN: () => Promise<void>;
};

export type ContextProp = {
  children: ReactNode;
};

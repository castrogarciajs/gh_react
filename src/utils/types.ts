import { HTMLAttributes, FormEventHandler, ReactNode } from "react";

export interface PropPages extends HTMLAttributes<HTMLElement> {}

export interface FormEventSubmit extends FormEventHandler<HTMLFormElement> {}

export type Ctx = {
  SEBASTIAN: () => Promise<void>;
};

export type ContextProp = {
  children: ReactNode;
};

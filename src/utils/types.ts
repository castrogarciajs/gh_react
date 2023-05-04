import { HTMLAttributes, FormEventHandler, ReactNode } from "react";

export interface PropPages extends HTMLAttributes<HTMLElement> {}

export interface FormEventSubmit extends FormEventHandler<HTMLFormElement> {}

export interface Ctx {
  name: string;
}
export interface ContextProp {
  children: ReactNode;
}

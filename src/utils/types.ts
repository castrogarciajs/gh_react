import { HTMLAttributes, FormEventHandler } from "react";

export interface HeaderProp
  extends HTMLAttributes<HTMLElement | HTMLDivElement> {}

export interface FormEventSubmit extends FormEventHandler<HTMLFormElement> {}

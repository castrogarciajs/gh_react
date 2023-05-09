import { context } from "../context/Context";
import { useContext } from "react";

export function useProvider() {
  const ctx = useContext(context);
  if (!ctx) throw new Error("Debe existir un valor en el contexto");

  return ctx;
}

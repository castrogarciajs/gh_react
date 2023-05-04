import { HeaderProp } from "../utils/types";
import { headerCSS } from "../utils/styles";

export function Header(props: HeaderProp) {
  return <header {...props} style={headerCSS} />;
}

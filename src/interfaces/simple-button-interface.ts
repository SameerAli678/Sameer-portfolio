//  src/interfaces/button-interface.tsx

// interfaces Export
export interface SimpleButtonInterface {
  text: string;
  isWhite?: boolean;
  className?: string;
  icon?: string;
  onClick?: () => void | string | object;
  type?: "submit" | "button";
}

//  src/interfaces/button-interface.tsx

// interfaces Export
export interface ButtonInterface {
  text: string;
  isOutline?: boolean;
  className?: string;
  icon?: string;
  onClick?: () => void;
  type?: "submit" | "button";
  loading?: boolean;
}

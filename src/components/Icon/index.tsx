import { type ReactElement } from "react";
import NextImage from "next/image";

interface IconProps {
  icon?: string | null;
  text?: string | null;
}

export const Icon = ({ icon, text }: IconProps): ReactElement | null => {
  if (icon && text) {
    return (
      <NextImage
        src={`https://cs3.wettercomassets.com/wcomv5/images/icons/weather/${icon}`}
        alt={text}
        width={50}
        height={50}
        priority
      />
    );
  }
  return null;
};

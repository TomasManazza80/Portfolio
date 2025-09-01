import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 50, height = 50 }) => {
    return (
        <Image
            className={`w-50 h-50 `}
            src="/logoEmpty.png"
            alt="Logo"
            width={width}
            height={height}
        />
    );
};

export default Logo;

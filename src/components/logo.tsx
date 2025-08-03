"use client";

import { useTheme } from "@payloadcms/ui";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme == "light" ? (
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
      ) : (
        theme == "dark" && (
          <Image src="/logo_dark.svg" alt="logo" width={150} height={150} />
        )
      )}
    </>
  );
};

export default Logo;

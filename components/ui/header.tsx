import React, { useState } from "react";
import Image from "next/image";
import inco_logo from "../../public/images/inco_og_logo.png"

export default function Header() {
  return (
    <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between h-20">
        {/* Site branding */}
        <div className="shrink-0 mr-4">
          {/* Logo */}
          <Image
            src={inco_logo}
            alt="Inco Logo"
            width={32} // Set the appropriate width
            height={32} // Set the appropriate height
          >
          </Image>
        </div>
      </div>
      </div>
    </header>
  );
}

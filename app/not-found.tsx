"use client";

import React from "react";
import Lottie from "lottie-react";
import lottie_404_not_found from "./assets/lottie_404_not_found.json";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="w-full max-w-md">
        <Lottie
          animationData={lottie_404_not_found}
          loop={true}
          autoplay={true}
        />
      </div>
      <Link href="/">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export default function Analysis() {
  useEffect(() => {}, []);
  return (
    <iframe
      id="frame"
      className="w-full max-w-[1620px] min-h-[1000px] !bg-black pt-16"
      src="https://v2-embednotion.com/3324b4c6bea94d80a284104c560c94fd?v=be278133e5f247a89d9c4bd0196c4458&pvs=4"
    ></iframe>
  );
}

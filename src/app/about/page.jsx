"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h2>About Page</h2>
      <Link href={"/about/address"}>address Page</Link>
      <button type="button" onClick={handleNavigation}> Address navigate Page</button>
    </div>
  );
};

export default About;

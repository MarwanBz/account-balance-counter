"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { subtitle, title } from "@/components/primitives";

import { Code } from "@nextui-org/code";
import { Counter } from "@/components/counter";
import { GithubIcon } from "@/components/icons";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site";

const MAX_BANDWIDTH = 20000;
const DECREASE_RATE = 0.165;
export default function Home() {
  const [bandWidth, setBandWidth] = useState(MAX_BANDWIDTH);

  const [username, setUsername] = useState("");

  // Move username logic to a separate client-side function or hook
  const fetchUsername = () => {
    if (typeof window !== "undefined") {
      // Ensure browser environment
      try {
        const storedUsername = getCookie("username") || "";
        setUsername(storedUsername);
      } catch (error) {
        // Handle cookie access error (optional)
      }
    }
  };

  useEffect(() => {
    // Update bandwidth on mount (empty dependency array)
    setBandWidth((prevBandwidth) => {
      const updatedBandwidth = Math.max(
        prevBandwidth - Math.round(DECREASE_RATE * Math.random()),
        0
      );
      return Math.round(updatedBandwidth * 10) / 10; // Round to one decimal place
    });
    const updateBandwidth = setInterval(() => {
      setBandWidth(prevBandwidth => {
        const updatedBandwidth = Math.max(prevBandwidth - Math.round(DECREASE_RATE * Math.random()), 0);
        return Math.round(updatedBandwidth * 10) / 10; // Round to one decimal place
      });
    }, 1000);

    return () => clearInterval(updateBandwidth);
  }, []);

  useEffect(() => {
    // Fetch username on component mount (optional)
    fetchUsername();
  }, []); // Empty dependency array ensures it runs only once


  useEffect(() => {
    localStorage.setItem("LstBandWidth", JSON.stringify(bandWidth));
  }, [bandWidth]);

  const usedPercentage = Math.min(bandWidth / MAX_BANDWIDTH, 1) * 100;
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="max-w-lg text-center flex flex-col justify-center items-center">
        <h1 className={title()}> Dear Customer </h1>
        <div className="py-3">
          <h3 className={title({ color: "violet" })}>{username}&nbsp;</h3>
        </div>
        <br />
        <h3 className={title({ size: "sm" })}>your balance  &#8628; </h3>
        <br />
        <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <CardBody className="justify-center items-center pb-0">
            <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-3xl font-semibold text-white",
              }}
              value={usedPercentage}
              strokeWidth={4}
              showValueLabel={true}
            />
          </CardBody>
          <CardFooter className="justify-center items-center pt-0">
            <Chip
              classNames={{
                base: "border-1 border-white/30",
                content: "text-white/90 text-small font-semibold",
              }}
              variant="bordered"
            >
              {`${bandWidth} MB`}
            </Chip>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
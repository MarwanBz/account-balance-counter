"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Counter } from "@/components/counter";
import { redirect } from "next/navigation";
import { getCookie } from "cookies-next";
import React, { useEffect } from "react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

export default function Home() {
  const [bandWidth, setBandWidth] = React.useState(() => {
    const savedBandWidth = localStorage.getItem("LstBandWidth");
    return savedBandWidth ? parseInt(savedBandWidth, 10) : 10000;
  });
  const [decreaseRate, setDecreaseRate] = React.useState();
  const [username, setUsername] = React.useState("");
  const usedPercentage = Math.min(bandWidth / 10000, 1) * 100;
  const localStoredBandwidth = localStorage.setItem("LstBandWidth", bandWidth);

  useEffect(() => {
    let storedUsername = getCookie("username");
    let getlocalStoredBandwidth = localStorage.getItem("LstBandWidth");
    setUsername(storedUsername);
    const updateBandwidth = setInterval(() => {
      setBandWidth((prevBandwidth) => {
        const updatedBandwidth = Math.max(
          prevBandwidth - Math.round(500) * Math.random(),
          0
        );
        return Math.round(updatedBandwidth * 10) / 10; // Round to one decimal place
      });
    }, 12 * 60 * 60 * 1000);
    setBandWidth(getlocalStoredBandwidth);
    return () => clearInterval(updateBandwidth);
  }, []);
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="max-w-lg text-center flex flex-col justify-center items-center">
        <h1 className={title()}> Dear Customer </h1>
        <div className="py-3">
          <h3 className={title({ color: "violet" })}>{username}&nbsp;</h3>
        </div>
        <br />

        <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <h3>your balance </h3>
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

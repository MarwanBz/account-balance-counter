"use client";

import { Button, Divider, Input } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import React, { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { subtitle, title } from "@/components/primitives";

import { hasCookie } from "cookies-next";
import { setCookie } from "cookies-next";

function Page() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter()
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handelSubmit(event:any){
    event.preventDefault();
    const loggedIn = setCookie('username',username)
    const isLoggedIn = hasCookie('username')
    if (isLoggedIn) {
      // setCookie("username", username); // Store actual username
      router.push('/')
    } else {
      // Handle login failure (optional)
    }
  }
  

  return (
    <div className="flex items-center justify-center text-center">
      <div className="max-w-md">
        <div className="space-y-1">
          <h1 className={title()}>Welcome Dear Customers</h1>
          <br />
          <br />
          <h2 className="text-large font-medium text-center">
            Please Login{" "}
          </h2>
          <Divider />
          <p className="text-small text-default-400 text-center">
            ❗ Login know to get your account details
          </p>
        </div>

        <div className="p-10">
          <form onSubmit={handelSubmit} className="flex justify-center flex-col items-stretch">
            <Input
              isRequired={true}
              variant="bordered"
              type="email"
              labelPlacement="inside"
              label="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <div className="my-4 mx-auto" >
              <Input
                
                label="Password"
                variant="bordered"
                placeholder=""
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs"
              />
            </div>
            <Button type="submit" onClick={handelSubmit} color="primary">
              Login{" "}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;

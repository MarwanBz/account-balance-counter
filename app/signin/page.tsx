"use client";
import React from "react";
import { Divider, Input, Button } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
function Page() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter()
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handelSubmit(event:any){
    event.preventDefault();
    localStorage.setItem('username',username)
    console.log(username);
    router.push('/')
    
  }

  return (
    <div className="flex items-center justify-center text-center">
      <div className="max-w-md">
        <div className="space-y-1">
          <h1 className={title()}>أهلا بك عزيزي العميل </h1>
          <br />
          <br />
          <h2 className="text-large font-medium text-center">
            قم بتسجيل الدخول{" "}
          </h2>
          <Divider />
          <p className="text-small text-default-400 text-center">
            ❗ لمعرفة رصيدك المتبقي سجل دخولك الان
          </p>
        </div>

        <div className="p-10">
          <form onSubmit={handelSubmit}>
            <Input
              variant="bordered"
              type="email"
              labelPlacement="inside"
              label=" اسم المستخدم "
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <div className="my-4">
              <Input
                label="كلمة السر"
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
            <Button onClick={handelSubmit} color="primary">
              تسجيل الدخول{" "}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;

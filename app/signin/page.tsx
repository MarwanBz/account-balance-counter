'use client'
import React from "react";
import { Divider, Input, Button } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";

function Page() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

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
          <Input
            variant="bordered"
            type="email"
            labelPlacement="inside"
            label=" اسم المستخدم "
          />
          <div className="my-4">
            <Input
              label="كلمة السر"
              variant="bordered"
              placeholder=""
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
          <Button color="primary">تسجيل الدخول </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;

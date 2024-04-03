import React from "react";
import { Divider, Input,Button } from "@nextui-org/react";

function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md">
        <div className="space-y-1">
          <h2 className="text-large font-medium text-center">
            قم بتسجيل الدخول{" "}
          </h2>
          <Divider />
          <p className="text-small text-default-400">
            لمعرفة رصيدك المتبقي سجل دخولك ❗🔺
          </p>
        </div>

        <div className="p-10">
          <Input
            variant="bordered"
            type="email"
            labelPlacement="inside"
            label=" اسم المستخدم "

            // placeholder="أدخل اسم المستخدم هنا"
            // description={placement}
          />
          <div className="m-4">
            <Input
              label="كلمة السر"
              variant="bordered"
              placeholder=""
              endContent={
                <button className="focus:outline-none" type="button"></button>
              }
              // type={isVisible ? "text" : "password"}
              className="max-w-xs"
            />
          </div>
          <Button color="primary"  >تسجيل الدخول </Button >
        </div>
      </div>
    </div>
  );
}

export default Page;

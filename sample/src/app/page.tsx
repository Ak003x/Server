import Cards from "@/components/Cards";
import Pages from "@/components/Pages";
import Link from "next/link";
import React from "react";
import TestPage from "./test/page";
import EnhancedComponents from "@/components/HelloWorld";
import Button from "@/components/Button";
import WithClicktracking from "@/components/WithClicktracking";

const page = () => {
  const ButtonWithTracking = WithClicktracking(Button);

  return (
    <div>
      {/* <div className="flex gap-4 px-6 py-4 bg-gray-100 border-b border-gray-300">
        <Link
          href="/test"
          className="text-blue-600 hover:underline font-medium"
        >
          → Go to Test Route
        </Link>
      </div> */}
      {/* <Cards />
       <Pages />  */}
      {/* <EnhancedComponents name={"Ak"} /> */}
      <ButtonWithTracking
        label="paynow "
        trackingInfo={{ amount: "2000", user: "Akash" }}
      />
    </div>
  );
};

export default page;

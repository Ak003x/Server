import Pages from "@/components/Pages";
import Link from "next/link";
import React from "react";

const TestPage = () => {
  return (
    <div>
      <div className="flex gap-4 px-6 py-4 bg-gray-100 border-b border-gray-300">
        <Link href="/" className="text-blue-600 hover:underline font-medium">
          ← Go to Home
        </Link>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600 font-medium">Test Page (navigate away to see cleanup log)</span>
      </div>

    </div>
  );
};

export default TestPage;

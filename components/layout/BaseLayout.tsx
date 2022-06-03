import React, { ReactNode } from "react";

interface BaseLayoutProps {
  className?: string;
  children: ReactNode;
}

const BaseLayout = (props: BaseLayoutProps) => {
  return (
    <div
      className={`w-full min-h-screen bg-stone-100 text-stone-900 overflow-auto ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default BaseLayout;

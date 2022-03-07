import React, { ReactNode } from "react";

interface BaseLayoutProps {
  className?: string;
  children: ReactNode;
}

const BaseLayout = (props: BaseLayoutProps) => {
  return (
    <div
      className={`w-full min-h-screen bg-neutral-900 overflow-auto ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default BaseLayout;

import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsLight from "prism-react-renderer/themes/vsLight";

import { ReactNode } from "react";

export function H1(props: { [x: string]: any }) {
  return (
    <h1
      className={
        "text-neutral-200 text-center font-heading text-5xl font-semibold tracking-wide my-8"
      }
      {...props}
    />
  );
}

export function P(props: { [x: string]: any }) {
  return (
    <p
      className={"text-neutral-400 font-body font-semibold mb-4 text-lg"}
      {...props}
    />
  );
}

export function H2(props: { [x: string]: any }) {
  return (
    <h2
      className={"text-neutral-400 font-heading font-bold mb-4 text-3xl"}
      {...props}
    />
  );
}

export function Code({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  //style={{ ...style, padding: "20px" }}>
  const language = className.replace(/language-/, "") as Language;
  return (
    <Highlight
      {...defaultProps}
      theme={vsLight}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} bg-neutral-300`}
          style={{ padding: "20px" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export function Img(props: { [x: string]: any }) {
  return <div className={"w-full"} {...props} />;
}

export function Li(props: { [x: string]: any }) {
  return <li className={"text-neutral-400 font-body"} {...props} />;
}

export function Blockquote(props: { [x: string]: any }) {
  console.log("THOMAS THOMAS ", props.children);
  if (props?.children?.props?.parentName) {
    console.log("THOMAS SAYS WHAAAAT");
  }
  return (
    <blockquote
      className={"text-neutral-400 font-body bg-red-200"}
      {...props}
    />
  );
}

import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsLight from "prism-react-renderer/themes/vsLight";

import { ReactNode } from "react";

export function H1(props: { [x: string]: any }) {
  return (
    <h1
      className={" text-center font-heading text-5xl font-semibold  mt-8 mb-12"}
      {...props}
    />
  );
}

export function P(props: { [x: string]: any }) {
  console.log("THOMAS THOMAS 2", props);

  return (
    <p
      className={"text-stone-900  font-body font-semibold mb-4 text-lg"}
      {...props}
    />
  );
}

export function H2(props: { [x: string]: any }) {
  return (
    <h2
      className={" font-heading tracking-wide font-bold mb-6 text-3xl"}
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
  return <li className={" font-body"} {...props} />;
}

export function Blockquote(props: { [x: string]: any }) {
  if (props?.children?.props?.parentName) {
  }
  return (
    <blockquote
      className={
        "text-gray-600 font-body font-semibold mb-4 py-2 text-lg border-l-4 pl-2 border-black"
      }
    >
      {props.children.props.children}
    </blockquote>
  );
}

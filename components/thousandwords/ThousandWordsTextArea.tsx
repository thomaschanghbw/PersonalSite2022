import classNames from "classnames";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { BiLoaderAlt } from "react-icons/bi";

import commonWords from "components/thousandwords/words";
import words1K from "components/thousandwords/words1K";
const _ = require("lodash");

interface ThousandWordsTextAreaProps {
  className?: string;
}

export default function ThousandWordsTextArea(
  props: ThousandWordsTextAreaProps
) {
  const [showExpandedDic, setShowExpandedDic] = useState(false);
  const highlightingDivR = useRef<HTMLDivElement>(null);
  const editTextAreaR = useRef<HTMLTextAreaElement>(null);
  const applyHighlights = useCallback(
    (text: string) => {
      const wordsSet = showExpandedDic ? commonWords : words1K;
      if (highlightingDivR.current && editTextAreaR.current) {
        text = text
          .replace(/\n$/g, "\n\n")
          .replace(/\b(\w+'*\w*)+\b/g, (match, word) =>
            wordsSet.has(word.toLowerCase()) ? word : `<mark>${word}</mark>`
          );
        highlightingDivR.current.innerHTML = text;
      }
      syncScroll();
    },
    [showExpandedDic]
  );

  function syncScroll() {
    if (highlightingDivR.current && editTextAreaR.current) {
      highlightingDivR.current.scrollTop = editTextAreaR.current.scrollTop;
      highlightingDivR.current.scrollLeft = editTextAreaR.current.scrollLeft;
    }
  }

  useEffect(() => {
    editTextAreaR.current?.value &&
      applyHighlights(editTextAreaR.current.value);
  }, [applyHighlights, showExpandedDic]);

  return (
    <>
      <div
        className={`block relative w-full h-24 mx-auto ${
          props.className ? props.className : ""
        }`}
      >
        <div
          className={
            "w-full h-24 absolute left-0 top-0 z-10 bg-white overflow-auto whitespace-pre-wrap"
          }
        >
          <div
            className={"w-full h-24 overflow-auto whitespace-pre-wrap"}
            ref={highlightingDivR}
          ></div>
        </div>
        <textarea
          ref={editTextAreaR}
          spellCheck={false}
          onInput={(e) => applyHighlights(e.currentTarget.value)}
          onScroll={syncScroll}
          className={
            "w-full h-24 absolute left-0 top-0 z-20 bg-transparent text-transparent caret-amber-500 overflow-auto whitespace-pre-wrap resize-none"
          }
        />
      </div>
      <div className={"flex justify-center gap-3 text-neutral-400 mt-2"}>
        <div
          className={classNames({
            "cursor-pointer bg-neutral-200 p-2 leading-none": true,
            "border-2 border-fuchsia-500": !showExpandedDic,
            "border-2 border-neutral-200": showExpandedDic,
          })}
          onClick={() => setShowExpandedDic(false)}
        >
          Top 1000 words
        </div>
        <div
          className={classNames({
            "cursor-pointer bg-neutral-200 p-2 leading-none": true,
            "border-2 border-fuchsia-500": showExpandedDic,
            "border-2 border-neutral-200": !showExpandedDic,
          })}
          onClick={() => setShowExpandedDic(true)}
        >
          Top 3000 words
        </div>
      </div>
    </>
  );
}

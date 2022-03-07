import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import commonWords from "components/thousandwords/words";
const _ = require("lodash");

interface ThousandWordsTextAreaProps {}

export default function ThousandWordsTextArea(
  props: ThousandWordsTextAreaProps
) {
  //  position: absolute;
  //   z-index: 1;
  //   border: 2px solid #685972;
  //   background-color: #fff;
  //   overflow: auto;
  //   pointer-events: none;
  //   transition: transform 1s;

  //  white-space: pre-wrap;
  // 	word-wrap: break-word;
  // 	color: transparent;

  //  display: block;
  //   position: absolute;
  //   z-index: 2;
  //   margin: 0;
  //   border: 2px solid #74637f;
  //   border-radius: 0;
  //   color: #444;
  //   background-color: transparent;
  //   overflow: auto;
  //   resize: none;
  //   transition: transform 1s;
  // <div className="w-32 h-24 container block my-0 mx-auto">
  //   <div className="w-32 h-24 z-10 absolute border-2 border-black overflow-auto pointer-events-none backdrop bg-white">
  //     <div className="p-2 whitespace-pre-wrap break-words highlights"></div>
  //   </div>
  //   <textarea
  //     className={
  //       "p-2 w-32 h-24 block absolute z-20 m-0 border-2 border-black bg-transparent overflow-auto rounded-none resize-none"
  //     }
  //   >
  //     This demo shows how to highlight bits of text within a textarea.
  //     Alright, that's a lie. You can't actually render markup inside a
  //     textarea. However, you can fake it by carefully positioning a div behind
  //     the textarea and adding your highlight markup there. JavaScript takes
  //     care of syncing the content and scroll position from the textarea to the
  //     div, so everything lines up nicely. Hit the toggle button to peek behind
  //     the curtain. And feel free to edit this text. All capitalized words will
  //     be highlighted.
  //   </textarea>
  // </div>
  const [divContent, setDivContent] = useState<string>("");
  const highlightingDivR = useRef<HTMLDivElement>(null);
  const editTextAreaR = useRef<HTMLTextAreaElement>(null);

  const debouncedSave = useCallback(
    _.debounce((text: string) => {
      if (highlightingDivR.current && editTextAreaR.current) {
        text = text
          .replace(/\n$/g, "\n\n")
          .replace(/\b(\w+'*\w*)+\b/g, (match, word) =>
            commonWords.has(word.toLowerCase()) ? word : `<mark>${word}</mark>`
          );
        highlightingDivR.current.innerHTML = text;
      }
    }, 2000),
    []
  );

  function applyHighlights(text: string) {
    if (highlightingDivR.current && editTextAreaR.current) {
      text = text
        .replace(/\n$/g, "\n\n")
        .replace(/\b(\w+'*\w*)+\b/g, (match, word) =>
          commonWords.has(word.toLowerCase()) ? word : `<mark>${word}</mark>`
        );
      highlightingDivR.current.innerHTML = text;
    }
    syncScroll();
  }

  function syncScroll() {
    if (highlightingDivR.current && editTextAreaR.current) {
      highlightingDivR.current.scrollTop = editTextAreaR.current.scrollTop;
      highlightingDivR.current.scrollLeft = editTextAreaR.current.scrollLeft;
    }
  }

  return (
    <div className={"block relative w-full h-24 mx-auto"}>
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
  );
}

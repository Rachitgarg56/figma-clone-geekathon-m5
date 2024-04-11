import React, { useCallback, useEffect, useRef, useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import * as Portal from "@radix-ui/react-portal";
import { ComposerSubmitComment } from "@liveblocks/react-comments/primitives";

import { useCreateThread } from "@/liveblocks.config";
import { useMaxZIndex } from "@/lib/useMaxZIndex";

import PinnedComposer from "./PinnedComposer";
import NewThreadCursor from "./NewThreadCursor";

const NewThread = ({ children }) => {
  const [creatingCommentState, setCreatingCommentState] = useState("complete");
  const createThread = useCreateThread();
  const maxZIndex = useMaxZIndex();
  const [composerCoords, setComposerCoords] = useState(null);
  const lastPointerEvent = useRef();
  const [allowUseComposer, setAllowUseComposer] = useState(false);
  const allowComposerRef = useRef(allowUseComposer);
  allowComposerRef.current = allowUseComposer;

  useEffect(() => {
    if (creatingCommentState === "complete") {
      return;
    }

    const newComment = (e) => {
      e.preventDefault();

      if (creatingCommentState === "placed") {
        const isClickOnComposer = e.composedPath().some((el) => {
          return el.classList?.contains("lb-composer-editor-actions");
        });

        if (isClickOnComposer) {
          return;
        }

        if (!isClickOnComposer) {
          setCreatingCommentState("complete");
          return;
        }
      }

      setCreatingCommentState("placed");
      setComposerCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.documentElement.addEventListener("click", newComment);

    return () => {
      document.documentElement.removeEventListener("click", newComment);
    };
  }, [creatingCommentState]);

  useEffect(() => {
    const handlePointerMove = (e) => {
      e._savedComposedPath = e.composedPath();
      lastPointerEvent.current = e;
    };

    document.documentElement.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.documentElement.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, []);

  useEffect(() => {
    if (creatingCommentState !== "placing") {
      return;
    }

    const handlePointerDown = (e) => {
      if (allowComposerRef.current) {
        return;
      }

      e._savedComposedPath = e.composedPath();
      lastPointerEvent.current = e;
      setAllowUseComposer(true);
    };

    const handleContextMenu = (e) => {
      if (creatingCommentState === "placing") {
        e.preventDefault();
        setCreatingCommentState("complete");
      }
    };

    document.documentElement.addEventListener("pointerdown", handlePointerDown);
    document.documentElement.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.documentElement.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
      document.documentElement.removeEventListener(
        "contextmenu",
        handleContextMenu
      );
    };
  }, [creatingCommentState]);

  const handleComposerSubmit = useCallback(
    ({ body }, event) => {
      event.preventDefault();
      event.stopPropagation();

      const overlayPanel = document.querySelector("#canvas");

      if (!composerCoords || !lastPointerEvent.current || !overlayPanel) {
        return;
      }

      const { top, left } = overlayPanel.getBoundingClientRect();
      const x = composerCoords.x - left;
      const y = composerCoords.y - top;

      createThread({
        body,
        metadata: {
          x,
          y,
          resolved: false,
          zIndex: maxZIndex + 1,
        },
      });

      setComposerCoords(null);
      setCreatingCommentState("complete");
      setAllowUseComposer(false);
    },
    [createThread, composerCoords, maxZIndex]
  );

  return (
    <>
      <Slot
        onClick={() =>
          setCreatingCommentState(
            creatingCommentState !== "complete" ? "complete" : "placing"
          )
        }
        style={{ opacity: creatingCommentState !== "complete" ? 0.7 : 1 }}
      >
        {children}
      </Slot>
  
      {composerCoords && creatingCommentState === "placed" ? (
        <Portal.Root
          className="absolute left-0 top-0"
          style={{
            pointerEvents: allowUseComposer ? "initial" : "none",
            transform: `translate(${composerCoords.x}px, ${composerCoords.y}px)`,
          }}
          data-hide-cursors
        >
          <PinnedComposer onComposerSubmit={handleComposerSubmit} />
        </Portal.Root>
      ) : null}
  
      <NewThreadCursor display={creatingCommentState === "placing"} />
    </>
  );  

};

export default NewThread;

import React, { useCallback, useEffect, useState } from 'react'
import LiveCursors from './cursor/LiveCursors'
import { useBroadcastEvent, useEventListener, useMyPresence, useOthers } from '../liveblocks.config'
import CursorChat from './cursor/CursorChat'
import { CursorMode } from '../assets/types/type'
import ReactionSelector from './reaction/ReactionButton'
import FlyingReaction from './reaction/FlyingReaction'
import useInterval from '../assets/hooks/useInterval'

const Live = () => {

  const others = useOthers()
  const [ { cursor }, updateMyPresence] = useMyPresence()

  const [cursorState, setCursorState] = useState({
    mode: CursorMode.Hidden,
  })

  const [reaction, setReaction] = useState([])

  const broadcast = useBroadcastEvent()

  useInterval(() => {
    setReaction((reaction) => reaction.filter((r) => r.timestamp > Date.now() - 4000))
  },1000)

  useInterval(() => {
    if (cursorState.mode === CursorMode.Reaction &&
    cursorState.isPressed && cursor) {
      setReaction((reactions) => reactions.concat([
        {
          point: { x: cursor.x, y: cursor.y},
          value: cursorState.reaction,
          timestamp: Date.now(),
        }
      ]))

      broadcast({
        x: cursor.x,
        y: cursor.y,
        value: cursorState.reaction,
      })

    }
  }, 25);

  useEventListener((eventData) => {
    const event = eventData.event

    setReaction((reactions) => reactions.concat([
      {
        point: { x: event.x, y: event.y},
        value: event.value,
        timestamp: Date.now(),
      }
    ]))
    
  })

  const handlePointerMove = useCallback((event) => {
    event.preventDefault();

    if (cursor === null || cursorState.mode !== CursorMode.ReactionSelector) { 
      const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
      const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
      
      updateMyPresence({ cursor: { x,y } });
    }

  }, [])

  const handlePointerLeave = useCallback((event) => {
    // event.preventDefault();
    setCursorState({ mode: CursorMode.Hidden })
    
    // updateMyPresence({ cursor: null});
    updateMyPresence({ cursor: {x:0,y:0}, message: null });
  }, [])

  const handlePointerDown = useCallback((event) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x,y } });

    setCursorState((state) => 
    cursorState.mode === CursorMode.Reaction ? 
    {...StaticRange, isPressed: true} : state)

  }, [cursorState.mode, setCursorState])

  const handlePointerUp = useCallback((event) => {
    setCursorState((state) => 
    cursorState.mode === CursorMode.Reaction ? 
    {...StaticRange, isPressed: true} : state)
  }, [cursorState.mode, setCursorState])


  useEffect(() => {
    const onKeyUp = (e) => {
        if (e.key === '/') {
            setCursorState({
                mode: CursorMode.Chat,
                previousMessage: null,
                message: '',
            })
        } else if (e.key === 'Escape') {
            updateMyPresence( { message: '' })
            setCursorState({ mode: CursorMode.Hidden })
        } else if (e.key === 'e') {
          setCursorState({
            mode: CursorMode.ReactionSelector,
          })
        }
    }

    const onKeyDown = (e) => {
        if (e.key === '/') {
            e.preventDefault()
        }
    }

    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('keydown', onKeyDown)

    return () => {
        window.removeEventListener('keyup', onKeyUp)
        window.removeEventListener('keydown', onKeyDown)    
    }

  },[updateMyPresence])

  const setReactions = useCallback((reaction) => {
    setCursorState({ mode: CursorMode.Reaction, reaction, isPressed: true })
  }, [])

  return (
    <div 
        onPointerMove={handlePointerMove}   
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="h-[100vh] text-center w-full flex items-center justify-center"
    >
      <h1 className="text-white text-2xl">LiveBlocks Figma Clone</h1>

      {reaction.map((r) => (
        <FlyingReaction
          key={r.timestamp.toString()}
          x={r.point.x}
          y={r.point.y}
          timestamp={r.timestamp}
          value={r.value}
        />
      ))}

      {cursor && (
        <CursorChat
            cursor={cursor}
            cursorState={cursorState}
            setCursorState={setCursorState}
            updateMyPresence={updateMyPresence}
        />
      )}

      {cursorState.mode === CursorMode.ReactionSelector && (
        <ReactionSelector
          setReaction={setReactions}
        />
      )}

      <LiveCursors others={others} />
    </div>
  )
  
}

export default Live



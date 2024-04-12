
import {handleCanvasMouseDown, handleResize, initializeFabric} from './assets/lib/canvas'
import { fabric } from "fabric";
import { useEffect, useRef } from "react";
import Live from "./components/Live";
import LeftSidebar from "./components/users/LeftSidebar";
import RightSidebar from "./components/users/RightSidebar";
import Navbar from './components/Navbar';

export function Room() {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef(null);
  const selectedShapeRef = useRef('circle');

  useEffect(() => {
    const canvas = initializeFabric({canvasRef, fabricRef});

    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef
      })
    })

    window.addEventListener('resize', () => {
      handleResize({ fabricRef })
    })

  }, [])

  return (
    <main className="h-screen overflow-hidden">
      <Navbar/>
      <section className="flex h-full flex-row">
        <LeftSidebar/>
        <Live canvasRef={canvasRef} />
        <RightSidebar/>
      </section>
    </main>
  )
}


  // return <div className="text-3xl font-bold underline">There are {userCount} other user(s) online</div>;
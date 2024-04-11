// "use client";

import { RoomProvider } from "./liveblocks.config";
import { Room } from "./Room";
import { ClientSideSuspense } from "@liveblocks/react";

export default function App() {
  return (
    <RoomProvider id="my-room" initialPresence={{cursor:{x:0,y:0}}}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => <Room />}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

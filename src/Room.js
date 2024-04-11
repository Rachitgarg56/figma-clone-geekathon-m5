
import Live from "./components/Live";
// import Navbar from "./components/Navbar";
// import { useOthers } from "./liveblocks.config";

export function Room() {
  // const others = useOthers();
  // const userCount = others.length;
  
  return (
    <div>
      {/* <Navbar/> */}
      <Live/>
    </div>
  )
  }


  // return <div className="text-3xl font-bold underline">There are {userCount} other user(s) online</div>;
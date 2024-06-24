import { useState } from "react";
// import { useTunnelIO } from "./hooks/useTunnelIO";
import { useTunnelIO } from "@ayushbobale/tunnel-react";

function App() {
  const [isInitiator, setIsInitiator] = useState(false);
  // const [tunnel, setTunnel] = useState<TunnelIO | null>(null);
  const tunnelIO = useTunnelIO({
    tunnelArgs: { isInitiator },
  });

  // console.log(tunnel);
  const [peer, setPeer] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div className="p-4">
      <div className="flex flex-col gap-2 mb-2">
        <a href="https://github.com/AyushBobale/tunnel-tester" target="_blank">
          Visit Project
        </a>
        <a
          href="https://www.npmjs.com/package/@ayushbobale/tunnel-io"
          target="_blank"
        >
          @ayushbobale/tunnel-io
        </a>
        <a
          href="https://www.npmjs.com/package/@ayushbobale/tunnel-react"
          target="_blank"
        >
          @ayushbobale/tunnel-react
        </a>
      </div>

      <label htmlFor="isInitiator">Is Initiator</label>
      <input
        id="isInitiator"
        type="checkbox"
        checked={isInitiator}
        onChange={(e) => {
          setIsInitiator(e.target.checked);
          tunnelIO.reInitalize({ isInitiator: e.target.checked });
        }}
      />
      <br />
      <input
        type="text"
        value={peer}
        onChange={(e) => setPeer(e.target.value)}
        placeholder="peer"
      />
      <button
        onClick={() => {
          tunnelIO.setPeer(JSON.parse(peer));
        }}
      >
        Set Peer
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            JSON.stringify(tunnelIO.tunnelState.localDescription)
          );
        }}
      >
        Copy localDescription
      </button>
      <br />
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="msg"
      />
      <button
        onClick={() => {
          tunnelIO.sendMessage(msg);
        }}
      >
        Send Msg
      </button>
      <br />
      <pre>{JSON.stringify(tunnelIO.tunnelState, null, "\t")}</pre>
    </div>
  );
}

export default App;

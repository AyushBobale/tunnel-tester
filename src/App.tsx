import { useRef, useState } from "react";
// import { useTunnelIO } from "./hooks/useTunnelIO";
import { useTunnelIO } from "@ayushbobale/tunnel-react";

function App() {
  const [isInitiator, setIsInitiator] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  // const [tunnel, setTunnel] = useState<TunnelIO | null>(null);
  const tunnelIO = useTunnelIO({
    tunnelArgs: {
      isInitiator,
      videoRefs: { local: localVideoRef, remote: remoteVideoRef },
    },
  });

  // console.log(tunnel);
  const [peer, setPeer] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div className="p-4 text-sm">
      <div className="flex flex-col gap-2 mb-2">
        <a
          className="underline"
          href="https://github.com/AyushBobale/tunnel-tester"
          target="_blank"
        >
          Visit Project
        </a>
        <a
          className="underline"
          href="https://www.npmjs.com/package/@ayushbobale/tunnel-io"
          target="_blank"
        >
          @ayushbobale/tunnel-io
        </a>
        <a
          className="underline"
          href="https://www.npmjs.com/package/@ayushbobale/tunnel-react"
          target="_blank"
        >
          @ayushbobale/tunnel-react
        </a>
      </div>

      <label htmlFor="isInitiator" className="mr-2">
        Is Initiator
      </label>
      <input
        className="px-2 py-1 border"
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
        className="px-2 py-1 border"
        type="text"
        value={peer}
        onChange={(e) => setPeer(e.target.value)}
        placeholder="peer"
      />
      <button
        className="px-2 py-1 border"
        onClick={() => {
          tunnelIO.setPeer(JSON.parse(peer));
        }}
      >
        Set Peer
      </button>
      <button
        className="px-2 py-1 border"
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
        className="px-2 py-1 border"
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="msg"
      />
      <button
        className="px-2 py-1 border"
        onClick={() => {
          tunnelIO.sendMessage(msg);
        }}
      >
        Send Msg
      </button>
      <br />
      <label htmlFor="file-input">
        <p>Select File</p>
        <input
          id="file-input"
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
        />
      </label>
      <button
        className="px-2 py-1 border"
        onClick={() => {
          console.log({ files });
          if (files) {
            tunnelIO.sendFiles(files);
          }
        }}
      >
        Send File
      </button>
      <br />
      {/* <button
        className="px-2 py-1 border"
        onClick={() => {
          tunnelIO.setMediaDevicesVideo();
        }}
      >
        Set up video
      </button>
      <button
        className="px-2 py-1 border"
        onClick={() => {
          tunnelIO.setMediaDevicesVideo();
        }}
      >
        Stop video
      </button>
      <div className="flex gap-2">
        <video className="border" ref={localVideoRef} autoPlay muted />
        <video className="border" ref={remoteVideoRef} autoPlay />
      </div> */}
      <pre className="px-2 py-1 border">
        {JSON.stringify(tunnelIO.fileShareProgress, null, "\t")}
      </pre>
      <pre className="px-2 py-1 border">
        {JSON.stringify(tunnelIO.tunnelState, null, "\t")}
      </pre>
    </div>
  );
}

export default App;

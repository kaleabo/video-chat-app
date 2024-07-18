import { JaaSMeeting } from "@jitsi/react-sdk";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
interface JitsiMeetProps {
  roomName: string;
}

const JitsiMeet = ({ roomName }: JitsiMeetProps) => {
  const navigate = useNavigate();
  const YOUR_APP_ID = import.meta.env.VITE_JITSI_APP_ID || "";

  if (!YOUR_APP_ID) {
    console.error("Jitsi App ID is missing.");
    return (
      <div className="flex items-center justify-center h-screen">
        Error: Jitsi configuration is missing.
      </div>
    );
  }
  return (
    <div>
      <JaaSMeeting
        appId={YOUR_APP_ID}
        roomName={roomName}
        configOverwrite={{
          disableThirdPartyRequests: true,
          disableLocalVideoFlip: true,
          disableModeratorIndicator: true,
          backgroundAlpha: 0.5,
          startScreenSharing: true,
        }}
        interfaceConfigOverwrite={{
          VIDEO_LAYOUT_FIT: "nocrop",
          MOBILE_APP_PROMO: false,
          TILE_VIEW_MAX_COLUMNS: 4,
        }}
        spinner={Loading}
        onReadyToClose={() => navigate("/")}
        getIFrameRef={(iframeRef) => {
          // Set the height of the iframe to 100vh
          iframeRef.style.height = "100vh";
        }}
      />
    </div>
  );
};

// Export the JitsiMeet component
export default JitsiMeet;

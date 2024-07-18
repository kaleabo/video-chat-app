import JitsiMeet from "@/components/JitsiMeet";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";

// Define an interface for the VideoChat component props

const VideoChat = () => {
  const { roomName } = useParams<{ roomName: string | undefined }>();

  if (!roomName) return <Loading />;

  /* Render the JitsiMeet component with the specified RoomName */
  return <JitsiMeet roomName={roomName} />;
};

export default VideoChat;
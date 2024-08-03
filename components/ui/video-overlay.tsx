import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface VideoOverlayProps {
  isVisible: boolean;
  videoPath: string;
  redirectUrl: string;
  onClose: () => void;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({
  isVisible,
  videoPath,
  redirectUrl,
  onClose,
}) => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const handleVideoEnd = () => {
    onClose();
    router.push(redirectUrl);
  };

  return (
    <div className="fixed inset-0 bg-black z-50">
      <video
        ref={videoRef}
        src={videoPath}
        autoPlay
        playsInline
        muted // Add muted attribute to ensure autoplay works on all browsers
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoOverlay;
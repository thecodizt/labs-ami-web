"use client";
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

interface VideoOverlayProps {
  trigger: React.ReactNode;
  videoPath: string;
  url: string;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({ trigger, videoPath, url }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const router = useRouter();

  const handleVideoEnd = () => {
    setOverlayVisible(false);
    router.push(url);
  };

  const handleClick = () => {
    setOverlayVisible(true);
  };

  const overlayContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <video
        src={videoPath}
        className="w-full max-w-3xl"
        autoPlay
        onEnded={handleVideoEnd}
        playsInline
        style={{ outline: 'none' }}
      />
    </div>
  );

  return (
    <>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        {trigger}
      </div>
      {isOverlayVisible && createPortal(overlayContent, document.body)}
    </>
  );
};

export default VideoOverlay;

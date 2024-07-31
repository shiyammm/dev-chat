'use client';

import { useCall, VideoPreview } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react';

const RoomSetup = () => {
  const [isMicCallToggled, setIsMicCallToggled] = useState(false);
  const call = useCall();

  useEffect(() => {
    if (!call) throw new Error(`useCall must be used inside streamCall Component`);
    if (isMicCallToggled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [isMicCallToggled, call]);

  return (
    <main className="flex items-center h-screen justify-center">
      <div className="border-2 border-white">
        <h1>RoomSetup</h1>
        <VideoPreview />
        
      </div>
    </main>
  );
};

export default RoomSetup;

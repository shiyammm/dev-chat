'use client';
import Room from '@/components/Room';
import RoomSetup from '@/components/RoomSetup';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  return (
    <main>
      <StreamCall>
        <StreamTheme>{isSetupComplete ? <RoomSetup /> : <Room />}</StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Page;

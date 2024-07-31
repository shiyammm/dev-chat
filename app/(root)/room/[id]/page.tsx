'use client';
import Loading from '@/components/Loading';
import Room from '@/components/Room';
import RoomSetup from '@/components/RoomSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { isLoaded, user } = useUser();
  const { call, isCallLoading, error } = useGetCallById(id);

  // if (isLoading || isLoaded) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (!call) return <div>No call found</div>;

  return (
    <main>
      <StreamCall call={call}>
        <StreamTheme>{!isSetupComplete ? <RoomSetup /> : <Room />}</StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Page;

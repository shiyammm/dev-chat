'use client';

import RoomCards from '@/components/RoomCards';
import RoomModal from '@/components/RoomModal';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
  const [rooms, setRooms] = useState<
    'isJoiningRoom' | 'isSchedulingRoom' | 'isNewMeeting' | undefined
  >();

  const router = useRouter();

  return (
    <div className="w-full h-screen">
      Something bla bla bla bla bla bla bla bla bla
      <div className="grid grid-cols-4">
        <RoomCards
          handleClick={() => setRooms('isNewMeeting')}
          title="New Room"
          description="Start new Room"
        />
        <RoomCards
          handleClick={() => setRooms('isJoiningRoom')}
          title="Join Room"
          description="Via invite link"
        />
        <RoomCards
          handleClick={() => router.push('/recordings')}
          title="View Recordings"
          description="Check out your recordings"
        />
        <RoomCards
          handleClick={() => setRooms('isSchedulingRoom')}
          title="Schedule Room"
          description="Plan your Meeting"
        />

        <RoomModal />
      </div>
    </div>
  );
};

export default page;

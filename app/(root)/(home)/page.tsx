'use client';

import RoomCards from '@/components/RoomCards';
import RoomModal from '@/components/RoomModal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast, useToast } from '@/components/ui/use-toast';

const page = () => {
  const [rooms, setRooms] = useState<
    'isJoiningRoom' | 'isSchedulingRoom' | 'isNewMeeting' | undefined
  >();

  const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: '',
  });
  const router = useRouter();
  const { toast } = useToast();

  const { user } = useUser();
  const client = useStreamVideoClient();
  const [callDetails, setCallDetails] = useState<Call>();

  const createRoom = async () => {
    if (!user || !client) return;

    try {
      if (!values.dateTime) {
        toast({
          title: 'Please select date and time',
        });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);

      if (!call) throw new Error(`Could not create room`);

      const createdAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();

      const description = values.description || 'New Room';

      await call.getOrCreate({
        data: {
          starts_at: createdAt,
          custom: {
            description: description,
          },
        },
      });
      setCallDetails(call);

      if (!values.description) router.push(`/room/${call.id}`);
      toast({
        title: 'Room Created',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Failed to create room',
      });
    }
  };

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

        <RoomModal
          isOpen={rooms == 'isNewMeeting'}
          onClose={() => setRooms(undefined)}
          title="New Room"
          description="Start an Instant Room"
          buttonText="Start room"
          handleClick={createRoom}
        />
      </div>
    </div>
  );
};

export default page;

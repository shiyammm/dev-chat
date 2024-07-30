'use client';
import tokenProvider from '@/actions/stream.actions';
import Loading from '@/components/Loading';
import { useUser } from '@clerk/nextjs';
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!user || !isLoaded) return;

    if (!apiKey) throw new Error(`API key not provided`);

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        image: user?.imageUrl,
        name: user?.username || user?.id,
      },
      tokenProvider: tokenProvider,
    });
    setVideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) return <Loading />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;

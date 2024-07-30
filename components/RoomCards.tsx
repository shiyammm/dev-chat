import React from 'react';

interface RoomCardTypes {
  title: string;
  description: string;
  handleClick: () => void;
}

const RoomCards = ({ title, description, handleClick }: RoomCardTypes) => {
  return (
    <div
      className="w-56 h-56 mt-10 border-slate-100 border-[1px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col items-start justify-end w-full h-full p-5">
        <div className="text-md">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};

export default RoomCards;

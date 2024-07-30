import React, { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';

interface RoomModelPropsTypes {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  buttonText?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
}

const RoomModal = ({
  isOpen,
  onClose,
  title,
  description,
  buttonText,
  handleClick,
  children,
}: RoomModelPropsTypes) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <Button onClick={handleClick}>{buttonText || 'Start Room'}</Button>
      </DialogContent>
    </Dialog>
  );
};

export default RoomModal;

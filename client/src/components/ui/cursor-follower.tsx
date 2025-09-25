import { useCursorPosition } from '@/hooks/use-cursor-position';

export default function CursorFollower() {
  const { x, y } = useCursorPosition();

  return (
    <div
      className="cursor-follower"
      style={{
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
}

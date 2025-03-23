import { FC, useEffect, useRef } from 'react';

export type CoverProps = {
  backgroundColor: string;
  title: string;
  description: string;
  size?: number;
};

export const Canvas: FC<CoverProps> = ({
  size = 40,
  ...props
}): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  size = Math.max(0, Math.min(size, 120));

  useEffect(() => {
    if (canvasRef.current) {
      const { backgroundColor, title, description } = props;
      const canvas = canvasRef.current as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.font = '700 80px Kanit';
        ctx.fillText(title, canvas.width * 0.5, 280);

        ctx.font = `300 ${size}px Oswald Variable`;
        ctx.fillText(description, canvas.width * 0.5, 380);
      }
    }
  }, [props, canvasRef]);

  return <canvas ref={canvasRef} width={1280} height={640} />;
};

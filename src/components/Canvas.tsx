import { FC, use, useEffect, useRef, useState } from 'react';
import { Application, Graphics, Sprite, Text } from 'pixi.js';

const GAP = 16;

export type CoverProps = {
  backgroundColor: string;
  title: string;
  description: string;
  size?: number;
};

export const Canvas: FC<CoverProps> = (props): JSX.Element => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [bg, setBg] = useState<Graphics>();
  const [title, setTitle] = useState<Text>();
  const [description, setDescription] = useState<Text>();

  useEffect((): void => {
    if (ref.current) {
      const app = new Application({
        antialias: true,
        backgroundColor: props.backgroundColor,
        width: 1280,
        height: 640,
        view: ref.current
      });

      const bg = new Graphics();
      app.stage.addChild(bg);

      const titleText = new Text('Title', {
        align: 'center',
        fill: '#ffffff',
        fontFamily: 'Kanit',
        fontSize: 80,
        fontWeight: '700'
      });

      titleText.anchor.x = 0.5;

      const descriptionText = new Text('Description', {
        align: 'center',
        fill: '#ffffff',
        fontFamily: 'Oswald Variable',
        fontSize: 50, //Math.max(0, Math.min(size, 120)),
        fontWeight: '300'
      });

      descriptionText.anchor.x = 0.5;
      descriptionText.y = titleText.y + titleText.height + GAP;

      const textContainer = new Sprite();
      textContainer.anchor.x = textContainer.anchor.y = 0.5;
      textContainer.addChild(titleText);
      textContainer.addChild(descriptionText);

      const { height } = textContainer.getBounds();
      textContainer.x = app.view.width * 0.5;
      textContainer.y = (app.view.height - height) * 0.5;

      app.stage.addChild(textContainer);

      setBg(bg);
      setTitle(titleText);
      setDescription(descriptionText);
    }
  }, [ref]);

  useEffect((): void => {
    if (bg && title && description) {
      bg.beginFill(props.backgroundColor);
      bg.drawRect(-10, -10, 1300, 660);
      bg.endFill();

      title.text = props.title;
      description.text = props.description;
    }
  }, [bg, title, description, props]);

  return <canvas ref={ref} />;
};

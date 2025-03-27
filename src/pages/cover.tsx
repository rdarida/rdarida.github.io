import { NextPage } from 'next';
import { SyntheticEvent, useCallback, useState } from 'react';

import { Canvas } from '@/components';

const CoverPage: NextPage = (): JSX.Element => {
  const [backgroundColor, setBackgroundColor] = useState<string>('#001220');
  const [title, setTitle] = useState<string>('Title');
  const [description, setDescription] = useState<string>('Description');
  const [size, setSize] = useState(50);

  const onBackgroundColorChange = useCallback((e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setBackgroundColor(value);
  }, []);

  const onTitleChange = useCallback((e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setTitle(value);
  }, []);

  const onDescriptionChange = useCallback((e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setDescription(value);
  }, []);

  const onSizeChange = useCallback((e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setSize(parseInt(value));
  }, []);

  const coverProps = {
    backgroundColor,
    title,
    description,
    size
  };

  return (
    <>
      <h1 className="my-3">Cover Generator</h1>

      <div>
        <form className="row g-3">
          <div className="col-auto">
            <input
              type="text"
              value={backgroundColor}
              onBlur={onBackgroundColorChange}
              className="form-control"
            />
          </div>

          <div className="col-auto">
            <input
              type="text"
              value={title}
              onChange={onTitleChange}
              placeholder="Title"
              className="form-control"
            />
          </div>

          <div className="col-auto">
            <input
              type="text"
              value={description}
              onChange={onDescriptionChange}
              placeholder="Description"
              className="form-control"
            />
          </div>

          <div className="col-auto">
            <input
              type="number"
              value={size}
              onChange={onSizeChange}
              placeholder="Size"
              className="form-control"
            />
          </div>
        </form>
      </div>

      <div>
        <Canvas {...coverProps} />
      </div>
    </>
  );
};

export default CoverPage;

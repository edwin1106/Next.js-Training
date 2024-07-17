'use client';

import classes from './imagePicker.module.css';
import React from 'react';

interface ImagePickerProps {
  label?: string;
  name?: string;
}

const ImagePicker = ({ label, name }: ImagePickerProps) => {
  const imageInput = React.useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    if (imageInput.current) imageInput.current.click();
  };
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
          />
        </div>
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </>
  );
};
export default ImagePicker;

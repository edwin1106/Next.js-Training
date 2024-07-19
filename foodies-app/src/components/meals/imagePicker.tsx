'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import classes from './imagePicker.module.css';
import Image from 'next/image';

interface ImagePickerProps {
  label?: string;
  name?: string;
}

const ImagePicker = ({ label, name }: ImagePickerProps) => {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const imageInput = React.useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    if (imageInput.current) imageInput.current.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader?.readAsDataURL(file[0]);
  };
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!pickedImage ? (
              <p>No image picked yet.</p>
            ) : (
              <Image
                src={pickedImage as string}
                alt="The image select by the user."
                fill
              />
            )}
          </div>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
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

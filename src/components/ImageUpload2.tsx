'use client';

import React, { useState, ChangeEvent, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { removeBackground } from '../utils/backgroundRemoval';

const ImageUpload: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [bgRemovedSrc, setBgRemovedSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const objectURL = URL.createObjectURL(file);
    setImageSrc(objectURL);

    setLoading(true);
    removeBackground(file)
      .then((bgRemovedBlob) => {
        const bgRemovedURL = URL.createObjectURL(bgRemovedBlob);
        setBgRemovedSrc(bgRemovedURL);
      })
      .catch((error) => console.error("Error removing background:", error))
      .finally(() => setLoading(false));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Free Background Removal Tool</h1>
        <div {...getRootProps()} className="border-4 border-dashed border-gray-300 rounded-lg p-6 mb-6 cursor-pointer">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-center text-gray-500">Drop the files here...</p>
          ) : (
            <p className="text-center text-gray-500">Drag & drop an image here, or click to select a file</p>
          )}
        </div>
        {loading && <p className="text-center text-gray-500">Processing...</p>}
        {imageSrc && !loading && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">Original Image</h3>
            <img src={imageSrc} alt="Original" className="w-full rounded-lg shadow-md" />
          </div>
        )}
        {bgRemovedSrc && !loading && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">Background Removed Image</h3>
            <img src={bgRemovedSrc} alt="Background Removed" className="w-full rounded-lg shadow-md" />
            <a 
              href={bgRemovedSrc} 
              download="bg-removed.png" 
              className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;

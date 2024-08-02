'use client';

import React, { useState, ChangeEvent } from 'react';
import { removeBackground } from '../utils/backgroundRemoval';

const ImageUpload: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [bgRemovedSrc, setBgRemovedSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const objectURL = URL.createObjectURL(file);
    setImageSrc(objectURL);

    setLoading(true);
    try {
      const bgRemovedBlob = await removeBackground(file);
      const bgRemovedURL = URL.createObjectURL(bgRemovedBlob);
      setBgRemovedSrc(bgRemovedURL);
    } catch (error) {
      console.error("Error removing background:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Background Removal Tool</h1>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload} 
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none mb-6" 
        />
        {loading && <p className="text-center text-gray-500">Processing...</p>}
        {imageSrc && !loading && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Original Image</h3>
            <img src={imageSrc} alt="Original" className="w-full rounded-lg" />
          </div>
        )}
        {bgRemovedSrc && !loading && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Background Removed Image</h3>
            <img src={bgRemovedSrc} alt="Background Removed" className="w-full rounded-lg" />
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

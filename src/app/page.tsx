import React from 'react';
import Header from '../components/Header';
import ImageUpload from '../components/ImageUpload2';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center py-12">
        <ImageUpload />
      </div>
    </div>
  );
};

export default HomePage;

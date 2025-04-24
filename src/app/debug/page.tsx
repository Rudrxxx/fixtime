'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function DebugPage() {
  const [loadState, setLoadState] = useState<{[key: string]: boolean}>({});

  const slideImages = [
    '/queues/queue1.jpg',
    '/queues/queue2.jpg',
    '/queues/queue3.jpg', 
    '/queues/queue4.jpg',
    '/queues/queue5.jpg'
  ];

  const handleImageLoad = (src: string) => {
    setLoadState(prev => ({
      ...prev,
      [src]: true
    }));
  };

  const handleImageError = (src: string, error: Error | string) => {
    console.error(`Error loading image ${src}:`, error);
    setLoadState(prev => ({
      ...prev,
      [src]: false
    }));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Debug Page</h1>
      
      <div className="grid grid-cols-1 gap-8 mb-8">
        {slideImages.map((src, index) => (
          <div key={index} className="border p-4 rounded">
            <h2 className="text-xl mb-2">Image {index + 1}: {src}</h2>
            <p className="mb-2">
              Status: {loadState[src] === undefined 
                ? 'Loading...' 
                : loadState[src] 
                  ? '✅ Loaded' 
                  : '❌ Error'}
            </p>
            <div className="relative h-[300px] w-full">
              <Image
                src={src}
                alt={`Debug Image ${index + 1}`}
                fill
                style={{objectFit: 'contain'}}
                onLoad={() => handleImageLoad(src)}
                onError={(e) => handleImageError(src, e.toString())}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-bold mb-2">Checking Images Directly</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slideImages.map((src, index) => (
            <div key={index}>
              <p className="mb-1">Image {index + 1}:</p>
              <Image 
                src={src} 
                alt={`Direct Image ${index + 1}`} 
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
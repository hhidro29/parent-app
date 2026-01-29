'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const GALLERY_IMAGES = [
    '/assets/images/child-reading.png',
    '/assets/images/science-project.png',
    '/assets/images/child-writing.png',
    '/assets/images/group-learning.png',
];

export default function GalleryPage() {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="flex flex-col min-h-screen bg-[#F7F9FD] pb-[40px]">
            {/* Header */}
            <div className="bg-white px-[20px] py-[16px] flex items-center gap-[12px] sticky top-0 z-10 shadow-sm">
                <button onClick={() => router.back()} className="w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full shadow-[0px_0px_0px_1px_#cfd3db_inset] active:bg-gray-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="#2C313A" />
                    </svg>
                </button>
                <span className="font-['Inter'] font-bold text-[18px] text-[#2C313A] flex-1 text-center pr-[32px]">Gallery</span>
            </div>

            {/* Content */}
            <div className="p-[20px]">
                <div className="grid grid-cols-3 gap-[12px]">
                    {GALLERY_IMAGES.map((src, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(src)}
                            className="aspect-square relative rounded-[16px] overflow-hidden bg-gray-200 shadow-sm active:scale-95 transition-transform"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                    {/* Add more placeholders to fill grid */}
                    {[...Array(4)].map((_, i) => (
                        <div key={`placeholder-${i}`} className="aspect-square relative rounded-[16px] overflow-hidden bg-white shadow-sm flex items-center justify-center border border-dashed border-gray-300">
                            <span className="text-gray-300 text-[24px]">📷</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Preview Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area
                    >
                        <Image
                            src={selectedImage}
                            alt="Preview"
                            fill
                            className="object-contain"
                            priority
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

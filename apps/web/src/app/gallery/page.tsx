'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const GALLERY_IMAGES = [
    '/assets/images/child-reading.png',
    '/assets/images/science-project.png',
    '/assets/images/child-writing.png',
    '/assets/images/group-learning.png',
];

export default function GalleryPage() {
    const router = useRouter();

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
                        <div key={index} className="aspect-square relative rounded-[16px] overflow-hidden bg-gray-200 shadow-sm">
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                    {/* Add more placeholders to fill grid */}
                    {[...Array(4)].map((_, i) => (
                        <div key={`placeholder-${i}`} className="aspect-square relative rounded-[16px] overflow-hidden bg-white shadow-sm flex items-center justify-center border border-dashed border-gray-300">
                            <span className="text-gray-300 text-[24px]">📷</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

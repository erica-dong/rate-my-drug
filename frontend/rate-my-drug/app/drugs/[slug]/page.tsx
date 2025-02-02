"use client";

import HeaderLayout from '@/components/header-layout'
import axios from "axios";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

interface DrugInfo {
  name: string;
  description: string;
  reviews: Review[];
}
interface Review {
  rating: number;
  text: string;
}

export default function Page({
    params,
  }: {
    params: { slug: string }
  }) {
    const drug = params.slug

    const [drugInfo, setDrugInfo] = useState<DrugInfo | null>(null)
    
    useEffect(() => {
      if (!drugInfo) {
        axios.get('http://127.0.0.1:5000/api/drugs/info?drug=' + drug)
          .then(function (response) {
            // handle success
            console.log(response);
            setDrugInfo(response.data)
          })
          .catch(function (error) {
            // notFound();  
            console.log(error);
          });
      }
    });

    const [avgRating, setAvgRating] = useState<number>(0)

    useEffect(() => {
      if (drugInfo) {
        setAvgRating(Math.round(10 * drugInfo.reviews.reduce((acc, review) => acc + review.rating, 0) / drugInfo.reviews.length) / 10);
      }
    }, [drugInfo]);

    return (
    <HeaderLayout>
        <div className='flex flex-col items-center pt-6 pb-10'>
            <div className='flex justify-center gap-10'>
              <div className='flex flex-col border-solid border border-black rounded-xl p-6 pl-8 pr-8'>
                <div className="flex items-center space-x-1">
                  <span className="text-8xl font-extrabold text-black">{avgRating}{Math.round(avgRating) == avgRating ? ".0" : ''}</span>
                  <span className="text-xl text-gray-400 mb-auto mt-3">/5</span>
                </div>
                <div className="text-md mt-2 font-bold">
                  From {drugInfo ? drugInfo.reviews.length: "..."} rating{drugInfo ? (drugInfo.reviews.length > 1 ? 's' : '') : 's'}
                </div>
                <button className="bg-skyBlue hover:bg-midBlue text-white font-bold py-2 px-4 rounded mt-5">
                  Rate this drug
                </button>
              </div>
              
              <div className="flex flex-col ml-5 gap-5">
                <div className="text-8xl font-bold">{drug}</div>
                <div className="text-lg">
                  Used to treat:
                </div>
              </div>
            </div>

            <div className="mt-10 mb-10">
              <div className="text-2xl font-bold mb-5">Reviews</div>
              <div className="flex flex-col gap-10">
                { !drugInfo ? "" :
                drugInfo.reviews.map((review, index) => (
                  <div key={index} className="flex gap-10 border-solid border border-black rounded-xl p-6 pl-8 pr-8">
                    <span className="text-2xl font-extrabold text-black">{review.rating}{Math.round(review.rating) == review.rating ? ".0" : ''}</span>
                    <div className="text-md mt-2">
                      {review.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </HeaderLayout>
    );
}
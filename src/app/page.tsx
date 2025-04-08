"use client";
import React, { useState } from 'react';
import ShrekQuoteButton from '@/components/ShrekQuoteButton';
import ZoomImage from '@/components/ZoomImage';
import TurnImage from '@/components/TurnImage';
import LiveTyping from '@/components/LiveTyping';

const Counter = () => {
  return (
    <div className={'p-4 w-4xl justify-items-center bg-green-100'}>

      <div className="flex">
        {/* Shrek image */}
        <div>
          <ZoomImage
            src="/shrek.jpg"
            alt="zoom photo"
            className="rounded-full border-8 border-amber-400 w-50 m-2"
          />  {/* Zoomimage */}
        </div><div>

          <ZoomImage
            src="/fiona.jpg"
            alt="zoom photo"
            className="rounded-full w-50 border-8 border-amber-600 m-2"
          />  {/* Zoomimage */}
        </div>
      </div>
      <p className="m-8">Welcome to Shrek's Swamp</p>

      {/* input */}
      <input type="text" id="quote" placeholder="am I useless?"
        className="border-0 border-black bg-white w-full m-4"></input>

      {/* BUTTON */}
      <div>
        <ShrekQuoteButton />  {/* Use the ShrekQuoteButton component */}
      </div>

      {/* input 2 */}
      <div>
        <LiveTyping />
      </div>
      <TurnImage
        src="/donkey.png"
        alt="rotate photo"
        className="rounded-full w-50 border-8  m-2"
      />  {/* Zoomimage */}
    </div>
  );
};



export default Counter;
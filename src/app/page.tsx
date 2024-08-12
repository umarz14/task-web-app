"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HomePage from '../pages/HomePage';
import AddTaskPage from '../pages/AddTaskPage';
import { requestFormReset } from 'react-dom';

export default function App() {
  // return (
  //   <div className="container mx-auto p-4 bg-white min-h-screen text-black flex flex-col justify-center items-center">
  //     <h1 className="text-4xl font-bold mb-6 text-blue-500">Welcome To My Task Web App!!</h1>
  //     <div className="grid grid-cols-2 gap-4">
  //       <section className="w-1/2">
  //         <p>hello world</p>
  //       </section>
  //       <div>
  //         <HomePage />
  //       </div>
  //     </div>
  //   </div>
  // );
  return (<HomePage />);
};


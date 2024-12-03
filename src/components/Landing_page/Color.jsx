'use client'
import React from 'react'
// import { useEffect } from "react";

function Color() {
    const box = document.querySelectorAll('button');
    const body = document.getElementById('body');
    box.forEach(function(box){
        box.addEventListener('click',function(e){
            if(e.target.id == 'red'){
                body.style.backgroundColor='red';
            }
            if(e.target.id == 'green'){
                body.style.backgroundColor='green';
            }
            if(e.target.id == 'blue'){
                body.style.backgroundColor='blue';
            }
            if(e.target.id == 'white'){
                body.style.backgroundColor='white';
            }
            if(e.target.id == 'black'){
                body.style.backgroundColor='black';
            }
        })
    })
    return (
    <section>
        <div id='body' className='bg-slate-900 h-screen w-full flex  items-end'>
            <div id='box' className='bg-slate-300 shrink-(0,3) gap-4 w-full h-[60px] ml-[40px] mr-[40px]
             rounded-2xl flex  justify-evenly  items-center mb-[60px]'>
              <button id='red' className='h-[40px] w-[70px] rounded-2xl  '></button>
              <button id='green' className='h-[40px] w-[70px] rounded-2xl  '></button>
              <button id='blue' className='h-[40px] w-[70px] rounded-2xl  '></button>
              <button id='white' className='h-[40px] w-[70px] rounded-2xl  '></button>
              <button id='black' className='h-[40px] w-[70px] rounded-2xl '></button>
            </div>
        </div>
    </section>
  );
}

export default Color

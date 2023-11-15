import React from 'react'
import './Header.css'

const Education = () => {
   
    return(
        <>
        
        <div class="bg-white text-black font-sans">
        <div class="container mx-auto px-4 py-8">
        <div class="bg-coding-background bg-cover bg-center py-16 px-4 rounded-lg shadow-lg">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold">About Me</h1>
                <p class="text-lg">
                    Joined Fullstack Academy in November 2022, 6 month course. 
                    Graduated in May 2023 in Web Development.
                    The tech industry is dynamic and ever-evolving, 
                    and I am eager to continue my journey, 
                    sharpen my skills, and embrace new challenges. 
                    I believe that my year of coding has been just the beginning of a thrilling adventure,
                    and I can't wait to see where this path takes me next.                    
                </p>
                <a href="https://drive.google.com/file/d/1aPzMHwFEF7Lr9NH_f8adW0PjCR8ADZ8Y/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                    <button className='text-black font-bold hover:text-gray-400'>Certification</button>
                </a>
            </div>
        </div>
        </div>
        </div>
        </>
    );
    };

export default Education;
import React from "react";
import './App.css';
import Do from './assests/react.png';
import expr from './assests/express.png';
import js from './assests/js.png';
import mu from './assests/mui.png'
import node from './assests/node.png'
import postgre from './assests/postgre.png'
import tailwind from './assests/tailwind.png'
import tsx from './assests/typescript.png'



const Home = () => {

    

    // const logo = imageUrl.map((imageUrl, i) => {
    //     return <img key={i} src={imageUrl} alt='logos' />
    // })
    return(
        <>
        {/* <body class="bg-white text-black font-sans"> */}
        <body class="bg-white text-black font-sans">
        <div class="container mx-auto px-4 py-8">
        <div class="bg-cover bg-center py-16 px-4 rounded-lg shadow-lg">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold">Gitonga Nyaga</h1>
                <p class="text-lg">Frameworks</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 ">
                <div class="text-center w-20 h-20">
                    <img src={Do} alt="logo" class="mx-auto mb-4" />
                    <p>React</p>
                </div>

                <div class="text-center w-20 h-20">
                    <img src={expr} alt="logo" class="mx-auto mb-1" />
                    <p>Express.js</p>
                </div>

                <div class="text-center w-20 h-20">
                    <img src={js} alt="logo" class="mx-auto mb-4" />
                    <p>Javascript</p>
                </div>

                <div class="text-center w-20 h-20">
                    <img src={mu} alt="logo" class="mx-auto mb-4" />
                    <p>Matrial mui</p>
                </div>

                <div class="text-center w-20 h-20">
                    <img src={node} alt="logo" class="mx-auto mb-4" />
                    <p>Node.js</p>
                </div>

                <div class="text-center w-20 h-20">
                    <img src={postgre} alt="logo" class="mx-auto mb-4" />
                    <p>postgreSQL</p>
                </div>
        
                <div class="text-center w-20 h-20">
                    <img src={tailwind} alt="logo" class="mx-auto mb-4" />
                    <p>Tailwind</p>
                </div>

                <div class="text-center w-20 h-20">
                    <img src={tsx} alt="logo" class="mx-auto mb-4" />
                    <p>TypeScript</p>
                </div>

            </div>
        </div>
    </div>

</body>
        </>
    )
}


export default Home;


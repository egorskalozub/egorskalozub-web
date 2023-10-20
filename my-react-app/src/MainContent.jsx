import React from 'react';

const customCursorStyle = {
    cursor: `url('C:/Developer/egorskalozub-web/my-react-app/public/cur/minecraft_cur.cur') 0 0, pointer`
};

const lineBreaker = {
    width: '25%',  // Adjusted width to be shorter like in the image
    height: '2px',
    backgroundColor: '#4A5568',
    marginTop: '5px',
    marginBottom: '5px'
};

const MainContent = () => {
    return (
        <main>
            <div className='mx-auto max-w-screen-lg px-6 py-12 font-sans mt-6'>
                <div className=" relative">
                    <span className="font-bold text-teal-300 text-1xl mr-2">0.1</span>
                    <span className="font-bold text-white text-2xl">About me</span>
                    <div style={lineBreaker}></div>
                    
                </div> 
                {/* text for about me */}
                <div className="mt-5">
                    <div className="w-2/4 text-xl">
                        <p className='cursor-default'>I'm Egor, a passionate software developer and AI enthusiast. From an early age, I dived into creating <span className='text-teal-300 hover:cursor-pointer' style={customCursorStyle}>Minecraft</span> servers and programming robots. Now, I'm studying Artificial Intelligence at <span className='text-teal-300 hover:cursor-pointer'>Satakunta University</span>. In my free time, I enjoy soccer and gym workouts. Excited to contribute to the ever-evolving tech world with my skills and creativity!</p>
                    </div>
                </div>
                <div className='mt-24'>
                    <a href="#">View full resume -></a>
                </div>
            </div>
        </main>
    );
}

export default MainContent;

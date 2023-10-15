import React from 'react';
import './index.css'; // Include your CSS styles if you have any additional

const App = () => {

    const switchLanguage = () => {
        // Logic for switching languages
    };

    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 vsc-initialized">
            <section className="mx-auto max-w-screen-lg px-6 py-12 font-sans flex flex-col md:flex-row mt-6 md:relative">
                <div className="w-full md:w-1/2 h-980 md:inline-block">
                    
                    <div className="mb-10 md:absolute md:right-6">
                        <label htmlFor="language-switcher" className="text-teal-300">Select language:</label>
                        <select 
                            id="language-switcher" 
                            className="language-switcher ml-2 p-2 border rounded" 
                            onChange={switchLanguage}
                        >
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                        </select>
                    </div>
                    
                    <p className="text-teal-300">Hi there,</p>
                    
                    <h1 className="text-5xl font-semibold mt-2">
                        <a href="/" className="hover:text-teal-300">I'm Egor Skalozub.</a>
                    </h1>
                    <h2 className="text-2xl font-light mt-3">Software / ML Engineer</h2>
                    
                    <p className="mt-1 leading-normal">
                        Based in Finland, specializing in ML and Artificial Intelligence products. I create, code, and test. Goal-oriented and ambitious
                    </p>
                    
                    <nav>
                        <ul className="font-light flex flex-col mt-32 mb-28">
                            <li className="mb-3 text-xl"><a href="#" className="hover:text-teal-300">HOME</a></li>
                            <li className="mb-3 text-xl"><a href="#" className="hover:text-teal-300">ABOUT</a></li>
                            <li className="mb-3 text-xl"><a href="#" className="hover:text-teal-300">SKILLS</a></li>
                            <li className="mb-3 text-xl"><a href="#" className="hover:text-teal-300">EXPERIENCE</a></li>
                        </ul>
                    </nav>
                    
                    <div className="flex space-x-16 mt-9">
                        {/* SVG icon code would go here */}
                        
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                                <g transform="scale(5.12,5.12)">
                                    <path d="M25,2c-12.64545,0 -23,10.35455 -23,23c0,12.64545 10.35455,23 23,23c12.64545,0 23,-10.35455 23,-23c0,-12.64545 -10.35455,-23 -23,-23zM25,4c11.55454,0 21,9.44546 21,21c0,0.09372 -0.00657,0.18586 -0.00781,0.2793c-0.63654,-0.06572 -1.37274,-0.12735 -2.30859,-0.16602c-1.33433,-0.05513 -3.01571,-0.04281 -4.91602,0.05664c0.07474,-0.50462 0.12559,-1.01694 0.12695,-1.54297c0.09683,-1.87262 -0.53201,-3.62449 -1.55469,-5.17187c0.24707,-0.85373 0.5369,-1.93986 0.60938,-3.17187c0.0826,-1.40428 -0.03862,-2.96144 -1.16602,-4.01367l-0.28906,-0.26953h-0.39453c-2.68307,0 -4.51959,1.12321 -5.64258,2.01367c-1.6215,-0.62765 -3.44481,-1.01367 -5.45703,-1.01367c-2.02363,0 -3.86447,0.39142 -5.55273,1.01758c-1.12235,-0.89089 -2.96048,-2.01758 -5.64648,-2.01758h-0.39258l-0.28906,0.26758c-1.09819,1.01974 -1.19936,2.53418 -1.13086,3.93164c0.06041,1.23229 0.33345,2.35292 0.57617,3.24805c-1.03996,1.57759 -1.66406,3.37475 -1.66406,5.15234c0,0.50146 0.04641,0.99049 0.11328,1.47266c-3.12421,-0.10128 -5.49492,-0.01896 -7.00977,0.11914c-0.00058,-0.06408 -0.00391,-0.12719 -0.00391,-0.19141c0,-11.55454 9.44546,-21 21,-21zM14.39648,13.13086c2.01758,0.19118 3.53551,1.09211 4.23828,1.7168l0.46875,0.41406l0.57813,-0.23633c1.58145,-0.65119 3.34534,-1.02539 5.31836,-1.02539c1.97302,0 3.73739,0.37608 5.19922,1.01563l0.58594,0.25781l0.47852,-0.42578c0.70301,-0.6249 2.22351,-1.5261 4.24219,-1.7168c0.2684,0.44498 0.50163,1.07781 0.44531,2.03516c-0.0674,1.14572 -0.37387,2.39364 -0.60547,3.13477l-0.15039,0.48242l0.29883,0.4082c0.98947,1.34928 1.49398,2.80953 1.4082,4.35352l-0.00195,0.02734v0.02734c0,2.49545 -0.89861,4.49273 -2.8125,5.97266c-1.91384,1.47993 -4.93523,2.42773 -9.1875,2.42773c-4.25227,0 -7.27556,-0.94781 -9.18945,-2.42773c-1.91389,-1.47993 -2.81055,-3.4772 -2.81055,-5.97266c0,-1.46471 0.52892,-3.07601 1.50586,-4.4082l0.29297,-0.39844l-0.14062,-0.47461c-0.23173,-0.78787 -0.51577,-2.06426 -0.57227,-3.2168c-0.04699,-0.95862 0.17989,-1.56453 0.41016,-1.9707zM8.88672,26.01953c0.7042,0.0045 1.51102,0.03241 2.31641,0.06055c0.07838,0.31957 0.17145,0.63279 0.28125,0.93945c-3.31343,0.07201 -5.77998,0.41492 -7.30078,0.70898c-0.06645,-0.50662 -0.11716,-1.01813 -0.14648,-1.53516c1.11744,-0.10349 2.71311,-0.18749 4.84961,-0.17383zM41.11328,26.07617c2.12956,-0.02477 3.72152,0.08796 4.84375,0.20703c-0.02936,0.48114 -0.07711,0.95761 -0.13867,1.42969c-1.57279,-0.29937 -4.10115,-0.64156 -7.50391,-0.69727c0.0974,-0.27328 0.17748,-0.55432 0.25,-0.83789c0.89822,-0.0512 1.77391,-0.09255 2.54883,-0.10156zM37.89258,28.00781c3.57307,0.03197 6.19274,0.38911 7.77344,0.69141c-1.34068,7.46807 -6.65766,13.59353 -13.66602,16.08984v-5.18945c0,-1.58457 -0.52036,-3.3319 -1.42578,-4.78906c-0.2749,-0.44241 -0.59827,-0.86081 -0.95898,-1.23633c2.31522,-0.45738 4.21713,-1.2754 5.69727,-2.41992c1.13046,-0.87413 1.98451,-1.94544 2.58008,-3.14648zM11.9082,28.01367c0.59685,1.19835 1.45134,2.26782 2.58008,3.14063c1.54054,1.19123 3.54334,2.02354 5.98828,2.46875c-0.31986,0.32865 -0.61078,0.68955 -0.86914,1.07031l-0.06055,-0.05273c0.0055,-0.0063 -0.49713,0.24525 -1.24805,0.3125c-0.75092,0.06725 -1.67721,0.04688 -2.49805,0.04688c-1.225,0 -1.76457,-0.57879 -2.62695,-1.63281c-0.47755,-0.64363 -1.05973,-1.16486 -1.625,-1.56055c-0.57881,-0.40517 -1.07257,-0.69113 -1.68359,-0.79297l-0.08203,-0.01367h-0.08398c-0.46667,0 -0.91824,0.03379 -1.33984,0.51563c-0.2108,0.24092 -0.3561,0.68694 -0.26172,1.06445c0.09438,0.37752 0.3332,0.6095 0.54688,0.75195c1.36672,0.91115 1.60826,2.71448 2.46484,4.31836c0.79992,1.59392 2.52629,2.34961 4.29102,2.34961h2.59961v4.78906c-7.00283,-2.49435 -12.31621,-8.61221 -13.66211,-16.07227c1.52564,-0.29739 4.07694,-0.65295 7.57031,-0.70312zM23.69922,34.09961h2.80078c0.81282,0 1.68042,0.64779 2.375,1.76563c0.69458,1.11783 1.125,2.61894 1.125,3.73438v5.79102c-1.60395,0.39525 -3.27809,0.60938 -5,0.60938c-1.72191,0 -3.39605,-0.21412 -5,-0.60937v-5.79102c0,-1.09074 0.46783,-2.5883 1.20898,-3.71094c0.74116,-1.12264 1.67741,-1.78906 2.49023,-1.78906zM12.30859,35.28125c0.86577,0.89801 1.91393,1.71875 3.49219,1.71875c0.77917,0 1.7517,0.02807 2.67578,-0.05469c0.00329,-0.00029 0.00648,-0.00166 0.00977,-0.00195c-0.12175,0.35 -0.21258,0.70217 -0.28906,1.05664h-2.79687c-1.23333,0 -2.10462,-0.44557 -2.50586,-1.24805l-0.00781,-0.01367l-0.00586,-0.01172c-0.1644,-0.30537 -0.38021,-0.91597 -0.57226,-1.44531z"></path>
                                </g>
                            </g>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                                <g transform="scale(5.12,5.12)">
                                    <path d="M25,2c-12.69071,0 -23,10.3093 -23,23c0,12.6907 10.30929,23 23,23c12.69071,0 23,-10.3093 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60983,0 21,9.39017 21,21c0,11.60983 -9.39017,21 -21,21c-11.60983,0 -21,-9.39017 -21,-21c0,-11.60982 9.39017,-21 21,-21zM34.08789,14.03516c-0.684,0 -1.45256,0.15842 -2.35156,0.48242c-1.396,0.503 -17.81559,7.47458 -19.68359,8.26758c-1.068,0.454 -3.05664,1.2985 -3.05664,3.3125c0,1.335 0.78227,2.28984 2.32227,2.83984c0.828,0.295 2.79455,0.89108 3.93555,1.20508c0.484,0.133 0.99834,0.20117 1.52734,0.20117c1.035,0 2.07658,-0.25789 2.89258,-0.71289c-0.007,0.168 -0.00242,0.33781 0.01758,0.50781c0.123,1.05 0.77047,2.03758 1.73047,2.64258c0.628,0.396 5.75744,3.83291 6.52344,4.37891c1.076,0.769 2.2655,1.17578 3.4375,1.17578c2.24,0 2.99152,-2.31283 3.35352,-3.42383c0.525,-1.613 2.49089,-14.72997 2.71289,-17.04297c0.151,-1.585 -0.50958,-2.89019 -1.76758,-3.49219c-0.471,-0.227 -1.00875,-0.3418 -1.59375,-0.3418zM34.08789,16.03516c0.275,0 0.52052,0.04548 0.72852,0.14648c0.473,0.227 0.71363,0.73305 0.64063,1.49805c-0.242,2.523 -2.20309,15.32928 -2.62109,16.61328c-0.358,1.098 -0.73512,2.04297 -1.45313,2.04297c-0.718,0 -1.50239,-0.25169 -2.27539,-0.80469c-0.773,-0.552 -5.90614,-3.99436 -6.61914,-4.44336c-0.625,-0.394 -1.28647,-1.37617 -0.35547,-2.32617c0.767,-0.782 6.58503,-6.42878 7.08203,-6.92578c0.37,-0.371 0.19698,-0.81836 -0.16602,-0.81836c-0.125,0 -0.27469,0.05269 -0.42969,0.17969c-0.608,0.497 -9.08436,6.169 -9.81836,6.625c-0.486,0.302 -1.23853,0.51953 -2.01953,0.51953c-0.333,0 -0.67014,-0.03991 -0.99414,-0.12891c-1.128,-0.311 -3.03692,-0.89016 -3.79492,-1.16016c-0.729,-0.26 -0.99414,-0.50908 -0.99414,-0.95508c0,-0.634 0.89489,-1.07166 1.83789,-1.47266c0.996,-0.423 18.23012,-7.74156 19.57812,-8.22656c0.624,-0.226 1.19483,-0.36328 1.67383,-0.36328z"></path>
                                </g>
                            </g>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                                <g transform="scale(5.12,5.12)">
                                    <path d="M18.90625,7c0,0 -6.36719,0.4375 -10.53125,3.78125c-0.01953,0.00781 -0.04297,0.01953 -0.0625,0.03125c-0.72266,0.66797 -1.26562,1.70313 -1.9375,3.1875c-0.67187,1.48438 -1.38281,3.39453 -2.03125,5.53125c-1.29297,4.27734 -2.34375,9.52734 -2.34375,14.46875c-0.00391,0.17578 0.03906,0.34766 0.125,0.5c1.46094,2.56641 4.14844,4.11719 6.65625,5.09375c2.50781,0.97656 4.82422,1.36719 6,1.40625c0.33203,0.01172 0.64844,-0.14062 0.84375,-0.40625l2.4375,-3.375c1.96484,0.46484 4.26953,0.78125 6.9375,0.78125c2.66797,0 4.97266,-0.31641 6.9375,-0.78125l2.4375,3.375c0.19531,0.26563 0.51172,0.41797 0.84375,0.40625c1.17578,-0.03906 3.49219,-0.42969 6,-1.40625c2.50781,-0.97656 5.19531,-2.52734 6.65625,-5.09375c0.08594,-0.15234 0.12891,-0.32422 0.125,-0.5c0,-4.94141 -1.05078,-10.19141 -2.34375,-14.46875c-0.64844,-2.13672 -1.35937,-4.04687 -2.03125,-5.53125c-0.67187,-1.48437 -1.21484,-2.51953 -1.9375,-3.1875c-0.01953,-0.01172 -0.04297,-0.02344 -0.0625,-0.03125c-4.16406,-3.34375 -10.53125,-3.78125 -10.53125,-3.78125c-0.07422,-0.00781 -0.14453,-0.00781 -0.21875,0c-0.34766,0.04688 -0.64062,0.27344 -0.78125,0.59375c0,0 -0.33984,0.74609 -0.5625,1.8125c-1.94922,-0.3125 -3.58984,-0.40625 -4.53125,-0.40625c-0.94141,0 -2.58203,0.09375 -4.53125,0.40625c-0.22266,-1.06641 -0.5625,-1.8125 -0.5625,-1.8125c-0.17187,-0.39062 -0.57422,-0.62891 -1,-0.59375zM18.28125,9.15625c0.07422,0.20313 0.125,0.39453 0.1875,0.625c-2.25391,0.52344 -4.72266,1.37891 -7.03125,2.8125c-0.36328,0.15234 -0.60156,0.50391 -0.61328,0.89844c-0.00781,0.39063 0.21484,0.75391 0.56641,0.92578c0.35547,0.16797 0.77734,0.11719 1.07813,-0.13672c4.63281,-2.87109 10.52734,-3.28125 12.53125,-3.28125c2.00391,0 7.89844,0.41016 12.53125,3.28125c0.30078,0.25391 0.72266,0.30469 1.07813,0.13672c0.35156,-0.17187 0.57422,-0.53516 0.56641,-0.92578c-0.01172,-0.39453 -0.25,-0.74609 -0.61328,-0.89844c-2.30859,-1.43359 -4.77734,-2.28906 -7.03125,-2.8125c0.0625,-0.23047 0.11328,-0.42187 0.1875,-0.625c1.14063,0.14063 5.57422,0.73828 8.59375,3.125c0.19531,0.17969 0.875,1.17969 1.5,2.5625c0.625,1.38281 1.28125,3.18359 1.90625,5.25c1.21875,4.03125 2.20313,9.00391 2.25,13.5625c-1.13672,1.83984 -3.26953,3.20703 -5.46875,4.0625c-2,0.77734 -3.86719,1.125 -4.84375,1.21875l-1.6875,-2.28125c0.85938,-0.27734 1.63281,-0.57812 2.3125,-0.875c2.52344,-1.10937 3.875,-2.28125 3.875,-2.28125c0.41406,-0.37109 0.44922,-1.00781 0.07813,-1.42187c-0.37109,-0.41406 -1.00781,-0.44922 -1.42187,-0.07812c0,0 -1.04687,0.95703 -3.34375,1.96875c-0.84375,0.37109 -1.86719,0.73828 -3.03125,1.0625c-0.26953,-0.03125 -0.53906,0.04688 -0.75,0.21875c-1.86328,0.45313 -4.07812,0.75 -6.6875,0.75c-2.62891,0 -4.84766,-0.32422 -6.71875,-0.78125c-0.21094,-0.14062 -0.46875,-0.19922 -0.71875,-0.15625c-1.16797,-0.32422 -2.18359,-0.72266 -3.03125,-1.09375c-2.29687,-1.01172 -3.34375,-1.96875 -3.34375,-1.96875c-0.22656,-0.21094 -0.53906,-0.30078 -0.84375,-0.25c-0.38672,0.05859 -0.70703,0.33594 -0.8125,0.71484c-0.10937,0.375 0.01563,0.78125 0.3125,1.03516c0,0 1.35156,1.17188 3.875,2.28125c0.67969,0.29688 1.45313,0.59766 2.3125,0.875l-1.6875,2.28125c-0.97656,-0.09375 -2.84375,-0.44141 -4.84375,-1.21875c-2.19922,-0.85547 -4.33203,-2.22266 -5.46875,-4.0625c0.04688,-4.55859 1.03125,-9.53125 2.25,-13.5625c0.625,-2.06641 1.28125,-3.86719 1.90625,-5.25c0.625,-1.38281 1.30469,-2.38281 1.5,-2.5625c3.01953,-2.38672 7.45313,-2.98437 8.59375,-3.125zM18.5,21c-2.55078,0 -4.5,2.31641 -4.5,5c0,2.68359 1.94922,5 4.5,5c2.55078,0 4.5,-2.31641 4.5,-5c0,-2.68359 -1.94922,-5 -4.5,-5zM31.5,21c-2.55078,0 -4.5,2.31641 -4.5,5c0,2.68359 1.94922,5 4.5,5c2.55078,0 4.5,-2.31641 4.5,-5c0,-2.68359 -1.94922,-5 -4.5,-5zM18.5,23c1.31641,0 2.5,1.26563 2.5,3c0,1.73438 -1.18359,3 -2.5,3c-1.31641,0 -2.5,-1.26562 -2.5,-3c0,-1.73437 1.18359,-3 2.5,-3zM31.5,23c1.31641,0 2.5,1.26563 2.5,3c0,1.73438 -1.18359,3 -2.5,3c-1.31641,0 -2.5,-1.26562 -2.5,-3c0,-1.73437 1.18359,-3 2.5,-3z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                
                        
                <div class="w-full md:w-1/2 h-980 md:inline-block relative">
                    <button class="border-2 border-teal-300 hover:bg-teal-300 text-teal-300 hover:text-white font-normal py-2 px-4 rounded absolute bottom-0 right-0 mb-4 mr-4">
                        GET IN TOUCH
                    </button>
                </div>
            </section>
        </div>
    );
};

export default App;
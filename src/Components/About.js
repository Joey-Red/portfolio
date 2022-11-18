import React from "react";

function About() {
    return (
        <div
            id="about"
            className="order-first md:order-last p-8 md:w-[60%] flex flex-col w-full bg-neutral-900/90 text-white rounded-xl mt-2 sm:mt-4 text-lg p-2 flex justify-center"
        >
            {" "}
            <h1 className="text-xl text-center underline">About me</h1>
            <p className="max-w-[60ch] hidden lg:flex">
                My name is Joey Dalrymple and I am an aspiring web developer
                based in Derby, Kansas. I enjoy complex problem solving,
                constructing cool projects, staying physically fit, and spending
                time with my dogs. After working in retail for nearly 10 years,
                I decided to make a change. I wanted something better. I wanted
                to learn a marketable skill, and concluded that [programming]
                was what I wanted to do. I have some experience with Python,
                C++, and Java; but when I discovered Javascript, I knew that it
                was the right programming language for me. After a few months of
                building a good foundation for my skillset, I switched gears and
                focused all of my free time and effort on web development. I
                switched solely to a Linux boot, deleted my games, and cut out
                any unnecessary distractions from my life so I could work hard
                and develop my skills as a developer. Web development is
                something I am very passionate about, I can not wait to create
                more amazing projects.
            </p>
            <p className="max-w-[60ch] lg:hidden">
                My name is Joey Dalrymple and I am a web developer based in
                Derby, Kansas. I enjoy complex problem solving, creating cool
                projects, and staying physically fit. Programming is something I
                am very passionate about, and I have dedicated all of my free
                time to pursuing a more complete skillset that will benefit me
                in a career that involves programming and development.
            </p>
        </div>
    );
}

export default About;

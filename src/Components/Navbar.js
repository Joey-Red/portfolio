import React from "react";
import fish from "../resources/redFishNoBackground.png";
function Navbar() {
    document.addEventListener("mousemove", (e) => {
        const fishtank = document.getElementById("fishtank");
        const anchor = document.getElementById("anchor");
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const rectangle = anchor.getBoundingClientRect();
        const anchorX = rectangle.left + rectangle.width / 2;
        const anchorY = rectangle.top + rectangle.height / 2;
        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
        fishtank.style.transform = `rotate(${90 + angleDeg}deg)`;
    });
    let angle = (cx, cy, ex, ey) => {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = (rad * 180) / Math.PI;
        return deg;
    };
    return (
        <nav
            id="nav"
            className="flex w-full mx-auto sm:text-lg lg:text-xl mb-2 sm:mb-4 relative"
        >
            <div className="flex items-center justify-start">
                <img
                    src={fish}
                    alt="fish"
                    id="fishtank"
                    className="h-10 absolute hidden sm:flex"
                />
                <h1 className="sm:ml-12">Joey Dalrymple</h1>
            </div>
            <ul className="flex flex-grow justify-end items-center gap-2">
                <a href="#projects">
                    <li className="px-2 border border-[#2E2E2E] rounded-full hover:bg-[#2E2E2E] hover:text-white transition">
                        Projects
                    </li>
                </a>
                <a href="#about">
                    <li className="px-2 border border-[#2E2E2E] rounded-full hover:bg-[#2E2E2E] hover:text-white transition">
                        About
                    </li>
                </a>
                <a href="#contact">
                    <li className="px-2 border border-[#2E2E2E] rounded-full hover:bg-[#2E2E2E] hover:text-white transition">
                        Contact
                    </li>
                </a>
            </ul>
        </nav>
    );
}

export default Navbar;

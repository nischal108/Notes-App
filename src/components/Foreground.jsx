import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
    const ref = useRef(null);

    const data = [
        {
            desc: "Hello everyone !, I am the person you guys have been looking for.",
            filesize: "9Mb",
            close: true,
            tagdetails: {
                isOpen: false
            }
        },
        {
            desc: "Welcome to the new world of opportunities.",
            filesize: "15Mb",
            close: false,
            tagdetails: {
                isOpen: true,
                tagTitle: "Get Started",
                tagColor: "blue"
            }
        },
        {
            desc: "Discover the hidden gems of our service.",
            filesize: "7Mb",
            close: true,
            tagdetails: {
                isOpen: false
            }
        },
        {
            desc: "Join us and transform your career.",
            filesize: "12Mb",
            close: false,
            tagdetails: {
                isOpen: true,
                tagTitle: "Join Now",
                tagColor: "green"
            }
        },
        {
            desc: "Find your passion and make it happen.",
            filesize: "10Mb",
            close: true,
            tagdetails: {
                isOpen: false
            }
        },
        {
            desc: "Connect with professionals worldwide.",
            filesize: "8Mb",
            close: false,
            tagdetails: {
                isOpen: true,
                tagTitle: "Network Now",
                tagColor: "crimson"
            }
        },
        {
            desc: "Empower your skills with our tools.",
            filesize: "11Mb",
            close: true,
            tagdetails: {
                isOpen: false
            }
        }
    ];

    return (
        <div ref={ref} className='w-full h-screen absolute top-0 left-0 p-6 flex flex-wrap items-center justify-between gap-5 overflow-hidden'>
            {data.map((item, index) => (
                <Card key={index} data={item} reference={ref} />
            ))}
        </div>
    );
}

export default Foreground;

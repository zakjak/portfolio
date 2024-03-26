import { SiExpress, SiMongodb, SiRedux, SiSanity, SiTailwindcss, SiVite } from 'react-icons/si'
import { IoLogoFirebase } from "react-icons/io5"
import { FaNode, FaReact } from 'react-icons/fa'

export const projects = [
    {
        id: 1,
        title: 'Imagix',
        desc: 'A dynamic web application which creates beautiful moments in our lives. With options to follow and unfollow other users, this application allows users to seamlessly create contents and images in a virtual space that allows for countless and endless possibilities and interactions.',
        href: 'https://imagix996.netlify.app',
        pics: [
            '/assets/imagix/imagix-1.png',
            '/assets/imagix/imagix-2.png',
            '/assets/imagix/imagix-3.png',
            '/assets/imagix/imagix-4.png',
            '/assets/imagix/imagix-5.png',
            '/assets/imagix/imagix-6.png',
            '/assets/imagix/imagix-7.png',
            '/assets/imagix/imagix-8.png',
            '/assets/imagix/imagix-9.png',
        ],
        client: [
            <SiTailwindcss/>, <FaReact /> ,<SiVite/>, 
        <IoLogoFirebase />,  <SiRedux />
        ],
        api: [<SiMongodb />, 
        <FaNode />, <SiExpress />,]
    },
    {
        id: 2,
        title: 'Blog Website',
        desc: "News web application like never before. With the click of a button, read all your favourite Sports, Political, Entertainment, Business, Tech, and other news items, all, on a single platform.",
        href: 'https://blog96.netlify.app',
        pics: [
            '/assets/blog/blog-1.png',
            '/assets/blog/blog-2.png',
            '/assets/blog/blog-3.png',
            '/assets/blog/blog-4.png',
            '/assets/blog/blog-5.png',
            '/assets/blog/blog-6.png',
            '/assets/blog/blog-7.png',
            '/assets/blog/blog-8.png',
        ],
        client: [<SiTailwindcss/>, <FaReact /> ,<SiVite/>, 
        <IoLogoFirebase />, <SiRedux />],
        api: [<SiMongodb />, 
        <FaNode />, <SiExpress />],
    },
    {
        id: 3,
        title: 'Share me',
        desc: 'This well-tailored functionality allows for users to create, share, save and download all those memorable and remarkable moments they share with friends and family.',
        href:'https://shareme-zakjak.netlify.app',
        pics: [
            '/assets/shareme/shareme-1.png',
            '/assets/shareme/shareme-2.png',
            '/assets/shareme/shareme-3.png',
            '/assets/shareme/shareme-4.png',
            '/assets/shareme/shareme-5.png',
        ],
        client: [<SiTailwindcss/>, <FaReact />],
        api: [<SiSanity />]
    }
]
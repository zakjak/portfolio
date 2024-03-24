import { SiExpress, SiMongodb, SiRedux, SiSanity, SiTailwindcss, SiVite } from 'react-icons/si'
import { IoLogoFirebase } from "react-icons/io5"
import { FaNode, FaReact } from 'react-icons/fa'

export const projects = [
    {
        id: 1,
        title: 'Imagix',
        desc: 'A dynamic web application, to create beautiful moments in our lives. Users can Follow other users, post, like and comment on images they created or other people created.',
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
        desc: "News web application like never before. You can read your favourite news items such as Sports, Politics, Entertainment, Business or Tech news.",
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
        desc: 'A dynamic web application, to create beautiful moments and capture beautiful events and you can select from a variety of categories. Users can download, post, comment and save posts',
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
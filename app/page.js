'use client'

import Contact from "@/components/Contact";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import { useRef } from 'react'
import { animateScroll as scroll } from 'react-scroll'


export default function Home() {
  const currentRef = useRef(null)
  scroll.scrollTo(currentRef.current)
  return (
   <main>
      <Introduction ref={currentRef} />
      <Projects ref={currentRef} />
      <Contact ref={currentRef} />
   </main>
  );
}

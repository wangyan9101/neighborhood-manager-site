"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion(); const [showTop,setShowTop] = useState(false);
  useEffect(() => { const onScroll=()=>setShowTop(window.scrollY>650); onScroll(); addEventListener("scroll",onScroll,{passive:true}); return()=>removeEventListener("scroll",onScroll); },[]);
  return <><motion.main id="main-content" initial={reduce?false:{opacity:0}} animate={{opacity:1}} transition={{duration:.22}}>{children}</motion.main>{showTop&&<button className="back-to-top" onClick={()=>scrollTo({top:0,behavior:reduce?"auto":"smooth"})} aria-label="返回顶部"><ArrowUp size={19}/></button>}</>;
}

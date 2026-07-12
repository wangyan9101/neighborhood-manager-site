"use client";

import { useState } from "react";
import { Heart, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { publicConfig } from "@/lib/config";

export function SteamWishlistButton({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const [message, setMessage] = useState(false);
  const onClick = () => {
    if (publicConfig.steamUrl) window.open(publicConfig.steamUrl, "_blank", "noopener,noreferrer");
    else setMessage(true);
  };
  return <>
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: .98 }} className={`button button-primary ${className}`} type="button" onClick={onClick}>
      <Heart size={18} fill="currentColor" />{compact ? "愿望单" : "加入 Steam 愿望单"}
    </motion.button>
    <AnimatePresence>{message && <motion.div className="toast" role="status" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
      <span>Steam 商店页面正在准备中，敬请关注开发日志。</span><button onClick={() => setMessage(false)} aria-label="关闭提示"><X size={18} /></button>
    </motion.div>}</AnimatePresence>
  </>;
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion, useAnimationFrame } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "Mastering JavaScript ES6 Features",
    summary: "Explore the modern JavaScript features that boost your productivity.",
    image: "/ji.png",
    link: "/articles/javascript-es6",
    author: "Tauheed",
  },
  {
    id: 2,
    title: "Python for Data Science",
    summary: "An introduction to Python’s power in data analysis and visualization.",
    image: "/python.png",
    link: "/articles/python-data-science",
    author: "Tauheed",
  },
  {
    id: 3,
    title: "React Performance Optimization Tips",
    summary: "Improve your React apps with smart performance strategies.",
    image: "/next.svg",
    link: "/articles/react-performance",
    author: "Tauheed",
  },
  {
    id: 4,
    title: "Tailwind CSS Tips & Tricks",
    summary: "Level up your UI game with Tailwind's utility-first approach.",
    image: "/window.svg",
    link: "window.svg",
    author: "Tauheed",
  },
];

const InfiniteScroll = ({ children }: { children: React.ReactNode }) => {
  const baseX = React.useRef(0);
  const ref = React.useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (!ref.current) return;
    baseX.current -= 0.05 * delta; // speed control
    if (baseX.current <= -ref.current.scrollWidth / 2) {
      baseX.current = 0;
    }
    ref.current.style.transform = `translateX(${baseX.current}px)`;
  });

  return (
    <div className="overflow-hidden w-full">
      <div ref={ref} className="flex w-max gap-6">
        {children}
        {children} {/* Repeat for seamless loop */}
      </div>
    </div>
  );
};

const TopArticles = () => {
  return (
    <section className="py-20 px-4 md:px-8 w-full bg-background">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-foreground">
        🌀 Trending Articles – Auto Slide
      </h2>

      <InfiniteScroll>
        {articles.map((article, i) => (
          <motion.div
            key={i}
            className="min-w-[300px] sm:min-w-[360px] md:min-w-[420px] bg-muted border border-border rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all group"
          >
            <Link href={article.link} className="block h-full">
              <div className="relative h-52 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{article.summary}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Author: {article.author}</Badge>
                  <span className="text-xs text-muted-foreground italic">Read more →</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default TopArticles;

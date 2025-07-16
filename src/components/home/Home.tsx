"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Lenis from "@studio-freight/lenis";

const Hero = () => {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="w-full bg-background py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-14">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight h-[110px]">
            <Typewriter
              options={{
                strings: [
                  "Manage Sales Effortlessly with POS",
                  "Track Products, Billing & Reports",
                  "Your Business, Streamlined.",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
              }}
            />
          </h1>

          <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto md:mx-0">
            A powerful Point of Sale system designed for small to large businesses.
            Track inventory, process transactions, and monitor insights in real-time.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-10 flex-wrap">
            <Link href="/dashboard">
              <Button size="lg">Launch Dashboard</Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline">
                View Products
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto md:mx-0"
          >
            <div className="bg-muted p-5 rounded-2xl shadow-md text-center">
              <p className="text-3xl font-bold text-foreground">12K+</p>
              <p className="text-sm text-muted-foreground mt-1">Transactions Daily</p>
            </div>
            <div className="bg-muted p-5 rounded-2xl shadow-md text-center">
              <p className="text-3xl font-bold text-foreground">1.5K</p>
              <p className="text-sm text-muted-foreground mt-1">Active Products</p>
            </div>
            <div className="bg-muted p-5 rounded-2xl shadow-md text-center">
              <p className="text-3xl font-bold text-foreground">200+</p>
              <p className="text-sm text-muted-foreground mt-1">Business Partners</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: POS Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/Pos1.png" // update with your image
            alt="POS System"
            width={450}
            height={350}
            className="rounded-xl shadow-xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

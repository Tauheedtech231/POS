"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full bg-background py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            Discover Stories, <br className="hidden sm:block" />
            Share Your Voice
          </h1>
          <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto md:mx-0">
            Welcome to ByteCode Blog — your space to read, write, and connect with developers and creators.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-10">
            <Link href="/articles">
              <Button size="lg">Explore Articles</Button>
            </Link>
            <Link href="/create">
              <Button size="lg" variant="outline">
                Write a Post
              </Button>
            </Link>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto md:mx-0"
          >
            <div className="bg-muted p-4 rounded-xl shadow-sm text-center">
              <p className="text-3xl font-bold text-foreground">1.2K+</p>
              <p className="text-sm text-muted-foreground mt-1">Articles Published</p>
            </div>
            <div className="bg-muted p-4 rounded-xl shadow-sm text-center">
              <p className="text-3xl font-bold text-foreground">300+</p>
              <p className="text-sm text-muted-foreground mt-1">Expert Writers</p>
            </div>
            <div className="bg-muted p-4 rounded-xl shadow-sm text-center">
              <p className="text-3xl font-bold text-foreground">45K+</p>
              <p className="text-sm text-muted-foreground mt-1">Monthly Readers</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/python.png"
            alt="Blog illustration"
            width={450}
            height={350}
            className="rounded-xl shadow-lg object-contain shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

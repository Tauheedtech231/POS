"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-tr from-background via-muted to-background border-t border-border mt-20 text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-primary">ByteCode Blog</h2>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Where developers and creators share knowledge, explore ideas, and inspire the tech community.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-primary transition-colors">Articles</Link>
            </li>
            <li>
              <Link href="/create" className="hover:text-primary transition-colors">Write</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Categories (Optional) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Web Development</li>
            <li>Machine Learning</li>
            <li>UI/UX Design</li>
            <li>Career Tips</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-primary transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-primary transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border text-center text-sm text-muted-foreground py-6">
        © {new Date().getFullYear()} ByteCode Blog. Built with ❤️ by Tauheed.
      </div>
    </footer>
  );
};

export default Footer;

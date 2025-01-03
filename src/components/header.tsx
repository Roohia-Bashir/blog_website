"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#252427] border-b border-[#777376]">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo.png" // Update this path to the actual path of your logo image
              alt="Logo"
              className="h-20 w-20 ml-4 object-contain" // Larger logo
            />
          </div>

          {/* Search Input */}
          <div className="hidden md:flex flex-grow justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-md px-4 py-2 text-sm text-[#777775] bg-[#1E1E1E] border border-[#646263] rounded-lg focus:outline-none focus:ring focus:ring-[#9d9da3]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#777775] hover:text-[#EEEEEE] px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-[#777775] hover:text-[#EEEEEE] hover:bg-[#646263]"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-[#252427] border-l border-[#777376] p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-[#777376]">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#EEEEEE] to-[#777775] text-transparent bg-clip-text">
                      <div className="flex-shrink-0 flex items-center">
                        <img
                          src="/logo.png" 
                          alt="Logo"
                          className="h-20 w-20 ml-4 object-contain" 
                        />
                      </div>
                    </span>
                    <Button
                      variant="ghost"
                      className="text-[#777775] hover:text-[#EEEEEE] hover:bg-[#646263]"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <div className="flex-1 overflow-y-auto py-4">
                    <div className="flex flex-col space-y-2 px-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-[#777775] hover:text-[#EEEEEE] px-3 py-2 text-sm font-medium rounded-md transition-colors",
                            "hover:bg-[rgba(114,112,114,0.5)]"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

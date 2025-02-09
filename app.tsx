import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Calendar } from "lucide-react";

export default function LandingPage() {
  const bookingLink = "https://calendly.com/yourname"; // Replace with your actual Calendly/TidyCal link

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-900 shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-yellow-400">The Brand Atelier</h1>
        <nav className="space-x-6 text-gray-300">
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#testimonials" className="hover:text-yellow-400">Testimonials</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
        <Button
          className="bg-yellow-400 text-black px-4 py-2 rounded-full"
          onClick={() => window.open(bookingLink, "_blank")}
        >
          <Calendar className="mr-2" /> Book a Consultation
        </Button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-800">
        <h2 className="text-5xl font-bold text-white">Crafting Strategies, Elevating Brands.</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
          Expert-led marketing strategies to help your business scale and thrive.
        </p>
        <Button
          className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full"
          onClick={() => window.open(bookingLink, "_blank")}
        >
          Get a Free Consultation
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 text-center bg-black">
        <h3 className="text-3xl font-bold text-white">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <Card className="bg-gray-900 border border-gray-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-yellow-400">Content Strategy & Marketing</h4>
              <p className="mt-2 text-gray-400">Develop compelling content that builds trust and drives engagement.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border border-gray-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-yellow-400">Fractional CMO Services</h4>
              <p className="mt-2 text-gray-400">Strategic leadership for brands needing C-level marketing expertise.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border border-gray-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-yellow-400">Product Marketing</h4>
              <p className="mt-2 text-gray-400">Position your product, craft compelling messaging, and build go-to-market strategies.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold text-white">What Clients Say</h3>
        <div className="mt-6 text-gray-400 max-w-2xl mx-auto">
          <p className="italic">“Working with The Brand Atelier was a game-changer for our content strategy!”</p>
          <p className="mt-2 font-semibold text-yellow-400">— Client Name</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 text-center bg-black">
        <h3 className="text-3xl font-bold text-white">Let's Work Together</h3>
        <p className="mt-4 text-gray-400">Book a free consultation and take your brand to the next level.</p>
        <div className="mt-6 max-w-md mx-auto">
          <Input placeholder="Enter your email" className="px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white" />
          <Button
            className="mt-4 bg-yellow-400 text-black px-6 py-3 flex items-center justify-center rounded-full"
            onClick={() => window.open(bookingLink, "_blank")}
          >
            <Mail className="mr-2" /> Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 text-gray-400">
        <p>© {new Date().getFullYear()} The Brand Atelier. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

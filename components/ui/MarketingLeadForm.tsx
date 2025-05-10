"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Rocket, Send, Mail } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa6";
// EmailJS will be dynamically imported

import { socialMedia } from "@/data";
import MagicButton from "../MagicButton";
import Image from "next/image";

export default function MarketingLeadForm() {
  // Add heading similar to Footer component
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  // Removed duplicate state declarations

  useEffect(() => {
    // Dynamically import EmailJS
    const initEmailJS = async () => {
      try {
        const emailjsModule = await import('@emailjs/browser');
        const emailjs = emailjsModule.default;
        
        // Initialize with Public Key and additional configuration
        emailjs.init({
          publicKey: '4Eqd5BtKyi8YDhesq',
          blockHeadless: true,
          limitRate: {
            id: 'warning',
            throttle: 10000 // 10 seconds
          }
        });

        console.log('EmailJS initialized successfully');
      } catch (error) {
        console.error('Failed to initialize EmailJS:', error);
        alert('Email service configuration error. Please contact support.');
      }
    };

    initEmailJS();
  }, []);

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    
    // Validate form data
    if (!formData.firstName.trim()) {
      alert('Please enter your first name');
      return;
    }

    if (!formData.lastName.trim()) {
      alert('Please enter your last name');
      return;
    }

    if (!formData.email.trim()) {
      alert('Please enter an email address');
      return;
    }

    // More robust email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!formData.comments.trim()) {
      alert('Please enter your message');
      return;
    }
    
    try {
      // Dynamically import EmailJS
      const emailjsModule = await import('@emailjs/browser');
      const emailjs = emailjsModule.default;

      // Prepare the email template parameters
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        user_email: formData.email,
        phone_number: formData.phone || 'Not provided',
        message: formData.comments,
        reply_to: formData.email
      };

      // Send email using EmailJS with promise-based approach
      emailjs.send('service_jn4du8e', 'template_8dcsmj9', templateParams)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitted(true);
        }, (error) => {
          console.error('FAILED...', error);
          alert(`Failed to send message. Error: ${error.text || 'Unknown error'}`);
        });
    } catch (error) {
      console.error('Unexpected error in form submission:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
    
      <footer className="w-full pt-20 pb-10 bg-gradient-to-r from-purple-500 to-indigo-500" id="contact">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center text-white">
              <Rocket className="mx-auto border-purple mb-6 w-16 h-16" />
              <h2 className="text-3xl font-heading font-bold mb-4">Message Sent Successfully!</h2>
              <p className="text-lg  font-body mb-8">Thank you for reaching out. I&apos;ll get back to you soon.</p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all font-accent"
              >
                Send Another Message
              </button>
            </div>

            <div>
              <h2 className=" font-heading items-center text-3xl font-bold text-white mb-6">Contact Details</h2>
              <div className="space-y-6 text-white">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="font-heading ">Email</h3>
                    <a 
                      href="mailto:oyekolaobajuwon@gmail.com" 
                      className="hover:underline"
                    >
                      oyekolaobajuwon@gmail.com
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/20 my-6"></div>

                <h3 className="font-heading text-2xl font-bold mb-4">Social Media</h3>
                <div className="flex items-center md:gap-3 gap-6">
                  {socialMedia.map((info) => (
                    <a key={info.id} href={info.link} target="_blank" rel="noopener noreferrer">
                      <div
                        className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                      >
                        <Image src={info.img} alt="icons" width={24} height={24} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full pt-20 pb-10 bg-gradient-to-r from-indigo-500 to-purple" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-0">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          className="w-full h-full opacity-30"
        />
      </div>
      
      <div className="flex flex-col items-center text-center relative z-10">
        <h1 className="font-heading  heading  lg:max-w-[45vw] py-6">
          Your <span className="text-purple">Vision</span>
          <br />My <span className="text-purple">Expertise </span>
          <br />
           Let&apos;s <span className="text-purple">connect</span>
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10 ">
        <div className=" md:grid-cols-2 gap-12 flex flex-col">
          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-6">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="font-body text-white mb-2 block">First Name *</Label>
                  <Input 
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Your first name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="font-body text-white mb-2 block">Last Name *</Label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="font-body text-white mb-2 block">Email Address *</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="font-body text-white mb-2 block">Phone Number</Label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="comments" className="font-body text-white mb-2 block">Comments / Questions *</Label>
                <textarea 
                  id="comments"
                  name="comments"
                  className="w-full rounded-lg p-3 border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  rows={4}
                  placeholder="Write your message here"
                  required
                  value={formData.comments}
                  onChange={handleChange}
                />
              </div>

              <MagicButton
                title="Send Message"
                icon={<Send className="w-5 h-5" />}
                handleClick={() => handleSubmit()}
                position="right"
                otherClasses="w-full"
              />
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-6">Contact Details</h2>
            <div className="space-y-6 text-white">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-white" />
                <div>
                  <h3 className="font-heading font-semibold">Email</h3>
                  <a 
                    href="mailto:oyekolaobajuwon@gmail.com" 
                    className="hover:underline"
                  >
                    oyekolaobajuwon@gmail.com
                  </a>
                </div>
              </div>

              <div className="border-t border-white/20 my-6"></div>

              <h3 className="text-2xl font-bold mb-4">Social Media</h3>
              <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((info) => (
                  <a key={info.id} href={info.link} target="_blank" rel="noopener noreferrer">
                    <div
                      className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                    >
                      <Image src={info.img} alt="icons" width={24} height={24} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="font-body text-center text-white mt-12">
          <p>© 2024 Oyekola Obajuwon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react'
import { Rows3, Star, Code, Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-black text-white py-8" id='contact'>
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact Me</h3>
          <p className="flex items-center mb-1">
            <Mail className="mr-2" size={16} />
            shubhamprakashchoureps@gmail.com
          </p>
          <p className="flex items-center">
            <Phone className="mr-2" size={16} />
            9021258702
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/ShubhamChoure" target="_blank" rel="noopener noreferrer">
            <Github className="text-white hover:scale-125 transition-all duration-300" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/shubham-choure-01a6b6287/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-white hover:scale-125 transition-all duration-300" size={24} />
          </a>
          <a href="https://x.com/ShubhamChoure_7?t=7HMpN32DryLfJk5OcqR2-g&s=09" target="_blank" rel="noopener noreferrer">
            <Twitter className="text-white hover:scale-125 transition-all duration-300" size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer

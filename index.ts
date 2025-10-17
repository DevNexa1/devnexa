import React from "react";
import { motion } from "framer-motion";
import { Mail, Code, Monitor, CheckSquare } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/{your-id}"; // Placeholder (not used now)

const Logo = ({ className = "h-10 w-10" }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M50 8 L78 30 V54 L50 76 L22 54 V30 Z" fill="#f8fafc" />
    <path d="M50 8 L78 30 L50 52 L22 30 Z" fill="#1776FF" />
    <path d="M50 52 L78 30 V74 L50 96 L22 74 V30 Z" fill="#2E343A" />
  </svg>
);

export default function DevNexaLanding() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <h1 className="text-lg font-bold tracking-tight">DevNexa</h1>
            <p className="text-xs text-slate-500">Smart Code. Seamless Experience.</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#work" className="hover:text-slate-900">Portfolio</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-md bg-slate-100">☰</button>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-10 items-center py-16">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Crafting scalable web apps and clean, dependable interfaces.</h2>
            <p className="mt-4 text-slate-600 max-w-xl">I build performant websites and web apps that help businesses convert visitors into customers. Specialties: React, Next.js, Tailwind CSS, TypeScript, and API design.</p>

            <div className="mt-6 flex gap-3">
              <a href="mailto:devnexa63@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                <Mail size={16} /> Hire DevNexa
              </a>
              <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-100">
                View Portfolio
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckSquare size={16} /> Fast delivery</li>
              <li className="flex items-center gap-2"><CheckSquare size={16} /> Clean code</li>
              <li className="flex items-center gap-2"><CheckSquare size={16} /> Responsive design</li>
              <li className="flex items-center gap-2"><CheckSquare size={16} /> Ongoing support</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="rounded-lg overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-r from-blue-50 to-white p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg grid place-items-center"> <Code size={20} /></div>
                  <div>
                    <p className="text-sm text-slate-500">Featured project</p>
                    <h3 className="font-semibold">SaaS Dashboard — Real-time analytics</h3>
                  </div>
                </div>

                <div className="mt-4 text-sm text-slate-600">
                  Built with React, TypeScript, WebSockets, and a focus on accessibility. Fast initial load and progressive enhancement for flaky networks.
                </div>

                <div className="mt-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white rounded border">Next.js + TypeScript</div>
                    <div className="p-3 bg-white rounded border">WASM-powered graphs</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-10">
          <h3 className="text-2xl font-bold">Get in touch</h3>
          <p className="text-slate-600 mt-2">Tell me about your project. I usually reply within 24–48 hours.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form
              action="mailto:devnexa63@gmail.com"
              method="POST"
              className="bg-white p-6 rounded-lg shadow-sm border"
            >
              <label className="block">
                <span className="text-sm text-slate-700">Your name</span>
                <input name="name" required className="mt-1 block w-full rounded-md border px-3 py-2" />
              </label>

              <label className="block mt-3">
                <span className="text-sm text-slate-700">Email</span>
                <input name="email" type="email" required className="mt-1 block w-full rounded-md border px-3 py-2" />
              </label>

              <label className="block mt-3">
                <span className="text-sm text-slate-700">Message</span>
                <textarea name="message" required rows={5} className="mt-1 block w-full rounded-md border px-3 py-2" />
              </label>

              <div className="mt-4 flex gap-3">
                <a href="https://wa.me/2348148952255" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <Mail size={16} /> Send message
                </a>
                <a href="mailto:devnexa63@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md">Or email directly</a>
              </div>
            </form>

            <aside className="bg-white p-6 rounded-lg shadow-sm border flex flex-col gap-4">
              <div>
                <h4 className="font-semibold">Contact</h4>
                <p className="text-sm text-slate-600 mt-1">devnexa63@gmail.com<br/>Remote / Nigeria-based</p>
              </div>

              <div>
                <h4 className="font-semibold">Typical engagements</h4>
                <p className="text-sm text-slate-600 mt-1">Landing pages, MVPs, SaaS features, and UI/UX improvements.</p>
              </div>

              <div>
                <h4 className="font-semibold">Rates</h4>
                <p className="text-sm text-slate-600 mt-1">Available on request — project-based or hourly.</p>
              </div>
            </aside>
          </div>
        </section>

        <footer className="py-10 border-t mt-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-8" />
              <div>
                <p className="text-sm font-semibold">DevNexa</p>
                <p className="text-xs text-slate-500">© {new Date().getFullYear()} DevNexa. All rights reserved.</p>
              </div>
            </div>

            <div className="text-sm text-slate-600">Designed & built by DevNexa • <a className="underline" href="#contact">Get a quote</a></div>
          </div>
        </footer>
      </main>
    </div>
  );
}

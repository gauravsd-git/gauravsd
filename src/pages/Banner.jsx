import React, { useState } from "react";
import { ArrowUpRight, X, Mail, Phone, MapPin } from "lucide-react";

const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative mt-4 mb-2 mx-10 h-55 font-body">

        {/* Left Text ----------------------------------------------------------------------------------------------------- */}
        <div className="absolute left-0 top-1 w-150 leading-relaxed font-bold">
          {/* Big CTA heading */}
          <div>
            <h2
              className="font-bold leading-tight text-black"
              style={{ fontSize: "clamp(19px, 3vw, 45px)", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.01em" }}
            >
              Let's build something
              <span className="text-zinc-500"> great together</span>
            </h2>
          </div>
        </div>

        {/* Contact details */}
        <div className="absolute mt-14 flex flex-col gap-2">
          <a
            href="mailto:gaurav@email.com"
            className="flex items-center gap-3 group w-fit"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-black/15 group-hover:border-black transition-all">
              <Mail size={14} />
            </span>
            <span className="text-[14px] text-gray-500 group-hover:text-black transition-colors inter">
              vishwakarmagaurav013@gmail.com {/* ← replace */}
            </span>
          </a>

          <a
            href="tel:+910000000000"
            className="flex items-center gap-3 group w-fit"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-black/15 group-hover:border-black transition-all">
              <Phone size={14} />
            </span>
            <span className="text-[14px] text-gray-500 group-hover:text-black transition-colors inter">
              +91 98893 84863 {/* ← replace */}
            </span>
          </a>

          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-black/15">
              <MapPin size={14} />
            </span>
            <span className="text-[14px] text-gray-500 inter">
              India {/* ← replace */}
            </span>
          </div>
        </div>


        {/* ------------------------------------------------------------------------------------------------------------- */}

        {/* Right Side */}
        <div className="absolute right-0 top-1 w-120 text-right">
          <p className="text-gray-600 leading-relaxed">
            The fusion of my passion for design, development, and seamless
            user experiences places me at the intersection of creativity and
            technology in the digital world.
          </p>

          {/* Text + Icon */}
          <div className="mt-7 flex items-center justify-end gap-3">

            <span className="text-3xl font-heading">
              More about me
            </span>

            {/* Icon Button */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black transition hover:scale-130"
            >
              <ArrowUpRight size={18} />
            </button>

          </div>
        </div>



        {/* Bottom side */}
        {/* ------------------------------------------------------------------------------------------------------------------ */}
        <div className="absolute items-center align-bottom bottom-0 w-full ">
          {/* ── DIVIDER ── */}
          <div className=" mx-10 md:mx-0 border-t border-black/10" />

          {/* ── FOOTER BAR ── */}
          <div className="mx-0 md:mx0 py-2 flex flex-col md:flex-row items-center justify-between">
            <span className="inter text-[12px] text-gray-400">
              © {new Date().getFullYear()} Gaurav Vishwakarma. All rights reserved.
            </span>
            <span className="inter text-[12px] text-gray-400">
              Designed &amp; built by Gaurav Vishwakarma
            </span>
          </div>
        </div>


      </section>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

          <div className="relative w-[98%] max-w-4xl rounded-2xl bg-white p-10">

            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 transition hover:scale-130"
            >
              <X />
            </button>

            <h2 className="mb-4 text-3xl font-bold">
              I’m Gaurav Vishwakarm
            </h2>

            <p className="leading-8 text-gray-600">
              A Full Stack Developer who enjoys building software from idea to execution. From backend systems to polished interfaces, I focus on creating applications that are practical, scalable, and built with purpose.
            </p>
            <p className="leading-8 text-gray-600">

              My approach combines engineering discipline with product thinking—turning concepts into reliable digital experiences that perform well and deliver real value.
            </p>
            <p className="leading-8 text-gray-600">
              Beyond writing code, I’m interested in how products are built, how systems operate at scale, and how thoughtful engineering transforms ideas into experiences people actually use.
            </p>

          </div>

        </div>
      )}
    </>
  );
};

export default Banner;
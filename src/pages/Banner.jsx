import React, { useState } from "react";
import { ArrowUpRight, X, Mail, Phone, MapPin } from "lucide-react";

const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#f0ede8] px-6 py-16 sm:px-8 md:px-10 md:py-20 font-body">

        {/* Main content */}
        <div className="mx-auto flex max-w-7xl flex-col gap-14 md:gap-20">

          {/* CTA */}
          <div className="max-w-4xl">
            <h2
              className="
                font-heading
                text-[clamp(42px,7vw,92px)]
                leading-[0.88]
                tracking-[0.01em]
                text-black
              "
            >
              Let's build something
              <span className="text-zinc-500"> great together.</span>
            </h2>
          </div>

          {/* Middle section */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">

            {/* Contact */}
            <div className="flex flex-col gap-3">

              <a
                href="mailto:vishwakarmagaurav013@gmail.com"
                className="group flex w-fit items-center gap-3"
              >
                <span
                  className="
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-full border border-black/15
                    transition-all duration-200
                    group-hover:border-black
                    group-hover:bg-black
                    group-hover:text-white
                  "
                >
                  <Mail size={14} />
                </span>

                <span className="inter text-[13px] text-zinc-500 transition-colors group-hover:text-black sm:text-[14px]">
                  vishwakarmagaurav013@gmail.com
                </span>
              </a>

              <a
                href="tel:+919889384863"
                className="group flex w-fit items-center gap-3"
              >
                <span
                  className="
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-full border border-black/15
                    transition-all duration-200
                    group-hover:border-black
                    group-hover:bg-black
                    group-hover:text-white
                  "
                >
                  <Phone size={14} />
                </span>

                <span className="inter text-[13px] text-zinc-500 transition-colors group-hover:text-black sm:text-[14px]">
                  +91 98893 84863
                </span>
              </a>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15">
                  <MapPin size={14} />
                </span>

                <span className="inter text-[13px] text-zinc-500 sm:text-[14px]">
                  Noida, India
                </span>
              </div>

            </div>

            {/* About CTA */}
            <div className="max-w-xl md:ml-auto md:text-right">

              <p className="inter text-[14px] leading-7 text-zinc-500 sm:text-[15px]">
                The fusion of my passion for design, development, and
                seamless user experiences places me at the intersection
                of creativity and technology.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="
                  group
                  mt-7
                  flex
                  items-center
                  gap-3
                  md:ml-auto
                "
              >
                <span className="font-heading text-2xl tracking-wide text-black sm:text-3xl">
                  More about me
                </span>

                <span
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-black
                    transition-all duration-300
                    group-hover:bg-black
                    group-hover:text-white
                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight size={18} />
                </span>
              </button>

            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-black/10 pt-4">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <span className="inter text-[11px] text-zinc-400 sm:text-[12px]">
                © {new Date().getFullYear()} Gaurav Vishwakarma. All rights reserved.
              </span>

              <span className="inter text-[11px] text-zinc-400 sm:text-[12px]">
                Designed &amp; built by Gaurav Vishwakarma
              </span>

            </div>

          </footer>

        </div>
      </section>

      {/* About Modal */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/70
            px-4
            py-6
          "
          onClick={() => setOpen(false)}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-3xl
              overflow-y-auto
              rounded-2xl
              bg-[#f0ede8]
              p-6
              sm:p-8
              md:p-10
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                transition
                hover:bg-black
                hover:text-white
              "
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <h2
              className="
                font-heading
                pr-10
                text-4xl
                leading-none
                sm:text-5xl
              "
            >
              I'm Gaurav Vishwakarma
            </h2>

            <div className="mt-8 space-y-5">
              <p className="inter text-sm leading-7 text-zinc-600 sm:text-[15px]">
                A Full Stack Developer who enjoys building software from
                idea to execution. From backend systems to polished
                interfaces, I focus on creating applications that are
                practical, scalable, and built with purpose.
              </p>

              <p className="inter text-sm leading-7 text-zinc-600 sm:text-[15px]">
                My interest in this field started with simple curiosity —
                wanting to understand how things actually work under the
                hood. That curiosity turned into building things myself,
                and eventually into a deeper focus on full-stack
                development: designing systems, structuring clean
                architecture, and shipping applications end to end.
              </p>

              <p className="inter text-sm leading-7 text-zinc-600 sm:text-[15px]">
                My approach combines engineering discipline with product
                thinking — turning concepts into reliable digital
                experiences that perform well and deliver real value. I
                care about the decisions that happen before a single line
                of code is written: how a system is designed, how data
                flows, and how it holds up as it grows.
              </p>

              <p className="inter text-sm leading-7 text-zinc-600 sm:text-[15px]">
                Outside of writing code, I spend a lot of time reading and
                exploring — whether that's diving deeper into system
                design, exploring new tools, or following ideas I'm
                curious about.
              </p>

              <p className="inter text-sm leading-7 text-zinc-600 sm:text-[15px]">
                I'm actively building and open to new opportunities.
                Always happy to connect, so feel free to reach out.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
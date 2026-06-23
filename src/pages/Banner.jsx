import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative mt-4 mb-4 mx-12 h-50 font-body">

        {/* Left Text */}
        <div className="absolute left-0 top-4 w-150 leading-relaxed font-bold">
          I build modern web applications with a focus on performance,
          scalability, and clean user experiences. Combining backend
          engineering with thoughtful frontend execution, I create digital
          products that are reliable, efficient, and built to deliver real
          value.
        </div>

        {/* Right Side */}
        <div className="absolute right-0 top-4 w-100 text-right">
          <p className="text-gray-600 leading-relaxed">
            The fusion of my passion for design, development, and seamless
            user experiences places me at the intersection of creativity and
            technology in the digital world.
          </p>

          {/* Text + Icon */}
          <div className="mt-6 flex items-center justify-end gap-3">

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
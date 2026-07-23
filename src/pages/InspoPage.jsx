import inspoBg from "../assets/inspoBg.jpg";

export default function InspoPage() {
return ( <section
   className="
     relative
     h-158
     text-white
     px-10
     md:px-10
     py-23
     flex
     flex-col
     justify-between
     overflow-hidden
   "
 >
{/* Background image */} <img
     src={inspoBg}
     alt=""
     className="
       absolute
       inset-0
       h-full
       w-full
       object-cover
       object-center
       z-0
     "
   />
  {/* FIRST TEXT BLOCK */}
  <div className="relative z-2">
    <h1 className="font-heading text-[72px] leading-[0.92] font-light w-fit">
      Design as
      <br />
      balance between
      <br />
      <span className="text-zinc-500">
        structure and
      </span>
      <br />
      <span className="text-zinc-500">
        emotion
      </span>
    </h1>
  </div>

  {/* SECOND TEXT BLOCK */}
  <div className="relative z-10 font-heading tracking-[0.12em] self-end text-right">
    <h2 className="text-[72px] leading-[0.92] font-light">
      BUILD
      <br />
      THAT WORKS
      <br />
      <span className="text-zinc-500">
        SYSTEMS
      </span>
      <br />
      <span className="text-zinc-500">
        THAT SCALES
      </span>
    </h2>
  </div>
</section>
);
}

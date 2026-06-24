import inspoBg from "../assets/inspoBg1.jpg";

export default function InspoPage() {
return ( <section
   className="
     relative
     min-h-screen
     text-white
     px-12
     md:px-20
     py-20
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
  <div className="relative z-10">
    <h1 className="font-heading text-[72px] leading-[0.92] font-light border w-fit">
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
  <div className="relative z-10 font-heading tracking-[0.12em] self-end text-right border">
    <h2 className="text-[72px] leading-[0.92] font-light">
      BUILD
      <br />
      THAT WORKS
      <br />
      <span className="text-zinc-500">
        IMPLEMENT
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

import inspoBg from "../assets/inspoBg.jpg";

export default function InspoPage() {
  return (
    <section
      className="
        relative
        min-h-155
        md:h-162.5
        w-full
        overflow-hidden
        px-6
        py-16
        sm:px-8
        md:px-10
        md:py-20
        text-white
      "
    >
      {/* Background */}
      <img
        src={inspoBg}
        alt=""
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-black/20" />

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        
        {/* FIRST TEXT BLOCK */}
        <div>
          <h1
            className="
              font-heading
              w-full
              text-[clamp(42px,11vw,72px)]
              leading-[0.9]
              font-light
            "
          >
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
        <div className="self-end text-right">
          <h2
            className="
              font-heading
              text-[clamp(42px,11vw,72px)]
              leading-[0.9]
              font-light
              tracking-[0.06em]
              sm:tracking-[0.08em]
              md:tracking-[0.12em]
            "
          >
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

      </div>
    </section>
  );
}
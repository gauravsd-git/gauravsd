export default function A_dot() {
  return (
    <div
      className="
        absolute
        bottom-19.5
        left-5
        z-20

        flex
        items-center
        gap-2

        inter
        text-[10px]
        tracking-[0.04em]
        text-[rgba(240,237,232,0.45)]

        sm:bottom-20.5
        sm:left-7
        sm:text-[11px]

        md:bottom-7
        md:left-11
        md:text-[12px]
      "
    >
      <span
        className="
          status-dot
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          bg-[#5aff8a]
          shadow-[0_0_8px_#5aff8a]
        "
      />

      Available for work
    </div>
  );
}
export default function ScrollHint() {
  return (
  <div
        className="
      inter
      absolute top-1/2 right-11 z-10
      -translate-y-1/2
      flex flex-col items-center
      gap-2
      text-[15px]
      uppercase
      tracking-[0.12em]
      text-[rgba(240,237,232,0.4)]
      [writing-mode:vertical-rl]
      "
      >
        scroll
        <span
          className="
          scroll-line
          block
          h-12.5 w-0.5
          bg-linear-to-b
          from-[rgba(240,237,232,0.4)]
          to-transparent
          "
        />
      </div>
  );
}
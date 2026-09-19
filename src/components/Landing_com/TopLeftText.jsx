export default function TopLeftText() {
  return (
    <div
      className="
        inter
        absolute
        left-5
        top-5
        z-10

        text-[11px]
        font-light
        leading-normal

        sm:left-7
        sm:top-7
        sm:text-[12px]

        md:left-11
        md:top-9
        md:text-[13px]
        md:leading-[1.65]
      "
    >
      <strong className="block font-medium">
        Hii, I am Gaurav Vishwakarma
        <br />
        Full Stack Developer [ Java · Spring Boot · React ]
      </strong>
    </div>
  );
}
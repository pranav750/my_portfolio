import Image from "next/image";

function Intro() {
  return (
    <section className="flex w-full flex-col h-full px-20 lg:flex-row lg:h-[calc(100vh-4.6rem)]">
      <div className="flex-1 w-full my-48 text-center lg:my-auto lg:text-right lg:w-1/2 lg:pr-6">
        <h1 className="text-6xl font-bold">I'm a</h1>
        <h1 className="text-6xl font-bold">Web Developer</h1>
      </div>
      <div className="flex-1 w-full my-48 text-center lg:w-1/2 lg:pl-6 lg:text-left lg:my-auto">
        <Image
          className="border-8 border-solid rounded-full"
          src="/me.png"
          width="400"
          height="400"
        />
      </div>
    </section>
  );
}

export default Intro;

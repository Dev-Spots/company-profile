import LazyLoadImg from "@/components/atoms/image/lazyImage";
import logo from "@/components/images/Balkan-Dreams-Logo.png";

export default function MainHero() {
  return (
    <section className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <LazyLoadImg
        src={logo}
        className="mb-10 object-cover object-center"
        alt="balkan-dreams-logo"
      />
      <div className="text-center lg:w-5/12 w-full">
        <h1 className="my-4 text-5xl font-bold leading-tight">Balkan Dreams</h1>
        <p className="text-2xl mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat
          maiores.
        </p>
        <div className="flex justify-center mx-auto">
          <button className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
            btn 1
          </button>
          <button className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
            btn 2
          </button>
        </div>
      </div>
    </section>
  );
}

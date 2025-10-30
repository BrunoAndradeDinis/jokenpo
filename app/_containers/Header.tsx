import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-start px-8 py-4 shadow-md gap-2">
      <Image
        src="/logo.png"
        width={42}
        height={42}
        alt="Jokenpô logo"
        title="Logo do Jokenpô"
      />
      <h1 className="text-lg font-bold">JOKENPÔ</h1>
    </header>
  );
};

export default Header;

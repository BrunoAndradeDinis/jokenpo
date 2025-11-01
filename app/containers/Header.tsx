import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <Image
        src="/logo.png"
        width={42}
        height={42}
        alt="Jokenpô logo"
        title="Logo do Jokenpô"
      />
      <h1 className="header__title">JOKENPÔ</h1>
    </header>
  );
};

export default Header;

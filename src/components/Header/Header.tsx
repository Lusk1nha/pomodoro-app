interface IHeaderProps {
  title: string;
}

function Header(props: IHeaderProps) {
  return (
    <header className="w-full pt-8 pb-10 px-4 flex items-center justify-center">
      <h1
        title="Site name"
        aria-label="Site name"
        className="text-title text-2xl font-bold"
      >
        {props.title}
      </h1>
    </header>
  );
}

export default Header;

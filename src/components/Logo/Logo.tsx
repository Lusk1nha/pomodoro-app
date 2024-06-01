interface ILogoProps {
  title: string;
}

function Logo(props: ILogoProps) {
  return (
    <h1
      title="Site name"
      aria-label="Site name"
      className="text-title text-2xl md:text-[32px] font-bold"
    >
      {props.title}
    </h1>
  );
}

export { Logo };

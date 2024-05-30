interface ITitleProps {
  title: string;
}

function Title(props: ITitleProps) {
  const { title } = props;

  return (
    <div className="w-full flex items-center justify-center md:justify-start pb-4">
      <h5
        title={title}
        aria-label={"Modal title with name: " + title}
        className="text-[11px] md:text-[13px] text-modalTitle font-bold uppercase tracking-[4.23px] md:tracking-[5px"
      >
        {title}
      </h5>
    </div>
  );
}

export { Title };

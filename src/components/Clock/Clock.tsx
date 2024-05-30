function Clock() {
  return (
    <section className="w-full flex items-center justify-center md:px-[38px]">
      <button
        type="button"
        className="bg-gradient-to-tl from-clockRight to-clockLeft w-[300px] h-[300px] md:w-[410px] md:h-[410px] flex items-center justify-center p-4 drop-shadow-clock rounded-full relative"
      >
        <div className="bg-clockFixed w-full h-full flex flex-col items-center justify-center rounded-full z-20">
          <h3 className="text-[80px] md:text-[100px] text-clockText font-bold leading-[115px] -tracking-[4px] md:-tracking-[5px]">
            17:59
          </h3>

          <p className="text-clockText hover:text-clockButtonHover text-sm md:text-base font-bold text-center tracking-[15px] transition">
            PAUSE
          </p>
        </div>
      </button>
    </section>
  );
}

export { Clock };

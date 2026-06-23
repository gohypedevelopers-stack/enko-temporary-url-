type ChargerVisualProps = {
  variant: 'flow' | 'storm' | 'blaze';
  label: string;
};

export function ChargerVisual({ variant, label }: ChargerVisualProps) {
  if (variant === 'flow') {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-[#1c1c1b]">
        <div className="h-24 w-52 rounded-full border border-white/25 bg-gradient-to-r from-[#151515] via-[#4c4b47] to-[#111] p-3 shadow-2xl">
          <div className="flex h-full items-center justify-between rounded-full border border-white/15 px-7 text-sm font-black text-white/80">
            <span>Flow K</span>
            <span className="h-9 w-9 rounded-full border border-white/25" />
          </div>
        </div>
        <span className="absolute left-3 top-3 label-kicker text-white/40">{label}</span>
      </div>
    );
  }

  if (variant === 'storm') {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-[linear-gradient(90deg,#15120c_0%,#080808_58%,#1b140a_100%)]">
        <div className="relative h-60 w-32 border border-white/10 bg-gradient-to-b from-[#2d2d2a] to-[#090909] shadow-2xl">
          <div className="mx-auto mt-5 h-8 w-16 bg-[#E8A020] text-center text-xs font-black leading-8 text-[#080808]">ENKO</div>
          <div className="absolute bottom-9 left-1/2 h-24 w-10 -translate-x-1/2 rounded-full border border-white/15" />
          <div className="absolute right-[-36px] top-24 h-28 w-24 rounded-r-full border-r-4 border-t-4 border-[#080808]" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#171716]">
      <div className="relative h-52 w-52 rounded-t-[2rem] border border-white/10 bg-gradient-to-b from-[#3d3b36] to-[#080808] shadow-2xl">
        <div className="mx-auto mt-5 h-8 w-20 bg-[#E8A020] text-center text-xs font-black leading-8 text-[#080808]">ENKO</div>
        <div className="absolute bottom-6 left-8 h-28 w-16 rounded-b-full border-l-4 border-[#080808]" />
        <div className="absolute bottom-6 right-8 h-28 w-16 rounded-b-full border-r-4 border-[#080808]" />
        <div className="absolute left-1/2 top-24 h-9 w-9 -translate-x-1/2 rounded-full bg-[#E8A020]" />
      </div>
      <span className="absolute left-3 top-3 label-kicker text-white/40">{label}</span>
    </div>
  );
}

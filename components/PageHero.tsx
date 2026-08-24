export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "olive" | "rust" | "amber";
}) {
  return (
    <section className="bg-[#163B66] text-white px-6 sm:px-12 py-14 sm:py-16 border-b-8 border-[#D97706] relative overflow-hidden shadow-xl">
      <div className="mx-auto max-w-7xl relative z-10">

        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3 font-display">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-3xl text-sm sm:text-base text-gray-200 leading-relaxed font-body">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

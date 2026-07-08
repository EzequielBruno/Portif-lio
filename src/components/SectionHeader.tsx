type SectionHeaderProps = { eyebrow: string; title: string; description?: string };

export function SectionHeader(props: SectionHeaderProps) {
  const { eyebrow, title, description } = props;
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}

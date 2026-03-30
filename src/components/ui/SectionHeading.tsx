interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, centered, light }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className={`text-xs font-medium tracking-widest uppercase mb-3 ${light ? 'text-amber-300' : 'text-amber-700'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl leading-tight ${light ? 'text-stone-50' : 'text-stone-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-stone-300' : 'text-stone-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

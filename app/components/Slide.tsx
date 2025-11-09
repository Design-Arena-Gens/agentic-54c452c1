import type { ReactNode } from "react";

interface SlideProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function Slide({ id, eyebrow, title, subtitle, children }: SlideProps) {
  return (
    <section id={id} className="relative px-6 py-16 md:py-24 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-4 md:gap-6">
          {eyebrow ? <span className="badge self-start uppercase tracking-widest">{eyebrow}</span> : null}
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

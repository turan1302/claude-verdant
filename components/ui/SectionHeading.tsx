import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-10 bg-verdant-500/60" />
        <p className="eyebrow">{eyebrow}</p>
        {centered && <span className="h-px w-10 bg-verdant-500/60" />}
      </div>
      <h2 className="mt-5 font-serif text-4xl font-light leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-relaxed text-mist sm:text-base">{description}</p>
      )}
    </Reveal>
  );
}

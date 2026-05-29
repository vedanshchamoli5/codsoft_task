import heroImg from "@/assets/hero-abstract.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now in public beta
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Build better products{" "}
              <span className="text-primary">faster</span> than ever
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              The all-in-one platform that helps teams design, develop, and ship
              world-class experiences with precision and speed.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
                style={{ boxShadow: "var(--glow-primary)" }}
              >
                Start building free
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-all hover:bg-muted"
              >
                See how it works
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                14-day trial
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "var(--hero-gradient)" }}
            />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
              <img
                src={heroImg}
                alt="Vantage platform dashboard preview"
                className="h-auto w-full"
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

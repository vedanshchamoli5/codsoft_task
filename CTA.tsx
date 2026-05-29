import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16 md:py-24">
          <div
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "oklch(0.7 0.2 160)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "oklch(0.7 0.2 265)" }}
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Ready to build something great?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-primary-foreground/80">
              Join thousands of teams already shipping faster with Vantage. Start
              your free trial today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-white"
              >
                Get started for free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Talk to sales
              </a>
            </div>
            <p className="mt-4 text-xs text-primary-foreground/60">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

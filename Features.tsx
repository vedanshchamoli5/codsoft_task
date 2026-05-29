import {
  Zap,
  Shield,
  BarChart3,
  Layers,
  Globe,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning fast",
    description:
      "Optimized for speed from the ground up. Deploy in seconds and watch your workflows accelerate.",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    description:
      "Bank-grade encryption, SOC 2 compliance, and granular access controls built into every layer.",
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    description:
      "Track every metric that matters. Beautiful dashboards update live as your data flows in.",
  },
  {
    icon: Layers,
    title: "Modular architecture",
    description:
      "Build exactly what you need. Mix and match components to create your perfect stack.",
  },
  {
    icon: Globe,
    title: "Global edge network",
    description:
      "Content delivered from 200+ locations worldwide. Your users experience sub-50ms latency everywhere.",
  },
  {
    icon: Clock,
    title: "24/7 reliability",
    description:
      "99.99% uptime SLA with redundant infrastructure. Sleep soundly while we handle the heavy lifting.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to{" "}
            <span className="text-primary">ship faster</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete toolkit designed for modern product teams who refuse to
            compromise on quality or velocity.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

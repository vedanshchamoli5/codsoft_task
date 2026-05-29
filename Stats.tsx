const stats = [
  { value: "50K+", label: "Active teams" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "200+", label: "Global nodes" },
  { value: "10M+", label: "Requests daily" },
];

export default function Stats() {
  return (
    <section className="border-y border-border bg-secondary/50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  description: string;
  trend?: "up" | "down";
}

export function MetricCard({ label, value, description, trend = "up" }: MetricCardProps) {
  return (
    <div className="insight-card">
      <div className="flex items-center justify-between text-sm text-slate-300/70">
        <span>{label}</span>
        <span className={`flex items-center gap-1 ${trend === "up" ? "text-cash" : "text-amber-400"}`}>
          <span className="h-2 w-2 rounded-full bg-current"></span>
          {trend === "up" ? "Rising" : "Shifting"}
        </span>
      </div>
      <p className="insight-value">{value}</p>
      <p className="text-sm text-slate-300/80 leading-relaxed">{description}</p>
    </div>
  );
}

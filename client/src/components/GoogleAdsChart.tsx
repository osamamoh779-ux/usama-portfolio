/**
 * GoogleAdsChart — Interactive Google Ads Metrics Chart (custom SVG implementation)
 * Gulf Elegance Design: dark luxury, teal oklch(0.72 0.16 200) + gold oklch(0.78 0.13 85)
 * Custom SVG implementation to guarantee React 19 compatibility (recharts 2.x is unstable with React 19)
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ChartDataPoint {
  label: string;
  clicks?: number;
  conversions?: number;
}

interface GoogleAdsChartProps {
  title: string;
  subtitle: string;
  data: ChartDataPoint[];
  metricName1: string;
  metricName2: string;
}

const TEAL = "oklch(0.72 0.16 200)";
const GOLD = "oklch(0.78 0.13 85)";

export default function GoogleAdsChart({
  title,
  subtitle,
  data,
  metricName1,
  metricName2,
}: GoogleAdsChartProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Layout constants
  const width = 900;
  const height = 320;
  const padding = { top: 30, right: 30, bottom: 60, left: 60 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const maxClicks = Math.max(...data.map((d) => d.clicks ?? 0));
  const maxConv = Math.max(...data.map((d) => d.conversions ?? 0));
  const allMax = Math.max(maxClicks, maxConv) * 1.15;

  const n = data.length;
  const stepX = chartW / (n - 1);

  const xOf = (i: number) => padding.left + i * stepX;
  const yOf = (v: number) => padding.top + chartH - (v / allMax) * chartH;

  const clicksPath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${xOf(i)} ${yOf(d.clicks ?? 0)}`)
    .join(" ");
  const clicksArea = `${clicksPath} L ${xOf(n - 1)} ${padding.top + chartH} L ${xOf(0)} ${padding.top + chartH} Z`;

  const format = (v: number) => v.toLocaleString();

  // Y-axis ticks
  const ticks = [0, Math.round(allMax * 0.33), Math.round(allMax * 0.66), Math.round(allMax)];

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 teal-glow">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h4
            className="text-lg md:text-xl text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h4>
          <p className="text-muted-foreground text-xs mt-1">{subtitle}</p>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1.5 text-[11px]" style={{ color: TEAL }}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: TEAL }} />
            {metricName1}
          </span>
          <span className="flex items-center gap-1.5 text-[11px]" style={{ color: GOLD }}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: GOLD }} />
            {metricName2}
          </span>
        </div>
      </div>

      {/* Custom SVG Chart */}
      <motion.svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        role="img"
        aria-label={`${title} chart`}
      >
        <defs>
          <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={TEAL} stopOpacity={0.35} />
            <stop offset="100%" stopColor={TEAL} stopOpacity={0.02} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        {ticks.map((t, i) => (
          <g key={i}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={yOf(t)}
              y2={yOf(t)}
              stroke="rgba(255,255,255,0.07)"
              strokeDasharray="4 4"
            />
            <text
              x={padding.left - 10}
              y={yOf(t) + 4}
              textAnchor="end"
              fill="rgba(255,255,255,0.45)"
              fontSize={11}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {format(t)}
            </text>
          </g>
        ))}

        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={xOf(i)}
            y={height - 20}
            textAnchor="middle"
            fill={hoverIndex === i ? "oklch(0.78 0.13 85)" : "rgba(255,255,255,0.5)"}
            fontSize={11}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {d.label}
          </text>
        ))}

        {/* Clicks area fill */}
        <motion.path
          d={clicksArea}
          fill="url(#tealGrad)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Clicks line */}
        <motion.path
          d={clicksPath}
          fill="none"
          stroke={TEAL}
          strokeWidth={2.5}
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 1 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Conversions bars */}
        {data.map((d, i) => (
          <motion.rect
            key={i}
            x={xOf(i) - 16}
            y={yOf(d.conversions ?? 0)}
            width={32}
            height={padding.top + chartH - yOf(d.conversions ?? 0)}
            fill={GOLD}
            rx={6}
            opacity={hoverIndex === i ? 0.9 : 0.55}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: `${xOf(i)}px ${padding.top + chartH}px` }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
          />
        ))}

        {/* Clicks dots + hover targets */}
        {data.map((d, i) => (
          <g key={i}>
            {/* invisible hover target */}
            <rect
              x={xOf(i) - stepX / 2}
              y={padding.top}
              width={stepX}
              height={chartH}
              fill="transparent"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            />
            <circle
              cx={xOf(i)}
              cy={yOf(d.clicks ?? 0)}
              r={hoverIndex === i ? 6 : 4}
              fill={TEAL}
              stroke="#0a1419"
              strokeWidth={2}
            />
            <circle
              cx={xOf(i)}
              cy={yOf(d.conversions ?? 0)}
              r={hoverIndex === i ? 5 : 3.5}
              fill={GOLD}
              stroke="#0a1419"
              strokeWidth={2}
            />
          </g>
        ))}

        {/* Hover tooltip card */}
        <AnimatePresence>
          {hoverIndex !== null && (
            <g>
              <rect
                x={Math.min(Math.max(xOf(hoverIndex) - 110, 10), width - 220)}
                y={Math.min(Math.max(yOf(data[hoverIndex].clicks ?? 0) - 80, 10), height - 100)}
                width={220}
                height={72}
                rx={12}
                fill="rgba(10, 20, 25, 0.94)"
                stroke="rgba(45, 212, 191, 0.35)"
                strokeWidth={1}
              />
              <text
                x={Math.min(Math.max(xOf(hoverIndex) - 110, 10), width - 220) + 16}
                y={Math.min(Math.max(yOf(data[hoverIndex].clicks ?? 0) - 80, 10), height - 100) + 26}
                fill="oklch(0.78 0.13 85)"
                fontSize={13}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {data[hoverIndex].label}
              </text>
              <text
                x={Math.min(Math.max(xOf(hoverIndex) - 110, 10), width - 220) + 16}
                y={Math.min(Math.max(yOf(data[hoverIndex].clicks ?? 0) - 80, 10), height - 100) + 48}
                fill={TEAL}
                fontSize={12}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {metricName1}: {format(data[hoverIndex].clicks ?? 0)}
              </text>
              <text
                x={Math.min(Math.max(xOf(hoverIndex) - 110, 10), width - 220) + 16}
                y={Math.min(Math.max(yOf(data[hoverIndex].clicks ?? 0) - 80, 10), height - 100) + 64}
                fill={GOLD}
                fontSize={12}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {metricName2}: {format(data[hoverIndex].conversions ?? 0)}
              </text>
            </g>
          )}
        </AnimatePresence>
      </motion.svg>

      {/* Summary stats row */}
      <div className="flex flex-wrap justify-center gap-3 mt-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <span className="px-3 py-1.5 rounded-full bg-black/40 text-xs text-white/90">
          <span className="capitalize" style={{ color: TEAL }}>{metricName1}: </span>
          {format(data.reduce((a, d) => a + (d.clicks ?? 0), 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <span className="px-3 py-1.5 rounded-full bg-black/40 text-xs text-white/90">
          <span className="capitalize" style={{ color: GOLD }}>{metricName2}: </span>
          {format(data.reduce((a, d) => a + (d.conversions ?? 0), 0))}
        </span>
      </div>
    </div>
  );
}

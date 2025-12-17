"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { RunEntry } from "@/lib/types";

type Props = {
  data: RunEntry[];
};

export default function OverallChart({ data }: Props) {
  return (
    <div className="mt-8 h-80">
      <h2 className="text-xl font-semibold mb-4">
        Miles Run Over Time
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="miles"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

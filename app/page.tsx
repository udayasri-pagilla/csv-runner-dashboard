"use client";

import { useState } from "react";
import OverallChart from "@/components/OverallChart";


import CsvUploader from "@/components/CsvUploader";
import MetricsCards from "@/components/MetricsCards";

import {
  calculateOverallMetrics,
  calculatePerPersonMetrics,
} from "@/lib/metrics";
import { RunEntry } from "@/lib/types";

export default function Home() {
  const [data, setData] = useState<RunEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  const overallMetrics =
    data.length > 0 ? calculateOverallMetrics(data) : null;

  const perPersonMetrics =
    data.length > 0 ? calculatePerPersonMetrics(data) : null;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        CSV Runner Dashboard
      </h1>

      <CsvUploader
        onDataParsed={setData}
        onError={setError}
      />

      {error && (
        <p className="mt-4 text-red-600 font-medium">
          {error}
        </p>
      )}

      {/* Optional: keep this only for debugging (can remove later) */}
      {data.length > 0 && (
        <pre className="mt-6 bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      {/* OVERALL METRICS */}
      {overallMetrics && (
        <MetricsCards
          title="Overall Metrics"
          average={overallMetrics.average}
          min={overallMetrics.min}
          max={overallMetrics.max}
        />
      )}

      {/* PER-PERSON METRICS */}
      {perPersonMetrics &&
        Object.entries(perPersonMetrics).map(
          ([person, metrics]) => (
            <MetricsCards
              key={person}
              title={`Metrics for ${person}`}
              average={metrics.average}
              min={metrics.min}
              max={metrics.max}
            />
          )
        )}
        {data.length > 0 && (
  <OverallChart data={data} />
)}

    </main>
  );
}

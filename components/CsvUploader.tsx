"use client";

import Papa from "papaparse";
import { Button } from "@/components/ui/button";

type Props = {
  onDataParsed: (data: any[]) => void;
  onError: (message: string) => void;
};

export default function CsvUploader({ onDataParsed, onError }: Props) {
  const handleFileUpload = (file: File) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        /* 1️⃣ Validate headers FIRST */
        const requiredHeaders = ["date", "person", "miles"];
        const actualHeaders = results.meta.fields || [];

        const missingHeaders = requiredHeaders.filter(
          (h) => !actualHeaders.includes(h)
        );

        if (missingHeaders.length > 0) {
          onError(
            `Missing required columns: ${missingHeaders.join(", ")}`
          );
          onDataParsed([]);
          return;
        }

        /* 2️⃣ Validate & clean rows */
        const cleanedData: any[] = [];

        for (let i = 0; i < results.data.length; i++) {
          const row: any = results.data[i];

          const date = row.date;
          const person = row.person;
          const miles = Number(row.miles);

          if (!date || isNaN(Date.parse(date))) {
            onError(`Invalid date in row ${i + 2}`);
            onDataParsed([]);
            return;
          }

          if (!person || typeof person !== "string") {
            onError(`Invalid person name in row ${i + 2}`);
            onDataParsed([]);
            return;
          }

          if (isNaN(miles)) {
            onError(`Invalid miles value in row ${i + 2}`);
            onDataParsed([]);
            return;
          }

          cleanedData.push({
            date,
            person,
            miles,
          });
        }

        /* 3️⃣ Success */
        onError("");
        onDataParsed(cleanedData);
      },

      error: () => {
        onError("Failed to parse CSV file.");
        onDataParsed([]);
      },
    });
  };

  return (
    <div className="mt-4">
      <label className="block font-medium mb-2">
        Upload CSV file
      </label>

      {/* Hidden native input */}
      <input
        id="csv-upload"
        type="file"
        accept=".csv"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileUpload(file);
        }}
      />

      {/* Visible button */}
      <Button
        type="button"
        onClick={() => {
          const input = document.getElementById(
            "csv-upload"
          ) as HTMLInputElement;
          input?.click();
        }}
      >
        Choose CSV File
      </Button>
    </div>
  );
}

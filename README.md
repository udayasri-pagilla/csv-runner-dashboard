CSV Runner Dashboard
1. Project Overview
This project is built for the CSV Runner Dashboard challenge.
The application allows users to upload a CSV file containing running data with the columns date, person, and miles.
After uploading, the app validates the CSV, calculates summary metrics (average, minimum, and maximum), and visualizes the data using metric cards and a line chart.
The main focus of this project is CSV parsing, validation, basic analytics, and a clean UI.

2. Assumptions
The following non-obvious decisions and assumptions were made:
The CSV file must contain exactly three columns: date, person, miles
Column names are case-sensitive
Dates must be in YYYY-MM-DD format
Miles values must be numeric
CSV files are small to medium in size (client-side processing is enough)
No backend or database is required for this challenge

3. Prerequisites
To run this project locally, the following are required:
Node.js v18 or above
npm (comes with Node.js)
A modern browser (Chrome, Edge, Firefox)
No database setup is required

4. Setup
Install
Clone the repository and install dependencies:
git clone <repository-url>
cd csv-runner-dashboard
npm install

Dependencies used [what npm install is doing]
papaparse – CSV parsing-npm install papaparse --save
recharts – charts and data visualization-npm install recharts
shadcn/ui – UI components (Button, Card)-npm install @shadcn/ui --save
Tailwind CSS – styling-npm install tailwindcss --save
All dependencies are listed in package.json.

5. Run the Application
Start the development server:
npm run dev
Open the application in your browser:
http://localhost:3000

>>>>> Sample Data
No database or seed setup is required.
A sample CSV file is available for testing:
public/sample.csv

>>>>>Environment Variables
This project does not require environment variables.
A .env.example file is included only for best practices.

6. Features
CSV upload with button-based UI
Header and row-level CSV validation
Overall and per-person metrics (Average, Min, Max)
Line chart visualization using Recharts
Clean, responsive UI with Tailwind CSS & shadcn/ui
Clear error messages for invalid CSV files

>>>>> How to Verify
Upload public/sample.csv
Confirm parsed data is displayed correctly
Check overall and per-person metric cards
Verify the line chart renders miles over time
Test error handling:
Missing columns
Invalid dates
Non-numeric values

>>>>> Project Structure
app/
  page.tsx

components/
  CsvUploader.tsx
  MetricsCards.tsx
  OverallChart.tsx
  ui/

lib/
  metrics.ts
  types.ts

public/
  sample.csv

7. Architecture Notes
CSV data is parsed and stored in React state
Cleaned data flows into metrics and chart components
All calculations are done client-side
Utility logic is separated from UI components

8. Limitations
Client-side only (no persistence)
No authentication
Not optimized for very large CSV files

>>>>>Future Improvements
Drag-and-drop CSV upload
Per-person chart filtering
Export computed metrics as CSV
Backend persistence

9. Accessibility & UI

Clear labels and button-based upload
High-contrast metric cards
Responsive layout for all screen sizes

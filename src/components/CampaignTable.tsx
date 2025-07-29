"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const campaigns = [
  {
    name: "Summer Sale",
    impressions: 20000,
    clicks: 1500,
    conversions: 300,
    revenue: 4500,
  },
  {
    name: "Black Friday",
    impressions: 50000,
    clicks: 4000,
    conversions: 800,
    revenue: 12000,
  },
  {
    name: "Launch Campaign",
    impressions: 30000,
    clicks: 2500,
    conversions: 600,
    revenue: 7500,
  },
  {
    name: "Retargeting Ads",
    impressions: 15000,
    clicks: 1000,
    conversions: 200,
    revenue: 2800,
  },
];

export default function CampaignTable() {
  const [sortBy, setSortBy] = useState<keyof typeof campaigns[0]>("revenue");
  const [direction, setDirection] = useState<"asc" | "desc">("desc");
  const [filter, setFilter] = useState("");

  const sortedCampaigns = [...campaigns]
    .filter((c) => c.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      const result = a[sortBy] > b[sortBy] ? 1 : -1;
      return direction === "asc" ? result : -result;
    });

  const toggleSort = (key: keyof typeof campaigns[0]) => {
    if (sortBy === key) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setDirection("desc");
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow space-y-4">
      <h2 className="text-lg font-semibold">Campaign Performance</h2>

      <Input
        placeholder="Search campaigns..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="max-w-sm"
      />

      <Table>
        <TableHeader>
          <TableRow>
            {["name", "impressions", "clicks", "conversions", "revenue"].map((col) => (
              <TableHead
                key={col}
                className="cursor-pointer hover:text-primary"
                onClick={() => toggleSort(col as keyof typeof campaigns[0])}
              >
                {col.charAt(0).toUpperCase() + col.slice(1)}
                {sortBy === col && (direction === "asc" ? " ▲" : " ▼")}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedCampaigns.map((c) => (
            <TableRow key={c.name}>
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.impressions.toLocaleString()}</TableCell>
              <TableCell>{c.clicks.toLocaleString()}</TableCell>
              <TableCell>{c.conversions.toLocaleString()}</TableCell>
              <TableCell>₹{c.revenue.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

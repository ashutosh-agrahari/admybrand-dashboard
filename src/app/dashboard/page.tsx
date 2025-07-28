import MetricCard from "@/components/MetricCard";
import { metrics } from "@/lib/mockData";
import LineChartCard from "@/components/LineChartCard";
import BarChartCard from "@/components/BarChartCard";
import DonutChartCard from "@/components/DonutChartCard";
import CampaignTable from "@/components/CampaignTable";
import { DashboardChart } from "@/components/DashboardChart";





export default function DashboardPage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">ADmyBRAND Insights</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>
      <LineChartCard />
      <BarChartCard />
      <DonutChartCard />
      <CampaignTable />
      <DashboardChart />
    </main>
  );
}





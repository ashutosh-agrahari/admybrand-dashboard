import MetricCard from "@/components/MetricCard";
import { metrics } from "@/lib/mockData";
import LineChartCard from "@/components/LineChartCard";
import BarChartCard from "@/components/BarChartCard";
import DonutChartCard from "@/components/DonutChartCard";
import CampaignTable from "@/components/CampaignTable";
import { DashboardChart } from "@/components/DashboardChart";
import DashboardLayout from "@/components/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>

        {/* Charts & Table */}
        <LineChartCard />
        <BarChartCard />
        <DonutChartCard />
        <CampaignTable />
        <DashboardChart />
      </div>
    </DashboardLayout>
  );
}

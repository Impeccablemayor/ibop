import React, { useEffect, useState, Suspense } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import axios from "@/api/axiosInstance"; // make sure you have an axios instance

// Reusable MetricCard
const MetricCard = ({ title, children }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

// Lazy-loaded chart components
const UserStatsChart = React.lazy(() => import("@/components/charts/UserStatsChart"));
const ActivityChart = React.lazy(() => import("@/components/charts/ActivityChart"));
const RevenueChart = React.lazy(() => import("@/components/charts/RevenueChart"));

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState({
    users: 0,
    activeSessions: 0,
    revenue: 0,
  });
  const [userStats, setUserStats] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Replace with your actual backend endpoints
        const resMetrics = await axios.get("/dashboard/metrics");
        setMetrics(resMetrics.data);

        const resUserStats = await axios.get("/dashboard/user-stats");
        setUserStats(resUserStats.data);

        const resActivity = await axios.get("/dashboard/activity");
        setActivityData(resActivity.data);

        const resRevenue = await axios.get("/dashboard/revenue");
        setRevenueData(resRevenue.data);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-6 lg:p-12 space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Admin Dashboard</h1>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard title="Total Users">
          <p className="text-2xl font-semibold">{metrics.users}</p>
        </MetricCard>
        <MetricCard title="Active Sessions">
          <p className="text-2xl font-semibold">{metrics.activeSessions}</p>
        </MetricCard>
        <MetricCard title="Revenue">
          <p className="text-2xl font-semibold">${metrics.revenue}</p>
        </MetricCard>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Suspense fallback={<p>Loading User Stats...</p>}>
          <MetricCard title="User Statistics">
            <UserStatsChart data={userStats} />
          </MetricCard>
        </Suspense>

        <Suspense fallback={<p>Loading Activity...</p>}>
          <MetricCard title="Activity Overview">
            <ActivityChart data={activityData} />
          </MetricCard>
        </Suspense>

        <Suspense fallback={<p>Loading Revenue...</p>}>
          <MetricCard title="Revenue Trends">
            <RevenueChart data={revenueData} />
          </MetricCard>
        </Suspense>
      </div>
    </div>
  );
}

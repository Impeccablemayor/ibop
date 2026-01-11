import React from 'react';
import { Card, Text, Metric, Flex, Badge, AreaChart } from "@tremor/react"; // Latest in 2026
import { 
  UsersIcon, 
  UserGroupIcon, 
  ClipboardDocumentCheckIcon, 
  ClockIcon 
} from "@heroicons/react/24/outline";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"; // shadcn/ui primitives

const kpiData = [
  { label: "Total Users", value: "2,543", icon: UsersIcon, color: "blue", trend: "+12%" },
  { label: "Active Clients", value: "1,202", icon: UserGroupIcon, color: "indigo", trend: "+5%" },
  { label: "Pending Tasks", value: "42", icon: ClockIcon, color: "amber", trend: "-2%" },
  { label: "Completed Tasks", value: "890", icon: ClipboardDocumentCheckIcon, color: "emerald", trend: "+18%" },
];

const activityData = [
  { user: "Admin", action: "Created a task", time: "2 mins ago", status: "Success" },
  { user: "Sarah J.", action: "Updated Client Profile", time: "15 mins ago", status: "Neutral" },
  { user: "System", action: "Backup Completed", time: "1 hour ago", status: "Success" },
];

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">System Overview</h1>
          <p className="text-slate-500">Real-time performance and task monitoring.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20">
          Generate Report
        </button>
      </header>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((item) => (
          <Card key={item.label} decoration="top" decorationColor={item.color} className="shadow-sm hover:shadow-md transition-shadow">
            <Flex alignItems="start">
              <div className="space-y-1">
                <Text className="text-slate-500 font-medium">{item.label}</Text>
                <Metric className="font-bold text-slate-900">{item.value}</Metric>
              </div>
              <Badge color={item.trend.startsWith('+') ? 'emerald' : 'rose'}>{item.trend}</Badge>
            </Flex>
          </Card>
        ))}
      </div>

      {/* Data Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <Card className="xl:col-span-2 ring-1 ring-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-50">
            <h3 className="font-semibold text-slate-900 text-lg">Recent Activity</h3>
          </div>
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[200px]">User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activityData.map((row) => (
                <TableRow key={row.time} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-medium flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs">
                      {row.user.charAt(0)}
                    </div>
                    {row.user}
                  </TableCell>
                  <TableCell className="text-slate-600">{row.action}</TableCell>
                  <TableCell>
                    <Badge color={row.status === 'Success' ? 'emerald' : 'slate'}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-slate-400 font-mono text-xs">
                    {row.time}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* New Analytics Card (Side) */}
        <Card className="ring-1 ring-slate-100 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">Task Velocity</h3>
          <div className="h-48">
             {/* Imagine a Tremor AreaChart here for visual engagement */}
             <div className="w-full h-full bg-slate-50 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-200">
                <span className="text-slate-400 text-sm">Chart rendering...</span>
             </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
             <div className="flex justify-between text-sm">
                <span className="text-slate-500">Target Completion</span>
                <span className="font-medium text-slate-900">92%</span>
             </div>
             <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[92%] transition-all duration-1000" />
             </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
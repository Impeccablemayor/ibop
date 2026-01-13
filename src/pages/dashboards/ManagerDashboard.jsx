import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function ManagerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10 space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">
          Manager Dashboard
        </h1>
        <p className="text-slate-500">
          Overview of team activities and operational progress
        </p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">18</p>
            <p className="text-sm text-slate-500">Active staff</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-slate-500">Requests awaiting review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">42</p>
            <p className="text-sm text-slate-500">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Activity Section */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Team Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>✔️ John submitted logistics report</li>
            <li>✔️ Inventory request approved</li>
            <li>✔️ Weekly performance review completed</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

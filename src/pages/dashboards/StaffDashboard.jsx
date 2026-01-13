import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function StaffDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10 space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">
          Staff Dashboard
        </h1>
        <p className="text-slate-500">
          Your daily tasks and updates
        </p>
      </header>

      {/* Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Assigned Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">7</p>
            <p className="text-sm text-slate-500">Tasks assigned to you</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm text-slate-500">Awaiting manager approval</p>
          </CardContent>
        </Card>
      </div>

      {/* Task List */}
      <Card>
        <CardHeader>
          <CardTitle>Today’s Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>📝 Submit daily activity report</li>
            <li>📦 Update inventory status</li>
            <li>📞 Follow up with logistics team</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

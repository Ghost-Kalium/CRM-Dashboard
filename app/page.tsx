"use client"

import { CRMLayout } from "@/components/crm-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, CheckSquare, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Clients",
      value: "245",
      icon: Users,
      trend: "+12% from last month",
      trendUp: true,
    },
    {
      title: "Total Sales",
      value: "$45,231",
      icon: DollarSign,
      trend: "+19% from last month",
      trendUp: true,
    },
    {
      title: "Pending Tasks",
      value: "12",
      icon: CheckSquare,
      trend: "3 due today",
      trendUp: false,
    },
  ]

  return (
    <CRMLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's an overview of your business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    {stat.trendUp && <TrendingUp className="h-3 w-3 text-primary" />}
                    {stat.trend}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "New client added", name: "Acme Corp", time: "2 hours ago" },
                  { action: "Sale completed", name: "$2,500 - Tech Solutions Inc", time: "5 hours ago" },
                  { action: "Task completed", name: "Follow up with Beta Company", time: "1 day ago" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.name}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { task: "Call John Doe", client: "TechStart Inc", due: "Today" },
                  { task: "Send proposal", client: "Digital Agency", due: "Tomorrow" },
                  { task: "Follow-up meeting", client: "Global Corp", due: "In 3 days" },
                ].map((task, i) => (
                  <div key={i} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{task.task}</p>
                      <p className="text-sm text-muted-foreground">{task.client}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{task.due}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </CRMLayout>
  )
}

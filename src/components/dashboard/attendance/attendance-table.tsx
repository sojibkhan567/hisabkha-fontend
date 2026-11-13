import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AttendanceTable() {
  return (
    <Tabs defaultValue="today">
      <TabsList className=" gap-2 py-5">
        <TabsTrigger value="today" className="py-4 px-6 text-sm font-medium">
          Today&apos;s Attendance
        </TabsTrigger>

        <TabsTrigger value="history" className="py-4 px-6 text-sm font-medium">
          History
        </TabsTrigger>
      </TabsList>
      <TabsContent value="today">
        <Card className="flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="history">
        <Card className="flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm">
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Page views are up 25% compared to last month.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

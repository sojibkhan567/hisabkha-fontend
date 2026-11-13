import { Button } from "@/components/ui/button";
import { CheckCheck, PenLine, ScanLine } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AttendanceTable from "@/components/dashboard/attendance/attendance-table";

const AttendancePage = () => {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return (
    <div className="mx-auto max-w-350 p-4 sm:p-6">
      <div className="space-y-5">
        {/** header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold">Attendance</h2>
            <p className="text-sm text-muted-foreground">{formattedDate}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="default"
              className="bg-green-600 text-white hover:bg-green-700 h-9 px-4 py-2 rounded-md"
            >
              <ScanLine className="mr-2 h-4 w-4" />
              Scan QR
            </Button>
            <Button variant="outline" className="h-9 px-4 py-2 rounded-md">
              <PenLine className="mr-2 h-4 w-4" />
              Manual Entry
            </Button>
            <Button variant="outline" className="h-9 px-4 py-2 rounded-md">
              <CheckCheck className="mr-2 h-4 w-4" />
              Mark remaining present
            </Button>
          </div>
        </div>
        {/** statistics card list */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          <Card className="flex flex-col gap-6 rounded-xl border bg-card py-4 text-card-foreground shadow-sm">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">Present</p>
              <p className="text-2xl font-bold text-green-600">0</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col gap-6 rounded-xl border bg-card py-4 text-card-foreground shadow-sm">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">Absent</p>
              <p className="text-2xl font-bold text-red-600">0</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col gap-6 rounded-xl border bg-card py-4 text-card-foreground shadow-sm">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">Leave</p>
              <p className="text-2xl font-bold text-yellow-600">0</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col gap-6 rounded-xl border bg-card py-4 text-card-foreground shadow-sm">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">Late</p>
              <p className="text-2xl font-bold text-orange-600">0</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col gap-6 rounded-xl border bg-card py-4 text-card-foreground shadow-sm">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">Not Marked</p>
              <p className="text-2xl font-bold text-muted-foreground">0</p>
            </CardContent>
          </Card>
        </div>
        {/** attendance table */}
        <AttendanceTable />
      </div>
    </div>
  );
};

export default AttendancePage;

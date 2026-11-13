"use client";

import { useMemo, useState } from "react";
import { Mail, Pencil, QrCode, Search, UserX } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Employee = {
  id: string;
  employeeCode: string;
  name: string;
  designation: string;
  department: string;
  shift: {
    name: string;
  };
  baseSalary: string;
  isActive: boolean;
};

const formatSalary = (salary: string) => {
  return `BDT ${Number(salary).toLocaleString("en-BD")}`;
};

export default function EmployeeTable({
  employees,
}: {
  employees: Employee[];
}) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [status, setStatus] = useState("active");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        employee.name.toLowerCase().includes(searchText) ||
        employee.employeeCode.toLowerCase().includes(searchText);

      const matchesDepartment =
        department === "all" || employee.department === department;

      const matchesStatus =
        status === "all" ||
        (status === "active" && employee.isActive) ||
        (status === "inactive" && !employee.isActive);

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [employees, search, department, status]);

  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm">
      {/* Filters */}
      <div className="mb-4 flex flex-col gap-3 lg:flex-row">
        {/* Search */}
        <div className="relative min-w-0 flex-1">
          <Search
            className="absolute left-3 top-1/2 size-4
              -translate-y-1/2 text-muted-foreground"
          />

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or code..."
            className="h-10 pl-9"
          />
        </div>

        {/* Department - Base UI Select */}
        <Select
          value={department}
          onValueChange={(value) => setDepartment(value ?? "all")}
        >
          <SelectTrigger className="h-10 w-full lg:w-42.5">
            <SelectValue placeholder="All Department" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Department</SelectItem>

            <SelectItem value="Kitchen">Kitchen</SelectItem>

            <SelectItem value="Service">Service</SelectItem>
          </SelectContent>
        </Select>

        {/* Status - Base UI Select */}
        <Select
          value={status}
          onValueChange={(value) => setStatus(value ?? "Active")}
        >
          <SelectTrigger className="h-12 w-full lg:w-35">
            <SelectValue placeholder="Active" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="active">Active</SelectItem>

            <SelectItem value="inactive">Inactive</SelectItem>

            <SelectItem value="all">All Status</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="h-12 whitespace-nowrap font-medium text-foreground">
                Employee Code
              </TableHead>

              <TableHead className="h-12 whitespace-nowrap font-medium text-foreground">
                Name
              </TableHead>

              <TableHead className="h-12 whitespace-nowrap font-medium text-foreground">
                Department
              </TableHead>

              <TableHead className="h-12 whitespace-nowrap font-medium text-foreground">
                Shift
              </TableHead>

              <TableHead className="h-12 whitespace-nowrap font-medium text-foreground">
                Salary
              </TableHead>

              <TableHead className="h-12 whitespace-nowrap font-medium text-foreground">
                Status
              </TableHead>

              <TableHead className="h-12 text-right font-medium text-foreground">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <TableRow key={employee.id} className="h-13.25">
                  {/* Code */}
                  <TableCell className="text-xs text-muted-foreground">
                    {employee.employeeCode}
                  </TableCell>

                  {/* Name */}
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium leading-5">
                        {employee.name}
                      </span>

                      <span className="text-xs text-muted-foreground">
                        {employee.designation}
                      </span>
                    </div>
                  </TableCell>

                  {/* Department */}
                  <TableCell>{employee.department}</TableCell>

                  {/* Shift */}
                  <TableCell>{employee.shift.name}</TableCell>

                  {/* Salary */}
                  <TableCell className="whitespace-nowrap">
                    {formatSalary(employee.baseSalary)}
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    {employee.isActive ? (
                      <Badge
                        className="
                          rounded-full
                          border-0
                          bg-green-100
                          px-3 py-1
                          text-xs
                          font-medium
                          text-green-700
                          hover:bg-green-100
                          dark:bg-green-950
                          dark:text-green-400
                        "
                      >
                        Active
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-1"
                      >
                        Inactive
                      </Badge>
                    )}
                  </TableCell>

                  {/* Actions */}
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        title="QR Code"
                      >
                        <QrCode className="size-4.25" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        title="Edit"
                      >
                        <Pencil className="size-4.25" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        title="Send Email"
                      >
                        <Mail className="size-4.25" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="
                          size-8
                          text-red-500
                          hover:bg-red-50
                          hover:text-red-600
                          dark:hover:bg-red-950
                        "
                        title="Deactivate"
                      >
                        <UserX className="size-4.25" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="h-24 text-center text-muted-foreground"
                >
                  No employees found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Count */}
      <div className="mt-3 text-sm text-muted-foreground">
        Showing {filteredEmployees.length} of {employees.length} employees
      </div>
    </div>
  );
}

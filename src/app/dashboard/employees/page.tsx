import AddEmployeeDropdown from "@/components/dashboard/employee/add-employee-dropdown";
import AddShiftDropdown from "@/components/dashboard/employee/add-shifts-dropdown";
import EmployeeTable from "@/components/dashboard/employee/employee-table";

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

const employees: Employee[] = [
  {
    id: "1",
    employeeCode: "EMP0005",
    name: "Nasrin Akter",
    designation: "Waitress",
    department: "Service",
    shift: {
      name: "Evening",
    },
    baseSalary: "14000",
    isActive: true,
  },
  {
    id: "2",
    employeeCode: "EMP0004",
    name: "Jamal Hossain",
    designation: "Cook",
    department: "Kitchen",
    shift: {
      name: "Morning",
    },
    baseSalary: "20000",
    isActive: true,
  },
  {
    id: "3",
    employeeCode: "EMP0003",
    name: "Fatema Khatun",
    designation: "Cashier",
    department: "Service",
    shift: {
      name: "Evening",
    },
    baseSalary: "18000",
    isActive: true,
  },
  {
    id: "4",
    employeeCode: "EMP0002",
    name: "Karim Mia",
    designation: "Waiter",
    department: "Service",
    shift: {
      name: "Morning",
    },
    baseSalary: "15000",
    isActive: true,
  },
  {
    id: "5",
    employeeCode: "EMP0001",
    name: "Rahim Uddin",
    designation: "Head Chef",
    department: "Kitchen",
    shift: {
      name: "Morning",
    },
    baseSalary: "25000",
    isActive: true,
  },
  {
    id: "6",
    employeeCode: "EMP0001",
    name: "Rahim Uddin",
    designation: "Head Chef",
    department: "Kitchen",
    shift: {
      name: "Morning",
    },
    baseSalary: "25000",
    isActive: true,
  },
  {
    id: "7",
    employeeCode: "EMP0001",
    name: "Rahim Uddin",
    designation: "Head Chef",
    department: "Kitchen",
    shift: {
      name: "Morning",
    },
    baseSalary: "25000",
    isActive: true,
  },
  {
    id: "8",
    employeeCode: "EMP0001",
    name: "Rahim Uddin",
    designation: "Head Chef",
    department: "Kitchen",
    shift: {
      name: "Morning",
    },
    baseSalary: "25000",
    isActive: true,
  },
  {
    id: "9",
    employeeCode: "EMP0001",
    name: "Rahim Uddin",
    designation: "Head Chef",
    department: "Kitchen",
    shift: {
      name: "Morning",
    },
    baseSalary: "25000",
    isActive: true,
  },
  {
    id: "10",
    employeeCode: "EMP0001",
    name: "Rahim Uddin",
    designation: "Head Chef",
    department: "Kitchen",
    shift: {
      name: "Morning",
    },
    baseSalary: "25000",
    isActive: true,
  },
  {
    id: "11",
    employeeCode: "EMP0001",
    name: "Rahim Uddin",
    designation: "Head Chef",
    department: "Kitchen",
    shift: {
      name: "Morning",
    },
    baseSalary: "25000",
    isActive: true,
  },
  {
    id: "12",
    employeeCode: "EMP0001",
    name: "Rahim Uddin",
    designation: "Head Chef",
    department: "Kitchen",
    shift: {
      name: "Morning",
    },
    baseSalary: "25000",
    isActive: true,
  },
  {
    id: "13",
    employeeCode: "EMP0001",
    name: "Rahim Uddin",
    designation: "Head Chef",
    department: "Kitchen",
    shift: {
      name: "Morning",
    },
    baseSalary: "25000",
    isActive: true,
  },
];
const EmployeePage = () => {
  return (
    <div className="mx-auto max-w-350 p-4 sm:p-6">
      <div className="space-y-5">
        {/** header title */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold">Employees</h2>
            <p className="text-sm text-muted-foreground">
              {employees.length} employees
            </p>
          </div>
          <div className="flex gap-3">
            <AddShiftDropdown />
            <AddEmployeeDropdown />
          </div>
        </div>

        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
};

export default EmployeePage;

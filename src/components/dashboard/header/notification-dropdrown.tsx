import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";

const NoficationDropdrown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" className="rounded-full px-2 py-4" />}
      >
        <Bell className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-90 p-0">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <p className="text-sm font-semibold">Notifications</p>
        </div>
        <div className="max-h-90 overflow-y-auto">
          <button className="flex w-full gap-3 border-b px-4 py-3 text-left last:border-0 hover:bg-muted/50">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-transparent"></span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium">
                New leave request
              </span>
              <span className="block text-xs text-muted-foreground">
                Rahim Uddin requested 1 day(s) of Sick Leave.
              </span>
              <span className="mt-1 block text-[11px] text-muted-foreground/70">
                12 days ago
              </span>
            </span>
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NoficationDropdrown;

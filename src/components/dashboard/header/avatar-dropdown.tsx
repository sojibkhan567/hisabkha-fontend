"use client";

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
  Settings,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const AvatarDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="default" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.p" alt="shadcn" />
              <AvatarFallback className="bg-green-100 text-green-700 font-bold">
                LR
              </AvatarFallback>
            </Avatar>
          </Button>
        }
      />
      <DropdownMenuContent className="p-0 w-50" align="end">
        <div className="border-b px-4 py-3">
          <p className="text-sm font-semibold">Business Owner</p>
          <p className="text-xs text-gray-500">admin@gmail.com</p>
        </div>
        <DropdownMenuGroup className="pt-2 pb-4 px-3 space-x-1.5">
          <DropdownMenuItem>
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <LogOutIcon />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;

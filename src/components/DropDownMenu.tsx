import { DropdownMenu } from "radix-ui";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
          aria-label="Customise options"
        >
          <span
            data-slot="avatar"
            data-size="default"
            className="group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6 h-8 w-8 ring-2 ring-green-100 dark:ring-green-900"
          >
            <span
              data-slot="avatar-fallback"
              className="flex size-full items-center justify-center rounded-full group-data-[size=sm]/avatar:text-xs bg-green-600 text-white font-semibold text-xs"
            >
              B
            </span>
          </span>
          <div className="hidden lg:block text-left">
            <p className="text-xs font-semibold text-gray-900 dark:text-white leading-none">
              Business Owner
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5 leading-none truncate max-w-24">
              admin@admin.com
            </p>
          </div>
          <ChevronDown className="hidden sm:block w-3.5 h-3.5 text-gray-400 group-data-[state=open]:rotate-180 transition-transform" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-55 z-560 rounded-md bg-white dark:bg-gray-900 p-5 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Label className="pb-1">
            <p className="text-[14px] font-semibold text-gray-900 dark:text-white leading-none">
              Business Owner
            </p>
          </DropdownMenu.Label>
          <DropdownMenu.Label className="pb-2">
            <p className="text-[12px] text-gray-400 mt-0.5 leading-none max-w-24">
              admin@admin.com
            </p>
          </DropdownMenu.Label>
          <DropdownMenu.Label className="pb-2">
            <span className="bg-green-100 text-green-600 py-1 px-4 text-[12px] font-semibold rounded-full dark:bg-transparent dark:border dark:border-green-400">
              ORG_ADMIN
            </span>
          </DropdownMenu.Label>

          <DropdownMenu.Separator className="h-px bg-gray-300" />

          <DropdownMenu.Label className="pb-2 pt-2">
            <Link
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              Profile
            </Link>
            <Link
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              Dashboard
            </Link>
          </DropdownMenu.Label>
          <DropdownMenu.Separator className="h-px bg-gray-300" />
          <DropdownMenu.Label>
            <Link
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-red-400 dark:text-red-400"
              href={"/dashboard"}
            >
              Logout
            </Link>
          </DropdownMenu.Label>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;

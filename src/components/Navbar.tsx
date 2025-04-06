import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Building, ChevronDown, House, Plane, UsersRound } from "lucide-react";


const Navbar = () => {
  return (
    <div className="w-full ">
      <nav className="flex items-center justify-center gap-3 text-[#d5d5e3]">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center cursor-pointer outline-0 bg-[#0065E0] p-2 rounded-sm">
            <House className="size-4" />
            Genel Görünüm
          </DropdownMenuTrigger>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center cursor-pointer outline-0  hover:outline hover:outline-[#0065E0]   p-2 rounded-sm">
            <Building className="size-4" />
            Kurumsal
            <ChevronDown className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#252A34] text-white ">
            <DropdownMenuItem className="hover:bg-amber-50">
              Teşkilat Şeması
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center cursor-pointer outline-0 hover:outline hover:outline-[#0065E0]  p-2 rounded-sm">
            <UsersRound className="size-4" />
            Personel
            <ChevronDown className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#252A34] text-white ">
            <DropdownMenuItem className="hover:bg-amber-50">
              sss
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center cursor-pointer outline-0 hover:outline hover:outline-[#0065E0]  p-2 rounded-sm">
            <Plane className="size-4" />
            İzin
            <ChevronDown className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#252A34] text-white ">
            <DropdownMenuItem className="hover:bg-amber-50">
              sss
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
       
      </nav>
    </div>
  );
};

export default Navbar;

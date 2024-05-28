import { Settings2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function OptionsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2" type="button" variant={"secondary"}>
          <Settings2Icon className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-10 w-36 space-y-2">
        <select
          defaultValue={"English"}
          className="w-full cursor-pointer rounded-md border bg-secondary px-2 py-2 text-[13px] font-medium tracking-tight transition-all hover:bg-secondary/65"
        >
          <option className="text-base" value="Disabled" disabled>
            Select Language
          </option>
          <option className="text-base" value="Bangla">
            Bangla
          </option>
          <option className="text-base" value="Hindi">
            Hindi
          </option>
          <option className="text-base" value="Spanish">
            Spanish
          </option>
          <option className="text-base" value="French">
            French
          </option>
        </select>
        <select
          defaultValue={250}
          className="w-full cursor-pointer rounded-md border bg-secondary px-2 py-2 text-[13px] font-medium tracking-tight transition-all hover:bg-secondary/65"
        >
          <option className="text-base" value="Disabled" disabled>
            Max Words
          </option>
          <option className="text-base" value={250}>
            250
          </option>
          <option className="text-base" value={350}>
            350
          </option>
          <option className="text-base" value={450}>
            450
          </option>
          <option className="text-base" value={550}>
            550
          </option>
        </select>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

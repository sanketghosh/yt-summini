import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";

import OptionsDropdown from "./options-dropdown";

// https://www.youtube.com/watch?v=jNQXAC9IVRw
export default function GenerateForm() {
  return (
    <div className="mx-auto w-full max-w-xl py-3">
      <form className="flex w-full items-center gap-2 ">
        <input
          type="text"
          className="flex-1 rounded-md border-2 bg-transparent px-3 py-1.5 text-sm font-medium outline-none placeholder:text-muted-foreground/45 focus-visible:border-foreground/70 focus-visible:outline-none"
          placeholder="https://www.youtube.com/watch?v=jNQXAC9IVRw"
        />
        <OptionsDropdown />
        <Button className="p-2" type="submit">
          <SendIcon className="size-5" />
        </Button>
      </form>
    </div>
  );
}

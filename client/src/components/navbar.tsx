import { ZapIcon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <nav className="border-b py-3">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-3">
        <div className="flex items-center gap-1">
          <ZapIcon className="size-6 fill-orange-500 stroke-orange-500" />
          <h1 className="font-anton text-lg font-bold uppercase md:text-xl">
            Summify
          </h1>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}

import { CopyIcon } from "lucide-react";

export default function SummaryOutput() {
  return (
    <div className="relative w-full space-y-3 md:w-[45rem] lg:w-[50rem]">
      <div className="h-96 w-full overflow-y-scroll rounded-md border bg-gray-50 p-2">
        <button className="absolute -top-2 right-0 rounded-full border bg-white p-2">
          <CopyIcon size={18} />
        </button>
        <p className="text-sm lg:text-base"></p>
      </div>
    </div>
  );
}

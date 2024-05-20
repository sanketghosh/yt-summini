import { Link2Icon } from "lucide-react";

// https://www.youtube.com/watch?v=jNQXAC9IVRw
export default function PromptForm() {
  return (
    <form className="space-y-3">
      <div className="w-full space-y-3 sm:w-[32rem] lg:w-[36rem]">
        <div className="flex w-full items-center gap-2 rounded-md border bg-gray-50 px-2 py-1 text-black">
          <span className="border p-1">
            <Link2Icon className="" size={20} />
          </span>
          <input
            type="text"
            placeholder="jNQXAC9IVRw"
            className="w-full border-none bg-transparent text-sm outline-none md:text-base"
          />
        </div>

        <div className="flex gap-3">
          <select
            name=""
            id=""
            defaultValue={"language"}
            className="w-full rounded-md border bg-gray-50 px-2 py-2 text-sm capitalize text-black"
          >
            <option value="language" disabled>
              Language
            </option>
            <option value="bangla">bangla</option>
            <option value="hindi">hindi</option>
            <option value="spanish">spanish</option>
            <option value="french">french</option>
          </select>
          <select
            name=""
            id=""
            defaultValue={"max words"}
            className="w-full rounded-md border bg-gray-50 px-2 py-2 text-sm capitalize text-black"
          >
            <option value="max words" disabled defaultChecked>
              Max Words
            </option>
            <option value="250">250</option>
            <option value="350">350</option>
            <option value="450">450</option>
            <option value="600">600</option>
          </select>
        </div>
      </div>
      <button className="w-full rounded-md bg-gray-900 px-3 py-2.5 text-sm font-medium text-gray-50 transition-all hover:bg-gray-800 disabled:bg-gray-700">
        Summarize Video
      </button>
    </form>
  );
}

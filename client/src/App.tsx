import { Novatrix } from "uvcanvas";
import PromptForm from "./components/prompt-form";
import SummaryOutput from "./components/summary-output";
import Hero from "./components/hero";

export default function App() {
  return (
    <div className="relative h-screen w-screen">
      <Novatrix />
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center space-y-4 p-4 text-gray-900">
        <Hero />
        <PromptForm />
        <SummaryOutput />
      </div>
    </div>
  );
}

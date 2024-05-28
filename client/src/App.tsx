import GenerateForm from "./components/generate-form";
import GeneratedSummary from "./components/generated-summary";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <main className="">
      <Navbar />
      <div className="mx-auto flex w-full max-w-3xl flex-col px-4 py-3">
        <Hero />
        <GenerateForm />
        <GeneratedSummary />
      </div>
    </main>
  );
}

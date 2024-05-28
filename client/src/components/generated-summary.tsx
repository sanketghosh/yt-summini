import { dummyText } from "@/data/dummy-text";
import { ClipboardCheckIcon, ClipboardIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function GeneratedSummary() {
  const [text, setText] = useState("");
  const [textGenerationComplete, setTextGenerationComplete] = useState(false);
  const [textCopied, setTextCopied] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    const streamText = () => {
      const streamingText = dummyText;
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        setText(streamingText.substring(0, currentIndex));
        currentIndex++;
        if (currentIndex > streamingText.length) {
          clearInterval(intervalId);
          setTextGenerationComplete(true);
        }
      }, 20); // Adjust the interval as per your preference
    };

    streamText();

    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, []);

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    setTextCopied(true);

    setTimeout(() => {
      setTextCopied(false);
    }, 1000); // Change back to "Copy" after 1000 milliseconds
  };

  return (
    <div className="w-full py-3">
      <div className="rounded-md border p-3">
        <p className="text-foreground/85">{text}</p>
      </div>
      {textGenerationComplete && (
        <Button
          onClick={handleCopyText}
          variant={"secondary"}
          size={"icon"}
          className="mt-2 rounded-full"
        >
          {textCopied ? (
            <ClipboardCheckIcon className="size-5 stroke-green-500" />
          ) : (
            <ClipboardIcon className="size-5" />
          )}
        </Button>
      )}
    </div>
  );
}

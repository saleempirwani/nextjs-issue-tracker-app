import { ScrollArea } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

interface IMarkdownPreviewProps {
  className: string;
  text: string;
}

const MarkdownPreview = ({ className, text }: IMarkdownPreviewProps) => {
  return (
    <div className="p-3 border-2 rounded-md">
      <ScrollArea type="scroll" scrollbars="vertical" className={className}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </ScrollArea>
    </div>
  );
};

export default MarkdownPreview;

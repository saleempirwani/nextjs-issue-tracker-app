import { ScrollArea } from "@radix-ui/themes";
import { marked } from "marked";

interface IMarkdownPreviewProps {
  className: string;
  text: string;
}

const MarkdownPreview = ({ className, text }: IMarkdownPreviewProps) => {
  return (
    <div className="p-3 border-2 rounded-md">
      <ScrollArea type="scroll" scrollbars="vertical" className={className}>
        <div dangerouslySetInnerHTML={{ __html: marked(text) }} />
      </ScrollArea>
    </div>
  );
};

export default MarkdownPreview;

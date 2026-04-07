// Renders trusted HTML content from JSON content files.
// Content comes from controlled source files, not user input.
interface HtmlContentProps {
  html: string;
  className?: string;
}

export default function HtmlContent({ html, className = "" }: HtmlContentProps) {
  return (
    <div
      className={`prose prose-stone max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

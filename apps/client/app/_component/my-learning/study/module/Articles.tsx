import React from "react";
import Markdown from "react-markdown";

const markdownContent = `
# Welcome to My Blog

This is a simple article rendered from Markdown.

### Subheading

Here is some more content with **bold text** and *italic text*.

- **List item 1**
- \`List item 2\`
- List item 3

[Link to Google](https://www.google.com)
`;

const Articles: React.FC = () => {
  return (
    <div className="p-4">
      <Markdown>{markdownContent}</Markdown>
    </div>
  );
};

export default Articles;

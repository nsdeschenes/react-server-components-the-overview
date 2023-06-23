import { marked } from "marked";
import sanitizeHTML from "sanitize-html";

const markdown = `
## Dependencies on the Server

Server components can use any Node.js package, including packages that rely on native code. For example, you can use \`sharp\` to resize images on the server.

\`\`\`jsx
"use client";

function CoolComponent() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => {
      setCount(count + 1)
    }}>
      Count: {count}
    </button>
  )
};
\`\`\`
`;

export default function DependenciesOnTheServer() {
  const parsedMarkdown = marked.parse(markdown, {
    mangle: false,
    headerIds: false,
  });
  const html = sanitizeHTML(parsedMarkdown);

  return (
    <div>
      <h1>Dependencies on the Server</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <article
          style={{ width: "40%", textAlign: "left" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

import { useRef, useState } from "react";
import "./App.css";
import { marked } from "marked";

function App() {
  const [markdown, setMarkdown] = useState("");
  const inputRef = useRef<HTMLDivElement | null>(null);

  marked.setOptions({
    breaks: true, //  Enable line breaks with single newline
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
    console.log(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // if (event.key === "Enter") {
    //   event.preventDefault();
    // }
  };

  const renderMarkdown = (markdown: string) => {
    try {
      console.log(marked(markdown));
      return { __html: marked(markdown) };
    } catch (e) {
      console.error("Error parsing Markdown: ", e);
      return { __html: "<p>Error parsing Markdown</p>" };
    }
  };

  return (
    <>
      <div className="main">
        <h1>Markdown Together</h1>
        <div id="doc" className="standard">
          <textarea
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          ></textarea>
        </div>
        <div
          ref={inputRef}
          id="prev"
          className="standard"
          dangerouslySetInnerHTML={renderMarkdown(markdown)}
        ></div>
      </div>
    </>
  );
}

export default App;

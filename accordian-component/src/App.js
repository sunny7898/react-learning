import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      <div>
        {data.map((faq, currIdx) => (
          <AccordionItem
            title={faq.title}
            num={currIdx}
            key={currIdx}
            currOpen={currOpen}
            onOpen={setCurrOpen}
          >
            {faq.text}
          </AccordionItem>
        ))}
        <AccordionItem
          title="Test 1"
          num={22}
          key="Test 1"
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          <p>This is a review: </p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
}

function AccordionItem({ num, title, currOpen, onOpen, children }) {
  const isOpen = currOpen === num;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{children}</div> : null}
    </div>
  );
}

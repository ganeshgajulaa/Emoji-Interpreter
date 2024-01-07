import { useState } from "react";
import "./styles.css";

const emojis = {
  "😊": "smiling",
  "😢": "sad",
  "😣": "angry",
};

const emojiArr = Object.keys(emojis);

let howTo = true;

export default function App() {
  const [meaning, setMeaning] = useState("");

  const inputHandler = (event) => {
    howTo = false;
    userInput = event.target.value;
    let meaning = emojis[userInput];
    if (meaning === undefined) {
      meaning = "We dont have this emoji in our database!";
    }
    setMeaning(meaning);
  };

  const clickHandler = (emoji) => {
    howTo = false;
    setMeaning(emojis[emoji]);
  };

  return (
    <div className="App">
      <h1>Fun Emojiiii Interpreter!</h1>
      <input
        style={{
          width: "40%",
          height: "50px",
          margin: "1.5rem",
          fontSize: "1.5rem",
        }}
        type="text"
        onChange={inputHandler}
        placeholder="Enter an emoji!"
      />
      <hr />
      <h1>{meaning.toUpperCase()}</h1>
      {howTo && <h2>OR click on emoji below for its meaning!</h2>}

      {emojiArr.map((item) => {
        return (
          <span
            key={item}
            onClick={() => clickHandler(item)}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

import "./Meeting-Block.css";

import { IconInput } from "../reusable-components/icon_text_input_field/icon_text_input_field";
import { IconButton } from "../reusable-components/icon-button/Icon-Button";

// for keyboard Icon in icon input

const Meeting_Block = () => {
  return (
    <section>
      <h2>Join Calls With Whoever</h2>

      <h3>Join Calls for: Overwatch, Marvel Rivals, Or even Rust !</h3>

      <IconButton
        icon={<span className="material-symbols-outlined">video_call</span>}
        text={"New Meet"}
      />

      <IconInput
        children={<span className="keyboard-icon">keyboard</span>}
        placeHolder={"Enter a Code Or Link"}
        type={"text"}
      />

      <button>Join</button>
      <p>
        <a
          href="https://support.google.com/meet/?hl=en#topic=14074839"
          className="learn-more"
        >
          Learn More
        </a>
        about Google Meet
      </p>
    </section>
  );
};

export default Meeting_Block;

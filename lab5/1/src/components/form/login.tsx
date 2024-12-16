import React from "react";
import styles from "./form.module.css";

function Password() {
  const p1 = React.createRef<HTMLInputElement>();
  const p2 = React.createRef<HTMLInputElement>();
  const l = React.createRef<HTMLInputElement>();
  const b = React.createRef<HTMLButtonElement>();

  function onChange(_: any) {
    if (
      p1.current!.value === "" ||
      p2.current!.value === "" ||
      l.current!.value === ""
    ) {
      b.current!.disabled = true;
    } else if (p1.current!.value === p2.current!.value) {
      b.current!.disabled = false;
      b.current!.onclick = () => {
        alert("Logged in successfully");
      };
    } else {
      b.current!.disabled = false;
      b.current!.onclick = () => {
        alert("Password mismatch");
      };
    }
  }

  return (
    <div className={styles.f}>
      <span>Login</span>
      <input type="text" ref={l} onInput={onChange} />
      <span>Password</span>
      <input type="password" ref={p1} onInput={onChange} />
      <span>Repeat Password</span>
      <input type="password" ref={p2} onInput={onChange} />
      <button disabled ref={b}>
        Submit
      </button>
    </div>
  );
}

export default Password;

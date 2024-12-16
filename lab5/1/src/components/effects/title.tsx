import React from "react";

function Title() {
  const [t, setT] = React.useState("lab5");
  const i: React.RefObject<HTMLInputElement> = React.createRef();
  React.useEffect(() => {
    document.title = t;
    i.current!.value = t;
  }, [t]);
  
  return (
    <div>
      <input type="text" onChange={(e) => setT(e.target.value)} ref={i} />
    </div>
  );
}

export default Title;

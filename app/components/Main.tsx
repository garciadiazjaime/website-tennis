import { PropsWithChildren } from "react";

export default function Main(props: PropsWithChildren) {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 12,
      }}
    >
      {props.children}
    </main>
  );
}

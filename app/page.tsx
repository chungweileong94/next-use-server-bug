import { myAction } from "./actions";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <form>
      <button formAction={myAction}>Submit</button>
    </form>
  );
}

import Button from "./_Button/Button";
import CookieButton from "./_CookieButton/Button";
import Marquee from "./_Marquee/Marquee";

export default function Home() {
  return (
    <div>
      <h1>React Server Components</h1>
      <Marquee />
      <Button />
      <br />
      <CookieButton />
    </div>
  );
}

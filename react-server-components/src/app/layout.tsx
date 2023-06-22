import "./globals.css";

export const metadata = {
  title: "React Server Components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/fetch-and-pass">Fetch and pass via props example</a>
          </li>
          <li>
            <a href="/donuts-of-interactivity">
              Donuts of interactivity example
            </a>
          </li>
          <li>
            <a href="dependencies-on-the-server">
              Dependencies on the server example
            </a>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}

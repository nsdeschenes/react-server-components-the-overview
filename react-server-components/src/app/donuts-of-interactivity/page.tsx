import TabNav from "./TabNav";
import { AwesomeTab, CoolTab } from "./Tabs";

// force component to be server-side rendered
export const revalidate = 0;

export default function DonutsOfInteractivityPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <h1>Donuts of Interactivity</h1>
      <TabNav>
        <div
          style={{
            border: "solid black 2px",
            minWidth: "fit",
            paddingLeft: "4rem",
            paddingRight: "4rem",
          }}
        >
          {(searchParams?.tab === "awesome" ||
            searchParams?.tab === "" ||
            searchParams?.tab === undefined) && <AwesomeTab />}
          {searchParams?.tab === "cool" && <CoolTab />}
        </div>
      </TabNav>
    </div>
  );
}

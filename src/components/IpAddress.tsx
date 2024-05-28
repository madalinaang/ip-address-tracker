import Info from "./Info";
import SearchBar from "./SearchBar";
import { useMediaQuery } from "react-responsive";

export default function IpAddress() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 850px)",
  });

  return (
    <section className="ip-address">
      <img
        src={
          isMobileDevice
            ? process.env.PUBLIC_URL + "/images/pattern-bg-mobile.png"
            : process.env.PUBLIC_URL + "/images/pattern-bg-desktop.png"
        }
        alt="pattern"
      />
      <h1>IP Address Tracker</h1>
      <SearchBar />
      <Info />
    </section>
  );
}

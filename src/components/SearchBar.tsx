import { useState } from "react";
import { useIpContext } from "../context/IpContext";

export default function SearchBar() {
  const [searchIp, setSearchIp] = useState<string>("");
  const { setIp } = useIpContext();

  const setGlobalIp = () => {
    setIp(searchIp);
    setSearchIp("");
  };

  return (
    <div className="search-bar">
      <input
        value={searchIp}
        placeholder="Search for any IP address or domain"
        onChange={(e) => {
          setSearchIp(e.target.value);
        }}
        onKeyDown={(e) => {
          e.key === "Enter" && setGlobalIp();
        }}
      />
      <button onClick={() => setGlobalIp()}>
        <img
          src={process.env.PUBLIC_URL + "/images/icon-arrow.svg"}
          alt="arrow"
        />
      </button>
    </div>
  );
}

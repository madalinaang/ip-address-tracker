import { useIpContext } from "../context/IpContext";
import { useGetGeolocation } from "../hooks/useGetGeolocation";
import Geolocation from "./Geolocation";
import Loading from "./Loading";
import Error from "./Error";

export default function Info() {
  const { ip } = useIpContext();

  const { data: geolocation, error, isLoading } = useGetGeolocation(ip);

  return (
    <section className="info">
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {geolocation && <Geolocation geolocation={geolocation} />}
    </section>
  );
}

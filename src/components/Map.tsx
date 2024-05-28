import { useIpContext } from "../context/IpContext";
import { useGetGeolocation } from "../hooks/useGetGeolocation";
import Loading from "./Loading";
import Error from "./Error";
import LocationMap from "./LocationMap";

export default function Map() {
  const { ip } = useIpContext();

  const { data: geolocation, error, isLoading } = useGetGeolocation(ip);

  return (
    <section className="map">
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {geolocation && (
        <LocationMap
          lat={geolocation.location.lat}
          long={geolocation.location.lng}
        />
      )}
    </section>
  );
}

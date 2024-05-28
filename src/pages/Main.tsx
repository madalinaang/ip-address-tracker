import IpAddress from "../components/IpAddress";
import { IpProvider } from "../context/IpContext";
import Map from "../components/Map";

export default function Main() {
  return (
    <IpProvider>
      <main>
        <IpAddress />
        <Map />
      </main>
    </IpProvider>
  );
}

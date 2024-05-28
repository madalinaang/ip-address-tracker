import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: process.env.PUBLIC_URL + "/images/icon-location.svg",
  iconSize: [50, 60],
});

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: customIcon,
  iconUrl: customIcon,
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface LocationMapProps {
  lat: number;
  long: number;
}

export default function LocationMap({ lat, long }: LocationMapProps) {
  return (
    <MapContainer center={[lat, long]} zoom={18} className="location-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, long]} icon={customIcon} />
    </MapContainer>
  );
}

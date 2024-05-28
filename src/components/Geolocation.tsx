import InfoBlock from "./InfoBlock";

interface GeolocationProps {
  geolocation: any;
}

export default function Geolocation({ geolocation }: GeolocationProps) {
  return (
    <section className="geolocation">
      <InfoBlock title="ip address" content={geolocation.ip} />
      <div className="divider" />
      <InfoBlock
        title="location"
        content={`${geolocation.location.city}, ${geolocation.location.region}, ${geolocation.location.postalCode}`}
      />
      <div className="divider" />
      <InfoBlock
        title="timezone"
        content={`UTC${geolocation.location.timezone}`}
      />
      <div className="divider" />
      <InfoBlock title="isp" content={geolocation.isp} />
    </section>
  );
}

import { useQuery } from "@tanstack/react-query";
import { fetchGeolocation } from "../api/geolocation";

export const useGetGeolocation = (ip: string) => {
  return useQuery({
    queryKey: ["geolocation", ip],
    queryFn: () => fetchGeolocation(ip),
    staleTime: Infinity,
    retry: 1,
  });
};

import { selectServers } from "@qwhub/selectors";
import { useGetServersQuery } from "@qwhub/services/hub/hub";
import { useSelector } from "react-redux";
import { Server } from "./Server";

export default function Servers() {
  const servers = useSelector(selectServers);

  return (
    <div className="my-4 mb-6">
      <div className="grid grid-cols-servers gap-4 md:gap-6">
        {servers.map((server) => (
          <Server key={server.address} server={server} />
        ))}
      </div>
    </div>
  );
}

export function ServerPoller({ pollingInterval = 8 }) {
  const query = `hostname=${import.meta.env.VITE_SERVER_HOSTNAME}&empty=include`;
  useGetServersQuery(query, {
    pollingInterval: pollingInterval * 1000,
  });
}

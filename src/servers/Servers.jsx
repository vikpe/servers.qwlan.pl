import { useSelector } from "react-redux";
import { Server } from "./Server";
import { useGetServersQuery } from "#/services/hub/hub";
import { selectServers } from "#/selectors";

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

export function ServerPoller({ pollingInterval = 5000 }) {
  const query = `hostname=${import.meta.env.VITE_HOSTNAME}&empty=include`;
  useGetServersQuery(query, { pollingInterval });
}

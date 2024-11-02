import { totalSpectatorCount } from "@qwhub/servers/util.ts";
import { createSelector } from "@reduxjs/toolkit";

export function selectServers(state) {
  const query = `hostname=${import.meta.env.VITE_SERVER_HOSTNAME}&empty=include`;
  return state.hub.queries[`getServers("${query}")`]?.data ?? [];
}

export const selectQtvServers = createSelector(selectServers, (servers) => {
  const result = servers.filter((s) => s.qtv_stream.url !== "");
  result.sort((b, a) => {
    const countDiff = totalSpectatorCount(a) - totalSpectatorCount(b);
    return countDiff === 0 ? a.score - b.score : countDiff;
  });
  return result;
});

export const selectClients = createSelector(selectServers, (servers) => {
  const clients = [];

  function addClient(name, name_color, status, address) {
    clients.push({
      name,
      name_color,
      status,
      address,
    });
  }

  for (const server of servers) {
    const address = server.address;

    for (const client of server.players) {
      if (!client.is_bot) {
        addClient(client.name, client.name_color, "Playing", address);
      }
    }

    for (const clientName of server.spectator_names) {
      addClient(clientName, "", "Spectating", address);
    }

    for (const clientName of server.qtv_stream.spectator_names) {
      addClient(clientName, "", "Spectating (QTV)", address);
    }
  }

  clients.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  return clients;
});

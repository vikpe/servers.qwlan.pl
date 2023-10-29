import { createSelector } from "@reduxjs/toolkit";

export function selectServers(state) {
  const query = `hostname=${import.meta.env.VITE_HOSTNAME}&empty=include`;
  return state.hub.queries[`getServers("${query}")`]?.data ?? [];
}

export const selectClients = createSelector(selectServers, (servers) => {
  const clients = [];

  function addClient(name, name_color = "", status, address) {
    clients.push({
      name,
      name_color,
      status,
      address,
    });
  }

  servers.forEach((server) => {
    const address = server.address;

    server.players.forEach((client) => {
      if (!client.is_bot) {
        addClient(client.name, client.name_color, "Playing", address);
      }
    });

    server.spectator_names.forEach((clientName) => {
      addClient(clientName, "", "Spectating", address);
    });

    server.qtv_stream.spectator_names.forEach((clientName) => {
      addClient(clientName, "", "Spectating (QTV)", address);
    });
  });

  clients.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  return clients;
});

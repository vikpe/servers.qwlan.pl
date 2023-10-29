import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformDemos } from "./demoTransform";
import { transformServer } from "./serverTransform";
import { compareServers } from "#/services/hub/serverSort";

export const hubApi = createApi({
  reducerPath: "hub",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hubapi.quakeworld.nu/v2/" }),
  endpoints: (build) => ({
    getDemos: build.query({
      query: () => `demos/?qtv_address=${import.meta.env.VITE_HOSTNAME}`,
      transformResponse: transformDemos,
    }),
    getServer: build.query({
      query: (address) => `servers/${address}`,
      transformResponse: (server) => transformServer(server),
    }),
    getServers: build.query({
      query: (query = "") =>
        query ? `servers/mvdsv/?${query}` : "servers/mvdsv/",
      transformResponse: (servers) => {
        servers = servers.map(transformServer);
        servers.sort(compareServers);
        return servers;
      },
    }),
    getStreams: build.query({
      query: () => "streams",
      transformResponse: (streams) => {
        streams.sort((a, b) => b.viewers - a.viewers);
        return streams;
      },
    }),
    getLastscores: build.query({
      query: (address) => `servers/${address}/lastscores`,
      transformResponse: (lastscores) => {
        lastscores.reverse();
        return lastscores.filter((e) => e.teams.length + e.players.length > 0);
      },
    }),
  }),
});

export const {
  useGetDemosQuery,
  useGetServerQuery,
  useGetServersQuery,
  useGetStreamsQuery,
  useGetLastscoresQuery,
} = hubApi;

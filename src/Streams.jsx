import { useGetStreamsQuery } from "#/services/hub/hub";
import { TwitchButton } from "./Buttons";

export function FeaturedStreams() {
  const { data: streams = [] } = useGetStreamsQuery(null, {
    pollingInterval: 15500,
  });

  return (
    <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
      {streams
        .filter((s) => s.is_featured)
        .map((stream) => (
          <FeaturedStream key={stream.channel} stream={stream} />
        ))}
    </div>
  );
}

const FeaturedStream = (props) => {
  const { stream } = props;

  return <TwitchButton {...stream} className="block px-3 py-1.5 rounded-lg" />;
};

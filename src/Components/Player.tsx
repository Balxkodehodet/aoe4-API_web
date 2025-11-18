import { AppContext } from "./AppContext";
import { useContext, useEffect } from "react";
export default function Player() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "AppContext is undefined, make sure you are using AppProvider"
    );
  }
  const { setData, setError, data, error, id } = ctx;
  const url = `https://aoe4world.com/api/v0/players/${id}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };
    fetchData();
  }, [url]);
  console.log("Player component data:", data);
  return (
    <div>
      <h2>Player Component</h2>
      <p>This is the Player component.</p>
      {data ? (
        <div className="player-data">
          <h3>Player Data:</h3>
          <pre>
            <img src={data?.avatars?.full} />
            {"\n"}- Name: {data?.name} {"\n"}- SteamID :{" "}
            <a href={`https://steamcommunity.com/profiles/${data?.steam_id}`}>
              Steam profile
            </a>
            {"\n"}- Qm 1v1 rank: {data?.modes?.qm_1v1?.rank} {"\n"}- Qm 1v1
            rating: {data?.modes?.qm_1v1?.rating}
            {"\n"}- Civilization: {""}
            {data?.modes?.qm_1v1?.civilizations?.map(
              (civ: {
                civilization: string;
                pick_rate: string;
                win_rate: string;
              }) => {
                return (
                  civ?.civilization +
                  "\n- Pick rate: " +
                  civ?.pick_rate +
                  "%" +
                  "\n- Win rate: " +
                  civ?.win_rate +
                  "%"
                );
              }
            )}{" "}
            {"\n"}- Country: {data?.country} {"\n"}- Games Played:{" "}
            {data?.modes?.qm_1v1?.games_count} {"\n"}- Wins:{" "}
            {data?.modes?.qm_1v1?.wins_count} {"\n"}- Win Rate:{" "}
            {data?.modes?.qm_1v1?.win_rate}%{"\n"}- Last Online:{" "}
            {data?.modes?.qm_1v1?.last_game_at
              .replace("T", " Time: ")
              .replace("Z", "")}
          </pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

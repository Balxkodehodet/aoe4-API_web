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
            <img src={data?.avatars?.full} /> - Name - {data?.name} - SteamID :{" "}
            <a href={`https://steamcommunity.com/profiles/${data?.steam_id}`}>
              Steam profile
            </a>{" "}
            -
          </pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

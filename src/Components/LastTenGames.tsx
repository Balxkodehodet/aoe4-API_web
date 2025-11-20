import { AppContext } from "./AppContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
export default function LastTenGames() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "AppContext is undefined, make sure you are using AppProvider"
    );
  }
  const { setData, setError, data, error, id, setId, loading, setLoading } =
    ctx;
  let url = `https://aoe4world.com/api/v0/players/${id}/games?limit=10`;
  useEffect(() => {
    const fetchData = async () => {
      let cachedProfileId = `players_id_${id}`;
      let cachedDataStorage = localStorage.getItem(cachedProfileId);
      setLoading(true);
      if (cachedDataStorage) {
        localStorage.removeItem(cachedProfileId);
        //setData(JSON.parse(cachedDataStorage));
        setLoading(false);
      } else {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
          localStorage.setItem(cachedProfileId, JSON.stringify(json));
        } catch (err) {
          setError("Error fetching data");
          console.error(err);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log("Player component data:", data);
  return (
    <>
      <h1>Last Ten Games Played:</h1>
      <div className="lastTenGamesParent">
        <br></br>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {data &&
          data?.games?.map((game: any) => {
            return (
              <div className="player10lastgames" key={game.game_id}>
                <h2>
                  Map: {game.map} <br></br>
                  <br></br>
                  Team 1:
                </h2>{" "}
                <br></br>
                <Link
                  onClick={() => setId(game?.teams[0][0]?.player?.profile_id)}
                  to={`/player/${game?.teams[0][0]?.player?.profile_id}`}
                >
                  {" "}
                  Player 1: {game?.teams[0][0]?.player?.name}
                </Link>
                <br></br> Result:{game?.teams[0][0]?.player?.result}
                <br></br>
                <br></br>
                <Link
                  onClick={() => setId(game?.teams[0][1]?.player?.profile_id)}
                  to={`/player/${game?.teams[0][1]?.player?.profile_id}`}
                >
                  Player 2:
                  {game?.teams[0][1]?.player?.name}
                </Link>
                <br></br> Result:{game?.teams[0][0]?.player?.result} <br></br>
                <br></br>
                <h2>Team 2: </h2>
                <br></br>
                <Link
                  onClick={() => setId(game?.teams[1][0]?.player?.profile_id)}
                  to={`/player/${game?.teams[1][0]?.player?.profile_id}`}
                >
                  {" "}
                  Player 1: {game?.teams[1][0]?.player?.name}
                </Link>
                <br></br> Result:{game?.teams[1][0]?.player?.result}
                <br></br>
                <br></br>
                <Link
                  onClick={() => setId(game?.teams[1][1]?.player?.profile_id)}
                  to={`/player/${game?.teams[1][1]?.player?.profile_id}`}
                >
                  Player 2:
                  {game?.teams[1][1]?.player?.name}
                </Link>
                <br></br> Result:{game?.teams[1][1]?.player?.result}
              </div>
            );
          })}
      </div>
    </>
  );
}

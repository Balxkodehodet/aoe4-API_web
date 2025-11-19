import { Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./Components/AppContext.tsx";

function App() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "AppContext is undefined, make sure you are using AppProvider"
    );
  }
  const { data, setData, error, setError, setId } = ctx;
  const [searchName, setSearchName] = useState<string>("all");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  let url = ``;
  useEffect(() => {
    const fetchData = async () => {
      url = `https://aoe4world.com/api/v0/players/search?query=${searchName}&page=${page}`;
      let cachedData = `players_page_query_${searchName}_page_${page}`;
      let cachedDataStorage = localStorage.getItem(cachedData);
      setLoading(true);
      if (cachedDataStorage) {
        setData(JSON.parse(cachedDataStorage));
        setLoading(false);
      } else {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
          localStorage.setItem(cachedData, JSON.stringify(json));
        } catch (err) {
          setError("Error fetching data");
          console.error(err);
        }
      }
      setLoading(false);
    };
    fetchData();
  }, [url, page]);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // The data fetching is handled by useEffect when searchName changes
  }
  if (data) {
    console.log(
      "player[0] qm_1v1 rank:",
      data.players?.[0]?.leaderboards?.qm_1v1?.rank
    );
  }
  console.log(data);

  function onClickId(profile_id: number) {
    setId(profile_id);
  }
  return (
    <main className="app-content">
      <h2>Welcome</h2>
      <p>This a website dedicated to Age of empires 4, players and stats.</p>
      <form className="playerForm" onSubmit={handleSubmit}>
        <label>
          Search Player:
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
        {page && (
          <>
            <p>Page: {page}</p>{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                setPage(() => page - 1);
              }}
              type="button"
            >
              Previous Page
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setPage(() => page + 1);
              }}
              type="button"
            >
              Next Page
            </button>
          </>
        )}
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <div>
          <h3>
            {data?.total_count} Search Results, showing {data?.count}:
          </h3>
          <ul className="players-list">
            {data?.players?.map((player: any) => (
              <li className="player" key={player.profile_id}>
                <img
                  className="player-avatar"
                  src={player.avatars?.full ?? null}
                  alt={`${player.name} avatar`}
                />
                <p>
                  <b>Name:</b> {player.name} - <br></br>
                  <b>Country:</b> {player.country} <br></br> Qm
                  <b>1v1 Rank:</b> {player.leaderboards?.qm_1v1?.rank ?? "N/A"}{" "}
                  <br></br>
                  <b>Qm 1v1 Rating:</b>{" "}
                  {player.leaderboards?.qm_1v1?.rating ?? "N/A"}
                  <Link
                    onClick={() => onClickId(player.profile_id)}
                    to={`/player/${player.profile_id}`}
                  >
                    {" "}
                    <br></br>- Click to see more info
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default App;

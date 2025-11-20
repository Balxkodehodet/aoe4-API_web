//import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useContext, useEffect, useState } from "react";
import "../App.css";

export default function ComparePlayers() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "AppContext is undefined, make sure you are using AppProvider"
    );
  }
  const { setData, setError, data, error, id, setId, loading, setLoading } =
    ctx;
  // Component state to track if player searches have been made
  const [playerOne, setPlayerOne] = useState<boolean>(false);
  const [playerTwo, setPlayerTwo] = useState<boolean>(false);
  const [searchNamePlayerOne, setSearchNamePlayerOne] = useState<string>("");
  const [searchNamePlayerTwo, setSearchNamePlayerTwo] = useState<string>("");
  const [compareData, setCompareData] = useState<any>(null);
  const [compareData2, setCompareData2] = useState<any>(null);
  // Handlers for player 1 search submissions
  function playerOneSearch(e: any) {
    e.preventDefault();
    setPlayerOne(true);
  }
  // Handlers for player 2 search submissions
  function playerTwoSearch(e: any) {
    e.preventDefault();
    setPlayerTwo(true);
  }

  useEffect(() => {
    async function fetchCompareData() {
      let url = `https://aoe4world.com/api/v0/players/search?query=${searchNamePlayerOne}`;
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("Player 1 fetched data:", json);
        setCompareData(json);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
    fetchCompareData();
  }, [searchNamePlayerOne]);

  useEffect(() => {
    async function fetchCompareData() {
      let url = `https://aoe4world.com/api/v0/players/search?query=${searchNamePlayerTwo}`;
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("Player 2 fetched data:", json);
        setCompareData2(json);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
    fetchCompareData();
  }, [searchNamePlayerTwo]);

  return (
    <>
      <div className="comparePlayersForm">
        <h2>Compare Players</h2>
        <p>This is where the Compare Players component will go.</p>
        <form>
          <label>
            Player 1:
            <input
              value={searchNamePlayerOne}
              onChange={(e) => setSearchNamePlayerOne(e.target.value)}
              type="search"
              name="player1"
            />
            <button type="submit" onClick={(e) => playerOneSearch(e)}>
              Search Player 1
            </button>
          </label>
          <label>
            Player 2:
            <input
              value={searchNamePlayerTwo}
              onChange={(e) => setSearchNamePlayerTwo(e.target.value)}
              type="search"
              name="player2"
            />
            <button type="submit" onClick={(e) => playerTwoSearch(e)}>
              Search Player 2
            </button>
          </label>
        </form>
      </div>
      {error && <p>{error}</p>}
      <div className="playerone-and-playertwo">
        <div className="playerone">
          {playerOne && compareData && (
            <>
              <p>Player one search clicked</p>
              {loading && searchNamePlayerOne && (
                <p>Loading player 1 data...</p>
              )}
              {compareData?.players?.map((player: any) => {
                return (
                  <div key={player.profile_id} className="player">
                    <h3>{player.name}</h3>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="playertwo">
          {playerTwo && compareData2 && (
            <>
              <p>Player Two search clicked</p>
              {loading && searchNamePlayerTwo && (
                <p>Loading player 2 data...</p>
              )}
              {compareData2?.players?.map((player: any) => {
                return (
                  <div key={player.profile_id} className="player">
                    <h3>{player.name}</h3>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

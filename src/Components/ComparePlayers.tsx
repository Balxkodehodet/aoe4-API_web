import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useContext, useEffect, useState } from "react";
import "../App.css";
import Checked from "../assets/check.png";
export default function ComparePlayers() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "AppContext is undefined, make sure you are using AppProvider"
    );
  }
  const {
    error,
    loading,
    setLoading,
    compareData,
    compareData2,
    setCompareData,
    setCompareData2,
    unique,
    setUnique,
    unique2,
    setUnique2,
    player,
    setPlayer,
    player2,
    setPlayer2,
  } = ctx;
  // Component state to track if player searches have been made
  const [playerOne, setPlayerOne] = useState<boolean>(false);
  const [playerTwo, setPlayerTwo] = useState<boolean>(false);
  const [searchNamePlayerOne, setSearchNamePlayerOne] = useState<string>("");
  const [searchNamePlayerTwo, setSearchNamePlayerTwo] = useState<string>("");
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

  function onPlayerSubmit1(e: any) {
    e.preventDefault();
    playerOneSearch(e);
    const form = e.target;
    const player1 = form.player1.value;
    setSearchNamePlayerOne(player1);
    console.log("Compare Player 1 form submitted");
  }
  function onPlayerSubmit2(e: any) {
    e.preventDefault();
    playerTwoSearch(e);
    const form = e.target;
    const player2 = form.player2.value;
    setSearchNamePlayerTwo(player2);
    console.log("Compare Player 2 form submitted");
  }

  return (
    <>
      <div className="comparePlayersForm">
        <h2>Compare Players</h2>
        <p></p>
        <form onSubmit={onPlayerSubmit1}>
          <label>
            Player 1:
            <input type="search" name="player1" />
            <button type="submit">Search Player 1</button>
          </label>
        </form>
        <form onSubmit={onPlayerSubmit2}>
          <label>
            Player 2:
            <input type="search" name="player2" />
            <button type="submit">Search Player 2</button>
          </label>
        </form>
      </div>
      {error && <p>{error}</p>}
      {unique && unique2 && (
        <div className="compare-players-calculate-button">
          <br></br>
          <h2>
            Both players {player.name} and {player2.name} selected for
            comparison:
          </h2>
          <br></br>
          <Link to={`/compare-two-players/${unique}/vs/${unique2}`}>
            <button onClick={() => console.log("Compare players clicked")}>
              Compare Players
            </button>
          </Link>
        </div>
      )}
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
                  <div
                    onClick={() => {
                      setUnique(player.profile_id);
                      setPlayer(player);
                      console.log("Player 1 selected:", player);
                    }}
                    style={
                      unique === player.profile_id
                        ? { backgroundColor: "var(--deep-space-blue)" }
                        : { backgroundColor: "var(--molten-lava)" }
                    }
                    key={player.profile_id}
                    className="playersecondary"
                  >
                    <h3>{player.name}</h3>
                    {unique === player.profile_id && (
                      <img
                        className="checkedimg"
                        src={Checked}
                        alt="check mark icon"
                      />
                    )}
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
                  <div
                    onClick={() => {
                      setUnique2(player.profile_id);
                      setPlayer2(player);
                    }}
                    style={
                      unique2 === player.profile_id
                        ? { backgroundColor: "var(--deep-space-blue)" }
                        : { backgroundColor: "var(--molten-lava)" }
                    }
                    key={player.profile_id}
                    className="playersecondary"
                  >
                    <h3>{player.name}</h3>
                    {unique2 === player.profile_id && (
                      <img
                        className="checkedimg"
                        src={Checked}
                        alt="check mark icon"
                      />
                    )}
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

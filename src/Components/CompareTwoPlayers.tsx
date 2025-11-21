import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useContext, useEffect, useState } from "react";
import "../App.css";
import Checked from "../assets/check.png";
export default function CompareTwoPlayers() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "AppContext is undefined, make sure you are using AppProvider"
    );
  }
  const {
    setError,
    error,
    id,
    setId,
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
  console.log("Player 1:", player);
  console.log("Player 2:", player2);
  return (
    <>
      <div>CompareTwoPlayers Component</div>;
      {player && player2 && (
        <>
          <h1>Comparison Results:</h1>
          <div className="comparisonResults">
            <h2>Player 1: </h2>
            <div className="compareplayer1">
              <img src={player?.avatars?.full} />
              <h2>{player?.name}</h2>
              <p>
                {player?.leaderboards?.qm_1v1?.rank ? (
                  <p
                    style={
                      player?.leaderboards?.qm_1v1?.rank >=
                        player2?.leaderboards?.qm_1v1?.rank ||
                      player2?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Rank: {player?.leaderboards?.qm_1v1?.rank}
                    </strong>
                    {player?.leaderboards?.qm_1v1?.rank >=
                      player2?.leaderboards?.qm_1v1?.rank ||
                    player2?.leaderboards?.qm_1v1?.rank === undefined ||
                    null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <p>Loser</p>
                    )}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rank Data</p>
                )}{" "}
                <br></br>
                {player?.leaderboards?.qm_1v1?.rating ? (
                  <p
                    style={
                      player?.leaderboards?.qm_1v1?.rating >=
                        player2?.leaderboards?.qm_1v1?.rating ||
                      player2?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Rating: {player?.leaderboards?.qm_1v1?.rating}
                    </strong>
                    {player?.leaderboards?.qm_1v1?.rating >=
                      player2?.leaderboards?.qm_1v1?.rating ||
                    player2?.leaderboards?.qm_1v1?.rating === undefined ||
                    null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      <p>Loser</p>
                    )}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rating Data</p>
                )}
                <br></br>
                {player?.leaderboards?.qm_1v1?.games_count ? (
                  <p
                    style={
                      player?.leaderboards?.qm_1v1?.games_count >=
                        player2?.leaderboards?.qm_1v1?.games_count ||
                      player2?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Games count:
                      {player?.leaderboards?.qm_1v1?.games_count}
                    </strong>
                    {player?.leaderboards?.qm_1v1?.games_count >=
                      player2?.leaderboards?.qm_1v1?.games_count ||
                    player2?.leaderboards?.qm_1v1?.games_count === undefined ||
                    null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <p>Loser</p>
                    )}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm games count data</p>
                )}
                <br></br>
                {player?.leaderboards?.qm_1v1?.wins_count ? (
                  <p
                    style={
                      player?.leaderboards?.qm_1v1?.wins_count >=
                        player2?.leaderboards?.qm_1v1?.wins_count ||
                      player2?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Wins count:
                      {player?.leaderboards?.qm_1v1?.wins_count}
                    </strong>
                    {player?.leaderboards?.qm_1v1?.wins_count >=
                      player2?.leaderboards?.qm_1v1?.wins_count ||
                    player2?.leaderboards?.qm_1v1?.wins_count === undefined ||
                    null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <p>Loser</p>
                    )}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 wins count data</p>
                )}
                <br></br>
                {player?.leaderboards?.qm_1v1?.win_rate ? (
                  <p
                    style={
                      player?.leaderboards?.qm_1v1?.win_rate >=
                        player2?.leaderboards?.qm_1v1?.win_rate ||
                      player2?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Win rate: {player?.leaderboards?.qm_1v1?.win_rate}%
                    </strong>
                    {player?.leaderboards?.qm_1v1?.win_rate >=
                      player2?.leaderboards?.qm_1v1?.win_rate ||
                    player2?.leaderboards?.qm_1v1?.win_rate === undefined ||
                    null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <p>Loser</p>
                    )}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 win rate data</p>
                )}
                <br></br>
                {player?.leaderboards?.qm_1v1?.losses_count ? (
                  <p
                    style={
                      player?.leaderboards?.qm_1v1?.losses_count >=
                        player2?.leaderboards?.qm_1v1?.losses_count ||
                      player2?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Losses count:
                      {player?.leaderboards?.qm_1v1?.losses_count}
                    </strong>
                    {player?.leaderboards?.qm_1v1?.losses_count >=
                      player2?.leaderboards?.qm_1v1?.losses_count ||
                    player2?.leaderboards?.qm_1v1?.losses_count === undefined ||
                    null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <p>Loser</p>
                    )}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 losses count data</p>
                )}
                <br></br>
                {player?.leaderboards?.qm_1v1?.streak ? (
                  <p
                    style={
                      player?.leaderboards?.qm_1v1?.streak >=
                        player2?.leaderboards?.qm_1v1?.streak ||
                      player2?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 1v1 streak: {player?.leaderboards?.qm_1v1?.streak}
                    </strong>
                    {player?.leaderboards?.qm_1v1?.streak >=
                      player2?.leaderboards?.qm_1v1?.streak ||
                    player2?.leaderboards?.qm_1v1?.streak === undefined ||
                    null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <p>Loser</p>
                    )}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>Player has no rank in qm 1v1</p>
                )}
              </p>
            </div>
            <h2>Player 2: </h2>
            <div className="compareplayer2">
              <img src={player2?.avatars?.full} />
              <h2>{player2?.name}</h2>
              <p>
                {player2?.leaderboards?.qm_1v1?.rank ? (
                  <p
                    style={
                      player2?.leaderboards?.qm_1v1?.rank >=
                        player?.leaderboards?.qm_1v1?.rank ||
                      player?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Rank: {player2?.leaderboards?.qm_1v1?.rank}
                    </strong>
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rank Data</p>
                )}{" "}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.rating ? (
                  <p
                    style={
                      player2?.leaderboards?.qm_1v1?.rating >=
                        player?.leaderboards?.qm_1v1?.rating ||
                      player?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Rating: {player2?.leaderboards?.qm_1v1?.rating}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rating Data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.games_count ? (
                  <p
                    style={
                      player2?.leaderboards?.qm_1v1?.games_count >=
                        player?.leaderboards?.qm_1v1?.games_count ||
                      player?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Games count:
                    {player2?.leaderboards?.qm_1v1?.games_count}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm games count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.wins_count ? (
                  <p
                    style={
                      player2?.leaderboards?.qm_1v1?.wins_count >=
                        player?.leaderboards?.qm_1v1?.wins_count ||
                      player?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Wins count:
                    {player2?.leaderboards?.qm_1v1?.wins_count}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 wins count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.win_rate ? (
                  <p
                    style={
                      player2?.leaderboards?.qm_1v1?.win_rate >=
                        player?.leaderboards?.qm_1v1?.win_rate ||
                      player?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Win rate: {player2?.leaderboards?.qm_1v1?.win_rate}
                    %`
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 win rate data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.losses_count ? (
                  <p
                    style={
                      player2?.leaderboards?.qm_1v1?.losses_count >=
                        player?.leaderboards?.qm_1v1?.losses_count ||
                      player?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Losses count:
                    {player2?.leaderboards?.qm_1v1?.losses_count}`
                  </p>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 losses count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.streak ? (
                  <p
                    style={
                      player2?.leaderboards?.qm_1v1?.streak >=
                        player?.leaderboards?.qm_1v1?.streak ||
                      player?.leaderboards?.qm_1v1?.rank === undefined ||
                      null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    `Qm 1v1 streak: ${player2?.leaderboards?.qm_1v1?.streak}`
                  </p>
                ) : (
                  <p style={{ color: "red" }}>Player has no rank in qm 1v1</p>
                )}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

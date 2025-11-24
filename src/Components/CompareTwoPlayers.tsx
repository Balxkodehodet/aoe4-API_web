import { AppContext } from "./AppContext";
import { useContext } from "react";
import "../App.css";
import Checked from "../assets/check.png";
import Rejected from "../assets/decline.png";
export default function CompareTwoPlayers() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "AppContext is undefined, make sure you are using AppProvider"
    );
  }
  const { player, player2 } = ctx;
  console.log("Player 1:", player);
  console.log("Player 2:", player2);
  return (
    <>
      <div>CompareTwoPlayers Component</div>
      {player && player2 && (
        <>
          <h1>Comparison Results:</h1>
          <div className="comparisonResults">
            <h2>Player 1: </h2>
            <div className="compareplayer1">
              <img src={player?.avatars?.full} />
              <h2>{player?.name}</h2>
              <h3>Qm - 1v1:</h3>
              <div>
                {player?.leaderboards?.qm_1v1?.rank ? (
                  <div
                    style={
                      player?.leaderboards?.qm_1v1?.rank <=
                        player2?.leaderboards?.qm_1v1?.rank ||
                      player2?.leaderboards?.qm_1v1?.rank === undefined ||
                      player2?.leaderboards?.qm_1v1?.rank == null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Rank: {player?.leaderboards?.qm_1v1?.rank}
                    </strong>
                    {player?.leaderboards?.qm_1v1?.rank <=
                      player2?.leaderboards?.qm_1v1?.rank ||
                    player2?.leaderboards?.qm_1v1?.rank === undefined ||
                    player2?.leaderboards?.qm_1v1?.rank === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser <img src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    No Qm 1v1 Rank Data
                    <img className="rejected" src={Rejected} />
                  </div>
                )}{" "}
                <br></br>
                {player?.leaderboards?.qm_1v1?.rating ? (
                  <div
                    style={
                      player?.leaderboards?.qm_1v1?.rating >=
                        player2?.leaderboards?.qm_1v1?.rating ||
                      player2?.leaderboards?.qm_1v1?.rating === undefined ||
                      player2?.leaderboards?.qm_1v1?.rating === null
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
                    player2?.leaderboards?.qm_1v1?.rating === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rating Data</p>
                )}
                <br></br>
                {player?.leaderboards?.qm_1v1?.games_count ? (
                  <div
                    style={
                      player?.leaderboards?.qm_1v1?.games_count >=
                        player2?.leaderboards?.qm_1v1?.games_count ||
                      player2?.leaderboards?.qm_1v1?.games_count ===
                        undefined ||
                      player2?.leaderboards?.qm_1v1?.games_count === null
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
                    player2?.leaderboards?.qm_1v1?.games_count === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm games count data</p>
                )}
                <br></br>
                {player?.leaderboards?.qm_1v1?.wins_count ? (
                  <div
                    style={
                      player?.leaderboards?.qm_1v1?.wins_count >=
                        player2?.leaderboards?.qm_1v1?.wins_count ||
                      player2?.leaderboards?.qm_1v1?.wins_count === undefined ||
                      player2?.leaderboards?.qm_1v1?.wins_count === null
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
                    player2?.leaderboards?.qm_1v1?.wins_count === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 wins count data</p>
                )}
                <br></br>
                {player?.leaderboards?.qm_1v1?.win_rate ? (
                  <div
                    style={
                      player?.leaderboards?.qm_1v1?.win_rate >=
                        player2?.leaderboards?.qm_1v1?.win_rate ||
                      player2?.leaderboards?.qm_1v1?.win_rate === undefined ||
                      player2?.leaderboards?.qm_1v1?.win_rate === null
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
                    player2?.leaderboards?.qm_1v1?.win_rate === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 win rate data</p>
                )}
                <br></br>
                {player?.leaderboards?.qm_1v1?.losses_count ? (
                  <div
                    style={
                      player?.leaderboards?.qm_1v1?.losses_count <=
                        player2?.leaderboards?.qm_1v1?.losses_count ||
                      player2?.leaderboards?.qm_1v1?.losses_count ===
                        undefined ||
                      player2?.leaderboards?.qm_1v1?.losses_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Losses count:
                      {player?.leaderboards?.qm_1v1?.losses_count}
                    </strong>
                    {player?.leaderboards?.qm_1v1?.losses_count <=
                      player2?.leaderboards?.qm_1v1?.losses_count ||
                    player2?.leaderboards?.qm_1v1?.losses_count === undefined ||
                    player2?.leaderboards?.qm_1v1?.losses_count === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 losses count data</p>
                )}
                <br></br>
                {player?.leaderboards?.qm_1v1?.streak ? (
                  <div
                    style={
                      player?.leaderboards?.qm_1v1?.streak >=
                        player2?.leaderboards?.qm_1v1?.streak ||
                      player2?.leaderboards?.qm_1v1?.streak === undefined ||
                      player2?.leaderboards?.qm_1v1?.streak === null
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
                    player2?.leaderboards?.qm_1v1?.streak === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>Player has no rank in qm 1v1</p>
                )}
                <br></br>
                <h3>Qm - 2v2 </h3>
                {player?.leaderboards?.qm_2v2?.rank ? (
                  <div
                    style={
                      player?.leaderboards?.qm_2v2?.rank <=
                        player2?.leaderboards?.qm_2v2?.rank ||
                      player2?.leaderboards?.qm_2v2?.rank === undefined ||
                      player2?.leaderboards?.qm_2v2?.rank === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 2v2 rank: {player?.leaderboards?.qm_1v1?.rank}
                    </strong>
                    {player?.leaderboards?.qm_2v2?.rank <=
                      player2?.leaderboards?.qm_2v2?.rank ||
                    player2?.leaderboards?.qm_2v2?.rank === undefined ||
                    player2?.leaderboards?.qm_2v2?.rank === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no rank in qm 2v2
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_2v2?.rating ? (
                  <div
                    style={
                      player?.leaderboards?.qm_2v2?.rating >=
                        player2?.leaderboards?.qm_2v2?.rating ||
                      player2?.leaderboards?.qm_2v2?.rating === undefined ||
                      player2?.leaderboards?.qm_2v2?.rating === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 2v2 rating: {player?.leaderboards?.qm_2v2?.rating}
                    </strong>
                    {player?.leaderboards?.qm_2v2?.rating >=
                      player2?.leaderboards?.qm_2v2?.rating ||
                    player2?.leaderboards?.qm_2v2?.rating === undefined ||
                    player2?.leaderboards?.qm_2v2?.rating === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no rating in qm 2v2
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_2v2?.games_count ? (
                  <div
                    style={
                      player?.leaderboards?.qm_2v2?.games_count >=
                        player2?.leaderboards?.qm_2v2?.games_count ||
                      player2?.leaderboards?.qm_2v2?.games_count ===
                        undefined ||
                      player2?.leaderboards?.qm_2v2?.games_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 2v2 games count:{" "}
                      {player?.leaderboards?.qm_2v2?.games_count}
                    </strong>
                    {player?.leaderboards?.qm_2v2?.games_count >=
                      player2?.leaderboards?.qm_2v2?.games_count ||
                    player2?.leaderboards?.qm_2v2?.games_count === undefined ||
                    player2?.leaderboards?.qm_2v2?.games_count === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no games count in qm 2v2
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_2v2?.wins_count ? (
                  <div
                    style={
                      player?.leaderboards?.qm_2v2?.wins_count >=
                        player2?.leaderboards?.qm_2v2?.wins_count ||
                      player2?.leaderboards?.qm_2v2?.wins_count === undefined ||
                      player2?.leaderboards?.qm_2v2?.wins_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 2v2 wins count:{" "}
                      {player?.leaderboards?.qm_2v2?.wins_count}
                    </strong>
                    {player?.leaderboards?.qm_2v2?.wins_count >=
                      player2?.leaderboards?.qm_2v2?.wins_count ||
                    player2?.leaderboards?.qm_2v2?.wins_count === undefined ||
                    player2?.leaderboards?.qm_2v2?.wins_count === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no wins count in qm 2v2
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_2v2?.win_rate ? (
                  <div
                    style={
                      player?.leaderboards?.qm_2v2?.win_rate >=
                        player2?.leaderboards?.qm_2v2?.win_rate ||
                      player2?.leaderboards?.qm_2v2?.win_rate === undefined ||
                      player2?.leaderboards?.qm_2v2?.win_rate === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 2v2 win rate: {player?.leaderboards?.qm_2v2?.win_rate}%
                    </strong>
                    {player?.leaderboards?.qm_2v2?.win_rate >=
                      player2?.leaderboards?.qm_2v2?.win_rate ||
                    player2?.leaderboards?.qm_2v2?.win_rate === undefined ||
                    player2?.leaderboards?.qm_2v2?.win_rate === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no win rate in qm 2v2
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_2v2?.losses_count ? (
                  <div
                    style={
                      player?.leaderboards?.qm_2v2?.losses_count <=
                        player2?.leaderboards?.qm_2v2?.losses_count ||
                      player2?.leaderboards?.qm_2v2?.losses_count ===
                        undefined ||
                      player2?.leaderboards?.qm_2v2?.losses_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 2v2 losses count:{" "}
                      {player?.leaderboards?.qm_2v2?.losses_count}
                    </strong>
                    {player?.leaderboards?.qm_2v2?.losses_count <=
                      player2?.leaderboards?.qm_2v2?.losses_count ||
                    player2?.leaderboards?.qm_2v2?.losses_count === undefined ||
                    player2?.leaderboards?.qm_2v2?.losses_count === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "green" }}>
                    Player has no losses count in qm 2v2
                    <img
                      className="winner"
                      src={Checked}
                      alt="checked success image"
                    />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_2v2?.streak ? (
                  <div
                    style={
                      player?.leaderboards?.qm_2v2?.streak >=
                        player2?.leaderboards?.qm_2v2?.streak ||
                      player2?.leaderboards?.qm_2v2?.streak === undefined ||
                      player2?.leaderboards?.qm_2v2?.streak === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 2v2 streak: {player?.leaderboards?.qm_2v2?.streak}
                    </strong>
                    {player?.leaderboards?.qm_2v2?.streak >=
                      player2?.leaderboards?.qm_2v2?.streak ||
                    player2?.leaderboards?.qm_2v2?.streak === undefined ||
                    player2?.leaderboards?.qm_2v2?.streak === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no streak in qm 2v2
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                {/* HERE IT IS */}
                <h3>Qm - 3v3:</h3>
                <div>
                  {player?.leaderboards?.qm_3v3?.rank ? (
                    <div
                      style={
                        player?.leaderboards?.qm_3v3?.rank <=
                          player2?.leaderboards?.qm_3v3?.rank ||
                        player2?.leaderboards?.qm_3v3?.rank === undefined ||
                        player2?.leaderboards?.qm_3v3?.rank == null
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      <strong>
                        Qm 3v3 Rank: {player?.leaderboards?.qm_3v3?.rank}
                      </strong>
                      {player?.leaderboards?.qm_3v3?.rank <=
                        player2?.leaderboards?.qm_3v3?.rank ||
                      player2?.leaderboards?.qm_3v3?.rank === undefined ||
                      player2?.leaderboards?.qm_3v3?.rank === null ? (
                        <>
                          - Winner
                          <img className="winner" src={Checked} alt="" />
                        </>
                      ) : (
                        <>
                          {" "}
                          - Loser
                          <img className="rejected" src={Rejected} />
                        </>
                      )}
                    </div>
                  ) : (
                    <div style={{ color: "red" }}>
                      No Qm 3v3 Rank Data
                      <img
                        className="rejected"
                        src={Rejected}
                        alt="A rejection or decline cross symbol"
                      />
                    </div>
                  )}{" "}
                  <br></br>
                  {player?.leaderboards?.qm_3v3?.rating ? (
                    <div
                      style={
                        player?.leaderboards?.qm_3v3?.rating >=
                          player2?.leaderboards?.qm_3v3?.rating ||
                        player2?.leaderboards?.qm_3v3?.rating === undefined ||
                        player2?.leaderboards?.qm_3v3?.rating === null
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      <strong>
                        Qm 3v3 Rating: {player?.leaderboards?.qm_3v3?.rating}
                      </strong>
                      {player?.leaderboards?.qm_3v3?.rating >=
                        player2?.leaderboards?.qm_3v3?.rating ||
                      player2?.leaderboards?.qm_3v3?.rating === undefined ||
                      player2?.leaderboards?.qm_3v3?.rating === null ? (
                        <>
                          - Winner
                          <img
                            className="winner"
                            src={Checked}
                            alt="winner or accepted symbol"
                          />
                        </>
                      ) : (
                        <>
                          {" "}
                          - Loser
                          <img className="rejected" src={Rejected} />
                        </>
                      )}
                    </div>
                  ) : (
                    <p style={{ color: "red" }}>No Qm 3v3 Rating Data</p>
                  )}
                  <br></br>
                  {player?.leaderboards?.qm_3v3?.games_count ? (
                    <div
                      style={
                        player?.leaderboards?.qm_3v3?.games_count >=
                          player2?.leaderboards?.qm_3v3?.games_count ||
                        player2?.leaderboards?.qm_3v3?.games_count ===
                          undefined ||
                        player2?.leaderboards?.qm_3v3?.games_count === null
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      <strong>
                        Qm 3v3 Games count:
                        {player?.leaderboards?.qm_3v3?.games_count}
                      </strong>
                      {player?.leaderboards?.qm_3v3?.games_count >=
                        player2?.leaderboards?.qm_3v3?.games_count ||
                      player2?.leaderboards?.qm_3v3?.games_count ===
                        undefined ||
                      player2?.leaderboards?.qm_3v3?.games_count === null ? (
                        <>
                          - Winner
                          <img className="winner" src={Checked} alt="" />
                        </>
                      ) : (
                        <>
                          {" "}
                          - Loser
                          <img className="rejected" src={Rejected} />
                        </>
                      )}
                    </div>
                  ) : (
                    <p style={{ color: "red" }}>No Qm games count data</p>
                  )}
                  <br></br>
                  {player?.leaderboards?.qm_3v3?.wins_count ? (
                    <div
                      style={
                        player?.leaderboards?.qm_3v3?.wins_count >=
                          player2?.leaderboards?.qm_3v3?.wins_count ||
                        player2?.leaderboards?.qm_3v3?.wins_count ===
                          undefined ||
                        player2?.leaderboards?.qm_3v3?.wins_count === null
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      <strong>
                        Qm 3v3 Wins count:
                        {player?.leaderboards?.qm_3v3?.wins_count}
                      </strong>
                      {player?.leaderboards?.qm_3v3?.wins_count >=
                        player2?.leaderboards?.qm_3v3?.wins_count ||
                      player2?.leaderboards?.qm_3v3?.wins_count === undefined ||
                      player2?.leaderboards?.qm_3v3?.wins_count === null ? (
                        <>
                          - Winner
                          <img className="winner" src={Checked} alt="" />
                        </>
                      ) : (
                        <>
                          {" "}
                          - Loser
                          <img className="rejected" src={Rejected} />
                        </>
                      )}
                    </div>
                  ) : (
                    <p style={{ color: "red" }}>No Qm 3v3 wins count data</p>
                  )}
                  <br></br>
                  {player?.leaderboards?.qm_3v3?.win_rate ? (
                    <div
                      style={
                        player?.leaderboards?.qm_3v3?.win_rate >=
                          player2?.leaderboards?.qm_3v3?.win_rate ||
                        player2?.leaderboards?.qm_3v3?.win_rate === undefined ||
                        player2?.leaderboards?.qm_3v3?.win_rate === null
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      <strong>
                        Qm 3v3 Win rate:{" "}
                        {player?.leaderboards?.qm_3v3?.win_rate}%
                      </strong>
                      {player?.leaderboards?.qm_3v3?.win_rate >=
                        player2?.leaderboards?.qm_3v3?.win_rate ||
                      player2?.leaderboards?.qm_3v3?.win_rate === undefined ||
                      player2?.leaderboards?.qm_3v3?.win_rate === null ? (
                        <>
                          - Winner
                          <img className="winner" src={Checked} alt="" />
                        </>
                      ) : (
                        <>
                          {" "}
                          - Loser
                          <img className="rejected" src={Rejected} />
                        </>
                      )}
                    </div>
                  ) : (
                    <div style={{ color: "red" }}>
                      No Qm 3v3 win rate data
                      <img className="rejected" src={Rejected} />
                    </div>
                  )}
                  <br></br>
                  {player?.leaderboards?.qm_3v3?.losses_count ? (
                    <div
                      style={
                        player?.leaderboards?.qm_3v3?.losses_count <=
                          player2?.leaderboards?.qm_3v3?.losses_count ||
                        player2?.leaderboards?.qm_3v3?.losses_count ===
                          undefined ||
                        player2?.leaderboards?.qm_3v3?.losses_count === null
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      <strong>
                        Qm 3v3 Losses count:
                        {player?.leaderboards?.qm_3v3?.losses_count}
                      </strong>
                      {player?.leaderboards?.qm_3v3?.losses_count <=
                        player2?.leaderboards?.qm_3v3?.losses_count ||
                      player2?.leaderboards?.qm_3v3?.losses_count ===
                        undefined ||
                      player2?.leaderboards?.qm_3v3?.losses_count === null ? (
                        <>
                          - Winner
                          <img className="winner" src={Checked} alt="" />
                        </>
                      ) : (
                        <>
                          {" "}
                          - Loser
                          <img className="rejected" src={Rejected} />
                        </>
                      )}
                    </div>
                  ) : (
                    <div style={{ color: "red" }}>
                      No Qm 3v3 losses count data
                      <img
                        className="winner"
                        src={Checked}
                        alt="checked success image"
                      />
                    </div>
                  )}
                  <br></br>
                  {player?.leaderboards?.qm_3v3?.streak ? (
                    <div
                      style={
                        player?.leaderboards?.qm_3v3?.streak >=
                          player2?.leaderboards?.qm_3v3?.streak ||
                        player2?.leaderboards?.qm_3v3?.streak === undefined ||
                        player2?.leaderboards?.qm_3v3?.streak === null
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      <strong>
                        {" "}
                        Qm 3v3 streak: {player?.leaderboards?.qm_3v3?.streak}
                      </strong>
                      {player?.leaderboards?.qm_3v3?.streak >=
                        player2?.leaderboards?.qm_3v3?.streak ||
                      player2?.leaderboards?.qm_3v3?.streak === undefined ||
                      player2?.leaderboards?.qm_3v3?.streak === null ? (
                        <>
                          - Winner
                          <img className="winner" src={Checked} alt="" />
                        </>
                      ) : (
                        <>
                          {" "}
                          - Loser
                          <img className="rejected" src={Rejected} />
                        </>
                      )}
                    </div>
                  ) : (
                    <div style={{ color: "red" }}>
                      Player has no rank in qm 3v3
                      <img className="rejected" src={Rejected} />
                    </div>
                  )}
                  <br></br>
                </div>
                <h3>Qm - 4v4 </h3>
                {player?.leaderboards?.qm_4v4?.rank ? (
                  <div
                    style={
                      player?.leaderboards?.qm_4v4?.rank <=
                        player2?.leaderboards?.qm_4v4?.rank ||
                      player2?.leaderboards?.qm_4v4?.rank === undefined ||
                      player2?.leaderboards?.qm_4v4?.rank === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 4v4 rank: {player?.leaderboards?.qm_4v4?.rank}
                    </strong>
                    {player?.leaderboards?.qm_4v4?.rank <=
                      player2?.leaderboards?.qm_4v4?.rank ||
                    player2?.leaderboards?.qm_4v4?.rank === undefined ||
                    player2?.leaderboards?.qm_4v4?.rank === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no rank in qm 4v4
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_4v4?.rating ? (
                  <div
                    style={
                      player?.leaderboards?.qm_4v4?.rating >=
                        player2?.leaderboards?.qm_4v4?.rating ||
                      player2?.leaderboards?.qm_4v4?.rating === undefined ||
                      player2?.leaderboards?.qm_4v4?.rating === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 4v4 rating: {player?.leaderboards?.qm_4v4?.rating}
                    </strong>
                    {player?.leaderboards?.qm_4v4?.rating >=
                      player2?.leaderboards?.qm_4v4?.rating ||
                    player2?.leaderboards?.qm_4v4?.rating === undefined ||
                    player2?.leaderboards?.qm_4v4?.rating === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no rating in qm 4v4
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_4v4?.games_count ? (
                  <div
                    style={
                      player?.leaderboards?.qm_4v4?.games_count >=
                        player2?.leaderboards?.qm_4v4?.games_count ||
                      player2?.leaderboards?.qm_4v4?.games_count ===
                        undefined ||
                      player2?.leaderboards?.qm_4v4?.games_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 4v4 games count:{" "}
                      {player?.leaderboards?.qm_4v4?.games_count}
                    </strong>
                    {player?.leaderboards?.qm_4v4?.games_count >=
                      player2?.leaderboards?.qm_4v4?.games_count ||
                    player2?.leaderboards?.qm_4v4?.games_count === undefined ||
                    player2?.leaderboards?.qm_4v4?.games_count === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no games count in qm 4v4
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_4v4?.wins_count ? (
                  <div
                    style={
                      player?.leaderboards?.qm_4v4?.wins_count >=
                        player2?.leaderboards?.qm_4v4?.wins_count ||
                      player2?.leaderboards?.qm_4v4?.wins_count === undefined ||
                      player2?.leaderboards?.qm_4v4?.wins_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 4v4 wins count:{" "}
                      {player?.leaderboards?.qm_4v4?.wins_count}
                    </strong>
                    {player?.leaderboards?.qm_4v4?.wins_count >=
                      player2?.leaderboards?.qm_4v4?.wins_count ||
                    player2?.leaderboards?.qm_4v4?.wins_count === undefined ||
                    player2?.leaderboards?.qm_4v4?.wins_count === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no wins count in qm 4v4
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_4v4?.win_rate ? (
                  <div
                    style={
                      player?.leaderboards?.qm_4v4?.win_rate >=
                        player2?.leaderboards?.qm_4v4?.win_rate ||
                      player2?.leaderboards?.qm_4v4?.win_rate === undefined ||
                      player2?.leaderboards?.qm_4v4?.win_rate === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 4v4 win rate: {player?.leaderboards?.qm_4v4?.win_rate}%
                    </strong>
                    {player?.leaderboards?.qm_4v4?.win_rate >=
                      player2?.leaderboards?.qm_4v4?.win_rate ||
                    player2?.leaderboards?.qm_4v4?.win_rate === undefined ||
                    player2?.leaderboards?.qm_4v4?.win_rate === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no win rate in qm 4v4
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_4v4?.losses_count ? (
                  <div
                    style={
                      player?.leaderboards?.qm_4v4?.losses_count <=
                        player2?.leaderboards?.qm_4v4?.losses_count ||
                      player2?.leaderboards?.qm_4v4?.losses_count ===
                        undefined ||
                      player2?.leaderboards?.qm_4v4?.losses_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 4v4 losses count:{" "}
                      {player?.leaderboards?.qm_4v4?.losses_count}
                    </strong>
                    {player?.leaderboards?.qm_4v4?.losses_count <=
                      player2?.leaderboards?.qm_4v4?.losses_count ||
                    player2?.leaderboards?.qm_4v4?.losses_count === undefined ||
                    player2?.leaderboards?.qm_4v4?.losses_count === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no losses count in qm 4v4
                    <img
                      className="winner"
                      src={Checked}
                      alt="A checked mark of success"
                    />
                  </div>
                )}
                <br></br>
                {player?.leaderboards?.qm_4v4?.streak ? (
                  <div
                    style={
                      player?.leaderboards?.qm_4v4?.streak >=
                        player2?.leaderboards?.qm_4v4?.streak ||
                      player2?.leaderboards?.qm_4v4?.streak === undefined ||
                      player2?.leaderboards?.qm_4v4?.streak === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      {" "}
                      Qm 4v4 streak: {player?.leaderboards?.qm_4v4?.streak}
                    </strong>
                    {player?.leaderboards?.qm_4v4?.streak >=
                      player2?.leaderboards?.qm_4v4?.streak ||
                    player2?.leaderboards?.qm_4v4?.streak === undefined ||
                    player2?.leaderboards?.qm_4v4?.streak === null ? (
                      <>
                        - Winner
                        <img className="winner" src={Checked} alt="" />
                      </>
                    ) : (
                      <>
                        {" "}
                        - Loser
                        <img className="rejected" src={Rejected} />
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    Player has no win rate in qm 4v4
                    <img className="rejected" src={Rejected} />
                  </div>
                )}
              </div>
            </div>
            <h2>Player 2: </h2>
            <div className="compareplayer2">
              <img src={player2?.avatars?.full} />
              <h2>{player2?.name}</h2>
              <h3>Qm - 1v1 : </h3>
              <div>
                {player2?.leaderboards?.qm_1v1?.rank ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.rank <=
                        player?.leaderboards?.qm_1v1?.rank ||
                      player?.leaderboards?.qm_1v1?.rank === undefined ||
                      player?.leaderboards?.qm_1v1?.rank === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Rank: {player2?.leaderboards?.qm_1v1?.rank}
                    </strong>
                    {player2?.leaderboards?.qm_1v1?.rank <=
                      player?.leaderboards?.qm_1v1?.rank ||
                    player?.leaderboards?.qm_1v1?.rank === undefined ||
                    player?.leaderboards?.qm_1v1?.rank === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rank Data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.rating ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.rating >=
                        player?.leaderboards?.qm_1v1?.rating ||
                      player?.leaderboards?.qm_1v1?.rating === undefined ||
                      player?.leaderboards?.qm_1v1?.rating === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Rating: {player2?.leaderboards?.qm_1v1?.rating}
                    {player2?.leaderboards?.qm_1v1?.rating >=
                      player?.leaderboards?.qm_1v1?.rating ||
                    player?.leaderboards?.qm_1v1?.rating === undefined ||
                    player?.leaderboards?.qm_1v1?.rating === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rating Data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.games_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.games_count >=
                        player?.leaderboards?.qm_1v1?.games_count ||
                      player?.leaderboards?.qm_1v1?.games_count === undefined ||
                      player?.leaderboards?.qm_1v1?.games_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Games count:
                    {player2?.leaderboards?.qm_1v1?.games_count}
                    {player2?.leaderboards?.qm_1v1?.games_count >=
                      player?.leaderboards?.qm_1v1?.games_count ||
                    player?.leaderboards?.qm_1v1?.games_count === undefined ||
                    player?.leaderboards?.qm_1v1?.games_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm games count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.wins_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.wins_count >=
                        player?.leaderboards?.qm_1v1?.wins_count ||
                      player?.leaderboards?.qm_1v1?.wins_count === undefined ||
                      player?.leaderboards?.qm_1v1?.wins_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Wins count:
                    {player2?.leaderboards?.qm_1v1?.wins_count}
                    {player2?.leaderboards?.qm_1v1?.wins_count >=
                      player?.leaderboards?.qm_1v1?.wins_count ||
                    player?.leaderboards?.qm_1v1?.wins_count === undefined ||
                    player?.leaderboards?.qm_1v1?.wins_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 wins count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.win_rate ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.win_rate >=
                        player?.leaderboards?.qm_1v1?.win_rate ||
                      player?.leaderboards?.qm_1v1?.win_rate === undefined ||
                      player?.leaderboards?.qm_1v1?.win_rate === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Win rate: {player2?.leaderboards?.qm_1v1?.win_rate}%
                    {player2?.leaderboards?.qm_1v1?.win_rate >=
                      player?.leaderboards?.qm_1v1?.win_rate ||
                    player?.leaderboards?.qm_1v1?.win_rate === undefined ||
                    player?.leaderboards?.qm_1v1?.win_rate === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 win rate data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.losses_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.losses_count <=
                        player?.leaderboards?.qm_1v1?.losses_count ||
                      player?.leaderboards?.qm_1v1?.losses_count ===
                        undefined ||
                      player?.leaderboards?.qm_1v1?.losses_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Losses count:
                    {player2?.leaderboards?.qm_1v1?.losses_count}
                    {player2?.leaderboards?.qm_1v1?.losses_count <=
                      player?.leaderboards?.qm_1v1?.losses_count ||
                    player?.leaderboards?.qm_1v1?.losses_count === undefined ||
                    player?.leaderboards?.qm_1v1?.losses_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 losses count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.streak ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.streak >=
                        player?.leaderboards?.qm_1v1?.streak ||
                      player?.leaderboards?.qm_1v1?.streak === undefined ||
                      player?.leaderboards?.qm_1v1?.streak === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 streak: {player2?.leaderboards?.qm_1v1?.streak}
                    {player2?.leaderboards?.qm_1v1?.streak >=
                      player?.leaderboards?.qm_1v1?.streak ||
                    player?.leaderboards?.qm_1v1?.streak === undefined ||
                    player?.leaderboards?.qm_1v1?.streak === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>Player has no rank in qm 1v1</p>
                )}
              </div>
              <h3>Qm - 2v2 : </h3>
              <div>
                {player2?.leaderboards?.qm_2v2?.rank ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_2v2?.rank <=
                        player?.leaderboards?.qm_2v2?.rank ||
                      player?.leaderboards?.qm_2v2?.rank === undefined ||
                      player?.leaderboards?.qm_2v2?.rank === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 2v2 Rank: {player2?.leaderboards?.qm_2v2?.rank}
                    </strong>
                    {player2?.leaderboards?.qm_2v2?.rank <=
                      player?.leaderboards?.qm_2v2?.rank ||
                    player?.leaderboards?.qm_2v2?.rank === undefined ||
                    player?.leaderboards?.qm_2v2?.rank === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 2v2 Rank Data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_2v2?.rating ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_2v2?.rating >=
                        player?.leaderboards?.qm_2v2?.rating ||
                      player?.leaderboards?.qm_2v2?.rating === undefined ||
                      player?.leaderboards?.qm_2v2?.rating === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 2v2 Rating: {player2?.leaderboards?.qm_2v2?.rating}
                    {player2?.leaderboards?.qm_2v2?.rating >=
                      player?.leaderboards?.qm_2v2?.rating ||
                    player?.leaderboards?.qm_2v2?.rating === undefined ||
                    player?.leaderboards?.qm_2v2?.rating === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 2v2 Rating Data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_2v2?.games_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_2v2?.games_count >=
                        player?.leaderboards?.qm_2v2?.games_count ||
                      player?.leaderboards?.qm_2v2?.games_count === undefined ||
                      player?.leaderboards?.qm_2v2?.games_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 2v2 Games count:
                    {player2?.leaderboards?.qm_2v2?.games_count}
                    {player2?.leaderboards?.qm_2v2?.games_count >=
                      player?.leaderboards?.qm_2v2?.games_count ||
                    player?.leaderboards?.qm_2v2?.games_count === undefined ||
                    player?.leaderboards?.qm_2v2?.games_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm games count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_2v2?.wins_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_2v2?.wins_count >=
                        player?.leaderboards?.qm_2v2?.wins_count ||
                      player?.leaderboards?.qm_2v2?.wins_count === undefined ||
                      player?.leaderboards?.qm_2v2?.wins_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 2v2 Wins count:
                    {player2?.leaderboards?.qm_2v2?.wins_count}
                    {player2?.leaderboards?.qm_2v2?.wins_count >=
                      player?.leaderboards?.qm_2v2?.wins_count ||
                    player?.leaderboards?.qm_2v2?.wins_count === undefined ||
                    player?.leaderboards?.qm_2v2?.wins_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 2v2 wins count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_2v2?.win_rate ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_2v2?.win_rate >=
                        player?.leaderboards?.qm_2v2?.win_rate ||
                      player?.leaderboards?.qm_2v2?.win_rate === undefined ||
                      player?.leaderboards?.qm_2v2?.win_rate === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 2v2 Win rate: {player2?.leaderboards?.qm_2v2?.win_rate}%
                    {player2?.leaderboards?.qm_2v2?.win_rate >=
                      player?.leaderboards?.qm_2v2?.win_rate ||
                    player?.leaderboards?.qm_2v2?.win_rate === undefined ||
                    player?.leaderboards?.qm_2v2?.win_rate === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 2v2 win rate data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_2v2?.losses_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_2v2?.losses_count <=
                        player?.leaderboards?.qm_2v2?.losses_count ||
                      player?.leaderboards?.qm_2v2?.losses_count ===
                        undefined ||
                      player?.leaderboards?.qm_2v2?.losses_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 2v2 Losses count:
                    {player2?.leaderboards?.qm_2v2?.losses_count}
                    {player2?.leaderboards?.qm_2v2?.losses_count <=
                      player?.leaderboards?.qm_2v2?.losses_count ||
                    player?.leaderboards?.qm_2v2?.losses_count === undefined ||
                    player?.leaderboards?.qm_2v2?.losses_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 2v2 losses count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_2v2?.streak ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_2v2?.streak >=
                        player?.leaderboards?.qm_2v2?.streak ||
                      player?.leaderboards?.qm_2v2?.streak === undefined ||
                      player?.leaderboards?.qm_2v2?.streak === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 2v2 streak: {player2?.leaderboards?.qm_2v2?.streak}
                    {player2?.leaderboards?.qm_2v2?.streak >=
                      player?.leaderboards?.qm_2v2?.streak ||
                    player?.leaderboards?.qm_2v2?.streak === undefined ||
                    player?.leaderboards?.qm_2v2?.streak === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>Player has no rank in qm 2v2</p>
                )}
              </div>
              <h3>Qm - 1v1 : </h3>
              <div>
                {player2?.leaderboards?.qm_1v1?.rank ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.rank <=
                        player?.leaderboards?.qm_1v1?.rank ||
                      player?.leaderboards?.qm_1v1?.rank === undefined ||
                      player?.leaderboards?.qm_1v1?.rank === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Rank: {player2?.leaderboards?.qm_1v1?.rank}
                    </strong>
                    {player2?.leaderboards?.qm_1v1?.rank <=
                      player?.leaderboards?.qm_1v1?.rank ||
                    player?.leaderboards?.qm_1v1?.rank === undefined ||
                    player?.leaderboards?.qm_1v1?.rank === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rank Data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.rating ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.rating >=
                        player?.leaderboards?.qm_1v1?.rating ||
                      player?.leaderboards?.qm_1v1?.rating === undefined ||
                      player?.leaderboards?.qm_1v1?.rating === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Rating: {player2?.leaderboards?.qm_1v1?.rating}
                    {player2?.leaderboards?.qm_1v1?.rating >=
                      player?.leaderboards?.qm_1v1?.rating ||
                    player?.leaderboards?.qm_1v1?.rating === undefined ||
                    player?.leaderboards?.qm_1v1?.rating === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rating Data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.games_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.games_count >=
                        player?.leaderboards?.qm_1v1?.games_count ||
                      player?.leaderboards?.qm_1v1?.games_count === undefined ||
                      player?.leaderboards?.qm_1v1?.games_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Games count:
                    {player2?.leaderboards?.qm_1v1?.games_count}
                    {player2?.leaderboards?.qm_1v1?.games_count >=
                      player?.leaderboards?.qm_1v1?.games_count ||
                    player?.leaderboards?.qm_1v1?.games_count === undefined ||
                    player?.leaderboards?.qm_1v1?.games_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm games count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.wins_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.wins_count >=
                        player?.leaderboards?.qm_1v1?.wins_count ||
                      player?.leaderboards?.qm_1v1?.wins_count === undefined ||
                      player?.leaderboards?.qm_1v1?.wins_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Wins count:
                    {player2?.leaderboards?.qm_1v1?.wins_count}
                    {player2?.leaderboards?.qm_1v1?.wins_count >=
                      player?.leaderboards?.qm_1v1?.wins_count ||
                    player?.leaderboards?.qm_1v1?.wins_count === undefined ||
                    player?.leaderboards?.qm_1v1?.wins_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 wins count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.win_rate ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.win_rate >=
                        player?.leaderboards?.qm_1v1?.win_rate ||
                      player?.leaderboards?.qm_1v1?.win_rate === undefined ||
                      player?.leaderboards?.qm_1v1?.win_rate === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Win rate: {player2?.leaderboards?.qm_1v1?.win_rate}%
                    {player2?.leaderboards?.qm_1v1?.win_rate >=
                      player?.leaderboards?.qm_1v1?.win_rate ||
                    player?.leaderboards?.qm_1v1?.win_rate === undefined ||
                    player?.leaderboards?.qm_1v1?.win_rate === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 win rate data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.losses_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.losses_count <=
                        player?.leaderboards?.qm_1v1?.losses_count ||
                      player?.leaderboards?.qm_1v1?.losses_count ===
                        undefined ||
                      player?.leaderboards?.qm_1v1?.losses_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Losses count:
                    {player2?.leaderboards?.qm_1v1?.losses_count}
                    {player2?.leaderboards?.qm_1v1?.losses_count <=
                      player?.leaderboards?.qm_1v1?.losses_count ||
                    player?.leaderboards?.qm_1v1?.losses_count === undefined ||
                    player?.leaderboards?.qm_1v1?.losses_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 losses count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.streak ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.streak >=
                        player?.leaderboards?.qm_1v1?.streak ||
                      player?.leaderboards?.qm_1v1?.streak === undefined ||
                      player?.leaderboards?.qm_1v1?.streak === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 streak: {player2?.leaderboards?.qm_1v1?.streak}
                    {player2?.leaderboards?.qm_1v1?.streak >=
                      player?.leaderboards?.qm_1v1?.streak ||
                    player?.leaderboards?.qm_1v1?.streak === undefined ||
                    player?.leaderboards?.qm_1v1?.streak === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>Player has no rank in qm 1v1</p>
                )}
              </div>
              <h3>Qm - 1v1 : </h3>
              <div>
                {player2?.leaderboards?.qm_1v1?.rank ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.rank <=
                        player?.leaderboards?.qm_1v1?.rank ||
                      player?.leaderboards?.qm_1v1?.rank === undefined ||
                      player?.leaderboards?.qm_1v1?.rank === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    <strong>
                      Qm 1v1 Rank: {player2?.leaderboards?.qm_1v1?.rank}
                    </strong>
                    {player2?.leaderboards?.qm_1v1?.rank <=
                      player?.leaderboards?.qm_1v1?.rank ||
                    player?.leaderboards?.qm_1v1?.rank === undefined ||
                    player?.leaderboards?.qm_1v1?.rank === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rank Data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.rating ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.rating >=
                        player?.leaderboards?.qm_1v1?.rating ||
                      player?.leaderboards?.qm_1v1?.rating === undefined ||
                      player?.leaderboards?.qm_1v1?.rating === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Rating: {player2?.leaderboards?.qm_1v1?.rating}
                    {player2?.leaderboards?.qm_1v1?.rating >=
                      player?.leaderboards?.qm_1v1?.rating ||
                    player?.leaderboards?.qm_1v1?.rating === undefined ||
                    player?.leaderboards?.qm_1v1?.rating === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 Rating Data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.games_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.games_count >=
                        player?.leaderboards?.qm_1v1?.games_count ||
                      player?.leaderboards?.qm_1v1?.games_count === undefined ||
                      player?.leaderboards?.qm_1v1?.games_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Games count:
                    {player2?.leaderboards?.qm_1v1?.games_count}
                    {player2?.leaderboards?.qm_1v1?.games_count >=
                      player?.leaderboards?.qm_1v1?.games_count ||
                    player?.leaderboards?.qm_1v1?.games_count === undefined ||
                    player?.leaderboards?.qm_1v1?.games_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm games count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.wins_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.wins_count >=
                        player?.leaderboards?.qm_1v1?.wins_count ||
                      player?.leaderboards?.qm_1v1?.wins_count === undefined ||
                      player?.leaderboards?.qm_1v1?.wins_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Wins count:
                    {player2?.leaderboards?.qm_1v1?.wins_count}
                    {player2?.leaderboards?.qm_1v1?.wins_count >=
                      player?.leaderboards?.qm_1v1?.wins_count ||
                    player?.leaderboards?.qm_1v1?.wins_count === undefined ||
                    player?.leaderboards?.qm_1v1?.wins_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 wins count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.win_rate ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.win_rate >=
                        player?.leaderboards?.qm_1v1?.win_rate ||
                      player?.leaderboards?.qm_1v1?.win_rate === undefined ||
                      player?.leaderboards?.qm_1v1?.win_rate === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Win rate: {player2?.leaderboards?.qm_1v1?.win_rate}%
                    {player2?.leaderboards?.qm_1v1?.win_rate >=
                      player?.leaderboards?.qm_1v1?.win_rate ||
                    player?.leaderboards?.qm_1v1?.win_rate === undefined ||
                    player?.leaderboards?.qm_1v1?.win_rate === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 win rate data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.losses_count ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.losses_count <=
                        player?.leaderboards?.qm_1v1?.losses_count ||
                      player?.leaderboards?.qm_1v1?.losses_count ===
                        undefined ||
                      player?.leaderboards?.qm_1v1?.losses_count === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 Losses count:
                    {player2?.leaderboards?.qm_1v1?.losses_count}
                    {player2?.leaderboards?.qm_1v1?.losses_count <=
                      player?.leaderboards?.qm_1v1?.losses_count ||
                    player?.leaderboards?.qm_1v1?.losses_count === undefined ||
                    player?.leaderboards?.qm_1v1?.losses_count === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>No Qm 1v1 losses count data</p>
                )}
                <br></br>
                {player2?.leaderboards?.qm_1v1?.streak ? (
                  <div
                    style={
                      player2?.leaderboards?.qm_1v1?.streak >=
                        player?.leaderboards?.qm_1v1?.streak ||
                      player?.leaderboards?.qm_1v1?.streak === undefined ||
                      player?.leaderboards?.qm_1v1?.streak === null
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    Qm 1v1 streak: {player2?.leaderboards?.qm_1v1?.streak}
                    {player2?.leaderboards?.qm_1v1?.streak >=
                      player?.leaderboards?.qm_1v1?.streak ||
                    player?.leaderboards?.qm_1v1?.streak === undefined ||
                    player?.leaderboards?.qm_1v1?.streak === null ? (
                      <>
                        - Winner
                        <img
                          className="winner"
                          src={Checked}
                          alt="winner or accepted symbol"
                        />
                      </>
                    ) : (
                      "- Loser"
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>Player has no rank in qm 1v1</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

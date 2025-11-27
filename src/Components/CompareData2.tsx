import { AppContext } from "./AppContext";
import { useContext, useEffect } from "react";

type Props = {
  player: any;
  player2: any;
  Checked: string;
  Rejected: string;
  vs: string;
  qmOrRm: string;
};
export default function CompareData2({
  player,
  player2,
  Checked,
  Rejected,
  vs,
  qmOrRm,
}: Props) {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "AppContext is undefined, make sure you are using AppProvider"
    );
  }
  const { setScore2 } = ctx;
  // If key is Qm (Quickmatch) then keep the standard if its something else (rm only option)
  // then add "elo" at the end of the query to fetch the right data.
  const key = qmOrRm === "qm" ? `${qmOrRm}_${vs}` : `${qmOrRm}_${vs}_elo`;
  const details = [
    "rank",
    "rating",
    "games_count",
    "wins_count",
    "win_rate",
    "losses_count",
    "streak",
  ];

  useEffect(() => {
    details.map((detail) => {
      if (detail === "losses_count" || detail === "rank") {
        player?.leaderboards?.[key]?.[detail] <=
          player2?.leaderboards?.[key]?.[detail] ||
        player2?.leaderboards?.[key]?.[detail] === undefined ||
        player2?.leaderboards?.[key]?.[detail] === null
          ? setScore2((prev) => prev + 1)
          : 0;
      } else {
        player?.leaderboards?.[key]?.[detail] >=
          player2?.leaderboards?.[key]?.[detail] ||
        player2?.leaderboards?.[key]?.[detail] === undefined ||
        player2?.leaderboards?.[key]?.[detail] === null
          ? setScore2((prev) => prev + 1)
          : 0;
      }
    });
  }, []);
  return (
    <>
      {details.map((detail) => {
        if (detail === "losses_count" || detail === "rank") {
          return player?.leaderboards?.[key]?.[detail] ? (
            <div
              style={
                player?.leaderboards?.[key]?.[detail] <=
                  player2?.leaderboards?.[key]?.[detail] ||
                player2?.leaderboards?.[key]?.[detail] === undefined ||
                player2?.leaderboards?.[key]?.[detail] === null
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              <strong>
                {qmOrRm} {vs} {detail}: {player?.leaderboards?.[key]?.[detail]}
              </strong>
              {player?.leaderboards?.[key]?.[detail] <=
                player2?.leaderboards?.[key]?.[detail] ||
              player2?.leaderboards?.[key]?.[detail] === undefined ||
              player2?.leaderboards?.[key]?.[detail] === null ? (
                <>
                  - Winner
                  <img
                    className="winner"
                    src={Checked}
                    alt="a checked or success symbol"
                  />
                </>
              ) : (
                <>
                  {" "}
                  - Loser{" "}
                  <img
                    src={Rejected}
                    alt="a decline or rejection cross symbol"
                  />
                </>
              )}
            </div>
          ) : (
            <div style={{ color: "red" }}>
              No {qmOrRm} {vs} {detail} Data
              <img
                className="rejected"
                src={Rejected}
                alt="a decline or rejection symbol"
              />
            </div>
          );
        } else {
          return player?.leaderboards?.[key]?.[detail] ? (
            <div
              style={
                player?.leaderboards?.[key]?.[detail] >=
                  player2?.leaderboards?.[key]?.[detail] ||
                player2?.leaderboards?.[key]?.[detail] === undefined ||
                player2?.leaderboards?.[key]?.[detail] == null
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              <strong>
                {qmOrRm} {vs} {detail}: {player?.leaderboards?.[key]?.[detail]}
              </strong>
              {player?.leaderboards?.[key]?.[detail] >=
                player2?.leaderboards?.[key]?.[detail] ||
              player2?.leaderboards?.[key]?.[detail] === undefined ||
              player2?.leaderboards?.[key]?.[detail] === null ? (
                <>
                  - Winner
                  <img
                    className="winner"
                    src={Checked}
                    alt="a checked or success symbol"
                  />
                </>
              ) : (
                <>
                  {" "}
                  - Loser{" "}
                  <img
                    src={Rejected}
                    alt="a decline or rejection cross symbol"
                  />
                </>
              )}
            </div>
          ) : (
            <div style={{ color: "red" }}>
              No {qmOrRm} {vs} {detail} Data
              <img
                className="rejected"
                src={Rejected}
                alt="a decline or rejection symbol"
              />
            </div>
          );
        }
      })}
    </>
  );
}

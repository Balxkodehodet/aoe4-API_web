type Props = {
  player: any;
  player2: any;
  Checked: string;
  Rejected: string;
  vs: string;
  qmOrRm: string;
};
export default function CompareData({
  player,
  player2,
  Checked,
  Rejected,
  vs,
  qmOrRm,
}: Props) {
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
  return (
    <>
      {details.map((detail) => {
        if (detail === "losses_count" || detail === "rank") {
          return <></>;
        }
        return player?.leaderboards?.[key]?.[detail] ? (
          <div
            style={
              player?.leaderboards?.[key]?.[detail] <=
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
                <img src={Rejected} alt="a decline or rejection cross symbol" />
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
      })}
    </>
  );
}

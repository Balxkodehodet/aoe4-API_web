import { AppContext } from "./AppContext";
import { useContext } from "react";
import "../App.css";
import Checked from "../assets/check.png";
import Rejected from "../assets/decline.png";
import CompareData from "./CompareData.tsx";
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
              <CompareData
                player={player}
                player2={player2}
                Checked={Checked}
                Rejected={Rejected}
                vs={"1v1"}
                qmOrRm="qm"
              />
              <h3>Qm - 2v2:</h3>
              <CompareData
                player={player}
                player2={player2}
                Checked={Checked}
                Rejected={Rejected}
                vs={"2v2"}
                qmOrRm="qm"
              />
              <h3>Qm - 3v3:</h3>
              <CompareData
                player={player}
                player2={player2}
                Checked={Checked}
                Rejected={Rejected}
                vs={"3v3"}
                qmOrRm="qm"
              />
              <h3>Qm - 4v4:</h3>
              <CompareData
                player={player}
                player2={player2}
                Checked={Checked}
                Rejected={Rejected}
                vs={"4v4"}
                qmOrRm="qm"
              />
              <h3>Rm - 1v1:</h3>
              <CompareData
                player={player}
                player2={player2}
                Checked={Checked}
                Rejected={Rejected}
                vs={"1v1"}
                qmOrRm="rm"
              />
              <h3>Rm - 2v2:</h3>
              <CompareData
                player={player}
                player2={player2}
                Checked={Checked}
                Rejected={Rejected}
                vs={"2v2"}
                qmOrRm="rm"
              />
              <h3>Rm - 3v3:</h3>
              <CompareData
                player={player}
                player2={player2}
                Checked={Checked}
                Rejected={Rejected}
                vs={"3v3"}
                qmOrRm="rm"
              />
              <h3>Rm - 4v4:</h3>
              <CompareData
                player={player}
                player2={player2}
                Checked={Checked}
                Rejected={Rejected}
                vs={"4v4"}
                qmOrRm="rm"
              />
            </div>
            <h2>Player 2: </h2>
            <div className="compareplayer2">
              <img src={player2?.avatars?.full} />
              <h2>{player2?.name}</h2>
              <h3>Qm - 1v1:</h3>
              <CompareData
                player={player2}
                player2={player}
                Checked={Checked}
                Rejected={Rejected}
                vs={"1v1"}
                qmOrRm="qm"
              />
              <h3>Qm - 2v2:</h3>
              <CompareData
                player={player2}
                player2={player}
                Checked={Checked}
                Rejected={Rejected}
                vs={"2v2"}
                qmOrRm="qm"
              />
              <h3>Qm - 3v3:</h3>
              <CompareData
                player={player2}
                player2={player}
                Checked={Checked}
                Rejected={Rejected}
                vs={"3v3"}
                qmOrRm="qm"
              />
              <h3>Qm - 4v4:</h3>
              <CompareData
                player={player2}
                player2={player}
                Checked={Checked}
                Rejected={Rejected}
                vs={"4v4"}
                qmOrRm="qm"
              />
              <h3>Rm - 1v1:</h3>
              <CompareData
                player={player2}
                player2={player}
                Checked={Checked}
                Rejected={Rejected}
                vs={"1v1"}
                qmOrRm="rm"
              />
              <h3>Rm - 2v2:</h3>
              <CompareData
                player={player2}
                player2={player}
                Checked={Checked}
                Rejected={Rejected}
                vs={"2v2"}
                qmOrRm="rm"
              />
              <h3>Rm - 3v3:</h3>
              <CompareData
                player={player2}
                player2={player}
                Checked={Checked}
                Rejected={Rejected}
                vs={"3v3"}
                qmOrRm="rm"
              />
              <h3>Rm - 4v4:</h3>
              <CompareData
                player={player2}
                player2={player}
                Checked={Checked}
                Rejected={Rejected}
                vs={"4v4"}
                qmOrRm="rm"
              />
            </div>
          </div>
        </>
      )}
      )
    </>
  );
}

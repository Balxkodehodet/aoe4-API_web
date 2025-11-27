import { createContext, useState, type ReactNode } from "react";

type PlayerData = any; // replace with a proper type
type AppContextType = {
  data: PlayerData | null;
  error: string | null;
  setData: React.Dispatch<React.SetStateAction<PlayerData | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  id: number | null;
  setId: React.Dispatch<React.SetStateAction<number | null>>;
  bestPlayers: PlayerData | null;
  setBestPlayers: React.Dispatch<React.SetStateAction<PlayerData | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  compareData: PlayerData | null;
  compareData2: PlayerData | null;
  setCompareData: React.Dispatch<React.SetStateAction<PlayerData | null>>;
  setCompareData2: React.Dispatch<React.SetStateAction<PlayerData | null>>;
  unique: string;
  unique2: string;
  setUnique: React.Dispatch<React.SetStateAction<string>>;
  setUnique2: React.Dispatch<React.SetStateAction<string>>;
  player: PlayerData | null;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerData | null>>;
  player2: PlayerData | null;
  setPlayer2: React.Dispatch<React.SetStateAction<PlayerData | null>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score2: number;
  setScore2: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [bestPlayers, setBestPlayers] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [compareData, setCompareData] = useState<any>(null);
  const [compareData2, setCompareData2] = useState<any>(null);
  const [unique, setUnique] = useState<string>("");
  const [unique2, setUnique2] = useState<string>("");
  const [player, setPlayer] = useState<any>(null);
  const [player2, setPlayer2] = useState<any>(null);
  const [score, setScore] = useState<number>(0);
  const [score2, setScore2] = useState<number>(0);
  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        id,
        setId,
        bestPlayers,
        setBestPlayers,
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
        score,
        setScore,
        score2,
        setScore2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

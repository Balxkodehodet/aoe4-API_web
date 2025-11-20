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
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [bestPlayers, setBestPlayers] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

import { createContext, useState, type ReactNode } from "react";

type PlayerData = any; // replace with a proper type
type AppContextType = {
  data: PlayerData | null;
  error: string | null;
  setData: React.Dispatch<React.SetStateAction<PlayerData | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  id: number | null;
  setId: React.Dispatch<React.SetStateAction<number | null>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(null);
  return (
    <AppContext.Provider value={{ data, setData, error, setError, id, setId }}>
      {children}
    </AppContext.Provider>
  );
}

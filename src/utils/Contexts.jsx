import { createContext } from "react";

export const GameContext = createContext({});
export const IsPlayingContext = createContext(false);
export const SetIsPlayingContext = createContext(() => {});
export const SetTickContext = createContext(() => {});
export const RoundContext = createContext({});

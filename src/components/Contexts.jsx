import { createContext } from "react";

export const GameContext = createContext({});
export const IsPlayingContext = createContext(false);
export const SetIsPlayingContext = createContext(() => {});
export const SetTick = createContext(() => {});
export const Tick = createContext(0);
export const RoundContext = createContext({});

interface GameData {
    login: boolean;
    start: boolean;
    game: boolean;
}
export declare function toggleGameData(key: keyof GameData): void;
export {};

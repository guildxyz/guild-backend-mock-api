/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
export type Guild = {
  id: number;
  name: string;
  urlName: string;
  description: string | null;
  imageUrl: string | null;
  createdAt: Date;
  showMembers: boolean;
  hideFromExplorer: boolean;
};

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray;

export const LogicType: {
  AND: "AND";
  OR: "OR";
  NAND: "NAND";
  NOR: "NOR";
};
// eslint-disable-next-line no-redeclare
export type LogicType = typeof LogicType[keyof typeof LogicType];

export type JsonObject = { [Key in string]?: JsonValue };

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export interface JsonArray extends Array<JsonValue> {}

export const Chain: {
  ETHEREUM: "ETHEREUM";
  BSC: "BSC";
  POLYGON: "POLYGON";
  XDAI: "XDAI";
  AVALANCHE: "AVALANCHE";
  FANTOM: "FANTOM";
  ARBITRUM: "ARBITRUM";
  CELO: "CELO";
  HARMONY: "HARMONY";
  JUICEBOX: "JUICEBOX";
  GOERLI: "GOERLI";
  OPTIMISM: "OPTIMISM";
  MOONRIVER: "MOONRIVER";
  GNOSIS: "GNOSIS";
};
// eslint-disable-next-line no-redeclare
export type Chain = typeof Chain[keyof typeof Chain];

export type Requirement = {
  id: number;
  type: string | null;
  address: string | null;
  data: JsonValue | null;
  symbol: string | null;
  name: string | null;
  chain: Chain;
  roleId: number;
};

export type Role = {
  id: number;
  name: string;
  description: string | null;
  imageUrl: string | null;
  createdAt: Date;
  logic: LogicType;
};

export const ThemeMode: {
  LIGHT: "LIGHT";
  DARK: "DARK";
};
// eslint-disable-next-line no-redeclare
export type ThemeMode = typeof ThemeMode[keyof typeof ThemeMode];

export type Theme = {
  guildId: number;
  mode: ThemeMode;
  color: string | null;
  backgroundImage: string | null;
  backgroundCss: string | null;
};

export type User = {
  id: number;
  addresses: string[];
  telegramId: string | null;
  discordId: string | null;
  createdAt: Date;
};

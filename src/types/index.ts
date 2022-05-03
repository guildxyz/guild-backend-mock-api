import { Guild, LogicType, Requirement, Role, Theme, User } from "./prisma.d";

type PlatformType = "DISCORD" | "TELEGRAM";

type ActionType = "upgrade" | "downgrade";

type GuildSortType = "members" | "name" | "oldest" | "newest";

type GuildIncludeType = "all" | "admin";

type ContractType = "ERC1155" | "SIMPLE";

type RequirementType =
  | "ERC20"
  | "ERC721"
  | "ERC1155"
  | "COIN"
  | "SNAPSHOT"
  | "ALLOWLIST"
  | "POAP"
  | "MIRROR"
  | "UNLOCK"
  | "JUICEBOX"
  | "FREE";

type RemoveTelegramParams = {
  platform: "TELEGRAM";
  platformUserId: string;
  groupId: number;
  triggerKick: boolean;
};

type RemoveDiscordParams = {
  platform: "DISCORD";
  platformUserId: string;
  serverId: string;
  triggerKick: boolean;
};

type RemoveWebappParams = {
  platform: "WEB";
  address: string;
  guildId: number;
  triggerKick: boolean;
};

type RemoveFromPlatformParams =
  | RemoveTelegramParams
  | RemoveDiscordParams
  | RemoveWebappParams;

type StatusUpdateParams = {
  discordId?: string;
  telegramId?: string;
};

type JoinPlatformParams = {
  platform?: PlatformType;
  platformUserId?: string;
  guildId: number;
};

type UserJoinedParams = {
  platform: PlatformType;
  platformUserId: string | number;
  groupId?: string;
  serverId?: string;
};

type DiscordInviteResult = {
  alreadyJoined: boolean;
  inviteLink?: string;
};

type ErrorResult = {
  errors: { msg: string }[];
};

type GatedChannelsParam = {
  gatedChannels?: Partial<{
    categories: string[];
    channels: string[];
  }>;
};

type CreateRoleParams = {
  guildId: string;
  name: string;
  description?: string;
  imageUrl?: string;
  logic?: LogicType;
  requirements: Requirement[];
  platform: PlatformType;
  platformId: string;
  channelId?: string;
} & GatedChannelsParam;

type UpdateRoleParams = {
  name?: string;
  description?: string;
  imageUrl?: string;
  logic?: LogicType;
  requirements?: Requirement[];
} & GatedChannelsParam;

type CreateGuildParams = {
  name: string;
  urlName?: string;
  description?: string;
  imageUrl?: string;
  showMembers?: boolean;
  hideFromExplorer?: boolean;
  theme?: Theme;
  roles: (Role & { requirements: Requirement[] })[];
  platform: PlatformType;
  platformId: string;
  channelId?: string;
  admins?: string[];
  isGuarded?: boolean;
  grantAccessToExistingRoles?: boolean;
};

type UpdateGuildParams = {
  name?: string;
  urlName?: string;
  description?: string;
  imageUrl?: string;
  showMembers?: boolean;
  hideFromExplorer?: boolean;
  logic?: LogicType;
  theme?: Theme;
  roles?: (CreateRoleParams | (UpdateRoleParams & { id: number }))[];
  requirements?: Requirement[];
  channelId?: string;
  admins?: string[];
  isGuarded?: boolean;
  grantAccessToExistingRoles?: boolean;
};

type ValidateResult = {
  roleId: number;
  access?: boolean;
  errors?: { requirementId: number; msg: string }[];
};

type ValidateGuildResult = {
  roleId: number;
  users: { id: number; access: boolean }[];
  errors?: { requirementId: number; msg: string }[];
};

type GuildUrlNameResponse = Guild & {
  owner: User;
  theme: Theme;
  platforms: {
    platformIdenetifier: string;
    platformType: string;
    roles: Partial<Role>;
  };
};

type DiscordUser = {
  username: string;
  discriminator: string;
  avatar: string;
  roles: string[];
};

type TelegramJoin = {
  roleId: number;
  address: string;
};

type UserAuth = {
  address: string;
  exp: string;
};

type MirrorResult = {
  editionContractAddress: string;
  editionId: number;
  title: string;
  image: string;
};

type Validation = {
  address: string;
  addressSignedMessage: string;
  nonce: string;
  random: string;
  hash?: string;
  timestamp: string;
};

type Authentication = {
  payload: Object;
  validation: Validation;
};

type ExtendedRequirements = Requirement & {
  name?: string;
  symbol: string;
};

type NewReqsWithMembers = {
  newReqs: ExtendedRequirements[];
  members: string[];
};

type PollParams = {
  groupId: string;
  question: string;
  startDate: number;
  expDate: number;
  options: string[];
};

type Vote = {
  pollId: number;
  platformUserId: number;
  option: string;
};

type ReqData = {
  id?: string;
  amount?: number;
  strategy?: { name: string; params: any };
  addresses?: string[];
  hideAllowlist?: boolean;
  attribute?: {
    // eslint-disable-next-line camelcase
    trait_type: string;
    value?: string;
    interval?: {
      min: number;
      max: number;
    };
  };
};

type PlatformData = {
  id: number;
  platformId: string;
  type: "DISCORD" | "TELEGRAM";
  platformName: string;
};

class RunnerError extends Error {
  constructor(message: string) {
    super(`runner error: ${message}`);
  }
}

type UserResult = User & {
  discord?: {
    username: string;
    avatar: string;
  };
  telegram?: {
    username: string;
    avatar: string;
  };
};

type PlatformIsGuarded = {
  platformIdentifier: number;
  isGuarded: boolean;
};

type SendJoinPayload = {
  title?: string;
  description?: string;
  button?: string;
  channelId: string;
  serverId: string;
};

type GuildPlatformData = {
  guildName: string;
  platformSpecificGuildId: string;
  roles: {
    name: string;
    platformSpecificRoleId: string;
    [key: string]: string;
  }[];
};

export {
  SendJoinPayload,
  PlatformType,
  RemoveDiscordParams,
  RemoveTelegramParams,
  RemoveWebappParams,
  RemoveFromPlatformParams,
  StatusUpdateParams,
  JoinPlatformParams,
  ValidateResult,
  UserJoinedParams,
  DiscordInviteResult,
  ErrorResult,
  ActionType,
  CreateRoleParams,
  UpdateRoleParams,
  CreateGuildParams,
  UpdateGuildParams,
  RunnerError,
  RequirementType,
  GuildSortType,
  GuildIncludeType,
  GuildUrlNameResponse,
  DiscordUser,
  TelegramJoin,
  MirrorResult,
  ExtendedRequirements,
  NewReqsWithMembers,
  ValidateGuildResult,
  ContractType,
  Authentication,
  Validation,
  UserAuth,
  PollParams,
  Vote,
  UserResult,
  ReqData,
  PlatformData,
  PlatformIsGuarded,
  GatedChannelsParam,
  GuildPlatformData,
};

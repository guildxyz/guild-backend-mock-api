import { GuildPlatformData } from "./types";

const getGuildResponse = {
  id: 1985,
  name: "Our Guild",
  urlName: "our-guild",
  description: "",
  imageUrl:
    "https://ipfs.fleek.co/ipfs/QmSJtjpHzaEdMuBE2uAPSN3r32eZkLXndMzQLBSbknFD1W",
  showMembers: true,
  hideFromExplorer: false,
  createdAt: "2022-02-14T20:33:40.876+00:00",
  admins: [
    {
      id: 45,
      address: "0xaf17d2da0ccfc4382ba48554be601f28903d3eda",
      isOwner: false,
    },
    {
      id: 113,
      address: "0x6c6541cc3ec6bfc2d7b0ca48ccb0225cbbea9b59",
      isOwner: true,
    },
    {
      id: 12284,
      address: "0xa65eef5d0566ef2ed242d8719111e3116333278d",
      isOwner: false,
    },
  ],
  theme: {
    mode: "DARK",
    // @ts-ignore
    color: null,
    backgroundImage:
      "https://ipfs.fleek.co/ipfs/QmdQzjGWrT843gighSzCAqLTZk4Ttj8osG843qt8Y6asva",
    // @ts-ignore
    backgroundCss: null,
  },
  platforms: [
    {
      id: 378,
      isGuarded: true,
      platformId: "886314998131982336",
      type: "DISCORD",
      platformName: "Guild.xyz",
    },
  ],
  roles: [
    {
      id: 1899,
      name: "Collectibles",
      description: "",
      imageUrl:
        "https://ipfs.fleek.co/ipfs/QmezKDA2LxaNYekx6gJTZPJyYCBmgLPZiL9ip8M7EskieZ",
      logic: "AND",
      requirements: [
        {
          id: 5366,
          type: "ERC721",
          address: "0x734AA2dac868218D2A5F9757f16f6f881265441C",
          chain: "ETHEREUM",
          roleId: 1899,
          name: "Guild Techno Hoodie no.1",
          symbol: "HOODIE",
          data: {
            minAmount: 1,
          },
        },
      ],
      platforms: [
        {
          roleId: 1899,
          platformId: 378,
          inviteChannel: "933985357781934102",
          discordRoleId: "942881304901472347",
        },
      ],
      members: [
        "0xcde3725b25d6d9bc78cf0941cc15fd9710c764b9",
        "0x30dcd1d4fd0094020cb022a09fb0d2d4ed574c9c",
        "0xdece737ba8e9d72432adac9c0e09c9cfde20fd98",
        "0x880c4f74c3d4c39d75f8e2ad958f40671416bf66",
        "0x91564f0d22ef831f7eefbbde49ebc15705592240",
      ],
      memberCount: 5,
    },
    {
      id: 1900,
      name: "Guild Alpha tester",
      description: "",
      imageUrl:
        "https://ipfs.fleek.co/ipfs/QmNxP6i1xy2V4bfhMCR5svdQdCXaYXCJ8aaLqjmKk9KyoL",
      logic: "AND",
      requirements: [
        {
          id: 5362,
          type: "ALLOWLIST",
          // @ts-ignore
          address: null,
          chain: "ETHEREUM",
          roleId: 1900,
          name: "-",
          symbol: "-",
          data: {
            hideAllowlist: false,
            addresses: [
              "0xba60792c99c9b3aa5c3b69cc68f577c2aacc3918",
              "0x98397a068d413d3c92a506f98c5f25d33a9dac14",
              "0xb31c0a96fcd35c9cab3539aad615fce03602f7bb",
              "0xdd5d3ac28853613300438ec9f3af370b202a449a",
              "0xfabda191f1331630cbeeca935ad4c928078678c5",
            ],
          },
        },
      ],
      memberCount: 1400,
    },
    {
      id: 1937,
      name: "Our Guild is evolving",
      description: "",
      imageUrl:
        "https://ipfs.fleek.co/ipfs/QmS3bUKLBvoR82iyat6R65hxdsHwTM6LVLMFtoQtTKLmrD",
      logic: "OR",
      requirements: [
        {
          id: 5364,
          type: "POAP",
          // @ts-ignore
          address: null,
          chain: "ETHEREUM",
          roleId: 1937,
          name: "-",
          symbol: "-",
          data: {
            id: "our-guild-is-evolving-speaker-2022",
          },
        },
        {
          id: 5365,
          type: "POAP",
          address: null,
          chain: "ETHEREUM",
          roleId: 1937,
          name: "-",
          symbol: "-",
          data: {
            id: "our-guild-is-evolving-attendee-2022",
          },
        },
        {
          id: 6835,
          type: "POAP",
          address: null,
          chain: "ETHEREUM",
          roleId: 1937,
          name: "-",
          symbol: "-",
          data: {
            id: "guildxyz-community-call-1-2022",
          },
        },
        {
          id: 8175,
          type: "POAP",
          address: null,
          chain: "ETHEREUM",
          roleId: 1937,
          name: "-",
          symbol: "-",
          data: {
            id: "guildxyz-community-call-2-2022",
          },
        },
      ],
      platforms: [
        {
          roleId: 1937,
          platformId: 378,
          inviteChannel: "933985357781934102",
          discordRoleId: "943232376782331984",
        },
      ],
      members: [
        "0x4b6f43834f4b6b2407fa8d2f88e6e5ca0e3b48df",
        "0x3aff635889bf158b4b4f2470883f0efed411f9de",
        "0x9c4b3b1a608bb43c3b1f19ddcbba7fc000d353ce",
      ],
      memberCount: 29,
    },
  ],
};

const guildPlatformData: GuildPlatformData = {
  guildName: "Our Guild",
  platformSpecificGuildId: "8453748547358",
  roles: [
    { name: "Collectibles", platformSpecificRoleId: "2476324783623" },
    { name: "Guild Alpha tester", platformSpecificRoleId: "3476324783623" },
    { name: "Our Guild is evolving", platformSpecificRoleId: "4476324783623" },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export { getGuildResponse, guildPlatformData };

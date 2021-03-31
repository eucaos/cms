import { createServer } from "miragejs";

const getItems = (id?: number) => {
  switch (id) {
    case undefined:
      return [
        { id: "1", name: "Soccer" },
        { id: "2", name: "Boxing" },
        { id: "3", name: "Tennis" },
      ];
    case 1:
      return [
        { id: "11", name: "Italian Soccer" },
        { id: "12", name: "German Soccer" },
        { id: "13", name: "Spanish Soccer" },
      ];
    case 2:
      return [{ id: "21", name: "Boxing matches" }];
    case 21:
      return [{ id: "211", name: "Wildewer vs Tyson" }];
    case 22:
      return [{ id: "221", name: "Boxing specials" }];
    case 211:
      return [{ id: "21111", name: "Exact method of victory" }];
    case 3:
      return [{ id: "31", name: "ATP Cordoba" }];
    case 31:
      return [
        { id: "311", name: "Double matches" },
        { id: "312", name: "Quarter final matches" },
      ];
    case 312:
      return [
        { id: "3121", name: "Martin v Moutet" },
        { id: "3122", name: "Cuevas v GArin" },
        { id: "3123", name: "Federer v Martin" },
      ];
    case 3123:
      return [
        {
          id: "31231",
          name: "Handicap",
          type: "ASSET",
          winners: 1,
          marketType: "LINE",
        },
        {
          id: "31232",
          pairId: "31233",
          name: "Federer to win a set",
          type: "ASSET",
          marketType: "ODDS",
          winners: 0,
        },
        {
          id: "31233",
          pairId: "31232",
          name: "Federer to win a set [Place]",
          type: "ASSET",
          marketType: "ODDS",
          winners: 2,
        },
        {
          id: "31234",
          name: "Match Odds",
          type: "ASSET",
          marketType: "ASSIAN-HANDICAP",
        },
        {
          id: "31235",
          name: "Martin to win a set",
          type: "ASSET",
          marketType: "RANGE",
          winners: 0,
        },
      ];
    case 31234:
      return [
        {
          id: "312321",
          name: "Novak Djokovic [WIN]",
          status: "REMOVED",
        },
        {
          id: "312322",
          name: "Rafael Nadal",
          status: "ACTIVE",
        },
        {
          id: "312323",
          name: "Daniil Medvedev",
          status: "ACTIVE",
        },
        {
          id: "312324",
          name: "Roger Federer",
          status: "ACTIVE",
        },
      ];
    case 31235:
      return [
        {
          id: "312321",
          name: "Novak Djokovic [WIN]",
          status: "REMOVED",
        },
        {
          id: "312322",
          name: "Rafael Nadal",
          status: "ACTIVE",
        },
        {
          id: "312323",
          name: "Daniil Medvedev",
          status: "ACTIVE",
        },
        {
          id: "312324",
          name: "Roger Federer",
          status: "ACTIVE",
        },
      ];
    case 31232:
      return [
        {
          id: "312321",
          name: "Novak Djokovic [WIN]",
          status: "REMOVED",
        },
        {
          id: "312322",
          name: "Rafael Nadal",
          status: "ACTIVE",
        },
        {
          id: "312323",
          name: "Daniil Medvedev",
          status: "ACTIVE",
        },
        {
          id: "312324",
          name: "Roger Federer",
          status: "ACTIVE",
        },
        {
          id: "312325",
          name: "Stefanos Tsitsipas",
          status: "REMOVED",
        },
        {
          id: "312326",
          name: "Alexander Zverev",
          status: "ACTIVE",
        },
        {
          id: "312327",
          name: "Nick Kyrgios",
          status: "ACTIVE",
        },
        {
          id: "312328",
          name: "Denis Shapovalov",
          status: "ACTIVE",
        },
        {
          id: "312329",
          name: "Milos Raonic",
          status: "ACTIVE",
        },
        {
          id: "3123210",
          name: "Stan Wawrinka",
          status: "ACTIVE",
        },
        {
          id: "3123211",
          name: "Matteo Berrettini",
          status: "ACTIVE",
        },
        {
          id: "3123212",
          name: "Kei Nishikori",
          status: "ACTIVE",
        },
        {
          id: "3123213",
          name: "Alexander Zverev",
          status: "ACTIVE",
        },
        {
          id: "3123214",
          name: "Diego Schwartzman",
          status: "ACTIVE",
        },
        {
          id: "3123215",
          name: "David Goffin",
          status: "ACTIVE",
        },

        {
          id: "3123215a",
          name: "David Goffin",
          status: "ACTIVE",
        },
        {
          id: "3123215b",
          name: "Grigor Dimitrov",
          status: "ACTIVE",
        },
        {
          id: "3123215c",
          name: "Fabio Fognini",
          status: "ACTIVE",
        },
        {
          id: "3123215d",
          name: "Marin Cilic",
          status: "ACTIVE",
        },
        {
          id: "3123215e",
          name: "Alex De Minaur",
          status: "ACTIVE",
        },
        {
          id: "3123215f",
          name: "Dominic Thiem",
          status: "REMOVED",
        },
        {
          id: "3123215g",
          name: "Karen Khachanov",
          status: "ACTIVE",
        },
      ];
    case 31233:
      return {
        type: "RUNNER",
        marketType: "PLACE",
        marketState: {
          status: "OPEN",
          marketBaseRate: 8,
          winners: 3,
        },
        runners: [
          {
            id: "312324",
            name: "Roger Federer",
            status: "ACTIVE",
          },
          {
            id: "312325",
            name: "Stefanos Tsitsipas",
            status: "ACTIVE",
          },
          {
            id: "312326",
            name: "Alexander Zverev",
            status: "ACTIVE",
          },
          {
            id: "312327",
            name: "Nick Kyrgios",
            status: "ACTIVE",
          },
          {
            id: "312328",
            name: "Denis Shapovalov",
            status: "ACTIVE",
          },
          {
            id: "312329",
            name: "Milos Raonic",
            status: "ACTIVE",
          },
          {
            id: "3123210",
            name: "Stan Wawrinka",
            status: "ACTIVE",
          },
          {
            id: "3123211",
            name: "Matteo Berrettini",
            status: "ACTIVE",
          },
          {
            id: "3123212",
            name: "Kei Nishikori",
            status: "ACTIVE",
          },
          {
            id: "3123213",
            name: "Alexander Zverev",
            status: "ACTIVE",
          },
          {
            id: "3123214",
            name: "Diego Schwartzman",
            status: "ACTIVE",
          },
          {
            id: "3123215",
            name: "David Goffin",
            status: "ACTIVE",
          },

          {
            id: "3123215a",
            name: "David Goffin",
            status: "ACTIVE",
          },
          {
            id: "3123215b",
            name: "Grigor Dimitrov",
            status: "ACTIVE",
          },
          {
            id: "3123215c",
            name: "Fabio Fognini",
            status: "ACTIVE",
          },
          {
            id: "3123215d",
            name: "Marin Cilic",
            status: "ACTIVE",
          },
          {
            id: "3123215e",
            name: "Alex De Minaur",
            status: "ACTIVE",
          },
          {
            id: "3123215f",
            name: "Dominic Thiem",
            status: "ACTIVE",
          },
          {
            id: "3123215g",
            name: "Karen Khachanov",
            status: "ACTIVE",
          },
        ],
      };
  }
  return {};
};

export const startMocks = () =>
  createServer({
    routes() {
      this.namespace = "api";

      this.get(
        "/items",
        () => {
          return getItems();
        },
        { timing: 0 }
      );

      this.get(
        "/items/:id",
        (_schema: any, request: any) => {
          const id = parseInt(request.params.id);
          return getItems(id);
        },
        { timing: 0 }
      );
    },
  });

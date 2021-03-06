import * as t from "io-ts";
import { automodTrigger } from "../helpers";

// tslint:disable-next-line:no-empty-interface
interface KickTriggerResultType {}

export const KickTrigger = automodTrigger<KickTriggerResultType>()({
  configType: t.type({}),
  defaultConfig: {},

  async match({ context }) {
    if (context.modAction?.type !== "kick") {
      return;
    }

    return {
      extra: {},
    };
  },

  renderMatchInformation({ matchResult }) {
    return `User was kicked`;
  },
});

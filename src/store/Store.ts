import { create } from "zustand";
import { devtools } from "zustand/middleware";

import createAuthSliceState from "./AuthSlice";

import type { IAuthSliceState } from "@interfaces/store/IAuthSliceState";

const useChatStore = create<IAuthSliceState>()(
  devtools((...a) => ({
    ...createAuthSliceState(...a),
  }))
);

export default useChatStore;


import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const taskListState = atom<{ taskname: string; hoursworked: number }[]>({
    key: 'taskListState',
    default: [],
    effects_UNSTABLE: [persistAtom],
});


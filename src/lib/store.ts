import create from 'zustand';

const useStore = create<{
  count: number;
  increaseCount: () => void;

  color: string | null;
  setColor: (color: string | null) => void;
}>((set) => ({
  count: 0,
  increaseCount: () => set(({ count }) => ({ count: count + 1 })),

  color: null,
  setColor: (color) => set(() => ({ color: color }))
}));

export default useStore;

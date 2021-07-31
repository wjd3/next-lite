import create from 'zustand';

const useStore = create<{ count: number; increaseCount: () => void }>(
  (set) => ({
    count: 0,
    increaseCount: () => set(({ count }) => ({ count: count + 1 }))
  })
);

export default useStore;

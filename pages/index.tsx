import { useTheme } from 'next-themes';
import useStore from 'src/lib/store';
import shallow from 'zustand/shallow';

const HomePage = () => {
  const { theme, setTheme } = useTheme();
  const inactiveTheme = theme === 'light' ? 'dark' : 'light';

  const [count, increaseCount] = useStore(
    ({ count, increaseCount }) => [count, increaseCount],
    shallow
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-12">
      <div className="flex flex-col">
        <a
          href="https://github.com/dayvista/next-light"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="w-[fit-content] h-[fit-content] hover:text-blue-400 underline text-2xl font-bold"
        >
          next-light
        </a>
        <h2 className="text-xl font-bold">
          The Minimalist (Yet Opinionated) Next.js Starter Template
        </h2>
      </div>
      <div className="flex flex-col space-y-4">
        <button
          className="px-2 py-1 border border-solid rounded-md"
          onClick={() => {
            setTheme(inactiveTheme);
            increaseCount();
          }}
        >
          Change to {inactiveTheme} mode
        </button>
        <p>Theme has been changed {count} times</p>
      </div>
    </div>
  );
};

export default HomePage;

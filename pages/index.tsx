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
    <div className="flex flex-col items-center justify-evenly w-full h-full space-y-12">
      <div className="spacer" />
      <div className="flex flex-col">
        <div className="flex items-center">
          <a
            href="https://github.com/dayvista/next-lite"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            next-lite
          </a>
          <p className="text-2xl pointer-events-none">🥬</p>
        </div>
        <h2 className="text-xl font-bold">
          The Minimalist
          <br />
          (Yet Opinionated)
          <br />
          Next.js Starter Template
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
      <div className="spacer" />
      <p className="pb-6">
        Made by{' '}
        <a
          href="https://github.com/dayvista"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-base"
        >
          Liam Davis
        </a>
      </p>
    </div>
  );
};

export default HomePage;

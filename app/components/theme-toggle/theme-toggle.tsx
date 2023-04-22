import clsx from "clsx";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { Theme, useTheme } from "~/utils/theme-provider";

const themeToggleStyle =
  "transform text-secondary transition duration-1000 motion-reduce:duration-[0s]  dark:text-shade-300 group-hover:text-primary dark:group-hover:text-primary";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useTheme();
  return (
    <button
      onClick={() => {
        setTheme((previousTheme) =>
          previousTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        );
      }}
      className={clsx(
        "group inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-secondary p-1 transition hover:border-primary focus:border-primary focus:outline-none dark:border-shade-300 dark:hover:border-primary"
      )}
    >
      <RiMoonFill
        className={clsx(
          theme === Theme.DARK ? "hidden" : "flex",
          themeToggleStyle
        )}
      />
      <RiSunFill
        className={clsx(
          theme === Theme.LIGHT ? "hidden" : "flex",
          themeToggleStyle
        )}
      />
    </button>
  );
};

export default ThemeToggle;

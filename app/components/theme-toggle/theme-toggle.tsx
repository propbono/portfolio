import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { Theme, useTheme } from "~/utils/theme-provider";

const style = {
  container:
    "group inline-flex h-10 w-10 transform items-center justify-center rounded-full border-2 border-secondary-dark p-1 transition transition duration-1000 hover:border-primary-accent focus:border-primary-accent focus:outline-none dark:border-shade-300 dark:hover:border-primary-accent",
  icon: "h-6 w-6 text-secondary-dark transform transition duration-1000 dark:text-secondary-light group-hover:text-primary-accent dark:group-hover:text-primary-accent",
};

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useTheme();
  return (
    <button
      onClick={() => {
        setTheme((previousTheme) =>
          previousTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        );
      }}
      className={style.container}
    >
      {theme === Theme.DARK ? (
        <RiMoonFill className={style.icon} />
      ) : (
        <RiSunFill className={style.icon} />
      )}
    </button>
  );
};

export default ThemeToggle;

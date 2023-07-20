import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Checking all navigation links in header", async ({ page }) => {
  const logoLink = page.getByRole("link", { name: "Greg Mozer" });
  await expect(logoLink).toBeVisible();
  await expect(logoLink).toHaveAttribute("href", "/");
  await logoLink.click();
  await expect(logoLink).toHaveAttribute("aria-current", "page");
  await expect(logoLink).toHaveClass(/active/);
  await expect(page).toHaveURL("/");

  const aboutLink = page.getByRole("link", { name: "About" });
  await expect(aboutLink).toBeVisible();
  await expect(aboutLink).toHaveAttribute("href", "/about");
  await aboutLink.click();
  await expect(aboutLink).toHaveAttribute("aria-current", "page");
  await expect(aboutLink).toHaveClass(/active/);
  await expect(page).toHaveURL("/about");

  const projectsLink = page.getByRole("link", { name: "Projects" });
  await expect(projectsLink).toBeVisible();
  await expect(projectsLink).toHaveAttribute("href", "/projects");
  await projectsLink.click();
  await expect(projectsLink).toHaveAttribute("aria-current", "page");
  await expect(projectsLink).toHaveClass(/active/);
  await expect(page).toHaveURL("/projects");

  const homeLink = page.getByRole("link", { name: "Home" });
  await expect(homeLink).toBeVisible();
  await expect(homeLink).toHaveAttribute("href", "/");
  await homeLink.click();
  await expect(homeLink).toHaveAttribute("aria-current", "page");
  await expect(homeLink).toHaveClass(/active/);
  await expect(page).toHaveURL("/");
});

test("Checking all external links in footer", async ({ page }) => {
  const githubPagePromise = page.waitForEvent("popup");
  const githubLink = page.getByRole("link", { name: "Github" });
  await expect(githubLink).toHaveAttribute(
    "href",
    "https://github.com/propbono/"
  );
  await githubLink.click();
  const githubPage = await githubPagePromise;
  await expect(githubPage).toHaveURL("https://github.com/propbono/");

  const linkedInPagePromise = page.waitForEvent("popup");
  const linkedInLink = page.getByRole("link", { name: "LinkedIn" });
  await expect(linkedInLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/greg-mozer/"
  );
  await linkedInLink.click();
  const linkedInPage = await linkedInPagePromise;
  await expect(linkedInPage).toHaveURL(
    /https:\/\/www.linkedin.com\/in\/greg-mozer\//
  );
});

test("Mobile menu tests", async ({ page }) => {
  await expect(page.locator("#desktopMenu")).toBeVisible();
  await expect(page.getByTitle("Mobile Menu")).not.toBeVisible();
  await expect(page.locator("#mobileMenu")).not.toBeVisible();

  await page.setViewportSize({ width: 766, height: 800 });

  await expect(page.locator("#desktopMenu")).not.toBeVisible();
  await expect(page.getByTitle("Mobile Menu")).toBeVisible();
  await page.getByTitle("Mobile Menu").click();
  await expect(page.locator("#mobileMenu")).toBeVisible();
});

test("Theme toggle test", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.evaluate(
    () => matchMedia("(prefers-color-scheme: light)").matches
  );

  await page.reload();

  await page.getByTitle("Theme Toggle").click();

  await page.evaluate(() => matchMedia("(prefers-color-scheme: dark)").matches);
});

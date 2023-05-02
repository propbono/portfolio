import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3001/";

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test("Has proper title and content in hero section", async ({ page }) => {
  await expect(page).toHaveTitle("Propbono - Portfolio Website");

  const heading1 = page.locator("h1");

  await expect(heading1).toBeVisible();

  await expect(heading1).toHaveText(
    "Making the Web a More Beautiful Place, One Site at a Time."
  );

  const paragraph1 = page.locator("p").first();

  await expect(paragraph1).toBeVisible();

  await expect(paragraph1).toHaveText(
    "Full-stack developer turning ideas into innovative web apps with React. Check out my latest projects for examples of my expertise in web development and see how I can help bring your ideas to life."
  );

  const button = page.getByRole("link", { name: "Explore Projects" });
  await expect(button).toBeVisible();

  await expect(button).toHaveAttribute("href", "/projects");

  await button.click();

  await expect(page).toHaveURL(BASE_URL + "projects");
});

test("Has a proper content and links in tech stack section", async ({
  page,
}) => {
  const heading2 = page.locator("h2");
  await expect(heading2).toBeVisible();
  await expect(heading2).toHaveText("Tech Stack");
  const paragraph2 = page.locator("p").last();
  await expect(paragraph2).toBeVisible();
  await expect(paragraph2).toHaveText(
    "My favourite technologies that I use in my projects."
  );

  const reactPagePromise = page.waitForEvent("popup");
  const reactLink = page.getByRole("link", { name: "ReactJS" });
  await expect(reactLink).toHaveAttribute("href", "https://react.dev/");
  await reactLink.click();
  const reactPage = await reactPagePromise;
  await expect(reactPage).toHaveURL("https://react.dev/");

  const typescriptPagePromise = page.waitForEvent("popup");
  const typescriptLink = page.getByRole("link", { name: "Typescript" });
  await expect(typescriptLink).toHaveAttribute(
    "href",
    "https://www.typescriptlang.org/"
  );
  await typescriptLink.click();
  const typescriptPage = await typescriptPagePromise;
  await expect(typescriptPage).toHaveURL("https://www.typescriptlang.org/");

  const remixPagePromise = page.waitForEvent("popup");
  const remixLink = page.getByRole("link", { name: "RemixJS" });
  await expect(remixLink).toHaveAttribute("href", "https://remix.run/");
  await remixLink.click();
  const remixPage = await remixPagePromise;
  await expect(remixPage).toHaveURL("https://remix.run/");

  const nextPagePromise = page.waitForEvent("popup");
  const nextLink = page.getByRole("link", { name: "NextJS" });
  await expect(nextLink).toHaveAttribute("href", "https://nextjs.org/");
  await nextLink.click();
  const nextPage = await nextPagePromise;
  await expect(nextPage).toHaveURL("https://nextjs.org/");

  const tailwindPagePromise = page.waitForEvent("popup");
  const tailwindLink = page.getByRole("link", { name: "TailwindCSS" });
  await expect(tailwindLink).toHaveAttribute(
    "href",
    "https://tailwindcss.com/"
  );
  await tailwindLink.click();
  const tailwindPage = await tailwindPagePromise;
  await expect(tailwindPage).toHaveURL("https://tailwindcss.com/");

  const prismaPagePromise = page.waitForEvent("popup");
  const prismaLink = page.getByRole("link", { name: "Prisma" });
  await expect(prismaLink).toHaveAttribute("href", "https://www.prisma.io/");
  await prismaLink.click();
  const prismaPage = await prismaPagePromise;
  await expect(prismaPage).toHaveURL("https://www.prisma.io/");

  const nodePagePromise = page.waitForEvent("popup");
  const nodeLink = page.getByRole("link", { name: "NodeJS" });
  await expect(nodeLink).toHaveAttribute("href", "https://nodejs.org/en");
  await nodeLink.click();
  const nodePage = await nodePagePromise;
  await expect(nodePage).toHaveURL("https://nodejs.org/en");

  const pythonPagePromise = page.waitForEvent("popup");
  const pythonLink = page.getByRole("link", { name: "Python" });
  await expect(pythonLink).toHaveAttribute("href", "https://www.python.org/");
  await pythonLink.click();
  const pythonPage = await pythonPagePromise;
  await expect(pythonPage).toHaveURL("https://www.python.org/");

  const gitPagePromise = page.waitForEvent("popup");
  const gitLink = page.getByRole("link", { name: "Git", exact: true });
  await expect(gitLink).toHaveAttribute("href", "https://git-scm.com/");
  await gitLink.click();
  const gitPage = await gitPagePromise;
  await expect(gitPage).toHaveURL("https://git-scm.com/");
});

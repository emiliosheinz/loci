import { expect, test } from "@playwright/test";

const navigationLinks = [
  { name: "Problem", hash: "#problem" },
  { name: "Features", hash: "#features" },
  { name: "Open Source", hash: "#open-source" },
];

const externalLinks = [
  { label: "View on GitHub", href: "https://github.com/emiliosheinz/loci" },
  { label: "Documentation", href: "https://github.com/emiliosheinz/loci" },
  {
    label: "Roadmap",
    href: "https://github.com/users/emiliosheinz/projects/3",
  },
  { label: "Changelog", href: "https://github.com/emiliosheinz/loci/releases" },
  { label: "Wiki", href: "https://github.com/emiliosheinz/loci/wiki" },
  {
    label: "Contribute on GitHub",
    href: "https://github.com/emiliosheinz/loci?tab=contributing-ov-file",
  },
];

test.describe("Home Page", () => {
  test("loads and renders key sections", async ({ page }) => {
    await page.goto("/");

    await test.step("renders header and hero", async () => {
      await expect(page.locator("header")).toBeVisible();
      await expect(
        page.getByRole("heading", { name: "Capture anything, in any moment" }),
      ).toBeVisible();
    });

    await test.step("renders all content sections and footer", async () => {
      await expect(page.locator("#problem")).toBeVisible();
      await expect(page.locator("#features")).toBeVisible();
      await expect(page.locator("#open-source")).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
    });
  });

  test("toggles theme", async ({ page }) => {
    await page.goto("/");

    const themeToggleButton = page.getByTestId("theme-toggle");

    await test.step("opens the theme menu", async () => {
      await expect(themeToggleButton).toBeVisible();
      await themeToggleButton.click();
      await expect(page.getByTestId("theme-light")).toBeVisible();
      await expect(page.getByTestId("theme-dark")).toBeVisible();
    });

    await test.step("switches to dark theme", async () => {
      await page.getByTestId("theme-dark").click();
      await expect(page.locator("html")).toHaveClass(/dark/);
    });

    await page.waitForTimeout(300); // wait for the transition to complete

    await test.step("opens the theme menu", async () => {
      await expect(themeToggleButton).toBeVisible();
      await themeToggleButton.click();
      await expect(page.getByTestId("theme-dark")).toBeVisible();
      await expect(page.getByTestId("theme-light")).toBeVisible();
    });

    await test.step("switches back to light theme", async () => {
      await page.getByTestId("theme-light").click();
      await expect(page.locator("html")).not.toHaveClass(/dark/);
    });
  });

  test.describe("Internal navigation", () => {
    for (const link of navigationLinks) {
      test(`navigates to ${link.name} section`, async ({ page }) => {
        await page.goto("/");
        page.getByRole("link", { name: link.name }).click();
        await expect(page).toHaveURL(new RegExp(`${link.hash}$`));
        await expect(page.locator(link.hash)).toBeInViewport();
      });
    }
  });

  test.describe("External navigation", () => {
    for (const link of externalLinks) {
      test(`has correct href for ${link.label}`, async ({ page }) => {
        await page.goto("/");
        const externalLink = page.getByRole("link", { name: link.label });
        await expect(externalLink).toHaveAttribute("href", link.href);
      });
    }

    test("has correct href for footer GitHub icon link", async ({ page }) => {
      await page.goto("/");
      const footerGitHubLink = page.getByRole("link", { name: "GitHub" });
      await expect(footerGitHubLink.first()).toHaveAttribute(
        "href",
        "https://github.com/emiliosheinz/loci",
      );
    });
  });
});

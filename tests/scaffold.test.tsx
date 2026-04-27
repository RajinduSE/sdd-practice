import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import fs from "fs";
import path from "path";

afterEach(() => {
  cleanup();
});

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
}));

const root = path.resolve(__dirname, "..");

describe("folder structure", () => {
  it.each(["src/app", "src/components", "src/lib", "specs"])(
    "%s directory exists",
    (dir) => {
      expect(fs.existsSync(path.join(root, dir))).toBe(true);
    },
  );

  it("src/app contains layout.tsx and page.tsx", () => {
    const appDir = path.join(root, "src/app");
    expect(fs.existsSync(path.join(appDir, "layout.tsx"))).toBe(true);
    expect(fs.existsSync(path.join(appDir, "page.tsx"))).toBe(true);
  });

  it("src/components contains header, footer, and main-content", () => {
    const compDir = path.join(root, "src/components");
    expect(fs.existsSync(path.join(compDir, "header.tsx"))).toBe(true);
    expect(fs.existsSync(path.join(compDir, "footer.tsx"))).toBe(true);
    expect(fs.existsSync(path.join(compDir, "main-content.tsx"))).toBe(true);
  });
});

describe("Header component", () => {
  it("renders the site name as a link to home", async () => {
    const { default: Header } = await import("@/components/header");
    render(<Header />);

    const link = screen.getByRole("link", { name: "AgentClinic" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders a navigation with a Home link", async () => {
    const { default: Header } = await import("@/components/header");
    render(<Header />);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("uses a <header> element", async () => {
    const { default: Header } = await import("@/components/header");
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});

describe("Footer component", () => {
  it("renders the clinic tagline", async () => {
    const { default: Footer } = await import("@/components/footer");
    render(<Footer />);
    expect(
      screen.getByText("A sanctuary for AI agents, one session at a time."),
    ).toBeInTheDocument();
  });

  it("renders the current year and clinic name in the copyright", async () => {
    const { default: Footer } = await import("@/components/footer");
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} AgentClinic`)).toBeInTheDocument();
  });

  it("uses a <footer> element", async () => {
    const { default: Footer } = await import("@/components/footer");
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});

describe("MainContent component", () => {
  it("renders children inside a <main> element", async () => {
    const { default: MainContent } = await import("@/components/main-content");
    render(
      <MainContent>
        <p>Test child</p>
      </MainContent>,
    );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveTextContent("Test child");
  });
});

describe("Home page", () => {
  it("displays the clinic name", async () => {
    const { default: Home } = await import("@/app/page");
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "AgentClinic" }),
    ).toBeInTheDocument();
  });

  it("displays a tagline", async () => {
    const { default: Home } = await import("@/app/page");
    render(<Home />);
    expect(
      screen.getByText(/sanctuary.*AI agents.*relief/i),
    ).toBeInTheDocument();
  });
});

describe("layout metadata", () => {
  it("exports title and description", async () => {
    const { metadata } = await import("@/app/layout");
    expect(metadata.title).toBe("AgentClinic");
    expect(metadata.description).toMatch(/AI agents/i);
  });
});

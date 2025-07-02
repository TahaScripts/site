"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const logoBase64 = `PHN2ZyB3aWR0aD0iMjQwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAyNDAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTgxNS40OTMgNjAwVjEyNi44NTdINjAwVjBIMTIwMFYxMjYuODU3SDk4NC41MDdWNjAwSDgxNS40OTNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjI1Ny4zMiA2MDBMMjAzNy43NiAwSDIxNzEuODRMMjM5OS43OCA2MDBIMjI1Ny4zMlpNMTc5OS43OCA2MDBMMjAyNy43MSAwSDIxNjEuNzlMMTk0Mi4yMyA2MDBIMTc5OS43OFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMjYuMzU5IDBDMjk5LjUwNiA0Ljg3ODc1ZS0wNSAzNjQuMDg2IDEyLjg1NyA0MjAuMDk5IDM4LjU3MTNDNDc2Ljc3MSA2NC4yODU2IDUyMC45MjIgOTkuNzE0NiA1NTIuNTUzIDE0NC44NTdDNTg0LjE4NCAxODkuNDI5IDU5OS45OTkgMjQxLjE0MyA1OTkuOTk5IDMwMEM1OTkuOTk5IDM1OC4yODYgNTg0LjE4NCA0MTAgNTUyLjU1MyA0NTUuMTQzQzUyMC45MjIgNTAwLjI4NSA0NzYuNzcxIDUzNS43MTQgNDIwLjA5OSA1NjEuNDI5QzM2NC4wODYgNTg3LjE0MyAyOTkuNTA2IDYwMCAyMjYuMzU5IDYwMEgwVjQ3MEgxNjguMzY5VjQ2OS43MTRIMjI2LjM1OUMyNTYuNjcyIDQ2OS43MTQgMjg0LjY3OSA0NjUuNzE0IDMxMC4zNzkgNDU3LjcxNEMzMzYuMDc5IDQ0OS4xNDIgMzU4LjQ4NCA0MzcuNDI4IDM3Ny41OTUgNDIyLjU3MUMzOTYuNzA1IDQwNy4xNDMgNDExLjUzMiAzODkuMTQzIDQyMi4wNzUgMzY4LjU3MUM0MzIuNjE5IDM0Ny40MjggNDM3Ljg5MSAzMjQuNTcxIDQzNy44OTEgMzAwQzQzNy44OTEgMjc1LjQyOSA0MzIuNjE5IDI1Mi44NTggNDIyLjA3NSAyMzIuMjg2QzQxMS41MzIgMjExLjE0MyAzOTYuNzA1IDE5My4xNDMgMzc3LjU5NSAxNzguMjg2QzM1OC40ODQgMTYyLjg1OCAzMzYuMDc5IDE1MS4xNDMgMzEwLjM3OSAxNDMuMTQzQzI4NC42NzkgMTM0LjU3MSAyNTYuNjcyIDEzMC4yODYgMjI2LjM1OSAxMzAuMjg2SDE2OC4zNjlWMTMwSDBWMEgyMjYuMzU5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE3MjUgMjQyLjU3MVYzNjguNTcxSDE0MDguMTlWNjAwSDEyMDBWMjQzSDE2MjkuNjJWMjQyLjU3MUgxNzI1Wk0xODAwIDEyNi44NTdIMTQwOC4xOVYxMjdIMTIwMFYwSDE4MDBWMTI2Ljg1N1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=`;
const logoUrl = `url('data:image/svg+xml;base64,${logoBase64}')`;

const GRID_CONFIG = {
  light: {
    background: {
      color: "#7a7a7a", // light grey
      maxOpacity: 0.2,
      flickerChance: 0.1,
      squareSize: 4,
      gridGap: 4,
    },
    logo: {
      color: "#000000", // dark color
      maxOpacity: 1,
      flickerChance: 0.5,
      squareSize: 3,
      gridGap: 6,
    },
  },
  dark: {
    background: {
      color: "#efe8ff",
      maxOpacity: 0.1,
      flickerChance: 0.1,
      squareSize: 4,
      gridGap: 4,
    },
    logo: {
      color: "#e2e8f0",
      maxOpacity: 1,
      flickerChance: 0.5,
      squareSize: 3,
      gridGap: 6,
    },
  },
} as const;

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentConfig =
    resolvedTheme === "light" ? GRID_CONFIG.light : GRID_CONFIG.dark;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex w-full h-screen justify-center items-center relative overflow-hidden bg-background text-foreground">
      {mounted && (
        <>
          <FlickeringGrid
            className="absolute inset-0 z-0 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] motion-safe:animate-pulse"
            {...currentConfig.background}
          />
          <div
            className="logo-mask absolute inset-0 z-0 translate-y-[2vh] motion-safe:animate-fade-in"
            style={
              {
                "--mask-image": logoUrl,
                animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              } as React.CSSProperties
            }
          >
            <FlickeringGrid {...currentConfig.logo} />
          </div>
        </>
      )}
      <div className="absolute inset-0 z-0 translate-y-[2vh] motion-safe:animate-fade-in">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-fit h-fit pt-20">
            <FloatingDock
              desktopClassName="max-w-md mx-auto"
              mobileClassName="max-w-md mx-auto"
              items={[
                {
                  title: "Contact",
                  icon: (
                    <Mail className="w-10 h-10 text-foreground opacity-50" />
                  ),
                  href: "mailto:investors@dtfadvisors.com",
                },
                {
                  title: "Toggle Theme",
                  icon:
                    resolvedTheme === "light" ? (
                      <Moon className="w-10 h-10 text-foreground opacity-50" />
                    ) : (
                      <Sun className="w-10 h-10 text-foreground opacity-50" />
                    ),
                  onClick: toggleTheme,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

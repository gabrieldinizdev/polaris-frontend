"use client";

import Link from "next/link";
import { MouseEvent, useState } from "react";

import { Tooltip } from "@mui/material";

import type { Icon } from "@phosphor-icons/react";

import { StyledToggleButton, StyledToggleButtonGroup } from "./styled";

type MobileNavBarProps = {
  paths: { title: string; url: string; icon: Icon }[];
  defaultPath?: string;
};

export const MobileNavBar = ({
  paths,
  defaultPath = "/",
}: MobileNavBarProps) => {
  const [navigation, setNavigation] = useState<string>(defaultPath);

  const handleNavigation = (
    _: MouseEvent<HTMLElement>,
    newNavigation: string | null
  ) => {
    if (newNavigation !== null) setNavigation(newNavigation);
  };

  return (
    <StyledToggleButtonGroup
      aria-label="navigation bar"
      onChange={handleNavigation}
      value={navigation}
      exclusive
      fullWidth
    >
      {paths.map(({ title, url, icon: Icon }) => (
        <Tooltip key={url} title={title} arrow>
          <Link
            href={url}
            style={{
              display: "flex",
              flexGrow: 1,
              padding: 0,
            }}
          >
            <StyledToggleButton value={url} aria-label={title}>
              <Icon size={32} />
            </StyledToggleButton>
          </Link>
        </Tooltip>
      ))}
    </StyledToggleButtonGroup>
  );
};

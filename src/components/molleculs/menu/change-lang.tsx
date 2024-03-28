"use client";

import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@/components/atoms/menu/material-tailwind";
import { LANGUAGES } from "@/constants";
import { GLOBAL_CONTEXT } from "@/context/global";
import type { Languages } from "@/interfaces";
import { type MouseEventHandler, useContext, useState } from "react";

export default function ChangeLang() {
  const { updateParams } = useContext(GLOBAL_CONTEXT);
  const [open, setOpen] = useState<boolean>(false);

  const updateLang =
    (lang: Languages): MouseEventHandler =>
    (e) => {
      updateParams("lang", lang);
      window.location.reload();
    };

  return (
    <Menu allowHover open={open} handler={setOpen}>
      <MenuHandler>
        <a className="cursor-pointer flex items-center hover:text-blue-500 transition-colors">
          Lang
        </a>
      </MenuHandler>
      <MenuList>
        {LANGUAGES.map((el) => (
          <MenuItem onClick={updateLang(el)} key={el}>
            {el}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

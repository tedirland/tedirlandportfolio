"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent justify="start">
        <Link href="/">
          <User
            name="Ted Irland"
            description="Senior Solutions Engineer"
            avatarProps={{
              src: "https://media.licdn.com/dms/image/C5603AQFdLVIfwS7Qbg/profile-displayphoto-shrink_400_400/0/1554994981841?e=1707350400&v=beta&t=KYng3Pb2cM8HxV_TykQuDEudKtsrwGjhVSTl0CSAxM4",
            }}
          />
        </Link>
      </NavbarContent>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/references">
            References
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown backdrop="blur" type="listbox" shouldBlockScroll>
          <DropdownTrigger>
            <Button variant="bordered">Connect</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="linkedin">
              <Link isExternal href="https://www.linkedin.com/in/tirland/">
                <Avatar
                  size="lg"
                  className="justify-center"
                  src="data:image/png;base64,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"
                />
              </Link>
            </DropdownItem>
            <DropdownItem key="github">
              <Link isExternal href="https://github.com/tedirland">
                <Avatar
                  size="lg"
                  src="data:image/png;base64,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"
                />
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

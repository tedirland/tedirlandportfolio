import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
} from "@nextui-org/react";
import { AcmeLogo } from "@/app/acmelogo";

export default function App() {
  return (
    <Navbar>
      <Avatar src="https://media.licdn.com/dms/image/C5603AQFdLVIfwS7Qbg/profile-displayphoto-shrink_400_400/0/1554994981841?e=1707350400&v=beta&t=KYng3Pb2cM8HxV_TykQuDEudKtsrwGjhVSTl0CSAxM4" />
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Resume / CV
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            References
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

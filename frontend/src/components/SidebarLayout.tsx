import { Flex } from "@chakra-ui/react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

const SidebarLayout = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Flex
      width={"100%"}
      bgColor={"background"}
      bgSize={"100%"}
      paddingTop={"4.5rem"}
      paddingLeft={isOpen ? "18rem" : "5rem"}
      transition="all .5s ease"
      minHeight={"100vh"}
    >
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
    </Flex>
  );
};

export default SidebarLayout;

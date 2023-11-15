import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { Box, ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { BottomBar } from "./_component/BottomBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Flex w="100vw" h="100vh" flexDirection={"column"}>
          <Box flex={1}>
            <TRPCReactProvider cookies={cookies().toString()}>
              {children}
            </TRPCReactProvider>
          </Box>
          <BottomBar />
        </Flex>
      </body>
    </html>
  );
}

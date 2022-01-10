import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
    const router = useRouter();

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
        lg: true
      });

    return (
        <Flex justify="center" position="relative"  maxWidth={1440} width="100%" h={[50, 100]}>
                { router.asPath !== '/' && (
                    <Link href="/">
                        <Box position="absolute" left={["16px", "140px"]} top={["17px", "34px"]} cursor="pointer">
                            <Image src='/back-button.svg' w={["16px", "32px"]} />
                        </Box>
                    </Link>
                )
                }
            <Image src='/Logo.svg' w={[81, 184]} />
        </Flex>
    )
}
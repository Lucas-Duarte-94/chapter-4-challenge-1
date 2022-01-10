import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

interface SliderItemProps {
    title: string;
    subtitle: string;
    href: string;
    imageURL: string;
    position?: string;
}

export function SliderItem({ title, subtitle, href, imageURL, position = 'center' }: SliderItemProps) {
    return (
        
            <Link href={href}>
                <Flex w="100%" h={[250, 450]} backgroundImage={imageURL} backgroundSize="cover" backgroundPosition={position} justify="center" align="center" direction="column">
                    <Heading color="gray.50" fontWeight="bold" fontSize={["24px", "48px"]}>{title}</Heading>
                    <Text color="gray.200" fontWeight="bold" fontSize={["14px", "24px"]}>{subtitle}</Text>
                </Flex>
            </Link>
        
    )
}
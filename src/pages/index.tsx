import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  Text,
  useColorMode,
  Button,
  Link as ChakraLink,
  Flex,
  Spacer,
  Progress,
  ButtonGroup,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import '../styles/toy-drive.css';

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { toggleColorMode } = useColorMode();

  // Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const currentAmountRaised = 336;

  return (
    <>
      <Box as="main">
        <Container
          alignItems="center"
          display="flex"
          flexDirection={['column', 'row']}
          gap={4}
          maxW="container.lg"
          py={4}
        >
          <Image src={'./images/nycgb-Logo.svg'} />
          <Image src={'./images/nycgb-full-text-black.svg'} />
          <Spacer />
          <Tooltip fontStyle="italic" label="🎶 Ghostbusters! 🎶">
            <Button
              as="a"
              colorScheme="red"
              href="mailto:info@nycghostbusters.com"
            >
              Who ya gonna email?
            </Button>
          </Tooltip>
          <ButtonGroup spacing={0} variant="ghost">
            <IconButton
              aria-label="NYC Ghostbusters on Facebook"
              as="a"
              href="https://facebook.com/nycghostbusters"
              icon={<Image src="./images/facebook-icon.png" />}
              isRound
              target="_blank"
            />
            <IconButton
              aria-label="NYC Ghostbusters on Instagram"
              as="a"
              href="https://instagram.com/nycghostbusters"
              icon={<Image src="./images/instagram-icon.png" />}
              isRound
              target="_blank"
            />
          </ButtonGroup>
        </Container>
        <Box
          bgBlendMode="color"
          bgGradient="linear(blue.600, blue.200 50%, pink.200, yellow.300, orange.300 95%, orange.900 99%)"
          bgPosition="center"
          bgSize="cover"
          color="white"
          textAlign="center"
        >
          <Container
            alignItems="center"
            display="flex"
            flexDirection={[
              'column-reverse', null, 'row'
            ]}
            gap={4}
            justifyContent="center"
            maxW="container.lg"
            pt={8}
          >
            <Flex flexDirection="column" alignItems="center">
              <Image width={[60, 80]} src={'./images/ecto-holiday-image.png'} />
              <Flex alignItems="center" flexWrap="wrap" gap={2} justifyContent="center">
                <Button
                  as={ChakraLink}
                  colorScheme="green"
                  href="https://www.zeffy.com/en-US/donation-form/e7024fcf-6d22-4f9f-97d5-19741f9311e5"
                  isExternal
                  size="lg"
                >
                  Donate Here 🎁
                </Button>
                <Button
                  as={ChakraLink}
                  colorScheme="red"
                  href="https://www.youtube.com/live/yEaG9CHP0tM?si=dH-GhNUPNLKWGs49"
                  isExternal
                  size="lg"
                >
                  Watch our Telethon
                </Button>
              </Flex>
            </Flex>
            <Flex flexDir="column" alignItems="center">
              <Image height={16} objectFit="contain" src="./images/toy-drive-2023/3rd-Annual-Live.png" />
              <Image height={24} objectFit="contain" src="./images/toy-drive-2023/Toy-Drive-Telethon.png" />
              <Image height={8} objectFit="contain" src="./images/toy-drive-2023/Wednesday-nov-29th---8PM-EST.png" />
            </Flex>
          </Container>
          <Flex
            alignItems="center"
            flexDirection={['column', null, 'row']}
            gap={4}
            maxWidth="container.lg"
            m="auto"
            py={2}
            px={4}
            width="100%"
          >
            <Progress
              bg="orange.500"
              colorScheme="yellow"
              hasStripe
              value={(currentAmountRaised/2023) * 100}
              width="100%"
              borderWidth={2}
              borderColor="black"
              borderRadius="md"
            />
            <Text color="black" fontSize="sm" fontWeight="bold" whiteSpace="nowrap">
              Amount Raised: {formatter.format(currentAmountRaised)} / {formatter.format(2023)}
            </Text>
          </Flex>
          <Box pb={8}>
            <ChakraLink color="gray.700" fontWeight="bold" href="http://ghostbusterstoydrive.com" isExternal>
              ghostbusterstoydrive.com
            </ChakraLink>
          </Box>
        </Box>
        <Box
          bgBlendMode="color"
          bgColor="blackAlpha.700"
          bgImage="url('./images/firehouse-main-image.jpg')"
          bgPosition="center"
          bgSize="cover"
          color="white"
          textAlign="center"
        >
          <Container
            alignItems="center"
            display="flex"
            flexDirection={[
              'column', null, 'row'
            ]}
            gap={4}
            maxW="container.lg"
            py={4}
          >
            <Image boxSize={[60, 80]} src={'./images/nycgb-Logo.svg'} />
            <Box>
              <Heading as="h1" mb={8} size="2xl">
                New York City&apos;s Fan Organized Ghostbusters Charity Group
              </Heading>
              <Heading as="h2" letterSpacing={10} size="sm">
                EST. 2012
              </Heading>
            </Box>
          </Container>
        </Box>
        <Container
          display="flex"
          flexDirection={[
            'column', null, 'row'
          ]}
          gap={16}
          maxW="container.lg"
          py={16}
        >
          <Flex
            flexDirection="column"
            gap={8}
            maxWidth="container.sm"
          >
            <Text fontSize="lg">
              The New York City Ghostbusters was originally established in 2012 as a loose homage to the Ghostbusters movie franchise. Up to this point, there had been several attempts to start a local Ghostbusters chapter in the New York City area, but due to whatever reason, call it faith, call it luck, call it karma, nothing solidified. It wasn&apos;t until the fall of 2013, when a change in leadership brought a new focus to the franchise, establishing it as a viable entity within the greater Ghostbusters community.
            </Text>
            <Text>
              Refocused, the NYC Ghostbusters moved to revamp its organizational structure, shifting from a simple “cosplay” group, to that of a children&apos;s educational, fan-based organization established for and by the residents of New York City&apos;s five boroughs. Through participation in local community events, the mission of the NYC Ghostbusters became a desire to spread esprit de corps to all individuals we encounter and to foster teamwork through the development of individual and group imagination. This mission was put into practice through the development of an interactive children&apos;s educational program, designed to incorporate aspects of sciences, arts and literacy awareness, while instilling character traits such as teamwork, camaraderie, self-confidence, imagination, creativity and individualism.
            </Text>
            <Text>
              Since its inception, the NYC Ghostbusters have grown in leaps and bounds, and this growth is a direct reflection of the dedication and imagination of its members. The membership is the backbone of any organization, and instead of letting egos get in the way, we as an organization have become a family, where teamwork, inclusion, community service, creativity and imagination have become the corner stone of our philosophy. To paraphrase Walt Disney, the NYC Ghostbusters, will never be completed. It will continue to grow as long as there is imagination left in the world along with the dedication of its members.
            </Text>
          </Flex>
          <Spacer
            bgImage={'url(./images/ecto-image.jpg)'}
            bgPosition="center"
            bgSize="cover"
            borderRadius="lg"
            minHeight="3xs"
          />
        </Container>
        <Box
          bgAttachment="fixed"
          bgImage={'url(./images/ecto-nyc-main.jpg)'}
          bgPosition="center"
          bgSize="cover"
          pt={16}
          pb={64}
        >
        </Box>
        <Container
          alignItems="center"
          display="flex"
          flexDirection={['column', null, 'row']}
          gap={16}
          maxW="container.lg"
          py={16}
        >
          <Image maxW="3xs" src="./images/volunteer-recruit.jpg" />
          <Center flexDirection="column" gap={8}>
            <Heading as="h2" size="lg" textAlign="center">
              Want to be a member of the NYC Ghostbusters? We are always open for new volunteers!
            </Heading>
            <Button
              as="a"
              colorScheme="green"
              href="mailto:recruitment@nycghostbusters.com"
              size="lg"
            >
              We&apos;re Ready to Believe IN You
            </Button>
          </Center>
        </Container>
      </Box>
      <Box
        as="footer"
        bgColor="black"
        color="white"
        p={4}
        pb={[8, 16, 20, 24]}
        textAlign="center"
      >
        This website copyright 2023 New York City Ghostbusters, Inc.
        <br />
        "Ghostbusters" is a copyright of Columbia Pictures.
      </Box>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>New York City Ghostbusters, Inc. - Busting Ghosts for Charity at Conventions, Birthday Parties, Tours, and More</title>
    <meta name="title" content="New York City Ghostbusters, Inc.: Bustin Ghosts for Charity Since 2012" />
    <meta name="description" content="The NYC Ghostbusters are a local fan organized non-profit cosplay group who raise money for local charity at conventions, parties, tours, and more." />
    <meta name="keywords" content="NYC Ghostbusters, Ghostbusters, New York City Ghostbusters, cosplay, charity, non-profit, conventions, NYCC, New York Comic Con, Birthday Parties, Parties, NJ, New Jersey, Tours, NYC Tours, Film Location Tours, Ghostbusters Tours" />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </>
)

import React, { useCallback } from "react";
import { Box, useDisclose, IconButton, Stagger, HStack, Icon, Center, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface InPageNavigate {
  Button_Page_1: never;
  Button_Page_2: never;
  Button_Page_3: never;
  Button_Page_4: never;
  // never ???
}

export const StraggerComposants = ({ Button_Page_1, Button_Page_2, Button_Page_3, Button_Page_4 }: InPageNavigate) => {
  const {
    isOpen,
    onToggle
  } = useDisclose();

  const navigation = useNavigation()

  const onPressButton_1 = useCallback(() => {
    navigation.navigate(Button_Page_1)
  }, [])

  const onPressButton_2 = useCallback(() => {
    navigation.navigate(Button_Page_2)
  }, [])

  const onPressButton_3 = useCallback(() => {
    navigation.navigate(Button_Page_3)
  }, [])

  const onPressButton_4 = useCallback(() => {
    navigation.navigate(Button_Page_4)
  }, [])

  return <Center >
    <Box style={{ position: "absolute" }} alignItems="center" minH="500" >
      <Stagger visible={isOpen} initial={{
        opacity: 0,
        scale: 0,
        translateY: 34
      }} animate={{
        translateY: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          mass: 0.8,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }} exit={{
        translateY: 34,
        scale: 0.5,
        opacity: 0,
        transition: {
          duration: 100,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }}>
        <IconButton onPress={onPressButton_4} mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon as={MaterialIcons} size="6" name="location-pin" _dark={{ color: "warmGray.50" }} color="warmGray.50" />} />
        <IconButton onPress={onPressButton_3} mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{ color: "warmGray.50" }} size="6" name="microphone" color="warmGray.50" />} />
        <IconButton onPress={onPressButton_2} mb="4" variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{ color: "warmGray.50" }} size="6" name="video" color="warmGray.50" />} />
        <IconButton onPress={onPressButton_1} mb="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<Icon as={MaterialIcons} size="6" name="photo-library" _dark={{ color: "warmGray.50" }} color="warmGray.50" />} />
      </Stagger>
    </Box>
    <HStack alignItems="center">
      <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon as={MaterialCommunityIcons} size="6" name="dots-horizontal" color="warmGray.50" _dark={{ color: "warmGray.50" }} />} />
    </HStack>
  </Center>;
};
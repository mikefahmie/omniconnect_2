/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function AmplifyStudio(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="960px"
      height="97px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AmplifyStudio")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="80px"
        fontWeight="900"
        color="rgba(255,255,255,1)"
        lineHeight="96.81817626953125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="960px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Amplify Studio"
        {...getOverrideProps(overrides, "Amplify Studio")}
      ></Text>
    </View>
  );
}

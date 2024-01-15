/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Customers } from "../models";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerProfileOverridesProps = {
    CustomerProfile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    "Design Engineer at Cloth Studios29766903"?: PrimitiveOverrideProps<TextProps>;
    "Design Engineer at Cloth Studios4266458"?: PrimitiveOverrideProps<TextProps>;
    "Design Engineer at Cloth Studios4266459"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CustomerProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    customers?: Customers;
} & {
    overrides?: CustomerProfileOverridesProps | undefined | null;
}>;
export default function CustomerProfile(props: CustomerProfileProps): React.ReactElement;

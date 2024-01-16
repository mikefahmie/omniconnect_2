/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CustomerDetailsOverridesProps = {
    CustomerDetails?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product.29766836"?: PrimitiveOverrideProps<TextProps>;
    "Information about this product.29766837"?: PrimitiveOverrideProps<TextProps>;
    "Information about this product.4299459"?: PrimitiveOverrideProps<TextProps>;
    "Information about this product.4299460"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CustomerDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    customers?: any;
} & {
    overrides?: CustomerDetailsOverridesProps | undefined | null;
}>;
export default function CustomerDetails(props: CustomerDetailsProps): React.ReactElement;

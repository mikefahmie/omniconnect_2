/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type OrderDetailsOverridesProps = {
    OrderDetails?: PrimitiveOverrideProps<FlexProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Order ID"?: PrimitiveOverrideProps<TextProps>;
    Shipped?: PrimitiveOverrideProps<TextProps>;
    "Customer ID"?: PrimitiveOverrideProps<TextProps>;
    "Customer Address"?: PrimitiveOverrideProps<TextProps>;
    "Items Ordered"?: PrimitiveOverrideProps<TextProps>;
    "Order Created"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type OrderDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    orders?: any;
} & {
    overrides?: OrderDetailsOverridesProps | undefined | null;
}>;
export default function OrderDetails(props: OrderDetailsProps): React.ReactElement;

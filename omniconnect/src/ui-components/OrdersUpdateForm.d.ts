/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrdersUpdateFormInputValues = {
    orderPlaced?: string;
    item?: string;
    addressZIP?: string;
    addressStreet?: string;
    addressState?: string;
    orderStatus?: string;
};
export declare type OrdersUpdateFormValidationValues = {
    orderPlaced?: ValidationFunction<string>;
    item?: ValidationFunction<string>;
    addressZIP?: ValidationFunction<string>;
    addressStreet?: ValidationFunction<string>;
    addressState?: ValidationFunction<string>;
    orderStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrdersUpdateFormOverridesProps = {
    OrdersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    orderPlaced?: PrimitiveOverrideProps<TextFieldProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    addressZIP?: PrimitiveOverrideProps<TextFieldProps>;
    addressStreet?: PrimitiveOverrideProps<TextFieldProps>;
    addressState?: PrimitiveOverrideProps<TextFieldProps>;
    orderStatus?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrdersUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrdersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    orders?: any;
    onSubmit?: (fields: OrdersUpdateFormInputValues) => OrdersUpdateFormInputValues;
    onSuccess?: (fields: OrdersUpdateFormInputValues) => void;
    onError?: (fields: OrdersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrdersUpdateFormInputValues) => OrdersUpdateFormInputValues;
    onValidate?: OrdersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrdersUpdateForm(props: OrdersUpdateFormProps): React.ReactElement;

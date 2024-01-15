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
export declare type CustomersCreateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    notes?: string;
    profilePic?: string;
};
export declare type CustomersCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    profilePic?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomersCreateFormOverridesProps = {
    CustomersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    profilePic?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomersCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomersCreateFormInputValues) => CustomersCreateFormInputValues;
    onSuccess?: (fields: CustomersCreateFormInputValues) => void;
    onError?: (fields: CustomersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomersCreateFormInputValues) => CustomersCreateFormInputValues;
    onValidate?: CustomersCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomersCreateForm(props: CustomersCreateFormProps): React.ReactElement;

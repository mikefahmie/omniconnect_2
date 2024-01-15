/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getOrders } from "../graphql/queries";
import { updateOrders } from "../graphql/mutations";
const client = generateClient();
export default function OrdersUpdateForm(props) {
  const {
    id: idProp,
    orders: ordersModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    orderPlaced: "",
    item: "",
    addressZIP: "",
    addressStreet: "",
    addressState: "",
    orderStatus: "",
  };
  const [orderPlaced, setOrderPlaced] = React.useState(
    initialValues.orderPlaced
  );
  const [item, setItem] = React.useState(initialValues.item);
  const [addressZIP, setAddressZIP] = React.useState(initialValues.addressZIP);
  const [addressStreet, setAddressStreet] = React.useState(
    initialValues.addressStreet
  );
  const [addressState, setAddressState] = React.useState(
    initialValues.addressState
  );
  const [orderStatus, setOrderStatus] = React.useState(
    initialValues.orderStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ordersRecord
      ? { ...initialValues, ...ordersRecord }
      : initialValues;
    setOrderPlaced(cleanValues.orderPlaced);
    setItem(cleanValues.item);
    setAddressZIP(cleanValues.addressZIP);
    setAddressStreet(cleanValues.addressStreet);
    setAddressState(cleanValues.addressState);
    setOrderStatus(cleanValues.orderStatus);
    setErrors({});
  };
  const [ordersRecord, setOrdersRecord] = React.useState(ordersModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOrders.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrders
        : ordersModelProp;
      setOrdersRecord(record);
    };
    queryData();
  }, [idProp, ordersModelProp]);
  React.useEffect(resetStateValues, [ordersRecord]);
  const validations = {
    orderPlaced: [],
    item: [],
    addressZIP: [],
    addressStreet: [],
    addressState: [],
    orderStatus: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          orderPlaced: orderPlaced ?? null,
          item: item ?? null,
          addressZIP: addressZIP ?? null,
          addressStreet: addressStreet ?? null,
          addressState: addressState ?? null,
          orderStatus,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateOrders.replaceAll("__typename", ""),
            variables: {
              input: {
                id: ordersRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrdersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Order placed"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={orderPlaced}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderPlaced: value,
              item,
              addressZIP,
              addressStreet,
              addressState,
              orderStatus,
            };
            const result = onChange(modelFields);
            value = result?.orderPlaced ?? value;
          }
          if (errors.orderPlaced?.hasError) {
            runValidationTasks("orderPlaced", value);
          }
          setOrderPlaced(value);
        }}
        onBlur={() => runValidationTasks("orderPlaced", orderPlaced)}
        errorMessage={errors.orderPlaced?.errorMessage}
        hasError={errors.orderPlaced?.hasError}
        {...getOverrideProps(overrides, "orderPlaced")}
      ></TextField>
      <TextField
        label="Item"
        isRequired={false}
        isReadOnly={false}
        value={item}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderPlaced,
              item: value,
              addressZIP,
              addressStreet,
              addressState,
              orderStatus,
            };
            const result = onChange(modelFields);
            value = result?.item ?? value;
          }
          if (errors.item?.hasError) {
            runValidationTasks("item", value);
          }
          setItem(value);
        }}
        onBlur={() => runValidationTasks("item", item)}
        errorMessage={errors.item?.errorMessage}
        hasError={errors.item?.hasError}
        {...getOverrideProps(overrides, "item")}
      ></TextField>
      <TextField
        label="Address zip"
        isRequired={false}
        isReadOnly={false}
        value={addressZIP}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderPlaced,
              item,
              addressZIP: value,
              addressStreet,
              addressState,
              orderStatus,
            };
            const result = onChange(modelFields);
            value = result?.addressZIP ?? value;
          }
          if (errors.addressZIP?.hasError) {
            runValidationTasks("addressZIP", value);
          }
          setAddressZIP(value);
        }}
        onBlur={() => runValidationTasks("addressZIP", addressZIP)}
        errorMessage={errors.addressZIP?.errorMessage}
        hasError={errors.addressZIP?.hasError}
        {...getOverrideProps(overrides, "addressZIP")}
      ></TextField>
      <TextField
        label="Address street"
        isRequired={false}
        isReadOnly={false}
        value={addressStreet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderPlaced,
              item,
              addressZIP,
              addressStreet: value,
              addressState,
              orderStatus,
            };
            const result = onChange(modelFields);
            value = result?.addressStreet ?? value;
          }
          if (errors.addressStreet?.hasError) {
            runValidationTasks("addressStreet", value);
          }
          setAddressStreet(value);
        }}
        onBlur={() => runValidationTasks("addressStreet", addressStreet)}
        errorMessage={errors.addressStreet?.errorMessage}
        hasError={errors.addressStreet?.hasError}
        {...getOverrideProps(overrides, "addressStreet")}
      ></TextField>
      <TextField
        label="Address state"
        isRequired={false}
        isReadOnly={false}
        value={addressState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderPlaced,
              item,
              addressZIP,
              addressStreet,
              addressState: value,
              orderStatus,
            };
            const result = onChange(modelFields);
            value = result?.addressState ?? value;
          }
          if (errors.addressState?.hasError) {
            runValidationTasks("addressState", value);
          }
          setAddressState(value);
        }}
        onBlur={() => runValidationTasks("addressState", addressState)}
        errorMessage={errors.addressState?.errorMessage}
        hasError={errors.addressState?.hasError}
        {...getOverrideProps(overrides, "addressState")}
      ></TextField>
      <TextField
        label="Order status"
        isRequired={true}
        isReadOnly={false}
        value={orderStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderPlaced,
              item,
              addressZIP,
              addressStreet,
              addressState,
              orderStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.orderStatus ?? value;
          }
          if (errors.orderStatus?.hasError) {
            runValidationTasks("orderStatus", value);
          }
          setOrderStatus(value);
        }}
        onBlur={() => runValidationTasks("orderStatus", orderStatus)}
        errorMessage={errors.orderStatus?.errorMessage}
        hasError={errors.orderStatus?.hasError}
        {...getOverrideProps(overrides, "orderStatus")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || ordersModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ordersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

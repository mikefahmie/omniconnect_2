/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomers = /* GraphQL */ `
  mutation CreateCustomers(
    $input: CreateCustomersInput!
    $condition: ModelCustomersConditionInput
  ) {
    createCustomers(input: $input, condition: $condition) {
      id
      name
      email
      phone
      notes
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCustomers = /* GraphQL */ `
  mutation UpdateCustomers(
    $input: UpdateCustomersInput!
    $condition: ModelCustomersConditionInput
  ) {
    updateCustomers(input: $input, condition: $condition) {
      id
      name
      email
      phone
      notes
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCustomers = /* GraphQL */ `
  mutation DeleteCustomers(
    $input: DeleteCustomersInput!
    $condition: ModelCustomersConditionInput
  ) {
    deleteCustomers(input: $input, condition: $condition) {
      id
      name
      email
      phone
      notes
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;

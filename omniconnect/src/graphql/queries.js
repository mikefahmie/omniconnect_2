/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomers = /* GraphQL */ `
  query GetCustomers($id: ID!) {
    getCustomers(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;

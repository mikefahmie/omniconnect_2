/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
      id
      customersID
      orderPlaced
      item
      addressZIP
      addressStreet
      addressState
      orderStatus
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customersID
        orderPlaced
        item
        addressZIP
        addressStreet
        addressState
        orderStatus
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByCustomersID = /* GraphQL */ `
  query OrdersByCustomersID(
    $customersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByCustomersID(
      customersID: $customersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customersID
        orderPlaced
        item
        addressZIP
        addressStreet
        addressState
        orderStatus
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCustomers = /* GraphQL */ `
  query GetCustomers($id: ID!) {
    getCustomers(id: $id) {
      id
      name
      email
      phone
      notes
      profilePic
      Orders {
        nextToken
        __typename
      }
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

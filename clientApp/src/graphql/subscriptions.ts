/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          userId
          carId
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          userId
          carId
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          userId
          carId
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          id
          createdAt
          userId
          carId
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          id
          createdAt
          userId
          carId
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          id
          createdAt
          userId
          carId
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      createdAt
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      createdAt
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      createdAt
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      updatedAt
    }
  }
`;

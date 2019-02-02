/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteTodoInput = {
  id?: string | null;
};

export type ModelTodoFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateTodoMutation = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
};

export type UpdateTodoMutation = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
};

export type DeleteTodoMutation = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
};

export type GetTodoQuery = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
};

export type ListTodosQuery = {
  __typename: string;
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
};

export type OnUpdateTodoSubscription = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
};

export type OnDeleteTodoSubscription = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTodo(input: CreateTodoInput): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!) {
        createTodo(input: $input) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(input: UpdateTodoInput): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!) {
        updateTodo(input: $input) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(input: DeleteTodoInput): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!) {
        deleteTodo(input: $input) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  OnCreateTodoListener: Observable<OnCreateTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          description
        }
      }`
    )
  ) as Observable<OnCreateTodoSubscription>;

  OnUpdateTodoListener: Observable<OnUpdateTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          description
        }
      }`
    )
  ) as Observable<OnUpdateTodoSubscription>;

  OnDeleteTodoListener: Observable<OnDeleteTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          description
        }
      }`
    )
  ) as Observable<OnDeleteTodoSubscription>;
}

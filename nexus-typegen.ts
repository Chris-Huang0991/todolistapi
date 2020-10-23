/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as ContextModule from "./api/apollo/context"
import { core, connectionPluginCore } from "@nexus/schema"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    connectionField<FieldName extends string>(
            fieldName: FieldName, 
            config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName> 
          ): void
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    model: NexusPrisma<TypeName, 'model'>
    crud: any
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateTodoListInput: { // input type
    name: string; // String!
  }
  DeleteTodoListInput: { // input type
    id: string; // String!
  }
  SigninInput: { // input type
    account: string; // String!
    password: string; // String!
  }
  SignupInput: { // input type
    account: string; // String!
    name: string; // String!
    password: string; // String!
  }
  TodoItemCreateInput: { // input type
    content: string; // String!
    todoListId: string; // String!
  }
  TodoItemDeleteInput: { // input type
    id: string; // ID!
  }
  TodoItemDoneInput: { // input type
    id: string; // ID!
  }
  TodoItemFavoriteInput: { // input type
    id: string; // ID!
  }
  TodoItemUndoneInput: { // input type
    id: string; // ID!
  }
  TodoItemUnfavoriteInput: { // input type
    id: string; // ID!
  }
  UpdateTodoListInput: { // input type
    id: string; // String!
    name: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    id?: string | null; // String
    token?: string | null; // String
  }
  CreateTodoListPayload: { // root type
    todoList?: NexusGenRootTypes['TodoList'] | null; // TodoList
  }
  DeleteTodoListPayload: { // root type
    todoList?: NexusGenRootTypes['TodoList'] | null; // TodoList
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  TodoItem: { // root type
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    isDisabled: boolean; // Boolean!
    isDone: boolean; // Boolean!
    isFavorite: boolean; // Boolean!
    todoListId: string; // String!
  }
  TodoItemConnection: { // root type
    edges?: Array<NexusGenRootTypes['TodoItemEdge'] | null> | null; // [TodoItemEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  TodoItemCreatePayload: { // root type
    todoItem?: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemDeletePayload: { // root type
    deletedItemId?: string | null; // ID
    todoItem?: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemDonePayload: { // root type
    todoItem?: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemFavoritePayload: { // root type
    todoItem?: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemUndonePayload: { // root type
    todoItem?: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemUnfavoritePayload: { // root type
    todoItem?: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoList: { // root type
    name: string; // String!
    userId: string; // String!
  }
  TodoListConnection: { // root type
    edges?: Array<NexusGenRootTypes['TodoListEdge'] | null> | null; // [TodoListEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  TodoListEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['TodoList'] | null; // TodoList
  }
  UpdateTodoListPayload: { // root type
    todoList?: NexusGenRootTypes['TodoList'] | null; // TodoList
  }
  User: { // root type
    account: string; // String!
    name: string; // String!
    password: string; // String!
  }
  Node: NexusGenRootTypes['TodoItem'] | NexusGenRootTypes['TodoList'] | NexusGenRootTypes['User'];
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CreateTodoListInput: NexusGenInputs['CreateTodoListInput'];
  DeleteTodoListInput: NexusGenInputs['DeleteTodoListInput'];
  SigninInput: NexusGenInputs['SigninInput'];
  SignupInput: NexusGenInputs['SignupInput'];
  TodoItemCreateInput: NexusGenInputs['TodoItemCreateInput'];
  TodoItemDeleteInput: NexusGenInputs['TodoItemDeleteInput'];
  TodoItemDoneInput: NexusGenInputs['TodoItemDoneInput'];
  TodoItemFavoriteInput: NexusGenInputs['TodoItemFavoriteInput'];
  TodoItemUndoneInput: NexusGenInputs['TodoItemUndoneInput'];
  TodoItemUnfavoriteInput: NexusGenInputs['TodoItemUnfavoriteInput'];
  UpdateTodoListInput: NexusGenInputs['UpdateTodoListInput'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  DateTime: NexusGenScalars['DateTime'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    id: string | null; // String
    token: string | null; // String
  }
  CreateTodoListPayload: { // field return type
    todoList: NexusGenRootTypes['TodoList'] | null; // TodoList
  }
  DeleteTodoListPayload: { // field return type
    todoList: NexusGenRootTypes['TodoList'] | null; // TodoList
  }
  Mutation: { // field return type
    createTodoList: NexusGenRootTypes['CreateTodoListPayload'] | null; // CreateTodoListPayload
    deleteTodoList: NexusGenRootTypes['DeleteTodoListPayload'] | null; // DeleteTodoListPayload
    signin: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    todoItemCreate: NexusGenRootTypes['TodoItemCreatePayload']; // TodoItemCreatePayload!
    todoItemDelete: NexusGenRootTypes['TodoItemDeletePayload']; // TodoItemDeletePayload!
    todoItemDone: NexusGenRootTypes['TodoItemDonePayload']; // TodoItemDonePayload!
    todoItemFavorite: NexusGenRootTypes['TodoItemFavoritePayload']; // TodoItemFavoritePayload!
    todoItemUndone: NexusGenRootTypes['TodoItemUndonePayload']; // TodoItemUndonePayload!
    todoItemUnfavorite: NexusGenRootTypes['TodoItemUnfavoritePayload']; // TodoItemUnfavoritePayload!
    updateTodoList: NexusGenRootTypes['UpdateTodoListPayload'] | null; // UpdateTodoListPayload
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    node: NexusGenRootTypes['Node'] | null; // Node
    nodes: Array<NexusGenRootTypes['Node'] | null> | null; // [Node]
    todoLists: NexusGenRootTypes['TodoListConnection'] | null; // TodoListConnection
    todos: NexusGenRootTypes['TodoItemConnection'] | null; // TodoItemConnection
  }
  TodoItem: { // field return type
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    isDisabled: boolean; // Boolean!
    isDone: boolean; // Boolean!
    isFavorite: boolean; // Boolean!
    todoListId: string; // String!
  }
  TodoItemConnection: { // field return type
    edges: Array<NexusGenRootTypes['TodoItemEdge'] | null> | null; // [TodoItemEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  TodoItemCreatePayload: { // field return type
    todoItem: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemDeletePayload: { // field return type
    deletedItemId: string | null; // ID
    todoItem: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemDonePayload: { // field return type
    todoItem: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemFavoritePayload: { // field return type
    todoItem: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemUndonePayload: { // field return type
    todoItem: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoItemUnfavoritePayload: { // field return type
    todoItem: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  TodoList: { // field return type
    id: string; // ID!
    name: string; // String!
    todoItems: NexusGenRootTypes['TodoItemConnection'] | null; // TodoItemConnection
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  TodoListConnection: { // field return type
    edges: Array<NexusGenRootTypes['TodoListEdge'] | null> | null; // [TodoListEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  TodoListEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['TodoList'] | null; // TodoList
  }
  UpdateTodoListPayload: { // field return type
    todoList: NexusGenRootTypes['TodoList'] | null; // TodoList
  }
  User: { // field return type
    account: string; // String!
    id: string; // ID!
    name: string; // String!
    password: string; // String!
    todoLists: NexusGenRootTypes['TodoListConnection'] | null; // TodoListConnection
  }
  Node: { // field return type
    id: string; // ID!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createTodoList: { // args
      input: NexusGenInputs['CreateTodoListInput']; // CreateTodoListInput!
    }
    deleteTodoList: { // args
      input: NexusGenInputs['DeleteTodoListInput']; // DeleteTodoListInput!
    }
    signin: { // args
      input: NexusGenInputs['SigninInput']; // SigninInput!
    }
    signup: { // args
      input: NexusGenInputs['SignupInput']; // SignupInput!
    }
    todoItemCreate: { // args
      input: NexusGenInputs['TodoItemCreateInput']; // TodoItemCreateInput!
    }
    todoItemDelete: { // args
      input: NexusGenInputs['TodoItemDeleteInput']; // TodoItemDeleteInput!
    }
    todoItemDone: { // args
      input: NexusGenInputs['TodoItemDoneInput']; // TodoItemDoneInput!
    }
    todoItemFavorite: { // args
      input: NexusGenInputs['TodoItemFavoriteInput']; // TodoItemFavoriteInput!
    }
    todoItemUndone: { // args
      input: NexusGenInputs['TodoItemUndoneInput']; // TodoItemUndoneInput!
    }
    todoItemUnfavorite: { // args
      input: NexusGenInputs['TodoItemUnfavoriteInput']; // TodoItemUnfavoriteInput!
    }
    updateTodoList: { // args
      input: NexusGenInputs['UpdateTodoListInput']; // UpdateTodoListInput!
    }
  }
  Query: {
    node: { // args
      id: string; // ID!
    }
    nodes: { // args
      ids: string[]; // [ID!]!
    }
    todoLists: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    todos: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  TodoList: {
    todoItems: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  User: {
    todoLists: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  Node: "TodoItem" | "TodoList" | "User"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "CreateTodoListPayload" | "DeleteTodoListPayload" | "Mutation" | "PageInfo" | "Query" | "TodoItem" | "TodoItemConnection" | "TodoItemCreatePayload" | "TodoItemDeletePayload" | "TodoItemDonePayload" | "TodoItemEdge" | "TodoItemFavoritePayload" | "TodoItemUndonePayload" | "TodoItemUnfavoritePayload" | "TodoList" | "TodoListConnection" | "TodoListEdge" | "UpdateTodoListPayload" | "User";

export type NexusGenInputNames = "CreateTodoListInput" | "DeleteTodoListInput" | "SigninInput" | "SignupInput" | "TodoItemCreateInput" | "TodoItemDeleteInput" | "TodoItemDoneInput" | "TodoItemFavoriteInput" | "TodoItemUndoneInput" | "TodoItemUnfavoriteInput" | "UpdateTodoListInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = "Node";

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ContextModule.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginSchemaConfig {
  }
}
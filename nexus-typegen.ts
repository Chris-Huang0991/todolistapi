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
  TodoItemCreateInput: { // input type
    content: string; // String!
  }
  TodoItemDeleteInput: { // input type
    id: string; // ID!
  }
  TodoItemDoneInput: { // input type
    id: string; // ID!
  }
  TodoItemUndoneInput: { // input type
    id: string; // ID!
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
}

export interface NexusGenRootTypes {
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
    isDone: boolean; // Boolean!
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
  TodoItemUndonePayload: { // root type
    todoItem?: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  Node: NexusGenRootTypes['TodoItem'];
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  TodoItemCreateInput: NexusGenInputs['TodoItemCreateInput'];
  TodoItemDeleteInput: NexusGenInputs['TodoItemDeleteInput'];
  TodoItemDoneInput: NexusGenInputs['TodoItemDoneInput'];
  TodoItemUndoneInput: NexusGenInputs['TodoItemUndoneInput'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    todoItemCreate: NexusGenRootTypes['TodoItemCreatePayload']; // TodoItemCreatePayload!
    todoItemDelete: NexusGenRootTypes['TodoItemDeletePayload']; // TodoItemDeletePayload!
    todoItemDone: NexusGenRootTypes['TodoItemDonePayload']; // TodoItemDonePayload!
    todoItemUndone: NexusGenRootTypes['TodoItemUndonePayload']; // TodoItemUndonePayload!
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
    todos: NexusGenRootTypes['TodoItemConnection'] | null; // TodoItemConnection
  }
  TodoItem: { // field return type
    content: string; // String!
    id: string; // ID!
    isDone: boolean; // Boolean!
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
  TodoItemUndonePayload: { // field return type
    todoItem: NexusGenRootTypes['TodoItem'] | null; // TodoItem
  }
  Node: { // field return type
    id: string; // ID!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    todoItemCreate: { // args
      input: NexusGenInputs['TodoItemCreateInput']; // TodoItemCreateInput!
    }
    todoItemDelete: { // args
      input: NexusGenInputs['TodoItemDeleteInput']; // TodoItemDeleteInput!
    }
    todoItemDone: { // args
      input: NexusGenInputs['TodoItemDoneInput']; // TodoItemDoneInput!
    }
    todoItemUndone: { // args
      input: NexusGenInputs['TodoItemUndoneInput']; // TodoItemUndoneInput!
    }
  }
  Query: {
    node: { // args
      id: string; // ID!
    }
    nodes: { // args
      ids: string[]; // [ID!]!
    }
    todos: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  Node: "TodoItem"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "PageInfo" | "Query" | "TodoItem" | "TodoItemConnection" | "TodoItemCreatePayload" | "TodoItemDeletePayload" | "TodoItemDonePayload" | "TodoItemEdge" | "TodoItemUndonePayload";

export type NexusGenInputNames = "TodoItemCreateInput" | "TodoItemDeleteInput" | "TodoItemDoneInput" | "TodoItemUndoneInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = "Node";

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

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
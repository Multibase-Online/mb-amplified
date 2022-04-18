import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserTable {
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserTable, UserTableMetaData>);
  static copyOf(source: UserTable, mutator: (draft: MutableModel<UserTable, UserTableMetaData>) => MutableModel<UserTable, UserTableMetaData> | void): UserTable;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}
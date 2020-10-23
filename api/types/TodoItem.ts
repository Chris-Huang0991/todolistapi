import { arg, extendType, inputObjectType, objectType } from '@nexus/schema'
import { connectionFromArray, connectionFromPromisedArray, fromGlobalId } from 'graphql-relay'

export const TodoItem = objectType({
  name: 'TodoItem',
  definition: (t) => {
    // t.model.id()
    t.implements('Node')
    t.model.content()
    t.model.isDone()
    t.model.isFavorite()
    t.model.isDisabled()
    t.model.createdAt()
    t.model.todoListId()
  },
})

export const test = extendType({
  type: 'TodoList',
  definition: t => {
    t.connectionField('todoItems', {
      type: 'TodoItem',
      resolve: async (todoList, args, ctx) => {
        const todoItems = await ctx.db.todoList.findOne({ where: { id: todoList.id }}).todoItems()
        const connection = connectionFromArray(todoItems, args)
        return connection
      }
    })
  }
})

export const TodoItemQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.connectionField('todos', {
      type: 'TodoItem',
      resolve: (_root, args, ctx) => {
        return connectionFromPromisedArray(
          ctx.db.todoItem.findMany(),
          args,
        ) as any
      },
    })
  },
})
//create
export const TodoItemCreateInput = inputObjectType({
  name: 'TodoItemCreateInput',
  definition: (t) => {
    t.string('content', { required: true })
    t.string('todoListId', { required: true })
  },
})
export const TodoItemCreatePayload = objectType({
  name: 'TodoItemCreatePayload',
  definition: (t) => {
    t.field('todoItem', { type: 'TodoItem' })
  },
})
export const TodoItemCreateMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('todoItemCreate', {
      type: 'TodoItemCreatePayload',
      nullable: false,
      args: {
        input: arg({
          type: 'TodoItemCreateInput',
          required: true,
        }),
      },
      resolve: async (_root, { input }, { db, midgard }) => {
        const userId = midgard.authMidgard
        if (!userId) throw new Error('Unauthorized')
        const { id } = fromGlobalId(input.todoListId)
        const newItem = await db.todoItem.create({
          data: {
            content: input.content,
            todoList: {
              connect: {
                id: id
              }
            }
          },
        })

        return {
          todoItem: newItem,
        }
      },
    })
  },
})
//delete
export const TodoItemDeleteInput = inputObjectType({
  name: 'TodoItemDeleteInput',
  definition: (t) => {
    t.id('id', { required: true })
  },
})
export const TodoItemDeletePayload = objectType({
  name: 'TodoItemDeletePayload',
  definition: (t) => {
    t.id('deletedItemId')
    t.field('todoItem', { type: 'TodoItem' })
  },
})
export const TodoItemDeleteMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('todoItemDelete', {
      type: 'TodoItemDeletePayload',
      nullable: false,
      args: {
        input: arg({
          type: 'TodoItemDeleteInput',
          required: true,
        }),
      },
      resolve: async (_root, { input }, { db, midgard }) => {
        const userId = midgard.authMidgard
        if (!userId) throw new Error('Unauthorized')
        const { id } = fromGlobalId(input.id)
        const deletedItem = await db.todoItem.delete({ where: { id } })

        return {
          deletedItemId: input.id,
          todoItem: deletedItem,
        }
      },
    })
  },
})
//item done
export const TodoItemDoneInput = inputObjectType({
  name: 'TodoItemDoneInput',
  definition: (t) => {
    t.id('id', { required: true })
  },
})
export const TodoItemDonePayload = objectType({
  name: 'TodoItemDonePayload',
  definition: (t) => {
    t.field('todoItem', { type: 'TodoItem' })
  },
})
export const TodoItemDoneMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('todoItemDone', {
      type: 'TodoItemDonePayload',
      nullable: false,
      args: {
        input: arg({
          type: 'TodoItemDoneInput',
          required: true,
        }),
      },
      resolve: async (_root, { input }, { db, midgard }) => {
        const userId = midgard.authMidgard
        if (!userId) throw new Error('Unauthorized')
        const { id } = fromGlobalId(input.id)

        const updatedItem = db.todoItem.update({
          where: { id },
          data: {
            isDone: true,
          },
        })

        return {
          todoItem: updatedItem,
        }
      },
    })
  },
})
//item undone
export const TodoItemUndoneInput = inputObjectType({
  name: 'TodoItemUndoneInput',
  definition: (t) => {
    t.id('id', { required: true })
  },
})
export const TodoItemUndonePayload = objectType({
  name: 'TodoItemUndonePayload',
  definition: (t) => {
    t.field('todoItem', { type: 'TodoItem' })
  },
})
export const TodoItemUndoneMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('todoItemUndone', {
      type: 'TodoItemUndonePayload',
      nullable: false,
      args: {
        input: arg({
          type: 'TodoItemUndoneInput',
          required: true,
        }),
      },
      resolve: async (_root, { input }, { db, midgard }) => {
        const userId = midgard.authMidgard
        if (!userId) throw new Error('Unauthorized')
        const { id } = fromGlobalId(input.id)

        const updatedItem = db.todoItem.update({
          where: { id },
          data: {
            isDone: false,
          },
        })

        return {
          todoItem: updatedItem,
        }
      },
    })
  },
})

//item favorite

export const TodoItemFavoriteInput = inputObjectType({
  name: 'TodoItemFavoriteInput',
  definition: (t) => {
    t.id('id', { required: true })
  },
})
export const TodoItemFavoritePayload = objectType({
  name: 'TodoItemFavoritePayload',
  definition: (t) => {
    t.field('todoItem', { type: 'TodoItem' })
  },
})
export const TodoItemFavoriteMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('todoItemFavorite', {
      type: 'TodoItemFavoritePayload',
      nullable: false,
      args: {
        input: arg({
          type: 'TodoItemFavoriteInput',
          required: true,
        }),
      },
      resolve: async (_root, { input }, { db, midgard }) => {
        const userId = midgard.authMidgard
        if (!userId) throw new Error('Unauthorized')
        const { id } = fromGlobalId(input.id)

        const updatedItem = db.todoItem.update({
          where: { id },
          data: {
            isFavorite: true,
          },
        })

        return {
          todoItem: updatedItem,
        }
      },
    })
  },
})

//item unfavorite

export const TodoItemUnfavoriteInput = inputObjectType({
  name: 'TodoItemUnfavoriteInput',
  definition: (t) => {
    t.id('id', { required: true })
  },
})
export const TodoItemUnfavoritePayload = objectType({
  name: 'TodoItemUnfavoritePayload',
  definition: (t) => {
    t.field('todoItem', { type: 'TodoItem' })
  },
})
export const TodoItemUnfavoriteMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('todoItemUnfavorite', {
      type: 'TodoItemUnfavoritePayload',
      nullable: false,
      args: {
        input: arg({
          type: 'TodoItemUnfavoriteInput',
          required: true,
        }),
      },
      resolve: async (_root, { input }, { db, midgard }) => {
        const userId = midgard.authMidgard
        if (!userId) throw new Error('Unauthorized')
        const { id } = fromGlobalId(input.id)

        const updatedItem = db.todoItem.update({
          where: { id },
          data: {
            isFavorite: false,
          },
        })

        return {
          todoItem: updatedItem,
        }
      },
    })
  },
})

import { arg, extendType, inputObjectType, objectType } from '@nexus/schema'
import { connectionFromArray, fromGlobalId } from 'graphql-relay'

export const TodoList = objectType({
  name: "TodoList",
  definition: t => {
    t.implements('Node')
    t.model.name()
    t.model.user()
    t.model.userId()
  }
})

export const TodoListQuery = extendType({
  type: 'User',
  definition: t => {
    t.connectionField('todoLists', {
      type: 'TodoList',
      resolve: async (user, args, ctx) => {
        const todoListsByUser = await ctx.db.user.findOne({ where: { id: user.id }}).todoLists()
        const connection = connectionFromArray(todoListsByUser, args)
        return connection
      }
    })
  },
})

export const TodoLists = extendType({
  type: 'Query',
  definition: t => {
    t.connectionField('todoLists', {
      type: 'TodoList',
      resolve: async (root, { where, ...args }, ctx) => {
        const userId = ctx.midgard.authMidgard
        if (!userId) throw new Error('Unauthorized')
        const todoListsByUser = await ctx.db.user.findOne({ where: { id: userId }}).todoLists()
        const connection = connectionFromArray(todoListsByUser, args)
        return connection
      }
    })
  }
})
//create
export const CreateTodoListInput = inputObjectType({
  name: 'CreateTodoListInput',
  definition: t => {
    t.string('name', { required: true })
  }
})
export const CreateTodoListPayload = objectType({
  name: 'CreateTodoListPayload',
  definition: t => {
    t.field('todoList', { type: 'TodoList' })
  }
})
export const CreateTodoList = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('createTodoList', {
      type: 'CreateTodoListPayload',
      args: {
        input: arg({
          type: 'CreateTodoListInput',
          required: true,
        })
      },
      resolve: async (_root, { input }, ctx) => {
        const userId = ctx.midgard.authMidgard
        if (!userId) throw new Error('Unauthorized')
        const todoList = await ctx.db.todoList.create({
          data: {
            name: input.name,
            user: {
              connect: {
                id: userId
              }
            }
          }
        })
        return {
          todoList
        }
      }
    })
  }
})

// update
export const UpdateTodoListInput = inputObjectType({
  name: 'UpdateTodoListInput',
  definition: t => {
    t.string('id', { required: true })
    t.string('name', { required: true })
  }
})
export const UpdateTodoListPayload = objectType({
  name: 'UpdateTodoListPayload',
  definition: t => {
    t.field('todoList', { type: 'TodoList' })
  }
})
export const UpdateTodoList = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('updateTodoList', {
      type: 'UpdateTodoListPayload',
      args: {
        input: arg({
          type: 'UpdateTodoListInput',
          required: true,
        })
      },
      resolve: async (_root, { input }, ctx) => {
        const userId = ctx.midgard.authMidgard
        if (!userId) throw new Error('Unauthorized')
        const { id } = fromGlobalId(input.id)
        const todoList = await ctx.db.todoList.findOne({
          where: {
            id: id
          }
        })
        if(!todoList) throw new Error('no record found')
        const updatedtodoList = await ctx.db.todoList.update({
          where: { id },
          data: {
            name: input.name
          },
        })
        return {
          todoList: updatedtodoList
        }
      }
    })
  }
})
//delete
export const DeleteTodoListInput = inputObjectType({
  name: 'DeleteTodoListInput',
  definition: t => {
    t.string('id', { required: true })
  }
})
export const DeleteTodoListPayload = objectType({
  name: 'DeleteTodoListPayload',
  definition: t => {
    t.field('todoList', { type: 'TodoList' })
  }
})
export const DeleteTodoList = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('deleteTodoList', {
      type: 'DeleteTodoListPayload',
      args: {
        input: arg({
          type: 'DeleteTodoListInput',
          required: true,
        })
      },
      resolve: async (_root, { input }, ctx) => {
        const userId = ctx.midgard.authMidgard
        if (!userId) throw new Error('Unauthorized')
        const { id } = fromGlobalId(input.id)
        const todoList = await ctx.db.todoList.findOne({
          where: {
            id: id
          }
        })
        if (!todoList) throw new Error('no record found')
        const deletedPost = await ctx.db.todoList.delete({
          where: { id: id },
        })
        console.log(deletedPost)
        return {
          todoList: deletedPost
        }
      }
    })
  }
})

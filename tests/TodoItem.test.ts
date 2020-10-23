import { createTestContext } from './__helpers'
const ctx = createTestContext()

const mockContent = 'Fuck around today'

describe('TodoItem', () => {
  let createdItemId = null
  let token
  let listId
  test('Mutation - todoItemCreate', async () => {
    const signupMutation = await ctx.client.request(
      ` mutation Signup($input: SignupInput!) {
          signup(input: $input) {
            id
            token
          }
        }
      `,
      { 
        input:{ 
          account: 'test', 
          password: 'test', 
          name: 'test' 
        }
      }
    )
    token = signupMutation.signup.token
    await ctx.client.setHeader("authorization", `Bearer ${token}`)
    const createTodoListMutation = await ctx.client.request(
      ` mutation CreateTodoList($input: CreateTodoListInput!) {
          createTodoList(input: $input) {
            todoList {
              id
              name
            }
          }
        }
      `,
      { 
        input:{ 
          name: 'test1' 
        }
      }
    )
    listId = createTodoListMutation?.createTodoList.todoList.id

    const createdTodoItemMutation = await ctx.client.request(
      `
        mutation CreateTodoItem($content: String!, $id: String!) {
          todoItemCreate(input: { content: $content todoListId: $id }) {
            todoItem {
              id
              content
              isDone
            }
          }
        }
      `,
      { content: mockContent, id: listId }
    )
    
    const createdItem = createdTodoItemMutation?.todoItemCreate?.todoItem
    expect(createdItem).toHaveProperty('id')
    expect(createdItem.content).toBe(mockContent)
    expect(createdItem.isDone).toBe(false)

    createdItemId = createdItem.id
  })

  test('Query - node', async () => {
    const itemNodeQuery = await ctx.client.request(
      `
        query NodeQuery($id: ID!) {
          node(id: $id) {
            id
            ... on TodoItem {
              content
              isDone
            }
          }
        }
      `,
      { id: createdItemId }
    )
    expect(itemNodeQuery.node.id).toBe(createdItemId)
    expect(itemNodeQuery.node.content).toBe(mockContent)
    expect(itemNodeQuery.node.isDone).toBe(false)
  })

  test('Query - todos', async () => {
    const todoConnectionQuery = await ctx.client.request(`
      query TodoConnectionQuery {
        todos(first: 10) {
          edges {
            node {
              id
              content
              isDone
            }
          }
        }
      }
    `)
    expect(todoConnectionQuery.todos.edges).toHaveLength(1)
  })

  test('Mutation - todoItemDone', async () => {
    const doneMutation = await ctx.client.request(
      `
        mutation DoneMutation($id: ID!) {
          todoItemDone(input: { id: $id }) {
            todoItem {
              id
              content
              isDone
            }
          }
        }
      `,
      { id: createdItemId }
    )
    const doneItem = doneMutation.todoItemDone.todoItem
    expect(doneItem.id).toBe(createdItemId)
    expect(doneItem.isDone).toBe(true)
  })

  test('Mutation - todoItemUndone', async () => {
    const undoneMutation = await ctx.client.request(
      `
        mutation DoneMutation($id: ID!) {
          todoItemUndone(input: { id: $id }) {
            todoItem {
              id
              content
              isDone
            }
          }
        }
      `,
      { id: createdItemId }
    )
    const undoneItem = undoneMutation.todoItemUndone.todoItem
    expect(undoneItem.id).toBe(createdItemId)
    expect(undoneItem.isDone).toBe(false)
  })
  
  test('Mutation - todoItemFavorite', async () => {
    const favoriteMutation = await ctx.client.request(
      `
        mutation FavoriteMutation($id: ID!) {
          todoItemFavorite(input: { id: $id }) {
            todoItem {
              id
              content
              isFavorite
            }
          }
        }
      `,
      { id: createdItemId }
    )
    const Item = favoriteMutation.todoItemFavorite.todoItem
    expect(Item.id).toBe(createdItemId)
    expect(Item.isFavorite).toBe(true)
  })

  test('Mutation - todoItemUnfavorite', async () => {
    const unfavoriteMutation = await ctx.client.request(
      `
        mutation UnfavoriteMutation($id: ID!) {
          todoItemUnfavorite(input: { id: $id }) {
            todoItem {
              id
              content
              isFavorite
            }
          }
        }
      `,
      { id: createdItemId }
    )
    const Item = unfavoriteMutation.todoItemUnfavorite.todoItem
    expect(Item.id).toBe(createdItemId)
    expect(Item.isFavorite).toBe(false)
  })

  test('Mutation - todoItemDelete', async () => {
    const deleteItemMutation = await ctx.client.request(
      `
        mutation DeleteTodoItem($id: ID!) {
          todoItemDelete(input: { id: $id }) {
            deletedItemId
          }
        }
      `,
      { id: createdItemId }
    )
    expect(deleteItemMutation.todoItemDelete.deletedItemId).toBe(createdItemId)
  })

})

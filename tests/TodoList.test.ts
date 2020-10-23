import { createTestContext } from './__helpers'
const ctx = createTestContext()

describe('TodoList Test', () => {
  let token
  let listId
  test('create todoList', async () => {
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
    const data = createTodoListMutation?.createTodoList.todoList
    listId = data.id
    expect(data).toHaveProperty('name')
    expect(data).toHaveProperty('id')
    console.log(data)
  })

  test('update todolist', async () => {
    await ctx.client.setHeader("authorization", `Bearer ${token}`)
    const updateTodoListMutation = await ctx.client.request(
      ` mutation UpdateTodoList($input: UpdateTodoListInput!) {
          updateTodoList(input: $input) {
            todoList {
              id
              name
            }
          }
        }
      `,
      { 
        input:{ 
          id: listId,
          name: 'test2' 
        }
      }
    )
    const data = updateTodoListMutation?.updateTodoList.todoList
    expect(data).toHaveProperty('id')
    expect(data).toHaveProperty('name')
    expect(data.name).toBe('test2')
  })

  test('delete todolist', async () => {
    await ctx.client.setHeader("authorization", `Bearer ${token}`)
    const deleteTodoListMutation = await ctx.client.request(
      ` mutation DeleteTodoList($input: DeleteTodoListInput!) {
          deleteTodoList(input: $input) {
            todoList {
              id
              name
            }
          }
        }
      `,
      { 
        input:{ 
          id: listId
        }
      }
    )
    const data = deleteTodoListMutation?.deleteTodoList.todoList
    expect(data).toHaveProperty('name')
    expect(data).toHaveProperty('id')
  })
})
import { createTestContext } from './__helpers'
const ctx = createTestContext()

export default describe('User Test', () => {
  test('signup', async () => {
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
    const data = signupMutation?.signup
    expect(data).toHaveProperty('id')
    expect(data).toHaveProperty('token')
  })

  test('signin', async () => {
    const signinMutation = await ctx.client.request(
      ` mutation Signin($input: SigninInput!) {
          signin(input: $input) {
            id
            token
          }
        }
      `,
      { 
        input:{ 
          account: 'test', 
          password: 'test', 
        }
      }
    )
    const data = signinMutation?.signin
    expect(data).toHaveProperty('id')
    expect(data).toHaveProperty('token')
  })
})
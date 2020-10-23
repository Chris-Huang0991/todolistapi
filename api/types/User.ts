import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { arg, extendType, inputObjectType, objectType } from '@nexus/schema'

export const User = objectType({
  name: "User",
  definition: t => {
    t.implements('Node')
    t.model.account()
    t.model.password()
    t.model.name()
  }
})

export const SignupInput = inputObjectType({
  name: 'SignupInput',
  definition: t => {
    t.string('account', { required: true })
    t.string('password', { required: true })
    t.string('name', { required: true })
  }
})

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition: t => {
    t.string('token')
    t.string('id')
  }
})

export const SignupMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        input: arg({ type: 'SignupInput', required: true })
      },
      resolve: async(_root, { input }, ctx) => {
        const isAccountExisted = await ctx.db.user.findOne({ where: { account: input.account } })
        if (isAccountExisted) throw new Error('Account is existed')
        const hashedPassword = await hash(input.password, 10)
        const newUser = await ctx.db.user.create({
          data: {
            ...input,
            password: hashedPassword,
          }
        })
        const token = sign({ userId: newUser.id }, '1234')
        return {
          token,
          id: newUser.id
        } 
      }
    })
  }
})

export const SigninInput = inputObjectType({
  name: 'SigninInput',
  definition: t => {
    t.string('account', { required: true })
    t.string('password', { required: true })
  }
})

export const SigninMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('signin', {
      type: 'AuthPayload',
      args: {
        input: arg({ type:'SigninInput', required: true })
      },
      resolve: async (root, { input }, ctx) => {
        const account = await ctx.db.user.findOne({ where: { account: input.account } })
        if (!account) throw new Error('Account is not existed')
        const isPasswordCorrect = await compare(input.password, account.password)
        if (!isPasswordCorrect) throw new Error('Password is not correct')
        const token = sign({ userId: account.id }, '1234')
        return {
          token,
          id: account.id
        }
      }
    })
  }
})
import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'
import { StatusCodes } from 'http-status-codes'

import todos from 'model/todos'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { query, method, body } = request

  const todoID =
    query.id == null
      ? undefined
      : Number(Array.isArray(query.id) ? query.id[0] : query.id)

  switch (method) {
    case 'GET':
      if (todoID == null) {
        const listTodos = await todos.get()

        response.status(200).json(listTodos.body)

        return
      }

      const todo = await todos.getByID(todoID)

      response.status(200).json(todo.body?.[0])

      break

    case 'PUT':
      const record = await todos.createOrUpdate(body)

      response.status(200).json(record.body)
      break

    case 'DELETE':
      const deleteTodo = await todos.delete(todoID as number)

      response.status(StatusCodes.NO_CONTENT).json(deleteTodo.body)
      break

    default:
      response.status(StatusCodes.METHOD_NOT_ALLOWED).json({
        message: 'Method not allowed',
      })
  }
}

export default withSentry(handler)

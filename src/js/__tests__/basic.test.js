import { ErrorRepository } from "../app";

test('Get error', () => {
  const error = new ErrorRepository();
  expect(() => error.translate(101)).toThrow(`Error with code ${101}:`)
})

test('Get unknown error', () => {
  const error = new ErrorRepository();
  expect(() => error.translate(105)).toThrow('Unknown error')
})
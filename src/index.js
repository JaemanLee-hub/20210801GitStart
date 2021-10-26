import add from './add'
import abc, { addName, foo } from './addName'
import User from './user'

const result = add(10, 20)
const resultName = addName('이재만')
const resultUser = new User('김자맨', 5)

console.log(result)
console.log(resultName)
console.log(foo)
console.log(abc())
console.log(resultUser.name)

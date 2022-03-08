import { UserInput } from "../generated/graphql"
import database from "../utils/database"

export default class User {

  async create(body:UserInput){
    const db = await database()
    const insertOne = await db.collection('users').insertOne(body)
    return insertOne
  }

}


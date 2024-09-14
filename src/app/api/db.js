

// const mysql = require('serverless-mysql')({
//   config: {
//      host: process.env.MYSQL_HOST,
// port: process.env.MYSQL_PORT,
// database: process.env.MYSQL_DATABASE,
// user: process.env.MYSQL_USER,
// password: process.env.MYSQL_PASSWORD//   }
// })


const db = require('serverless-mysql')(`mysql://${process.env.USERNAME1}:${process.env.PASSWORD}@${process.env.ENDPOINT}:${process.env.PORT1}/${process.env.DATABASE}`)



export default async function excuteQuery({ query, values }) { //values : [ , ]  //insert into ? => "name"
    try {
        const results = await db.query(query, values);
        // console.log(results)
        await db.end();
        return results;
      } catch (error) {
        // console.error({error})
        return "400" + error.toString() ; //return {error}
      }
}

export async function excuteQuery1({ query, values }) {
  try {
    console.log(values)
  }
  catch(e){}
}
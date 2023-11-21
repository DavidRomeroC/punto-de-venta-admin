import {connect, connection} from 'mongoose'

const conn: any = {
    isConnected: false
}

export async function connectDB() {
    if (conn.isConnected) return

    const db = await connect("mongodb://localhost:27017/articulos")
    console.log(db.connection.db.databaseName)
    conn.isConnected = db.connections[0].readyState
}

connection.on("connected", ()=>{
    console.log("mongoose is conected")
})

connection.on("error", (err)=>{
    console.log("mongoose error", err)
})
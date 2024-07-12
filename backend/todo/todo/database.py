from model import Todo

import motor.motor_asyncio #MongoDB driver

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")

database = client.TodoList
collentions = database.todo

async def fetch_one_todo(title):
    document = await collentions.find_one({"title":title})
    return document

async def fetch_all_todos():
    todos = []
    cursor = await collentions.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    
    return todos

async def create_todo(todo):
    document = todo
    await collentions.insert_one(document)
    return document

async def update_todo(title, desc):
    await collentions.update_one({"title":title}, {"$set":{
        "description":desc
    }})
    document = await collentions.find_one({"title":title})
    return document

async def remove_todo(title):
    await collentions.delete_one({"title":title})
    return True
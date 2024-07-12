from model import Todo, UpdateTodo
from motor.motor_asyncio import AsyncIOMotorClient
#MongoDB driver

client = AsyncIOMotorClient("mongodb://localhost:27017")

database = client.TodoList
collentions = database.todo

async def fetch_one_todo(id):
    document = await collentions.find_one({'id':id})
    return document

async def fetch_all_todos():
    todos = []
    cursor = collentions.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    
    return todos

async def create_todo(todo):
    document = todo
    await collentions.insert_one(document)
    return document

async def update_todo(id, data):
    # data:UpdateTodo = {
    #     "title" : title,
    #     "description" : desc
    # }
    await collentions.update_one({"id":id}, {"$set": data})
    document = await collentions.find_one({"id":id})
    return document

async def remove_todo(id):
    await collentions.delete_one({"id":id})
    return True
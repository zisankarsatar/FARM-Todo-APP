from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Todo, UpdateTodo
from database import (
    fetch_one_todo,
    fetch_all_todos,
    create_todo,
    update_todo,
    remove_todo
)

app = FastAPI()

origins = ["https://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials= True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/')
def root():
    return {"msg":"zisan"}

@app.get('/api/todo/')
async def get_todo():
    response = await fetch_all_todos()
    if response:
        return response
    raise HTTPException(404, 'Not Found')

@app.get('/api/todo/{id}', response_model=Todo)
async def get_todo_by_id(id):
    response = await fetch_one_todo(id)
    if response:
        return response
    raise HTTPException(404, 'There is  no Todo with this id {id}')

@app.post('/api/todo', response_model=Todo)
async def post_todo(todo:Todo):
    response = await create_todo(todo.dict())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')

@app.put('/api/todo/{id}', response_model=Todo)
async def put_todo(id, data:UpdateTodo):
    response = await update_todo(id, data.dict())
    if response:
        return response
    raise HTTPException(404, f"there is no Todo with this id {id}")

@app.delete('/api/todo/{id}')
async def delete_todo(id):
    response = await remove_todo(id)
    if response:
        return "Succeesfully deleted item whit this id {id}"
    raise HTTPException(404, f"there is no Todo with this id {id}")

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

@app.get('/api/todo')
def get_todo():
    return {"msg":"zisan"}

@app.get('/api/todo{id}')
def get_todo_by_id(id):
    return {"msg":"zisan"}

@app.post('/api/todo')
def post_todo(todo):
    return {"msg":"zisan"}

@app.put('/api/todo{id}')
def put_todo(id, todo):
    return {"msg":"zisan"}

@app.delete('/api/todo{id}')
def delete_todo(id):
    return {"msg":"zisan"}
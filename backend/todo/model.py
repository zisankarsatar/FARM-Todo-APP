from pydantic import BaseModel 

class Todo(BaseModel):
    id: str
    title: str
    description: str

class UpdateTodo(BaseModel):
    title: str
    description: str
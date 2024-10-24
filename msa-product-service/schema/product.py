from datetime import datetime

from pydantic import BaseModel


class ProductBase(BaseModel):
    carnum: str
    barrier: str
    intime: datetime
    outtime: datetime


class Product(ProductBase):
    pno: int

    class Config:
        from_attributes=True


class ProductList(BaseModel):
    pno: int
    carnum: str
    barrier: str
    intime: datetime

    class Config:
        from_attributes=True

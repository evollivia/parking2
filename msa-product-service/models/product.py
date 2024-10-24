from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Product(Base):
    __tablename__ = 'product'

    pno = Column(Integer, primary_key=True, autoincrement=True, index=True)
    carnum = Column(String(50), nullable=False)
    barrier = Column(String(50), nullable=False)
    intime = Column(String(50), nullable=False)
    outtime = Column(String(50), nullable=False)

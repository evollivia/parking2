from sqlalchemy.orm import Session

from models.product import Product
from schema.product import ProductBase

# 회원가입 처리
# 기본 회원정보 + 번호,가입일
def register(db: Session, product: ProductBase):
    product = Product(**product.model_dump())
    db.add(product)
    db.commit()
    db.refresh(product)
    return product

def productlist(db: Session):
    return db.query(Product.carnum, Product.barrier,
              Product.intime, Product.pno)\
              .order_by(Product.pno.desc()).all()


def productone(db: Session, pno: int):
    return db.query(Product)\
            .filter(Product.pno == pno).first() \


def productdelete(db: Session, pno: int):
    # 삭제할 상품 조회
    product = db.query(Product) \
        .filter(Product.pno == pno).first()

    if product: # 삭제할 상품이 존재한다면
        db.delete(product)
        db.commit()
    else:
        return None

    # 삭제한 상품 수를 직접 return함
    # 만일, 프로그래밍으로 삭제한 상품 수를 return 하려면
    # core orm을 이용할 것(db.execute(delete~))
    return 1
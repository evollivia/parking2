// 페이지 로드시 자동으로 실행
window.addEventListener('load', async () => {
    try {
        const products = await getProductList();
        displayProducList(products);
    } catch (e) {
        console.log(e);
        alert('차량 목록 조회 실패!');
    }
});

const getProductList = async () => {
    let url = 'http://127.0.0.1:8050/products';
    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        throw new Error('차량 목록 fetch 실패!');
    }
};

const displayProducList = (products) => {

    const productlist = document.querySelector('#product-list');
    console.log(products);

    let html = '<ul>';
    for (const p of products) {
        html += `<li>
            차량번호 : <a href="/product/${p.pno}">${p.carnum}</a>,
            장애여부 : ${p.barrier},
            입차시간 : ${p.intime},
            [<a href="javascript:pmodify('${p.pno}')">수정</a>],
            [<a href="javascript:premove('${p.pno}')">삭제</a>]
        </li>`
    }
    html += '</ul>';

    productlist.innerHTML = html;
};

const pmodify= (pno) => {
    alert('수정되었습니다');
}
const premove= async (pno) => {
    if (!confirm('정말로 삭제 하시겠습니까?')) return;
    let url = `http://127.0.0.1:8050/product/${pno}`;
    const res = await fetch(url, { method: 'delete' });
    if (res.ok) {
        console.log(res);
        location.href='/products';
    }
    alert('삭제되었습니다');
}


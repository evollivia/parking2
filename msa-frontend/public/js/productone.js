// 페이지 완전 로드시 자동으로 실행
document.addEventListener('DOMContentLoaded', async () => {
    let pno = location.pathname.split('/').pop();

    try {
        const product = await getProductOne(pno);
        displayProductOne(product);
    } catch (e) {
        console.log(e);
        //alert('상품 상세 조회 실패!');
    }
});

const getProductOne = async (pno) => {
    let url = `http://127.0.0.1:8050/product/${pno}`;
    const res = await fetch(url);

    if (res.status === 404) {
        location.href = '/notfound';
    } else if (res.status === 200) {  // res.ok
        const data = await res.json();
        return data;
    } else {
        throw new Error('상품 상세 정보 fetch 실패!');
    }
};

const displayProductOne = (product) => {
    const productone = document.querySelector('#productone');
    console.log(product);

    let html = '<ul>';
    html += `<li>
        등록번호 : ${product.pno},
        차량번호 : ${product.carnum},
        장애여부 : ${product.barrier},
        입차시간 : ${formatTime(product.intime)},
        출차시간 : ${formatTime(product.outtime)},
    </li>`;
    html += '</ul>';

    productone.innerHTML = html;
};

// 시간을 HH:MM:SS 형식으로 포맷팅하는 함수
const formatTime = (datetime) => {
    const date = new Date(datetime); // ISO 문자열을 Date 객체로 변환
    const hours = String(date.getUTCHours()).padStart(2, '0'); // 시
    const minutes = String(date.getUTCMinutes()).padStart(2, '0'); // 분
    const seconds = String(date.getUTCSeconds()).padStart(2, '0'); // 초

    return `${hours}:${minutes}:${seconds}`; // HH:MM:SS 형식으로 반환
};

const btnToggle = document.querySelector('.btnToggle');
const btnStatus = document.querySelectorAll('.btnStatus');
const basicNum = document.querySelector('.basicNum');
const basicPrice = document.querySelector('.basicPrice');
const normalNum = document.querySelector('.normalNum');
const normalPrice = document.querySelector('.normalPrice');

const plan = [
  {
    btnName: "10000位",
    member: "10000",
    basic: 600,
    normal: 1600
  },
  {
    btnName: "15000位",
    member: "15000",
    basic: 500,
    normal: 1500
  },
  {
    btnName: "20000位",
    member: "20000",
    basic: 400,
    normal: 1400
  },
  {
    btnName: "25000位",
    member: "25000",
    basic: 300,
    normal: 1300
  },
  {
    btnName: ">25000位",
    member: ">25000",
    basic: 100,
    normal: 1200
  }
];

btnToggle.addEventListener('click', (e) => {
  window.onbeforeunload = null;
  e.preventDefault();
  plan.forEach((index) => {
    if (e.target.textContent === index.btnName) {
      basicNum.innerHTML = `${index.member}<span class="fs-9 ms-1">位</span>`;
      basicPrice.innerHTML = `${index.basic}<span class="fs-9 ms-1">TWD</span>`;
      normalNum.innerHTML = `${index.member}<span class="fs-9 ms-1">位</span>`;
      normalPrice.innerHTML = `${index.normal}<span class="fs-9 ms-1">TWD</span>`;
    }
  })
  btnStatus.forEach( (i) => {
    i.removeAttribute('class', 'active');
    i.setAttribute('class', 'btn btn-outline-success me-3 rounded-pill fs-7 fs-lg-6 py-1 px-3 py-lg-2 px-lg-5 btnStatus');
  })
  e.target.setAttribute('class', 'btn btn-outline-success me-3 rounded-pill fs-7 fs-lg-6 py-1 px-3 py-lg-2 px-lg-5 btnStatus active');
})
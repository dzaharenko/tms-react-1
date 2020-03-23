const openModalEl = document.getElementById('open-modal');
const modalEl = document.getElementById('modal');
const resultEl = document.getElementById('result');
const formEl = document.getElementById('form');

const view = data => {
  resultEl.textContent = data;
};

const model = (val1, val2) => {
  const result = val1 + val2;
  view(result);
};

const controller = (...args) => {
  const argsForModel = args.reduce((acc, item) => {
    if (typeof item === 'number' || typeof item === 'string') {
      acc.push(typeof +item === 'number' && !Number.isNaN(+item)
        ? +item
        : item
      )
    }

    return acc;
  }, []);

  model(...argsForModel);
};

openModalEl.addEventListener('click', event => {
  event.preventDefault();
  modalEl.classList.add('_active');
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const elements = [...event.target.children];
  const args = elements.reduce((acc, elem) => {
    if (elem.nodeName === 'INPUT' && elem.value) {
      acc.push(elem.value);
    }

    return acc;
  }, []);

  if (args.length > 1) {
    controller(...args);
    modalEl.classList.remove('_active');
  }
});

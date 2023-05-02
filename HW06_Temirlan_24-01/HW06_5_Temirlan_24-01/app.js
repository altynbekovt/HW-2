const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const fetchData = async () => {
  const response = await fetch('data.json');
  const data = await response.json();
  return data;
};

const convert = async (elem, target1, target2) => {
  elem.addEventListener('input', async () => {
    const data = await fetchData();

    if (target1.id === 'usd' && target2.id === 'som') {
      target1.value = (elem.value / data.usd).toFixed(2);
      target2.value = (elem.value * data.som).toFixed(2);
    } else if (target1.id === 'som' && target2.id === 'usd') {
      target1.value = (elem.value / data.som).toFixed(2);
      target2.value = (elem.value * data.usd).toFixed(2);
    } else if (target1.id === 'eur' && target2.id === 'som') {
      target1.value = (elem.value / data.eur).toFixed(2);
      target2.value = (elem.value * data.som).toFixed(2);
    } else if (target1.id === 'som' && target2.id === 'eur') {
      target1.value = (elem.value / data.som).toFixed(2);
      target2.value = (elem.value * data.eur).toFixed(2);
    } else if (target1.id === 'usd' && target2.id === 'eur') {
      target1.value = (elem.value / data.usd).toFixed(2);
      target2.value = (target1.value * data.eur).toFixed(2);
    } else if (target1.id === 'eur' && target2.id === 'usd') {
      target1.value = (elem.value / data.eur).toFixed(2);
      target2.value = (target1.value * data.usd).toFixed(2);
    }

    if (elem.value === '') {
      target1.value = '';
      target2.value = '';
    }
  });
};

convert(som, usd, eur);
convert(usd, som, eur);

convert(som, eur, usd);
convert(eur, som, usd);

convert(usd, eur, som);
convert(eur, usd, som);
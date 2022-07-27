async function selectWineHandler(event) {
    event.preventDefault();

    const chardonnay = document.querySelector('.chardonnay');
    const pinotGrigio = document.querySelector('.pinot-grigio');
    const sauvignonBlanc = document.querySelector('sauvignon');
    const moscato = document.querySelector('.moscato');
    const prosecco = document.querySelector('.prosecco');
    const cheninBlanc = document.querySelector('.chenin-blanc');
    const rose = document.querySelector('.rose');
    const chiantiClassico = document.querySelector('.chianti-classico');
    const pinotNoir = document.querySelector('.pinot-noir');
    const cabernetSauvignon = document.querySelector('.cab-sauvignon');
    const malbec = document.querySelector('.malbec');
    const merlot = document.querySelector('.merlot');


    const response = await fetch(`/api/wine/:id`, {
        method: 'GET',
        body: JSON.stringify({
          title

        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.replace('/api/wine');
      } else {
        alert(response.statusText);
      }
}

document.querySelector('.chardonnay').addEventListener('click', selectWineHandler);
document.querySelector('.pinot-grigio').addEventListener('click', selectWineHandler);
document.querySelector('.sauvignon').addEventListener('click', selectWineHandler);
document.querySelector('.moscato').addEventListener('click', selectWineHandler);
document.querySelector('.prosecco').addEventListener('click', selectWineHandler);
document.querySelector('.chenin-blanc').addEventListener('click', selectWineHandler);
document.querySelector('.rose').addEventListener('click', selectWineHandler);
document.querySelector('.chianti-classico').addEventListener('click', selectWineHandler);
document.querySelector('.pinot-noir').addEventListener('click', selectWineHandler);
document.querySelector('.merlot').addEventListener('click', selectWineHandler);
document.querySelector('.cab-sauvignon').addEventListener('click', selectWineHandler);
document.querySelector('.malbec').addEventListener('click', selectWineHandler);
document.querySelector('.merlot').addEventListener('click', selectWineHandler);
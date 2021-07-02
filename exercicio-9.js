// Uma requisição a um servidor é feita, caso o valor enviado para o
// servidor seja uma cadeia de caracteres, o mesmo devolve essa cadeia
// de caracteres em caixa - alta, caso contrário um erro é devolvido
// informando “the request value is not supported”.Implemente uma
// Promise que simule o caso descrito e implemente um teste para o caso
// de sucesso e de erro.Além disso, a simulação deve conter um atraso
// aleatório de 500 milissegundo a 2 segundos, simulando o atraso da
// comunicação com o servidor.Dica: pesquisar sobre a função
// setTimeout.

function searchData(data) {
  return new Promise((resolve, reject) => {
    const timeout = Math.ceil(Math.random() * (2000 - 500)) + 500;
    
    let result;

    if (typeof data === 'string') {
      result = {
        status: 200,
        data: data.toUpperCase(),
      }
    } else {
      result = {
        status: 404,
        data: 'The request value is not supported',
      }
    }

    setTimeout(() => {
      if (result.status === 200) resolve(result)
      else reject(result)
    }, timeout);
  });
}

const sucessTest = 'String test';
const failTeste = 12;

searchData(sucessTest)
  .then(e => {
    console.log(e.data);
  })
  .catch(e => {
    if (e.status === 404) {
      console.log(e.data);
    }
  });

searchData(failTeste)
  .then(e => {
    console.log(e.data)
  })
  .catch(e => {
    if (e.status === 404) {
      console.log(e.data);
    }
  })



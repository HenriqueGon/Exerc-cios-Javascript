// Uma empresa de luz precisa de um software que monitore o estado das
// lâmpadas(acesa, apagada) instaladas nos postes de energia.
// Considerando que esses postes possuem lâmpadas inteligentes que
// acendem durante a noite e mantêm - se apagadas durante o dia.Saber
// se estão de fato acesas ou apagadas seriam de grande valor pois assim
// seria possível identificar lâmpadas queimadas.Desta forma, implemente
// uma função que, a cada intervalo aleatório de tempo entre 2 e 4
// segundos, troque o estado da lâmpada e retorne para um callback que
// deve exibir no console o estado atual da lâmpada.Dica: pesquisar sobre
// a função setInterval.

var LampState = false;

function changeLampState(callback) {
  const interval = Math.ceil(Math.random() * (4000 - 2000)) + 2000;

  setInterval(() => {
    LampState = !LampState;

    callback(LampState);
  }, interval);
}

changeLampState(e => {
  console.log('Estado: ', e);
});
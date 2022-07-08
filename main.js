const verificaNCasas = (nmr) => {
    if (nmr.length === 1) return 1;
    if (nmr.length === 2) return 2;
    if (nmr.length === 3) return 3;
};

const umAteDezenove = (nmr) => {
    if (nmr === '0') return 'zero';
    if (nmr === '1') return 'um';
    if (nmr === '2') return 'dois';
    if (nmr === '3') return 'três';
    if (nmr === '4') return 'quatro';
    if (nmr === '5') return 'cinco';
    if (nmr === '6') return 'seis';
    if (nmr === '7') return 'sete';
    if (nmr === '8') return 'oito';
    if (nmr === '9') return 'nove';
    if (nmr === '10') return 'dez';
    if (nmr === '11') return 'onze';
    if (nmr === '12') return 'doze';
    if (nmr === '13') return 'treze';
    if (nmr === '14') return 'quatorze';
    if (nmr === '15') return 'quinze';
    if (nmr === '16') return 'dezesseis';
    if (nmr === '17') return 'dezessete';
    if (nmr === '18') return 'dezoito';
    if (nmr === '19') return 'dezenove';
}

const umAteNove = (nmr) => {
    let ind;
    if (nmr.length === 1) ind = 0;
    if (nmr.length === 2) ind = 1;
    if (nmr.length === 3) ind = 2;
    if (nmr[ind] === '0') return 'zero';
    if (nmr[ind] === '1') return 'um';
    if (nmr[ind] === '2') return 'dois';
    if (nmr[ind] === '3') return 'três';
    if (nmr[ind] === '4') return 'quatro';
    if (nmr[ind] === '5') return 'cinco';
    if (nmr[ind] === '6') return 'seis';
    if (nmr[ind] === '7') return 'sete';
    if (nmr[ind] === '8') return 'oito';
    if (nmr[ind] === '9') return 'nove';
};

const dezAteDezenove = (nmr) => {
    if (nmr === '10') return 'dez';
    if (nmr === '11') return 'onze';
    if (nmr === '12') return 'doze';
    if (nmr === '13') return 'treze';
    if (nmr === '14') return 'quatorze';
    if (nmr === '15') return 'quinze';
    if (nmr === '16') return 'dezesseis';
    if (nmr === '17') return 'dezessete';
    if (nmr === '18') return 'dezoito';
    if (nmr === '19') return 'dezenove';
};

const dezena = (nmr) => {
    let ind;
    if (nmr.length === 2) ind = 0;
    if (nmr.length === 3) ind = 1;
    if (nmr[ind] === `2`) return `vinte e`;
    if (nmr[ind] === `3`) return `trinta e`;
    if (nmr[ind] === `4`) return `quarenta e`;
    if (nmr[ind] === `5`) return `cinquenta e`;
    if (nmr[ind] === `6`) return `sessenta e`;
    if (nmr[ind] === `7`) return `setenta e`;
    if (nmr[ind] === `8`) return `oitenta e`;
    if (nmr[ind] === `9`) return `noventa e`;
};

const centena = (nmr) => {
    if (nmr[0] === `1`) return `cento e`;
    if (nmr[0] === `2`) return `duzentos e`;
    if (nmr[0] === `3`) return `trezentos e`;
    if (nmr[0] === `4`) return `quatrocentos e`;
    if (nmr[0] === `5`) return `quinhentos e`;
    if (nmr[0] === `6`) return `seiscentos e`;
    if (nmr[0] === `7`) return `setescentos e`;
    if (nmr[0] === `8`) return `oitoscentos e`;
    if (nmr[0] === `9`) return `novescentos e`;
}

const qualNumero = (nmr) => {
    if (verificaNCasas(nmr) === 1) {
        return umAteNove(nmr);
    };
    if (verificaNCasas(nmr) === 2) {
        let n = Number(nmr);
        if (n >= 10 && n <= 19 ) {
            return `${dezAteDezenove(nmr)}`;
        };
        return `${dezena(nmr)} ${umAteNove(nmr)}`;
    };
    if (verificaNCasas(nmr) === 3) {
        let str2 = nmr.slice(1, 3);
        str2 = Number(str2);
        if (str2 >= 1 && str2 <= 19) {
            str2 = str2.toString();
            return `${centena(nmr)} ${umAteDezenove(str2)}`;
        };
        if (nmr === `100`) return `cem`;
        return `${centena(nmr)} ${dezena(nmr)} ${umAteNove(nmr)}`;
    };
};


const removendoZero = (nmr) => {
    let nmr1;
    let nmr2;
    let nmr3;
    if (Number(nmr) === 0) return '';
    if (nmr.length === 3) {
        nmr1 = Number(nmr[0]);
        nmr2 = Number(nmr[1]);
        nmr3 = Number(nmr[2]);
        if (nmr2 === 0 && nmr3 === 0) {
            return qualNumero(nmr).replace(' e undefined zero', '');
        };
        if (nmr3 === 0 || nmr1 === 0) {
            nmr = qualNumero(nmr).replace('undefined ', '');
            return nmr.replace(' e zero', '');
        };
        if (nmr1 === 0 && nmr2 === 0) {
            return qualNumero(nmr);
        };
    };
    if (nmr.length === 2) {
        nmr1 = Number(nmr[0]);
        nmr2 = Number(nmr[1]);
        if (nmr2 === 0) {
            return qualNumero(nmr).replace(' e zero', '');
        };
        if (nmr1 === 0) {
            qualNumero(nmr);
        };
    };
    if (nmr.length === 1) {
        return qualNumero(nmr);
    };
    return qualNumero(nmr);
};

const colocaPonto = (nmr) => {
    let array = [];
    let array2 = [];
    let i = 0;
    let somaIndices = '';
    if (nmr.length <= 15) {
        nmr = Number(nmr);
        nmr = nmr.toLocaleString('pt-BR');
        return nmr;
    }
    nmr = nmr.split('');
    nmr.reverse();
    for (let ind of nmr) {
        i++;
        somaIndices += ind;
        if (i % 15 === 0) {
            array.push(somaIndices);
            somaIndices = '';
        };
    };
    if (somaIndices) {
        array.push(somaIndices);
    };
    for (let ind of array) {
        ind = ind.split('');
        ind.reverse();
        ind = ind.join('');
        ind = Number(ind);
        ind = ind.toLocaleString('pt-BR');
        array2.push(ind);
    };
    array2.reverse();
    array2 = array2.join('.');
    return array2;
};

const criaArray = (nmr) => {
    nmr = nmr.split('.');
    nmr = nmr.reverse();
    return nmr;
};

const fOrT = (nmr, string1, string2) => {
    if (Number(nmr) === 001) return string2;
    if (Number(nmr) === 0) return '';
    return string1;
};

const mileniosEMilhoes = (nmr) => {
    nmr = nmr.split(".").join("");
    if (nmr.length < 4) return removendoZero(nmr);
    if (nmr.length >= 4 && nmr.length <= 6) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 7 && nmr.length <= 9) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);;
        return`${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 10 && nmr.length <= 12) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);;
        return`${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 13 && nmr.length <= 15) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 16 && nmr.length <= 18) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 19 && nmr.length <= 21) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 22 && nmr.length <= 24) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 25 && nmr.length <= 27) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 28 && nmr.length <= 30) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 31 && nmr.length <= 33) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 34 && nmr.length <= 36) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 37 && nmr.length <= 39) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[12])}${fOrT(arrayM[12] ,' undecilhões ', ' undecilhão ')}${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 40 && nmr.length <= 42) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[13])}${fOrT(arrayM[13] ,' duodecilhões ', ' duodecilhão ')}${removendoZero(arrayM[12])}${fOrT(arrayM[12] ,' undecilhões ', ' undecilhão ')}${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 43 && nmr.length <= 45) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[14])}${fOrT(arrayM[14] ,' tridecilhões ', ' tridecilhão ')}${removendoZero(arrayM[13])}${fOrT(arrayM[13] ,' duodecilhões ', ' duodecilhão ')}${removendoZero(arrayM[12])}${fOrT(arrayM[12] ,' undecilhões ', ' undecilhão ')}${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 46 && nmr.length <= 48) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[15])}${fOrT(arrayM[15] ,' quadrecilhões ', ' quadrecilhão  ')}${removendoZero(arrayM[14])}${fOrT(arrayM[14] ,' tridecilhões ', ' tridecilhão ')}${removendoZero(arrayM[13])}${fOrT(arrayM[13] ,' duodecilhões ', ' duodecilhão ')}${removendoZero(arrayM[12])}${fOrT(arrayM[12] ,' undecilhões ', ' undecilhão ')}${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 49 && nmr.length <= 51) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[16])}${fOrT(arrayM[16] ,' quindecilhões ', ' quindecilhão ')}${removendoZero(arrayM[15])}${fOrT(arrayM[15] ,' quadrecilhões ', ' quadrecilhão  ')}${removendoZero(arrayM[14])}${fOrT(arrayM[14] ,' tridecilhões ', ' tridecilhão ')}${removendoZero(arrayM[13])}${fOrT(arrayM[13] ,' duodecilhões ', ' duodecilhão ')}${removendoZero(arrayM[12])}${fOrT(arrayM[12] ,' undecilhões ', ' undecilhão ')}${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 52 && nmr.length <= 54) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[17])}${fOrT(arrayM[17] ,' sedecilhões ', ' sedecilhão ')}${removendoZero(arrayM[16])}${fOrT(arrayM[16] ,' quindecilhões ', ' quindecilhão ')}${removendoZero(arrayM[15])}${fOrT(arrayM[15] ,' quadrecilhões ', ' quadrecilhão  ')}${removendoZero(arrayM[14])}${fOrT(arrayM[14] ,' tridecilhões ', ' tridecilhão ')}${removendoZero(arrayM[13])}${fOrT(arrayM[13] ,' duodecilhões ', ' duodecilhão ')}${removendoZero(arrayM[12])}${fOrT(arrayM[12] ,' undecilhões ', ' undecilhão ')}${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 55 && nmr.length <= 57) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[18])}${fOrT(arrayM[18] ,' septendecilhões ', ' septendecilhão ')}${removendoZero(arrayM[17])}${fOrT(arrayM[17] ,' sedecilhões ', ' sedecilhão ')}${removendoZero(arrayM[16])}${fOrT(arrayM[16] ,' quindecilhões ', ' quindecilhão ')}${removendoZero(arrayM[15])}${fOrT(arrayM[15] ,' quadrecilhões ', ' quadrecilhão  ')}${removendoZero(arrayM[14])}${fOrT(arrayM[14] ,' tridecilhões ', ' tridecilhão ')}${removendoZero(arrayM[13])}${fOrT(arrayM[13] ,' duodecilhões ', ' duodecilhão ')}${removendoZero(arrayM[12])}${fOrT(arrayM[12] ,' undecilhões ', ' undecilhão ')}${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 58 && nmr.length <= 60) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[19])}${fOrT(arrayM[19] ,' octodecilhões ', ' octodecilhão ')}${removendoZero(arrayM[18])}${fOrT(arrayM[18] ,' septendecilhões ', ' septendecilhão ')}${removendoZero(arrayM[17])}${fOrT(arrayM[17] ,' sedecilhões ', ' sedecilhão ')}${removendoZero(arrayM[16])}${fOrT(arrayM[16] ,' quindecilhões ', ' quindecilhão ')}${removendoZero(arrayM[15])}${fOrT(arrayM[15] ,' quadrecilhões ', ' quadrecilhão  ')}${removendoZero(arrayM[14])}${fOrT(arrayM[14] ,' tridecilhões ', ' tridecilhão ')}${removendoZero(arrayM[13])}${fOrT(arrayM[13] ,' duodecilhões ', ' duodecilhão ')}${removendoZero(arrayM[12])}${fOrT(arrayM[12] ,' undecilhões ', ' undecilhão ')}${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 61 && nmr.length <= 63) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[20])}${fOrT(arrayM[20] ,' novendecilhões ', ' novendecilhão ')}${removendoZero(arrayM[19])}${fOrT(arrayM[19] ,' octodecilhões ', ' octodecilhão ')}${removendoZero(arrayM[18])}${fOrT(arrayM[18] ,' septendecilhões ', ' septendecilhão ')}${removendoZero(arrayM[17])}${fOrT(arrayM[17] ,' sedecilhões ', ' sedecilhão ')}${removendoZero(arrayM[16])}${fOrT(arrayM[16] ,' quindecilhões ', ' quindecilhão ')}${removendoZero(arrayM[15])}${fOrT(arrayM[15] ,' quadrecilhões ', ' quadrecilhão  ')}${removendoZero(arrayM[14])}${fOrT(arrayM[14] ,' tridecilhões ', ' tridecilhão ')}${removendoZero(arrayM[13])}${fOrT(arrayM[13] ,' duodecilhões ', ' duodecilhão ')}${removendoZero(arrayM[12])}${fOrT(arrayM[12] ,' undecilhões ', ' undecilhão ')}${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
    if (nmr.length >= 64 && nmr.length <= 66) {
        nmr = colocaPonto(nmr);
        arrayM = criaArray(nmr);
        return`${removendoZero(arrayM[22])}${fOrT(arrayM[22] ,' vigintilhões ', ' vigintilhão ')}${removendoZero(arrayM[21])}${fOrT(arrayM[21] ,' novendecilhões ', ' novendecilhão ')}${removendoZero(arrayM[19])}${fOrT(arrayM[19] ,' octodecilhões ', ' octodecilhão ')}${removendoZero(arrayM[18])}${fOrT(arrayM[18] ,' septendecilhões ', ' septendecilhão ')}${removendoZero(arrayM[17])}${fOrT(arrayM[17] ,' sedecilhões ', ' sedecilhão ')}${removendoZero(arrayM[16])}${fOrT(arrayM[16] ,' quindecilhões ', ' quindecilhão ')}${removendoZero(arrayM[15])}${fOrT(arrayM[15] ,' quadrecilhões ', ' quadrecilhão  ')}${removendoZero(arrayM[14])}${fOrT(arrayM[14] ,' tridecilhões ', ' tridecilhão ')}${removendoZero(arrayM[13])}${fOrT(arrayM[13] ,' duodecilhões ', ' duodecilhão ')}${removendoZero(arrayM[12])}${fOrT(arrayM[12] ,' undecilhões ', ' undecilhão ')}${removendoZero(arrayM[11])}${fOrT(arrayM[11] ,' decilhões ', ' decilhão ')}${removendoZero(arrayM[10])}${fOrT(arrayM[10] ,' nonilhões ', ' nonilhão ')}${removendoZero(arrayM[9])}${fOrT(arrayM[9] ,' octilhões ', ' octilhão ')}${removendoZero(arrayM[8])}${fOrT(arrayM[8] ,' septilhões ', ' septilhão ')}${removendoZero(arrayM[7])}${fOrT(arrayM[7] ,' sextilhões ', ' sextilhão ')}${removendoZero(arrayM[6])}${fOrT(arrayM[6] ,' quintilhões ', ' quintilhão ')}${removendoZero(arrayM[5])}${fOrT(arrayM[5] ,' quatrilhões ', ' quatrilhão ')}${removendoZero(arrayM[4])}${fOrT(arrayM[4] ,' trilhões ', ' trilhão ')}${removendoZero(arrayM[3])}${fOrT(arrayM[3] ,' bilhões ', ' bilhão ')}${removendoZero(arrayM[2])}${fOrT(arrayM[2] ,' milhões ', ' milhão ')}${removendoZero(arrayM[1])}${fOrT(arrayM[1] ,' mil ', ' mil ')}${removendoZero(arrayM[0])}`;
    };
};

const loops = (nmr) => {
    let i = 0;
    for (let conteudo of nmr) {
        conteudo === 'e' ? i++ : i += 0;
    }
    return i;
};

const eFinal = (nmr) => {
    nmr = mileniosEMilhoes(nmr);
    nmr = nmr.split(' ');
    nmr.reverse();
    if (nmr[1] === 'e') {
        nmr = nmr.join(' ');
        nmr = nmr.replace(' e ', ' ');
        nmr = nmr.split(' ');
    };
    nmr.reverse();
    let e = 'e';
    let last = nmr.pop();
    nmr[nmr.length] = e;
    nmr.push(last);
    nmr = nmr.join(' ');
    return nmr;
};

const separarVirgula = (nmr) => {
    nmr = nmr.split(',');
    if(nmr.length >= 2) {
        let nmr1 = eFinal(nmr[0]);
        let nmr2 = nmr[1];
        nmr2 = nmr2.split('');
        nmr = '';
        for (let num of nmr2) {
            nmr += `${umAteNove(num)} `;
        };
        nmr1 = nmr1.split(' ');
        nmr1.push('vírgula');
        nmr1.push(nmr);
        nmr1 = nmr1.join(' ');
        return nmr1;
    }
    return eFinal(nmr.join());

};

const pontoEVirgula = (nmr) => {
    let soPonto = [];
    nmr = nmr.split(',');
    soPonto.push(colocaPonto(nmr[0]));
    nmr = nmr[1];
    soPonto.push(nmr);
    soPonto = soPonto.join(',');
    return soPonto;
};

const transformarNumeroEmExtenso = (nmr) => {
    return `${separarVirgula(nmr)}`;
};

console.log(transformarNumeroEmExtenso('3000000000003'));
// console.log(pontoEVirgula('148237632487632487234867823462277234423,4324243'));
const notasPrimeiroBi = 8;
const notasSegundoBi = 6.3;
const notasTerceiroBi = 7;
const notasQuartoBi = 9.3;
let media = (notasPrimeiroBi + notasSegundoBi + notasTerceiroBi + notasQuartoBi) / 4;

if (media >= 7) {
   media += media * 0.1;
}
console.log (media);

console.log (`a média é  ${media.toFixed(2)}`);
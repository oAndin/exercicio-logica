console.log("Hello World!");

// function idade (ano) {
//     let idadeTiago = 2023 - ano;
//     return idadeTiago;
// };

// document.write(idade(1993));

// function alunosFalta (totalDeAlunos, alunosPresentes) {
//     let faltaram = alunosPresentes - totalDeAlunos;
//     let porcent = (totalDeAlunos / faltaram) * 100;
//     return porcent.toFixed(0);
// };

// document.write(alunosFalta(20,11));

// function calcNota(p1, p2, t1) {
//     let calcMedia = (p1 + p2 + (t1 * 2)) / 4;
//     return calcMedia;
// };

// document.write(calcNota(10, 10, 10));

let manha, tarde, noite = 0;

function acesso(horario) {
    for (let i = 0; i < 10; i++) {
        if ( horario >= 5 && horario <= 12 ) {
            manhã++;
        } // manhã
        else if ( horario >= 12 && horario <= 18) {
            tarde++;
        } // tarde
        else {
            noite++;
        } // noite
    }
}
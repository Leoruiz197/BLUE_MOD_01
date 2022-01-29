var alunos = ["ale","anderson","cris"];
let nome = "ale";

for (let aluno of alunos){
    if(aluno == nome){
        console.log(aluno);
        for (let i in alunos){
            if(i == alunos.indexOf(aluno)){
                console.log(i);
                break;
            }
        }
        break;
    }
}


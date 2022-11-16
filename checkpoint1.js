/*Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
- Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!"*/

let menu = {macarrao: 8, brigadeiro: 8, pipoca: 10, feijao: 12, carne:15}
let prato = menu.macarrao


function pratotempo(prato, tempousuario){ 

   if (prato == tempousuario){
   return 'Prato pronto, bom apetite!!!'
   }
   else if (prato > tempousuario){
    return 'Tempo insuficiente'
}  
   else if (tempousuario == 2*(prato)) {
    return 'A comida queimou'
   }
   else if (tempousuario == 3*(prato)){
    return'Kabumm'
   }
   else {
     return'Prato inexistente'
   }
}

console.log(pratotempo(menu.macarrao,8)) //Prato pronto, bom apetite!!!

//prato = menu.brigadeiro

console.log(pratotempo(menu.brigadeiro,4)) // Tempo insuficiente

//prato = menu.pipoca

console.log(pratotempo(menu.pipoca,20)) // A comida queimou

//prato = menu.feijao

console.log(pratotempo(menu.feijao,36)) // Kabumm

//prato = menu.carne 

console.log(pratotempo(menu.carne,40))// prato inexistente




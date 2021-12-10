// Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

    
    function microondas(tipo, valor) {
        let mensagem = 'Obrigado por usar Microondas DH\n';
    
        switch(tipo) {
            case 'Pipoca' :
                mensagem += 'Você selecionou Pipoca\n';
    
                if (valor >= 20 && valor <=29) {
                    mensagem += 'Comida Queimou!\n';
                }else if (valor < 10) {
                    mensagem += 'Tempo insuficinete!!\n';
                }else if (valor >= 30) {
                    mensagem += 'Kabum!\n';
                }
            break;
            case 'Macarrao' :
                mensagem += 'Você selecionou Macarrao\n';
    
                if (valor >= 16 && valor <=23) {
                    mensagem += 'Comida Queimou!\n';
                }else if (valor < 8) {
                    mensagem += 'Tempo insuficinete!!\n';
                }else if (valor >= 24) {
                    mensagem += 'Kabum!\n';
                }
            break;
            case 'Carne' :
                mensagem += 'Você selecionou Carne\n';
    
                if (valor >= 30 && valor <=44) {
                    mensagem += 'Comida Queimou!\n';
                }else if (valor < 15) {
                    mensagem += 'Tempo insuficinete!!\n';
                }else if (valor >= 45) {
                    mensagem += 'Kabum!\n';
                }
            break;
            case 'Feijao' :
                mensagem += 'Você selecionou Feijao\n';
    
                if (valor >= 24 && valor <=35) {
                    mensagem += 'Comida Queimou!\n';
                }else if (valor < 12) {
                    mensagem += 'Tempo insuficinete!!\n';
                }else if (valor >= 36) {
                    mensagem += 'Kabum!\n';
                }
            break;
            case 'Brigadeiro' :
                mensagem += 'Você selecionou Brigadeiro\n';
    
                if (valor >= 16 && valor <=23) {
                    mensagem += 'Comida Queimou!\n';
                }else if (valor < 8) {
                    mensagem += 'Tempo insuficinete!!\n';
                }else if (valor >= 24) {
                    mensagem += 'Kabum!\n';
                }
            break;
            
            
            
            default :
                mensagem += 'Prato inexistente!\n';
        }
    
        
    
        return mensagem;
    
    }
console.log(microondas('Macarrao', ));
console.log("Prato pronto, bom apetite");


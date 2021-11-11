//***Comidas Rápidas***
//lista de pratos e códigos
//Pipoca - 1
//Macarrão - 2
//Carne 3
//Feijão - 4
//Brigadeiro - 5


function microondas(prato,tempo){
    switch(prato){
        case 1:
            if (tempo < 10){
                return "Prato pronto, bom apetite. **Tempo insuficiente, por favor insira o tempo correto para o preparo de sua pipoca**";
            }else if(tempo >= 10 && tempo <=20) {
                return "Prato pronto, bom apetite";
            }else if(tempo>20 && tempo<30){
                return "Prato pronto, bom apetite. **A pipoca queimou**";
            }else{ 
                return "Prato pronto, bom apetite. **KABUM**";
            }
        case 2:
            if (tempo < 8){
                return "Prato pronto, bom apetite. **Tempo insuficiente, por favor insira o tempo correto para o preparo de seu macarrão**";
            }else if(tempo >= 8 && tempo <=16) {
                return "Prato pronto, bom apetite";
            }else if(tempo>16 && tempo<24){
                return "Prato pronto, bom apetite. **O macarrão queimou**";
            }else{ 
                return "Prato pronto, bom apetite. **KABUM**";
            }
        case 3:
            if (tempo < 15){
                return "Prato pronto, bom apetite. **Tempo insuficiente, por favor insira o tempo correto para o preparo de sua carne**";
            }else if(tempo >= 15 && tempo <=30) {
                return "Prato pronto, bom apetite";
            }else if(tempo>30 && tempo<45){
                return "Prato pronto, bom apetite. **A carne queimou**";
            }else{ 
                return "Prato pronto, bom apetite. **KABUM**";
            }
        case 4:
            if (tempo < 12){
                return "Prato pronto, bom apetite. **Tempo insuficiente, por favor insira o tempo correto para o preparo de seu feijão**";
            }else if(tempo >= 12 && tempo <=24) {
                return "Prato pronto, bom apetite";
            }else if(tempo>24 && tempo<36){
                return "Prato pronto, bom apetite. **O feijão queimou**";
            }else{ 
                return "Prato pronto, bom apetite. **KABUM**";
            }
        case 5:
            if (tempo < 8){
                return "Prato pronto, bom apetite. **Tempo insuficiente, por favor insira o tempo correto para o preparo de seu brigadeiro**";
            }else if(tempo >= 8 && tempo <=16) {
                return "Prato pronto, bom apetite";
            }else if(tempo>16 && tempo<24){
                return "Prato pronto, bom apetite. **O brigadeiro queimou**";
            }else{ 
                return "Prato pronto, bom apetite. **KABUM**";
            }
        default:
            return("Prato Inexistente")    
    }
}       
console.log(microondas(5,15));

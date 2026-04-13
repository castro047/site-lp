    const cardResidencial = document.getElementById('servicoResidencial');
    
    if (cardResidencial) {
        cardResidencial.addEventListener('click', function() {
            const numero = '5547997327311'; // Substitua pelo número correto
            const mensagem = encodeURIComponent('Olá! Gostaria de mais informações sobre os SERVIÇOS RESIDENCIAIS de películas. Podem me ajudar?');
            
            window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
        });
    }

    const cardautomoveis = document.getElementById('servicoautomoveis');
    
    if (cardautomoveis) {
        cardautomoveis.addEventListener('click', function() {
            const numero = '5547997327311'; // Substitua pelo número correto
            const mensagem = encodeURIComponent('Olá! Gostaria de mais informações sobre os SERVIÇOS de películas no meu Automovel. Podem me ajudar?');
            
            window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
        });
    }
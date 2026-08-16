import { useState, useEffect } from 'react';


export function EfeitoDigitacao({ texto, velocidade = 200 }) {
    "Cria um efeito de digitação para o texto fornecido, exibindo uma letra de cada vez com base na velocidade especificada."
    const [textoAtual, setTextoAtual] = useState('');
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        if (indice < texto.length) {
        const timer = setTimeout(() => {
            setTextoAtual((prev) => prev + texto.charAt(indice));
            setIndice((prev) => prev + 1);
        }, velocidade);

            return () => clearTimeout(timer);
        }
    }, [indice, texto, velocidade]);

  return <span>{textoAtual}</span>;
}

export function ModificaNumerosMetricas({ valorFinal, velocidade = 100 }) {
    "Cria um efeito de contagem para números, incrementando de 0 até o valor final especificado com base na velocidade fornecida."
    const [valorAtual, setValorAtual] = useState(0);

    useEffect(() => {
        if (valorAtual < valorFinal) {
            const timer = setTimeout(() => {
                setValorAtual((prev) => prev + 1);
            }, velocidade);

            return () => clearTimeout(timer);
        }
    }, [valorAtual, valorFinal, velocidade]);

    return <span>{valorAtual}</span>;
}
import { parseCookies } from 'nookies';

export async function dadosUser() {

    const { PStoken } = parseCookies()

    try {
        const res = await fetch('http://localhost:3030/Usuarios/user', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${PStoken}` }
        });

        const response = await res.json();

        return response

    } catch (err) {

    }


}

export async function dadosPet() {

    const { PStoken } = parseCookies()

    try {
        const res = await fetch('http://localhost:3030/Pet/meuPet', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${PStoken}` }
        });

        const response = await res.json();

        return response

    } catch (err) {

    }


}
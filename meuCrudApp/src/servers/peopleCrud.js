import {  API_URL} from "./configApi";

// Função para buscar todas as pessoas
export async function getPeople() {
    const response = await fetch(`${API_URL}/people`);
    const data = await response.json();
    return data;
}

// Função para criar uma nova pessoa
export async function createPerson(person) {
    const response = await fetch(`${API_URL}/people`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    });
    return response.json();
}

// Função para atualizar uma pessoa
export async function updatePerson(id, person) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    });
    return response.json();
}

// Função para deletar uma pessoa
export async function deletePerson(id) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: 'DELETE'
    });
}
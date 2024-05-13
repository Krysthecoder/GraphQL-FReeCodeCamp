let games = [
    {id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch']},
    {id: '2', title: 'Zelda, Tears of the Kingdom', platform: ['Switch']},
    {id: '3', title: 'Goku, Tears of the Kingdom', platform: ['Switch']},
];

let authors = [
    {id: '1', name: 'mario', verified: true},
    {id: '2', name: 'wario', verified: true},
    {id: '3', name: 'Vario', verified: true},
];

let reviews = [
    {id: '1', rating: 9, content: "no se", author_id: '1', game_id: '2'},
    {id: '2', rating: 9, content: "no se 2", author_id: '2', game_id: '1'},
    {id: '3', rating: 9, content: "no se 3", author_id: '3', game_id: '3'},
];

export default { games, authors, reviews}
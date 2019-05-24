
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      return knex('games').insert([
        {id: 1, title: 'hero', genre: 'action', releaseYear: '1980'},
        {id: 1, title: 'vic', genre: 'RPG', releaseYear: '1990'},
        {id: 1, title: 'sim', genre: 'SLR', releaseYear: '200'},
      ]);
};

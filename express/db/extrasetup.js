function extraSetup(sequelize) {

    const {
        actor,
        director,
        genre,
        moviecast,
        moviedir,
        moviegenre,
        movie,
        rating,
        reviewer
    } = sequelize.models

    actor.hasMany(moviecast)
    moviecast.belongsTo(actor)

    director.hasMany(moviedir)
    moviedir.belongsTo(director)

    movie.hasMany(moviedir)
    moviedir.belongsTo(movie)

    movie.hasMany(moviecast)
    moviecast.belongsTo(movie)

    movie.hasMany(moviegenre)
    moviegenre.belongsTo(movie)

    movie.hasMany(rating)
    rating.belongsTo(movie)

    reviewer.hasMany(rating)
    rating.belongsTo(reviewer)

    genre.hasMany(moviegenre)
    moviegenre.belongsTo(genre)

    actor.belongsToMany(movie, {through: "actormovie",foreignKey: "actorId"})
    movie.belongsToMany(actor, {through: "actormovie",foreignKey: "movieId"})

}

module.exports = extraSetup

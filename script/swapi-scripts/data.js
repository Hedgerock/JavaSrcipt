export const url = 'https://swapi.dev/api'
export const contentInOnePage = 10;
export const imgUrl = 'https://starwars-visualguide.com/assets/img';

export const mainPart = document.querySelector('.main-part');
export const breadCrumbs = document.querySelector('.bread-crumbs');
export const pagination = document.querySelector('.pagination');

export const imgFormat = {
    jpg: '.jpg',
    webp: '.webp'
}

export const contents = [
    {
        array: null,
        key: 'films',
        title: 'Related films'
    },
    {
        array: null,
        key: 'vehicles',
        title: 'Related vehicles'
    },
    {
        array: null,
        key: 'starships',
        title: 'Related starships'
    },
    {
        array: null,
        key: 'characters',
        title: 'Related characters'
    },
    {
        array: null,
        key: 'characters',
        title: 'Related characters'
    },
    {
        array: null,
        key: 'characters',
        title: 'Related pilots'
    },
    {
        array: null,
        key: 'characters',
        title: 'Residents'
    },
    {
        array: null,
        key: 'species',
        title: 'Related species'
    }, 
    {
        array: null,
        key: 'planets',
        title: 'Related planets'
    }, 
]

export const structure = {
    'films': ['episode_id', 'release_date', 'director', 'producer', 'opening_crawl'],
    'planets': ['population', 'rotation_period', 'orbital_period', 'diameter', 'gravity', 'terrain', 'surface_water', 'climate'],
    'vehicles': ['model', 'manufacturer', 'vehicle_class', 'cost_in_credits', 'max_atmosphering_speed', 'length', 'cargo_capacity', 'crew', 'passengers'],
    'starships': ['model', 'manufacturer', 'starship_class', 'cost_in_credits', 'max_atmosphering_speed', 'hyperdrive_rating', 'MGLT', 'length', 'cargo_capacity', 'crew', 'passengers'],
    'species': ['classification', 'designation', 'language', 'average_lifespan', 'average_height', 'hair_colors', 'skin_colors', 'eye_colors'],
    'people': ['birth_year', 'species', 'height', 'mass', 'gender', 'hair_color', 'skin_color', 'homeworld'],
    'characters': ['birth_year', 'species', 'height', 'mass', 'gender', 'hair_color', 'skin_color', 'homeworld']
}
# Arcana

Arcana is an web application for learning about tarot cards and its meanings. This application was developed to improve and put to test my skills in Node.js, Angular and Flutter development. When complete, Arcana will be composed by a responsive website and a RESTful Web API (my target MVP) and an Android mobile app (my extra mile for this project). This repository was created to host the Web API source code.

## Tech

Arcana is based on a number of technologies and open-source libraries, such as:

- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/) (hosted on their user-friendly [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) service)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [@hapi/joi](https://hapi.dev/module/joi/)

## Installation

First things first, you need to clone this repository to your machine.

Arcana has a dependency on the [dotenv](https://github.com/motdotla/dotenv) library, so you'll need to create an local untracked ".env" file on your project root folder containing the following keys:

- MONGODB_CONNECTION (connection string to your MongoDB instance)
- JWT_SECRET (a 256-bit string for signing JWT tokens. I generate mine [here](https://randomkeygen.com/))
- JWT_ISSUER (issuer URL for JWT tokens. I use http://localhost:3000/auth in my dev environment)

After setting up the ".env" file with the proper keys, navigate to the main project folder and use npm to install arcana dependencies.

```bash
npm install
```

To run the project, use the command bellow on the project root folder.

```bash
node index.js
```

After following these steps, you should get a running instance of the Arcana Web API for development.

## Contributing

Despite this being a personal project, pull requests are welcome. If you don't feel like coding, feel free to open issues with suggestions to how I could improve this code or the application itself. All kinds of suggestions are welcome.

## License

This project is licenced under [MIT](https://choosealicense.com/licenses/mit/) terms.

## Disclaimer

- The tarot cards images included in this project where obtainet at sacred-texts.com. As they state on [their website](https://www.sacred-texts.com/tarot/) these are scans from the original Rider-Waite Deck, painted by Pamela Colman Smith, originally published in 1909 and no longer under US nor UK copyrights, therefore, in public domain.
- The tarot cards descriptions where also obtained at [sacred-texts.com](https://www.sacred-texts.com/) and are used in this project with non-profit and studying purposes only.

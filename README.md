# Spacestagram

**Demo** : https://www.stagram.space/

Spacestagram displays stunning space pictures fetched from NASA APOD (Astronomy Picture of the Day) [API](https://api.nasa.gov/). <br/> Additionally, users are able to like and share each picture easily.

<a href="https://www.stagram.space/"><img src="https://i.loli.net/2021/09/15/8yOMk9D61PNn7im.png" /></a>

<a href="https://www.stagram.space/"><img src="https://i.loli.net/2021/09/15/re1zLtNRi3AfBHh.gif" /></a>

## Tech Stack

Next.js, CSS

## Features

- Landing page with animated svg background
- Navigate between pictures
- Like pictures (saved locally in cookie)
- Unique link for each picture
- Server side rendering with loading animation
- Customized 404 page for invalid path

## Run Locally

Clone the project

```bash
  git clone https://github.com/LihaoWang/spacestagram.git
```

Go to the project directory

```bash
  cd spacestagram
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_API`

## License

[MIT](https://choosealicense.com/licenses/mit/)

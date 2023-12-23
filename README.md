# three_homepage_exp

Welcome to this repo. It's purely experimental so expect things to be broken. I'll try to keep it updated on what's working and what's not.

As of now the 3D version contains a lot of unused content, but most of it is functional when rendered inside the Canvas r3f element.
The non 3d version of App is terribly broken as I'm focusing on 3D development as of now.

## Local Testing

You can clone this repository by using:

```bash
git clone git@github.com:kagunecode/three_homepage-exp.git
```

With that you will get a local copy of this project. Then, install all the packages by using npm (make sure you have node.js installed):

```bash
npm install
```

Lastly, start a development server by running:

```bash
npm run dev
```

You will get the local address where you will be able to see the project. Take into account that there will be a lot of experimentation on this repo, so expect broken things.

## Libraries

For this project I want to focus on some advanced web design, so here is a list of some of the important libraries I'm using as of the latest push:

- Three.js
- react-three-fiber
- framer-motion
- TailwindCSS
- React (of course)

## On Shaders

Shaders are written using glsl (OpenGL Shading Language) which is based on C. The vertex shaders and fragment shaders are all written on C so if you want to know more about that please refer to some C sources rather than JS since it is a different topic really.

## Sources

I will list some sources that have been useful for learning a bit more about each thing.

### framer-motion

For this, I recommend going to the [framer motion docs](https://www.framer.com/motion/) since I find it very easy to understand how it works.

### three and shaders

Including react-three-fiber, here are some sources that I find useful:

- [0xca0a Twitter](https://twitter.com/0xca0a)
- [Varun Noise Article](https://varun.ca/noise/)
- [The Book of Shaders](https://thebookofshaders.com/)
- [Maxime Heckel Blog](https://blog.maximeheckel.com/)
- [three.js documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene) (of course)
- [Tympanus codrops](https://tympanus.net/codrops/)
- [react-three-fiber docs](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

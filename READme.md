# React in RWD

> Build your reusable and maintainable responsive web design rapidly with practical css processors. I also used an awesome bundler  [webpack](https://github.com/webpack/webpack) in this project.

#### React
It's an awesome framework that we can implement isomorphic javascript and program it with ES2015 and much next generation javascript.

There is a awesome compiler , Babel and it's plenty of [plugins](https://babeljs.io/docs/plugins/).

#### [CSS modules](https://github.com/css-modules/css-modules)
It's a CSS file in which all class names and animation names are **scoped locally by default**.

Use CSS Module with [`webpack`] and [`react`].

[`webpack`]:(https://github.com/css-modules/webpack-demo)
[`react`]:(https://github.com/gajus/react-css-modules)

#### PostCSS
PostCSS can do the same work as preprocessors like Sass, Less, and Stylus. But PostCSS is **modular** and **faster**.

Since webpack uses loaders to pack modules. We need to intall [postcss-loader](https://github.com/postcss/postcss-loader).

#### PostCSS Plugins
* [`lost`] feature-rich `calc()` grid system by Jeet author.
* [`autoprefixer`] adds vendor prefixes for you, using data from Can I Use.
* [`cssnext`] contains plugins that allow you to use future CSS features today.
* [`precss`] contains plugins that allow you to use Sass-like CSS.

[`cssnext`]:http://cssnext.io/
[`lost`]:https://github.com/corysimmons/lost
[`precss`]:https://github.com/jonathantneal/precss
[`autoprefixer`]:https://github.com/postcss/autoprefixer

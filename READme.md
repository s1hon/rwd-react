## React in RWD

Build your maintainable responsive web design rapidly with practical css processors and [webpack](https://github.com/webpack/webpack). The project referred to [html5up webbsite](http://html5up.net/telephasic). I restructured its *footer section* code with ReactJS and PostCSS.

### Concept of CSS Module
* Eliminate global css
* Use **composes** instead of multiple class name

### Locally build instruction
1. clone the repo : `git clone https://github.com/chungchiehlun/rwd-react.git`
2. npm install : `cd rwd-react && npm install`
3. run it locally : `npm start`
4. Open your browser and go to *localhost:1314*

### Launch a static server
* `npm run build`
* `npm run prod`

### Composition
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
* [`lost`]: A powerful grid system built in PostCSS
* [`postcss-cssnext`]: Contain plugins that allowed you to use future CSS features today and [autoprefixer](https://github.com/postcss/autoprefixer) dependency now.
* [`precss`]: Contains plugins that allow you to use Sass-like CSS.
* [`postcss-font-awesome`]:

[`postcss-cssnext`]:http://cssnext.io/
[`lost`]:https://github.com/corysimmons/lost
[`precss`]:https://github.com/jonathantneal/precss
[`postcss-font-awesome`]:https://github.com/dan-gamble/postcss-font-awesome

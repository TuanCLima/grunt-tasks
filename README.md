# Grunt Build Tasks

A compact demonstration of a traditional frontend asset pipeline using Grunt: compile SCSS, concatenate JavaScript and CSS, and minify the resulting JavaScript.

## Pipeline

| Task | Input | Output |
| --- | --- | --- |
| `sass` | `css/scss/styles.scss` | `css/styles.css` |
| `concat:js` | `js/*.js` | `build/script.js` |
| `concat:css` | `css/*.css` | `build/style.css` |
| `uglify:js` | `build/script.js` | Minified `build/script.js` |
| `all` | All of the above, in order | Compiled and bundled assets |

## Run locally

The historical toolchain uses `node-sass` 9 and Node.js 20. It may require a matching native binary or local compilation tools. This is a learning example retained for reference.

```bash
git clone https://github.com/TuanCLima/grunt-tasks.git
cd grunt-tasks
npm ci
npx grunt --gruntfile GruntFile.js all
```

The explicit `--gruntfile` matches the checked-in filename on case-sensitive systems. To run one task:

```bash
npx grunt --gruntfile GruntFile.js sass
npx grunt --gruntfile GruntFile.js concat:js
npx grunt --gruntfile GruntFile.js concat:css
npx grunt --gruntfile GruntFile.js uglify:js
```

These commands generate files; the repository has no web server or automated tests. Generated bundles are not intended to demonstrate current production tooling.

## License

`package.json` declares ISC for the project. Bundled third-party libraries retain their own license notices.

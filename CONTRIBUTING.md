# Contributing

To contribute to the Code Your Future syllabus, fork and open a pull request to
[this repository](https://github.com/code-your-future/syllabus) or one of the
[submodules](https://github.com/code-your-future/syllabus).

## Publish the Gitbook

Install the [GitBook](https://github.com/GitbookIO/gitbook) CLI:
```bash
npm install -g gitbook-cli
```

Install gitbook plugins for this project, if not already installed:
```bash
gitbook install
```

Test your changes:
```
gitbook serve
open http://localhost:4000
```

Build the docsite into the `_book` directory
```
gitbook build
```

Publish the built `_book` directory to GitHub pages
```
git commit -am 'Publish gitbook'
git subtree push --prefix _book origin gh-pages
```

## Add new modules or lessons

The repo is stuctured as `module-name\lesson-number` - add your content in the correct file.

If you've added a new file, then Add it as new entry in [SUMMARY.md](https://github.com/Code-Your-Future/syllabus/blob/master/SUMMARY.md).
If the module contains many individual markdown files, add them as nested bullets under the main README.

[Build and publish](#publish-the-gitbook) the site.

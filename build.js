
var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    layouts = require('metalsmith-layouts'),
    jade = require('metalsmith-jade'),
    collections = require('metalsmith-collections'),
    permalinks = require('metalsmith-permalinks'),
    serve = require('metalsmith-serve');

    Metalsmith(__dirname)
      .use(collections({
        slides: { pattern: 'content/slides/*.md',
                  sortBy: 'order'
                }
      }))
      .use(markdown())
      .use(permalinks({pattern: ':collection/slide' + ':order'}))
      .use(layouts({engine:'jade', directory:'layouts'}))
      .use(serve({port:8088}))
      .destination('./build')
      .build(function(err) {
        if (err) throw err;
      });

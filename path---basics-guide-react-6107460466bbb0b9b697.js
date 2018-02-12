webpackJsonp([0xbcf7c0cba0d8],{633:function(t,e){t.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/","/basics/quick-start-guide/","/basics/slow-start-guide/","/basics/guide-react/","/basics/guide-vue/","/basics/guide-angular/","/basics/writing-stories/","/basics/exporting-storybook/","/basics/faq/","/basics/community/"],configurations:["/configurations/default-config/","/configurations/custom-webpack-config/","/configurations/custom-babel-config/","/configurations/add-custom-head-tags/","/configurations/serving-static-files/","/configurations/env-vars/","/configurations/cli-options/"],testing:["/testing/react-ui-testing/","/testing/structural-testing/","/testing/interaction-testing/","/testing/css-style-testing/","/testing/manual-testing/"],addons:["/addons/introduction/","/addons/using-addons/","/addons/addon-gallery/","/addons/writing-addons/","/addons/api/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/addon-gallery/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/api/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/using-addons/"},frontmatter:{title:"Using Addons",id:"using-addons"}}},{node:{fields:{slug:"/addons/writing-addons/"},frontmatter:{title:"Writing Addons",id:"writing-addons"}}},{node:{fields:{slug:"/addons/introduction/"},frontmatter:{title:"Intro to Addons",id:"introduction"}}},{node:{fields:{slug:"/configurations/cli-options/"},frontmatter:{title:"CLI Options",id:"cli-options"}}},{node:{fields:{slug:"/configurations/add-custom-head-tags/"},frontmatter:{title:"Add Custom Head Tags",id:"add-custom-head-tags"}}},{node:{fields:{slug:"/configurations/custom-babel-config/"},frontmatter:{title:"Custom Babel Config",id:"custom-babel-config"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom Webpack Config",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/default-config/"},frontmatter:{title:"Default Config",id:"default-config"}}},{node:{fields:{slug:"/configurations/env-vars/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/community/"},frontmatter:{title:"Community",id:"community"}}},{node:{fields:{slug:"/basics/guide-angular/"},frontmatter:{title:"Storybook for Angular",id:"guide-angular"}}},{node:{fields:{slug:"/configurations/serving-static-files/"},frontmatter:{title:"Serving Static Files",id:"serving-static-files"}}},{node:{fields:{slug:"/basics/guide-vue/"},frontmatter:{title:"Storybook for Vue",id:"guide-vue"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/exporting-storybook/"},frontmatter:{title:"Exporting Storybook as a Static App",id:"exporting-storybook"}}},{node:{fields:{slug:"/basics/faq/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/quick-start-guide/"},frontmatter:{title:"Quick Start Guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/guide-react/"},frontmatter:{title:"Storybook for React",id:"guide-react"}}},{node:{fields:{slug:"/basics/writing-stories/"},frontmatter:{title:"Writing Stories",id:"writing-stories"}}},{node:{fields:{slug:"/testing/css-style-testing/"},frontmatter:{title:"CSS/Style Testing",id:"css-style-testing"}}},{node:{fields:{slug:"/basics/slow-start-guide/"},frontmatter:{title:"Slow start guide",id:"slow-start-guide"}}},{node:{fields:{slug:"/testing/react-ui-testing/"},frontmatter:{title:"Introduction: React UI Testing",id:"react-ui-testing"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/testing/structural-testing/"},frontmatter:{title:"Structural Testing",id:"structural-testing"}}},{node:{fields:{slug:"/testing/interaction-testing/"},frontmatter:{title:"Interaction Testing",id:"interaction-testing"}}}]},markdownRemark:{html:'<p>You may have tried to use our quick start guide to setup your project for Storybook. If you want to set up Storybook manually, this is the guide for you.</p>\n<blockquote>\n<p>This will also help you to understand how Storybook works.</p>\n</blockquote>\n<h2 id="starter-guide-react"><a href="#starter-guide-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Starter Guide React</h2>\n<p>Storybook has its own Webpack setup and a dev server. Webpack setup is very similar to <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>, but allows you to configure as you want.</p>\n<p>In this guide, we are trying to set up Storybook for your React project.</p>\n<h2 id="table-of-contents"><a href="#table-of-contents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of contents</h2>\n<ul>\n<li><a href="#add-storybookreact">Add @storybook/react</a></li>\n<li><a href="#add-react-react-dom-and-babel-core">Add react, react-dom, and babel-core</a></li>\n<li><a href="#create-the-config-file">Create the config file</a></li>\n<li><a href="#write-your-stories">Write your stories</a></li>\n<li><a href="#run-your-storybook">Run your Storybook</a></li>\n</ul>\n<h2 id="add-storybookreact"><a href="#add-storybookreact" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add @storybook/react</h2>\n<p>First of all, you need to add <code>@storybook/react</code> to your project. To do that, simply run:</p>\n<pre><code class="language-sh">npm i --save-dev @storybook/react\n</code></pre>\n<h2 id="add-react-react-dom-and-babel-core"><a href="#add-react-react-dom-and-babel-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add react, react-dom, and babel-core</h2>\n<p>Make sure that you have <code>react</code>, <code>react-dom</code>, and <code>babel-core</code> in your dependencies as well because we list these as a peerDependency:</p>\n<pre><code class="language-sh">npm i --save react react-dom\nnpm i --save-dev babel-core\n</code></pre>\n<p>Then add the following NPM script to your package json in order to start the storybook later in this guide:</p>\n<pre><code class="language-json">{\n  "scripts": {\n    "storybook": "start-storybook -p 9001 -c .storybook"\n  }\n}\n</code></pre>\n<h2 id="create-the-config-file"><a href="#create-the-config-file" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create the config file</h2>\n<p>Storybook can be configured in several different ways.\nThat’s why we need a config directory. We’ve added a <code>-c</code> option to the above NPM script mentioning <code>.storybook</code> as the config directory.</p>\n<p>For the basic Storybook configuration file, you don’t need to do much, but simply tell Storybook where to find stories.</p>\n<p>To do that, simply create a file at <code>.storybook/config.js</code> with the following content:</p>\n<pre><code class="language-js">import { configure } from \'@storybook/react\';\n\nfunction loadStories() {\n  require(\'../stories/index.js\');\n  // You can require as many stories as you need.\n}\n\nconfigure(loadStories, module);\n</code></pre>\n<p>That’ll load stories in <code>../stories/index.js</code>.</p>\n<p>Just like that, you can load stories from wherever you want to.</p>\n<h2 id="write-your-stories"><a href="#write-your-stories" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Write your stories</h2>\n<p>Now you can write some stories inside the <code>../stories/index.js</code> file, like this:</p>\n<pre><code class="language-js">import React from \'react\';\nimport { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\nimport Button from \'../components/Button\';\n\nstoriesOf(\'Button\', module)\n  .add(\'with text\', () => (\n    &#x3C;Button onClick={action(\'clicked\')}>Hello Button&#x3C;/Button>\n  ))\n  .add(\'with some emoji\', () => (\n    &#x3C;Button onClick={action(\'clicked\')}>😀 😎 👍 💯&#x3C;/Button>\n  ));   \n</code></pre>\n<p>Story is a single state of your component. In the above case, there are two stories for the native button component:</p>\n<ol>\n<li>with text</li>\n<li>with some emoji</li>\n</ol>\n<h2 id="run-your-storybook"><a href="#run-your-storybook" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run your Storybook</h2>\n<p>Now everything is ready. Simply run your storybook with:</p>\n<pre><code class="language-sh">npm run storybook\n</code></pre>\n<p>Then you can see all your stories, like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-0c959.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 60.149130074565036%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAA+klEQVQoz83RTUrEMBQH8C4EwROIMqCXcKkH6gmy6lyla5lNF+1CZuEZ3KjTdpqAmSYpNMZ+0A/6bAIWYUCcqQsf/BaBlz/vJdbqfnX2/PSIWMoQfaMIb7EhuEAyl8aO7hAhZDpzxqc+Td8jCUHrh/W5tXSWV0IISNPUyLIMVM7gncVQqg+oqmpfua8sSvA879ZyHOdaN7VtazRNA33fwzEVBMGdCaSUglJqmmB2oMxz4JyDlBLqup4fqEO++/+B+h2LojAf1HXdr/044TAMB/N9/29XNoG2bS/iOH4Jw3DzJUmSDcb4IFEUvbque2ONdTK6GC1muhydfgK9ISN2zIcbAQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Basic stories"\n        title=""\n        src="/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-44d6a.png"\n        srcset="/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-f4799.png 173w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-b3b1d.png 345w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-44d6a.png 690w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-bc0f7.png 1035w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-b50e5.png 1380w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-0ed32.png 2070w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-0c959.png 2414w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Now you can change components and write stories whenever you need to. You’ll get those changes into Storybook in a snap with the help of Webpack’s HMR API.</p>',fields:{slug:"/basics/guide-react/"},frontmatter:{title:"Storybook for React",id:"guide-react"}}},pathContext:{slug:"/basics/guide-react/"}}}});
//# sourceMappingURL=path---basics-guide-react-6107460466bbb0b9b697.js.map
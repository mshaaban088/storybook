webpackJsonp([0x670a6982f3d6],{632:function(t,e){t.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/","/basics/quick-start-guide/","/basics/slow-start-guide/","/basics/guide-react/","/basics/guide-vue/","/basics/guide-angular/","/basics/writing-stories/","/basics/exporting-storybook/","/basics/faq/","/basics/community/"],configurations:["/configurations/default-config/","/configurations/custom-webpack-config/","/configurations/custom-babel-config/","/configurations/add-custom-head-tags/","/configurations/serving-static-files/","/configurations/env-vars/","/configurations/cli-options/"],testing:["/testing/react-ui-testing/","/testing/structural-testing/","/testing/interaction-testing/","/testing/css-style-testing/","/testing/manual-testing/"],addons:["/addons/introduction/","/addons/using-addons/","/addons/addon-gallery/","/addons/writing-addons/","/addons/api/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/addon-gallery/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/api/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/using-addons/"},frontmatter:{title:"Using Addons",id:"using-addons"}}},{node:{fields:{slug:"/addons/writing-addons/"},frontmatter:{title:"Writing Addons",id:"writing-addons"}}},{node:{fields:{slug:"/addons/introduction/"},frontmatter:{title:"Intro to Addons",id:"introduction"}}},{node:{fields:{slug:"/configurations/cli-options/"},frontmatter:{title:"CLI Options",id:"cli-options"}}},{node:{fields:{slug:"/configurations/add-custom-head-tags/"},frontmatter:{title:"Add Custom Head Tags",id:"add-custom-head-tags"}}},{node:{fields:{slug:"/configurations/custom-babel-config/"},frontmatter:{title:"Custom Babel Config",id:"custom-babel-config"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom Webpack Config",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/default-config/"},frontmatter:{title:"Default Config",id:"default-config"}}},{node:{fields:{slug:"/configurations/env-vars/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/community/"},frontmatter:{title:"Community",id:"community"}}},{node:{fields:{slug:"/basics/guide-angular/"},frontmatter:{title:"Storybook for Angular",id:"guide-angular"}}},{node:{fields:{slug:"/configurations/serving-static-files/"},frontmatter:{title:"Serving Static Files",id:"serving-static-files"}}},{node:{fields:{slug:"/basics/guide-vue/"},frontmatter:{title:"Storybook for Vue",id:"guide-vue"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/exporting-storybook/"},frontmatter:{title:"Exporting Storybook as a Static App",id:"exporting-storybook"}}},{node:{fields:{slug:"/basics/faq/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/quick-start-guide/"},frontmatter:{title:"Quick Start Guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/guide-react/"},frontmatter:{title:"Storybook for React",id:"guide-react"}}},{node:{fields:{slug:"/basics/writing-stories/"},frontmatter:{title:"Writing Stories",id:"writing-stories"}}},{node:{fields:{slug:"/testing/css-style-testing/"},frontmatter:{title:"CSS/Style Testing",id:"css-style-testing"}}},{node:{fields:{slug:"/basics/slow-start-guide/"},frontmatter:{title:"Slow start guide",id:"slow-start-guide"}}},{node:{fields:{slug:"/testing/react-ui-testing/"},frontmatter:{title:"Introduction: React UI Testing",id:"react-ui-testing"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/testing/structural-testing/"},frontmatter:{title:"Structural Testing",id:"structural-testing"}}},{node:{fields:{slug:"/testing/interaction-testing/"},frontmatter:{title:"Interaction Testing",id:"interaction-testing"}}}]},markdownRemark:{html:'<p>You may have tried to use our quick start guide to setup your project for Storybook. If you want to set up Storybook manually, this is the guide for you.</p>\n<blockquote>\n<p>This will also help you understand how Storybook works.</p>\n</blockquote>\n<h2 id="starter-guide-angular"><a href="#starter-guide-angular" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Starter Guide Angular</h2>\n<p>Storybook has its own webpack setup and a dev server.<br>\nThe webpack setup is very similar to <a href="https://cli.angular.io">Angular CLI</a>, but allows you to <a href="/configurations/custom-webpack-config/">configure it however you want</a>.</p>\n<p>In this guide, we are trying to set up Storybook for your Angular project.</p>\n<h2 id="table-of-contents"><a href="#table-of-contents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of contents</h2>\n<ul>\n<li><a href="#create-angular-project">Create Angular project</a></li>\n<li><a href="#add-storybookangular-and-babel-core">Add @storybook/angular and babel-core</a></li>\n<li><a href="#create-the-config-file">Create the config file</a></li>\n<li><a href="#write-your-stories">Write your stories</a></li>\n<li><a href="#run-your-storybook">Run your Storybook</a></li>\n</ul>\n<h2 id="create-angular-project"><a href="#create-angular-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create Angular project</h2>\n<p>First of all, you need to prepare an Angular project. To do that, run:</p>\n<pre><code class="language-sh">npm i -g @angular/cli\nng new your-angular-prj\ncd your-angular-prj\n</code></pre>\n<h2 id="add-storybookangular-and-babel-core"><a href="#add-storybookangular-and-babel-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add @storybook/angular and babel-core</h2>\n<p>Next, install <code>@storybook/angular</code> and <code>babel-core</code> (it’s a peerDependency) to your project:</p>\n<pre><code class="language-sh">npm i --save-dev @storybook/angular babel-core\n</code></pre>\n<p>Then add the following NPM script to your package json in order to start the storybook later in this guide:</p>\n<pre><code class="language-json">{\n  "scripts": {\n    "storybook": "start-storybook -p 9001 -c .storybook"\n  }\n}\n</code></pre>\n<h2 id="create-the-config-file"><a href="#create-the-config-file" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create the config file</h2>\n<p>Storybook can be configured in several different ways.\nThat’s why we need a config directory. We’ve added a <code>-c</code> option to the above NPM script mentioning <code>.storybook</code> as the config directory.</p>\n<p>For the basic Storybook configuration file, you don’t need to do much, but simply tell Storybook where to find stories.</p>\n<p>To do that, simply create a file at <code>.storybook/config.js</code> with the following content:</p>\n<pre><code class="language-js">import { configure } from \'@storybook/angular\';\n\nfunction loadStories() {\n  require(\'../stories/index.ts\');\n}\n\nconfigure(loadStories, module);\n</code></pre>\n<p>That’ll load stories in <code>../stories/index.ts</code>.</p>\n<p>Just like that, you can load stories from wherever you want to.</p>\n<h2 id="write-your-stories"><a href="#write-your-stories" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Write your stories</h2>\n<p>Now you can write some stories inside the <code>../stories/index.ts</code> file, like this:</p>\n<pre><code class="language-js">import { storiesOf } from \'@storybook/angular\';\nimport { action } from \'@storybook/addon-actions\';\nimport { MyButtonComponent } from \'../src/app/my-button/my-button.component\';\n\nstoriesOf(\'My Button\', module)\n  .add(\'with some emoji\', () => ({\n    component: MyButtonComponent,\n    props: {\n      text: \'😀 😎 👍 💯\',\n    },\n  }))\n  .add(\'with some emoji and action\', () => ({\n    component: MyButtonComponent,\n    props: {\n      text: \'😀 😎 👍 💯\',\n      click: action(\'clicked\'),\n    },\n  }));\n</code></pre>\n<p>Each story is a single state of your component. In the above case, there are two stories for the MyButton component:</p>\n<ol>\n<li>story with <code>@Input()</code> property binding.</li>\n<li>story with <code>@Input()</code> and <code>@Output()</code> property binding.</li>\n</ol>\n<h2 id="run-your-storybook"><a href="#run-your-storybook" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run your Storybook</h2>\n<p>Now everything is ready. Simply run your storybook with:</p>\n<pre><code class="language-sh">npm run storybook\n</code></pre>\n<p>Now you can change components and write stories whenever you need to.\nYou’ll get those changes into Storybook in a snap with the help of webpack’s HMR API.</p>',fields:{slug:"/basics/guide-angular/"},frontmatter:{title:"Storybook for Angular",id:"guide-angular"}}},pathContext:{slug:"/basics/guide-angular/"}}}});
//# sourceMappingURL=path---basics-guide-angular-fe9d7d46d2765d56dfcd.js.map
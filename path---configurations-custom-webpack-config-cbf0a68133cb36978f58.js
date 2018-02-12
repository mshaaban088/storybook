webpackJsonp([0xc641b59d517c],{642:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/","/basics/quick-start-guide/","/basics/slow-start-guide/","/basics/guide-react/","/basics/guide-vue/","/basics/guide-angular/","/basics/writing-stories/","/basics/exporting-storybook/","/basics/faq/","/basics/community/"],configurations:["/configurations/default-config/","/configurations/custom-webpack-config/","/configurations/custom-babel-config/","/configurations/add-custom-head-tags/","/configurations/serving-static-files/","/configurations/env-vars/","/configurations/cli-options/"],testing:["/testing/react-ui-testing/","/testing/structural-testing/","/testing/interaction-testing/","/testing/css-style-testing/","/testing/manual-testing/"],addons:["/addons/introduction/","/addons/using-addons/","/addons/addon-gallery/","/addons/writing-addons/","/addons/api/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/addon-gallery/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/api/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/using-addons/"},frontmatter:{title:"Using Addons",id:"using-addons"}}},{node:{fields:{slug:"/addons/writing-addons/"},frontmatter:{title:"Writing Addons",id:"writing-addons"}}},{node:{fields:{slug:"/addons/introduction/"},frontmatter:{title:"Intro to Addons",id:"introduction"}}},{node:{fields:{slug:"/configurations/cli-options/"},frontmatter:{title:"CLI Options",id:"cli-options"}}},{node:{fields:{slug:"/configurations/add-custom-head-tags/"},frontmatter:{title:"Add Custom Head Tags",id:"add-custom-head-tags"}}},{node:{fields:{slug:"/configurations/custom-babel-config/"},frontmatter:{title:"Custom Babel Config",id:"custom-babel-config"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom Webpack Config",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/default-config/"},frontmatter:{title:"Default Config",id:"default-config"}}},{node:{fields:{slug:"/configurations/env-vars/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/community/"},frontmatter:{title:"Community",id:"community"}}},{node:{fields:{slug:"/basics/guide-angular/"},frontmatter:{title:"Storybook for Angular",id:"guide-angular"}}},{node:{fields:{slug:"/configurations/serving-static-files/"},frontmatter:{title:"Serving Static Files",id:"serving-static-files"}}},{node:{fields:{slug:"/basics/guide-vue/"},frontmatter:{title:"Storybook for Vue",id:"guide-vue"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/exporting-storybook/"},frontmatter:{title:"Exporting Storybook as a Static App",id:"exporting-storybook"}}},{node:{fields:{slug:"/basics/faq/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/quick-start-guide/"},frontmatter:{title:"Quick Start Guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/guide-react/"},frontmatter:{title:"Storybook for React",id:"guide-react"}}},{node:{fields:{slug:"/basics/writing-stories/"},frontmatter:{title:"Writing Stories",id:"writing-stories"}}},{node:{fields:{slug:"/testing/css-style-testing/"},frontmatter:{title:"CSS/Style Testing",id:"css-style-testing"}}},{node:{fields:{slug:"/basics/slow-start-guide/"},frontmatter:{title:"Slow start guide",id:"slow-start-guide"}}},{node:{fields:{slug:"/testing/react-ui-testing/"},frontmatter:{title:"Introduction: React UI Testing",id:"react-ui-testing"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/testing/structural-testing/"},frontmatter:{title:"Structural Testing",id:"structural-testing"}}},{node:{fields:{slug:"/testing/interaction-testing/"},frontmatter:{title:"Interaction Testing",id:"interaction-testing"}}}]},markdownRemark:{html:'<h2 id="default-mode"><a href="#default-mode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Default mode</h2>\n<p>The default Webpack config of Storybook is balanced for a medium-size project (specially created with <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>) or a library. But if you already have your own Webpack setup, that’s not useable.</p>\n<p>That’s why we allow you to customize our Webpack setup by providing a <code>webpack.config.js</code> file exporting a <strong>webpack 2</strong> compatible config exported as a <strong>commonjs module</strong>.</p>\n<p>There are a few ways to do it:</p>\n<h2 id="extend-mode"><a href="#extend-mode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extend Mode</h2>\n<p>You’ll get <em>extend-mode</em> by returning an object.</p>\n<p>Let’s say you want to add <a href="http://sass-lang.com/">SASS</a> support to Storybook. This is how to do it.\nSimply add the following content to a file called <code>webpack.config.js</code> in your Storybook config directory (<code>.storybook</code> by default ).</p>\n<pre><code class="language-js">const path = require(\'path\');\n\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.scss$/,\n        loaders: ["style-loader", "css-loader", "sass-loader"],\n        include: path.resolve(__dirname, \'../\')\n      }\n    ]\n  }\n}\n</code></pre>\n<p>Since this config file stays in the Storybook directory, you need to set the include path as above. If the config directory stays in a different directory, you need to set the include path relative to that.</p>\n<p>You also need to install the loaders (style, css, and sass) used in above config manually.</p>\n<blockquote>\n<p>Once you create this <code>webpack.config.js</code> file, Storybook won’t load the <a href="/configurations/default-config/">default Webpack config</a> other than loading JS files with the Babel loader.</p>\n</blockquote>\n<h3 id="supported-webpack-options"><a href="#supported-webpack-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Supported Webpack Options</h3>\n<p>You can add any kind of Webpack configuration options with the above config, whether they are plugins, loaders, or aliases.\nBut you won’t be able to change the following config options:</p>\n<ul>\n<li>entry</li>\n<li>output</li>\n<li>js loader with babel</li>\n</ul>\n<p>For the advanced usage we strongly recommend <a href="#full-control-mode">full control mode</a>.</p>\n<h2 id="full-control-mode"><a href="#full-control-mode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Full Control Mode</h2>\n<p>Sometimes, you will want to have full control over the webpack configuration.\nMaybe you want to add different configurations for dev and production environments.\nThat’s where you can use our full control mode.</p>\n<p>To enable that, you need to export a <strong>function</strong> from the above <code>webpack.config.js</code> file, just like this:</p>\n<pre><code class="language-js">const path = require(\'path\');\n\n// Export a function. Accept the base config as the only param.\nmodule.exports = (storybookBaseConfig, configType) => {\n  // configType has a value of \'DEVELOPMENT\' or \'PRODUCTION\'\n  // You can change the configuration based on that.\n  // \'PRODUCTION\' is used when building the static version of storybook.\n\n  // Make whatever fine-grained changes you need\n  storybookBaseConfig.module.rules.push({\n    test: /\\.scss$/,\n    loaders: ["style-loader", "css-loader", "sass-loader"],\n    include: path.resolve(__dirname, \'../\')\n  });\n\n  // Return the altered config\n  return storybookBaseConfig;\n};\n</code></pre>\n<p>Storybook uses the config returned from the above function. So, try to edit the <code>storybookBaseConfig</code> with care. Make sure to preserve the following config options:</p>\n<ul>\n<li>entry</li>\n<li>output</li>\n<li>first loader in the module.loaders (Babel loader for JS)</li>\n<li>all existing plugins</li>\n</ul>\n<h2 id="full-control-mode--default"><a href="#full-control-mode--default" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Full control mode + default</h2>\n<p>You may want to keep Storybook’s <a href="/configurations/default-config">default config</a>, but just need to extend it.\nIf so, this is how you do it using the Full Control Mode.\nAdd following content to the <code>webpack.config.js</code> in your Storybook config directory.</p>\n<blockquote>\n<p>We plan to expose our default webpack-config as it’s own package in the future.</p>\n</blockquote>\n<pre><code class="language-js">const path = require(\'path\');\n\n// load the default config generator.\nconst genDefaultConfig = require(\'@storybook/react/dist/server/config/defaults/webpack.config.js\');\n\nmodule.exports = (baseConfig, env) => {\n  const config = genDefaultConfig(baseConfig, env);\n\n  // Extend it as you need.\n\n  // For example, add typescript loader:\n  config.module.rules.push({\n    test: /\\.(ts|tsx)$/,\n    include: path.resolve(__dirname, \'../src\'),\n    loader: require.resolve(\'ts-loader\')\n  });\n  config.resolve.extensions.push(\'.ts\', \'.tsx\');\n\n  return config;\n};\n</code></pre>\n<h2 id="using-your-existing-config"><a href="#using-your-existing-config" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Your Existing Config</h2>\n<p>You may have an existing Webpack config for your project. So, you may need to copy and paste some config items into Storybook’s custom Webpack config file.</p>\n<p>But you don’t need to. There are a few options:</p>\n<ul>\n<li>Simply import your main Webpack config into Storybook’s <code>webpack.config.js</code> and use the loaders and plugins used in that.</li>\n<li>Create a new file with common Webpack options and use it in both inside the main Webpack config and inside Storybook’s <code>webpack.config.js</code>.</li>\n</ul>',fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom Webpack Config",id:"custom-webpack-config"}}},pathContext:{slug:"/configurations/custom-webpack-config/"}}}});
//# sourceMappingURL=path---configurations-custom-webpack-config-cbf0a68133cb36978f58.js.map
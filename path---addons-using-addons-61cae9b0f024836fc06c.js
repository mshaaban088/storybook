webpackJsonp([89334391536415],{627:function(t,e){t.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/","/basics/quick-start-guide/","/basics/slow-start-guide/","/basics/guide-react/","/basics/guide-vue/","/basics/guide-angular/","/basics/writing-stories/","/basics/exporting-storybook/","/basics/faq/","/basics/community/"],configurations:["/configurations/default-config/","/configurations/custom-webpack-config/","/configurations/custom-babel-config/","/configurations/add-custom-head-tags/","/configurations/serving-static-files/","/configurations/env-vars/","/configurations/cli-options/"],testing:["/testing/react-ui-testing/","/testing/structural-testing/","/testing/interaction-testing/","/testing/css-style-testing/","/testing/manual-testing/"],addons:["/addons/introduction/","/addons/using-addons/","/addons/addon-gallery/","/addons/writing-addons/","/addons/api/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/addon-gallery/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/api/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/using-addons/"},frontmatter:{title:"Using Addons",id:"using-addons"}}},{node:{fields:{slug:"/addons/writing-addons/"},frontmatter:{title:"Writing Addons",id:"writing-addons"}}},{node:{fields:{slug:"/addons/introduction/"},frontmatter:{title:"Intro to Addons",id:"introduction"}}},{node:{fields:{slug:"/configurations/cli-options/"},frontmatter:{title:"CLI Options",id:"cli-options"}}},{node:{fields:{slug:"/configurations/add-custom-head-tags/"},frontmatter:{title:"Add Custom Head Tags",id:"add-custom-head-tags"}}},{node:{fields:{slug:"/configurations/custom-babel-config/"},frontmatter:{title:"Custom Babel Config",id:"custom-babel-config"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom Webpack Config",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/default-config/"},frontmatter:{title:"Default Config",id:"default-config"}}},{node:{fields:{slug:"/configurations/env-vars/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/community/"},frontmatter:{title:"Community",id:"community"}}},{node:{fields:{slug:"/basics/guide-angular/"},frontmatter:{title:"Storybook for Angular",id:"guide-angular"}}},{node:{fields:{slug:"/configurations/serving-static-files/"},frontmatter:{title:"Serving Static Files",id:"serving-static-files"}}},{node:{fields:{slug:"/basics/guide-vue/"},frontmatter:{title:"Storybook for Vue",id:"guide-vue"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/exporting-storybook/"},frontmatter:{title:"Exporting Storybook as a Static App",id:"exporting-storybook"}}},{node:{fields:{slug:"/basics/faq/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/quick-start-guide/"},frontmatter:{title:"Quick Start Guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/guide-react/"},frontmatter:{title:"Storybook for React",id:"guide-react"}}},{node:{fields:{slug:"/basics/writing-stories/"},frontmatter:{title:"Writing Stories",id:"writing-stories"}}},{node:{fields:{slug:"/testing/css-style-testing/"},frontmatter:{title:"CSS/Style Testing",id:"css-style-testing"}}},{node:{fields:{slug:"/basics/slow-start-guide/"},frontmatter:{title:"Slow start guide",id:"slow-start-guide"}}},{node:{fields:{slug:"/testing/react-ui-testing/"},frontmatter:{title:"Introduction: React UI Testing",id:"react-ui-testing"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/testing/structural-testing/"},frontmatter:{title:"Structural Testing",id:"structural-testing"}}},{node:{fields:{slug:"/testing/interaction-testing/"},frontmatter:{title:"Interaction Testing",id:"interaction-testing"}}}]},markdownRemark:{html:'<p>Storybook comes with a variety of “core” addons developed and maintained alongside Storybook. Most examples in this site use <a href="https://github.com/storybooks/storybook/tree/master/addons/actions">actions</a> and <a href="https://github.com/storybooks/storybook/tree/master/addons/links">links</a>. But it’s easy to use any third party addons distributed via NPM.</p>\n<p>Here’s how to do it.</p>\n<p>We are going to use an addon called <a href="https://github.com/storybooks/storybook/tree/master/addons/notes">Notes</a>. Basically, it allows you to write notes for your stories.</p>\n<p>First, we need to install the addons:</p>\n<pre><code class="language-sh">npm i --save-dev @storybook-addons @storybook/addon-actions @storybook/addon-links @storybook/addon-notes\n</code></pre>\n<p>Then, we need to create a file called <code>addons.js</code> inside the storybook config directory and add the following content:</p>\n<pre><code class="language-js">import \'@storybook/addon-actions/register\';\nimport \'@storybook/addon-links/register\';\nimport \'@storybook/addon-notes/register\';\n</code></pre>\n<p>This will register all the addons and you’ll be able to see the actions and notes panels (in that order) when you are viewing the story. (Links do not register a tab—check individual addon docs to see which Storybook features they use!)</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/stories-without-notes-d23cb039b46a463fc53ee2183d9d7d99-0c959.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 60.149130074565036%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAA90lEQVQoz83TzUrDQBAH8BwKgk9QlEJ9CY/6QHmCPaWvknPpJYfkID34DF7UhphdcJvdDSSu+U7IuFloUApijQcHfoeBmT+zhzU2683548M9YhFD9JUi/II1wQVKk1Tb0z0ihIw9Z3ycGwx7JCRoe7edGytrtRRCQBRFWhzHIBMGbyyAXL5DURTH8mN5loPjODeGZVlXw1DTNFpd19B1HfymPM+71YGUUpBSjhdMDkyTBDjnkGUZlGU5PXAI+ez/B1ZV9UXbtj/y7YV935/Mdd2/fbIONE1zEQTBk+/7u4MwDHcY45Oon/Rs2/a1oWqmXCiLiS6Vsw/pTyOXJtwxnQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Stories without notes"\n        title=""\n        src="/static/stories-without-notes-d23cb039b46a463fc53ee2183d9d7d99-44d6a.png"\n        srcset="/static/stories-without-notes-d23cb039b46a463fc53ee2183d9d7d99-f4799.png 173w,\n/static/stories-without-notes-d23cb039b46a463fc53ee2183d9d7d99-b3b1d.png 345w,\n/static/stories-without-notes-d23cb039b46a463fc53ee2183d9d7d99-44d6a.png 690w,\n/static/stories-without-notes-d23cb039b46a463fc53ee2183d9d7d99-bc0f7.png 1035w,\n/static/stories-without-notes-d23cb039b46a463fc53ee2183d9d7d99-b50e5.png 1380w,\n/static/stories-without-notes-d23cb039b46a463fc53ee2183d9d7d99-0ed32.png 2070w,\n/static/stories-without-notes-d23cb039b46a463fc53ee2183d9d7d99-0c959.png 2414w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Now when you are writing a story it like this and add some notes:</p>\n<pre><code class="language-js">import { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\nimport { WithNotes } from \'@storybook/addon-notes\';\n\nimport Button from \'./Button\';\n\nstoriesOf(\'Button\', module)\n  .add(\'with some emoji\', () => (\n    &#x3C;WithNotes notes={\'Here we use some emoji as the Button text. Doesn&#x26;apos;t it look nice?\'}>\n      &#x3C;Button onClick={action(\'clicked\')}>😀 😎 👍 💯&#x3C;/Button>\n    &#x3C;/WithNotes>\n  ));\n</code></pre>\n<p>Then you’ll be able to see those notes when you are viewing the story.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-0c959.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 60.149130074565036%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABB0lEQVQoz83Tz0qEQBzAcQ9B0BNEsVAv0bEeyCeYkz6L19iTB4XYQ8/QpVoRZyBtHGWn1fE//poZcIm2hVovDXwQGf0Ojmos75dnz0+PiL5TFL/FCEdYYylDfMO1JE4QIWR3ntJ0d52i7iOYoNXD6tywbfsqyzKglIKMQp7nsN1Q4DQEsS2gqqp9Yp8oBbiue2tYlnVd1zV0Xae1bQvDMMAxw/f9Ox1MkhiKogAVVmYHPzgHxhgIIaBpmvlBFfnq/wWnvZt8X6Dv+1/xPO/noPo0yrLUL0odJ2puHMeDDgaPfWQdNE1zEYbhSxAE60kURWuM8Z/IP+nVcZwbQ44T6UJazHQpnX4C8l0jNfN/oUwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Stories with notes"\n        title=""\n        src="/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-44d6a.png"\n        srcset="/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-f4799.png 173w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-b3b1d.png 345w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-44d6a.png 690w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-bc0f7.png 1035w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-b50e5.png 1380w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-0ed32.png 2070w,\n/static/stories-with-notes-eb88eaa9da1abd36559d46ddbe1723da-0c959.png 2414w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Just like this, you can install any other addon and use it. Have a look at our <a href="/addons/addon-gallery">addon gallery</a> to discover more addons.</p>',fields:{slug:"/addons/using-addons/"},frontmatter:{title:"Using Addons",id:"using-addons"}}},pathContext:{slug:"/addons/using-addons/"}}}});
//# sourceMappingURL=path---addons-using-addons-61cae9b0f024836fc06c.js.map
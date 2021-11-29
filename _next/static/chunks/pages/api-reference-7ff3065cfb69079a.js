(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{8011:function(t,e,n){"use strict";n.r(e),n.d(e,{meta:function(){return a},default:function(){return c}});var s=n(159),o=n(1164),r=(n(7294),n(3905)),i=["components"],a={name:"API Reference",tableOfContents:{depth:0,children:[{depth:1,slug:"#api-reference",title:"API Reference",children:[{depth:2,slug:"#dts-watch",title:"dts watch"},{depth:2,slug:"#dts-build",title:"dts build"},{depth:2,slug:"#dts-test",title:"dts test"},{depth:2,slug:"#dts-lint",title:"dts lint"}]}]}},l={meta:a};function c(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,s.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-reference"},"API Reference"),(0,r.kt)("h2",{id:"dts-watch"},"dts watch"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," Rebuilds on any change")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'Usage\n  $ dts watch [options]\n\nOptions\n  -i, --entry           Entry module(s)\n  --target              Specify your target environment  (default web)\n  --name                Specify name exposed in UMD builds\n  --format              Specify module format(s)  (default cjs,esm)\n  --tsconfig            Specify your custom tsconfig path (default <root-folder>/tsconfig.json)\n  --verbose             Keep outdated console output in watch mode instead of clearing the screen\n  --onFirstSuccess      Run a command on the first successful build\n  --onSuccess           Run a command on a successful build\n  --onFailure           Run a command on a failed build\n  --noClean             Don\'t clean the dist folder\n  --transpileOnly       Skip type checking\n  -h, --help            Displays this message\n\nExamples\n  $ dts watch --entry src/foo.tsx\n  $ dts watch --target node\n  $ dts watch --name Foo\n  $ dts watch --format cjs,esm,umd\n  $ dts watch --tsconfig ./tsconfig.foo.json\n  $ dts watch --noClean\n  $ dts watch --onFirstSuccess "echo The first successful build!"\n  $ dts watch --onSuccess "echo Successful build!"\n  $ dts watch --onFailure "echo The build failed!"\n  $ dts watch --transpileOnly\n')),(0,r.kt)("h2",{id:"dts-build"},"dts build"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"  Build your project once and exit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Usage\n  $ dts build [options]\n\nOptions\n  -i, --entry           Entry module(s)\n  --target              Specify your target environment  (default web)\n  --name                Specify name exposed in UMD builds\n  --format              Specify module format(s)  (default cjs,esm)\n  --extractErrors       Opt-in to extracting invariant error codes\n  --tsconfig            Specify your custom tsconfig path (default <root-folder>/tsconfig.json)\n  --transpileOnly       Skip type checking\n  -h, --help            Displays this message\n\nExamples\n  $ dts build --entry src/foo.tsx\n  $ dts build --target node\n  $ dts build --name Foo\n  $ dts build --format cjs,esm,umd\n  $ dts build --extractErrors\n  $ dts build --tsconfig ./tsconfig.foo.json\n  $ dts build --transpileOnly\n")),(0,r.kt)("h2",{id:"dts-test"},"dts test"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This runs Jest v24.x, forwarding all CLI flags to it. See ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io"},"https://jestjs.io")," for options. For example, if you would like to run in watch mode, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"dts test --watch"),". So you could set up your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," like:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "dts test",\n    "test:watch": "dts test --watch",\n    "test:coverage": "dts test --coverage"\n  }\n}\n')),(0,r.kt)("h2",{id:"dts-lint"},"dts lint"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," Run eslint with Prettier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Usage\n  $ dts lint [options]\n\nOptions\n  --fix               Fixes fixable errors and warnings\n  --ignore-pattern    Ignore a pattern\n  --write-file        Write the config file locally\n  --report-file       Write JSON report to file locally\n  -h, --help          Displays this message\n\nExamples\n  $ dts lint src\n  $ dts lint src --fix\n  $ dts lint src test --ignore-pattern test/foo.ts\n  $ dts lint src --write-file\n  $ dts lint src --report-file report.json\n")))}c.isMDXComponent=!0;var u={editThisPagePath:"docs/pages/api-reference.mdx"};for(var d in u)window[d]=u[d]},2504:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-reference",function(){return n(8011)}])},159:function(t,e,n){"use strict";function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return s}})},1164:function(t,e,n){"use strict";function s(t,e){if(null==t)return{};var n,s,o=function(t,e){if(null==t)return{};var n,s,o={},r=Object.keys(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,{Z:function(){return s}})}},function(t){t.O(0,[774,888,179],(function(){return e=2504,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
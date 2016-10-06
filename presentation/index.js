// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  distributed: require("../assets/distributed-vs-centralized.svg"),
  branch: require("../assets/branch-2.svg"),
  flow: require("../assets/git-flow.svg"),
  hockeyStick: require("../assets/hockey-stick.png"),
  signups: require("../assets/signups.png"),
  userStats: require("../assets/user-stats.png"),
  openUsers: require("../assets/open-contributors.png"),
  openOrgs: require("../assets/open-orgs.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff0000",
  black: "#0C1A22"
}, {
  primary: 'Roboto Mono',
  secondary: '-apple-system'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500}  notes="denoting software for which the original source code is made freely available and may be redistributed and modified.">
          <Slide transition={["fade"]} bgColor="black">
            <Heading size={1} fit lineHeight={1} textColor="white">
              How Open Source Software is Eating the World
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="white" notes="redistributed and modified">
            <Heading size={6} textColor="black" textFont="primary">
              Comparing Workflows
            </Heading>
            <Image width="100%" src={images.distributed} />
          </Slide>
          <Slide transition={["fade"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={6} textColor="black" textFont="primary">
              Versioning & Collaboration
            </Heading>
            <Image width="80%" src={images.branch}/>
          </Slide>
          <Slide transition={["fade"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={6} textColor="black" textFont="primary">
              Git Tree
            </Heading>
            <Image width="75%" src={images.flow} />
          </Slide>
          <Slide transition={["fade"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image width="100%" src={images.userStats}/>
          </Slide>
          <Slide transition={["fade"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image width="700px" src={images.hockeyStick}/>
          </Slide>
          <Slide transition={["fade"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image width="100%" src={images.signups}/>
          </Slide>
          <Slide transition={["fade"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image width="40%" src={images.openOrgs}/>
            <Image width="40%" src={images.openUsers}/>
          </Slide>
          <Slide transition={["fade"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={6} textColor="white" textFont="primary">
              Why is Open Source better?
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Quality</ListItem></Appear>
              <Appear><ListItem>Freedom</ListItem></Appear>
              <Appear><ListItem>Auditability</ListItem></Appear>
              <Appear><ListItem>Cost</ListItem></Appear>
              <Appear><ListItem>Community</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={6} fit textColor="white" textFont="primary">
              Why should you open source?
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Reciprocity</ListItem></Appear>
              <Appear><ListItem>Recruiting</ListItem></Appear>
              <Appear><ListItem>Community</ListItem></Appear>
              <Appear><ListItem>Impact</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <BlockQuote size={4} textColor="white">let result = "code wins arguments"</BlockQuote>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

// <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
//             <Appear fid="1">
//               <Heading size={1} caps fit textColor="primary">
//                 Full Width
//               </Heading>
//             </Appear>
//             <Appear fid="2">
//               <Heading size={1} caps fit textColor="tertiary">
//                 Adjustable Darkness
//               </Heading>
//             </Appear>
//             <Appear fid="3">
//               <Heading size={1} caps fit textColor="primary">
//                 Background Imagery
//               </Heading>
//             </Appear>
//           </Slide>
//           <Slide transition={["zoom", "fade"]} bgColor="primary">
//             <Heading caps fit>Flexible Layouts</Heading>
//             <Layout>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Left
//                 </Heading>
//               </Fill>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Right
//                 </Heading>
//               </Fill>
//             </Layout>
//           </Slide>
//           <Slide transition={["slide"]} bgColor="black">
//             <BlockQuote>
//               <Quote>Wonderfully formatted quotes</Quote>
//               <Cite>Ken Wheeler</Cite>
//             </BlockQuote>
//           </Slide>
//           <Slide transition={["spin", "zoom"]} bgColor="tertiary">
//             <Heading caps fit size={1} textColor="primary">
//               Inline Markdown
//             </Heading>
//             <Markdown>
//               {`
// ![Markdown Logo](${images.markdown.replace("/", "")})

// You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
// * Lists too!
// * With ~~strikethrough~~ and _italic_
// * And lets not forget **bold**
//               `}
//             </Markdown>
//           </Slide>
//           <Slide transition={["slide", "spin"]} bgColor="primary">
//             <Heading caps fit size={1} textColor="tertiary">
//               Smooth
//             </Heading>
//             <Heading caps fit size={1} textColor="secondary">
//               Combinable Transitions
//             </Heading>
//           </Slide>
//           <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//             <List>
//               <Appear><ListItem>Inline style based theme system</ListItem></Appear>
//               <Appear><ListItem>Autofit text</ListItem></Appear>
//               <Appear><ListItem>Flexbox layout system</ListItem></Appear>
//               <Appear><ListItem>React-Router navigation</ListItem></Appear>
//               <Appear><ListItem>PDF export</ListItem></Appear>
//               <Appear><ListItem>And...</ListItem></Appear>
//             </List>
//           </Slide>
//           <Slide transition={["slide"]} bgColor="primary">
//             <Heading size={1} caps fit textColor="tertiary">
//               Your presentations are interactive
//             </Heading>
//             <Interactive/>
//           </Slide>
//           <Slide transition={["spin", "slide"]} bgColor="tertiary">
//             <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
//               Made with love in Seattle by
//             </Heading>
//             <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
//           </Slide>

import React from 'react';

import { Layout, Seo, Badge } from '../components';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Róbert Darida</h1>
    <hr />
    <h2>Hi there 👋</h2>
    <hr />
    <h3>👨🏻‍💻 About Me</h3>
    <p>
      💡 I'm a Software Engineer based in Budapest, Hungary.
      <br />
      🏢 I'm currently working at Cursor Insight.
      <br />
      🎓 I graduated with BSc in Computer Science from University of Szeged.
      <br />
      📫 How to reach me:
      <a href="https://www.linkedin.com/in/rdarida">
        <Badge logo="LinkedIn" color="blue" />
      </a>
      <a href="https://github.com/rdarida">
        <Badge text="My GitHub Profile" logo="github" />
      </a>
    </p>

    <h3>✍🏻 My Articles</h3>
    <p>
      <a
        href="https://rdarida.medium.com/electron-angular-live-reload-13ebc9808bb5"
        target="_blank"
      >
        Electron & Angular: Live Reload
      </a>
      <br />
      <a
        href="https://rdarida.medium.com/electron-angular-the-boilerplate-a8db7f411416"
        target="_blank"
      >
        Electron & Angular: The Boilerplate
      </a>
      <br />
      <a
        href="https://rdarida.medium.com/building-a-nodejs-project-and-deploying-it-into-a-digitalocean-droplet-with-jenkins-6b46fa3054ef"
        target="_blank"
      >
        Building a NodeJS project and deploying it into a DigitalOcean Droplet
        with Jenkins
      </a>
    </p>

    <h3>🛠 Tech Stack</h3>
    <p>
      <Badge logo="HTML5" />
      <Badge logo="CSS3" logoColor="1572B6" />
      <Badge logo="JavaScript" />
      <Badge logo="TypeScript" />
      <Badge logo="Node.js" />
      <Badge logo="WebGL" logoColor="990000" />
      <Badge logo="Java" />
      <br />

      <Badge logo="Bootstrap" logoColor="563D7C" />
      <Badge logo="Material-UI" logoColor="0081CB" />
      <Badge logo="Redux" logoColor="764ABC" />
      <Badge logo="React" />
      <Badge logo="Gatsby" logoColor="663399" />
      <Badge logo="Angular" logoColor="DD1B16" />
      <Badge logo="Electron" logoColor="61DAFB" />
      <Badge logo="Firebase" />
      <Badge
        text="Pixi.js"
        logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA1IDc5LjE2NDU5MCwgMjAyMC8xMi8wOS0xMTo1Nzo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QkIyNDMzNjYwMjExRUJBQkJDOENDMTQyMkQ4NzJFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QkIyNDM0NjYwMjExRUJBQkJDOENDMTQyMkQ4NzJFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZCQjI0MzE2NjAyMTFFQkFCQkM4Q0MxNDIyRDg3MkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZCQjI0MzI2NjAyMTFFQkFCQkM4Q0MxNDIyRDg3MkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WNtgSAAADEklEQVR42sSXW2yMQRTH7ba07rFSlYZ2tdqupBoSEnELcU0kIvHgTSUNER6ouDwgCPEgrg+CiAcJ3kiExCUSpFaoiqSiVEhpPVANSqXrstbvyNlkbXa+nW+/bTrJf898O985858zZ86czxeLxfr1ZfP1htEPxbXjEAVgMJAVdoPOwrYzb1wRwJCM7wVjQY/+3R/8BDsx2JnwbiFiBVgAQkCeBymB76ADvAYPwXXwGP1fuRYL2qqTJrdjsiqdfAeiDgQMNoYrysFisAtsBof8TjPDUNi3phj6Dd7q5DfUSwGXO/VefvwZbvMPyPUw+XH6CzPQ/wouSyc3QwItTL4Guc7hnY+6yjwNyBEJY2EW0O3FA+LubYYx2bLloIxJqpETgJyK6aoj4/etjyErbUFUWBLrApNSHbcEe/niFd7p8rIFpvbSaXIN7AgiEn/2Z5lASJOQdcs2gaHgGiSm9jaBV6DZMFYJGiBxGkzzfBcYgvAp2A0uWpC9B86BC+z/t2x5oAJjl5CbLN6dCU6CZyxmbbYI5GAsAIkj9A9a6siFdgI9iZFhXgn80ctFjtUWxFKHmEhuchmFIZHn9RREE872FcREIC5usNCt0m3JOAilHihn4jaDzizEKrAyTbKr9Fu6O9Xp8Tlku3pQq16542B7mQ2BfAOpaDpFSLwAc+k2GV6p9qdxf5FGb3KTq/SLi3g5ZaqU0nlA2Oek4ha/zy1bgeH/Dp/D6kchGg0eOACughpwGDLNDnZCmg1Hphhe7+OFUjr7tEhoT8jnG0CRwe5ssAhs1+d6cFeynVa/ES1aZoCNhjiSNkYIzKNzy4U721lxMXqP6E/xkEeOYqdOYmC0S8UazWJeJm/UsvxfJix1obgH1reRqz1MLjfoHOxE4yVZlYWSBNl+lM7rs5CQknwJCFpO/EDSLzbO/pfRcOdk5HwNvBIwQD+nPmtQhcHNOOOkCB+CkOpHbIxXMgN1OKIV8HM5Beg/MRYkGCpT5RKt4yXTfZL6H8Umi/siqMc1mPA9KN+SUqC2YuOdsSLq68/zvwIMALY19MhCHKvgAAAAAElFTkSuQmCC"
      />
      <br />

      <Badge logo="Git" />
      <Badge logo="GitHub" />
      <Badge logo="GitHub-Actions" />
      <Badge logo="Bitbucket" logoColor="2684FF" />
      <Badge logo="SonarCloud" />
      <Badge logo="Jira" logoColor="2684FF" />
      <br />

      <Badge logo="Visual-Studio-Code" logoColor="007ACC" />
      <Badge logo="Eclipse-IDE" />
      <Badge logo="Adobe-Photoshop" />
      <Badge
        text="Adobe Animate"
        logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA1IDc5LjE2NDU5MCwgMjAyMC8xMi8wOS0xMTo1Nzo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTIzMUI0RjY2MDYxMUVCQkY1N0JEQUQ0OTE3MkJGMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTIzMUI1MDY2MDYxMUVCQkY1N0JEQUQ0OTE3MkJGMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5MjMxQjRENjYwNjExRUJCRjU3QkRBRDQ5MTcyQkYyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc5MjMxQjRFNjYwNjExRUJCRjU3QkRBRDQ5MTcyQkYyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZIWNTAAABIxJREFUeNrMWFtsVFUUXTOltJ3SUkATX4AGBcG2YK22KEhrBEXQoEZjoiEmYtQYE3804cNPP9SoH8b4IcbEgFHxw1cMaKkfPE1MWxFfqJEQGwXsmGqftNNxre57vffMdMq0zTh3JyvtPWdmzrr7sfa+N5ZuWYwMu454iGgm5hBjKLzFiGGii3iL2OtshkhWEc8R24hSFM/SxAfEE0S3FuLehjz2MfFYkQn6Xr2T+IJYHCYpD65DtOwK4nWRFsnVxIOIpq0n7hHJB4gEomv3+Z6Msq0UyfkRJ1klkrMiTrIkf4Jpytdgv/0NW0UlNSJeUJb5kUyz6ZSWAQ8/DdScB6RGSawE6P8bePNlku+z66KSTKWABTXAlq1AZZW713UYaP+E+lBZMJL5xeks22pdYzZBWctmr5MVO9zS/JZNwfXIWYZ/tv3f1AJcuBDoOc1fy+ioY0yToYHgurzCup7WtBeL2frscv5e6QxIjo4AFy0CGtZ4BzP0+z4ENtxtBVOzAGhcC3y0yyWpz1XPA1o3Gxnd6OE2+z3d8NJakmYP6T4BHODQc/IXK8JpkRwe4vDGtl5dY9e9fwG73+AaPTj/fFtrvR349F0v7J53Rkdt/5lXKCJeUbVxuLlsGbBkuXvGtqeA51mUe3ZPSDR+TtmRd+QN33742orlu85greF6YOESpsFIKEVilhbyqG83b8kmKEtwCNv+ErDiaub/0BRJKjSLeHh9U7B2pJ05NQgcanO1cvVNVmCZOZkey47Mj0eBE8fdgitjXm68173RvEjq0GYeXpEISHcesirvOOgWhbytg9KTVPrvJ4FH7+DcfyvHmlZg12vu/tI6K6KM34hPGmodGg61Qnysw3Tze076XUeCvdpGC+XIcG6Sv9J7R7+0FFIavMdxcaAv2J9Tzb1ZWZKWu3CUT5evAK5qcInf/7iRV9h8CfE77NpbgG87zBu5urD29D1JjiKhQlROTksnFeob1ruysrLJkMtu3AjsfNVyMS/9jf0nBlPvOEp25d2626Y48FP7lq/KLqBzPtJMh6QOURIvq3fDP/CP5VAYWnfa5CYbQAreFiUDyq+wvbjdOkN5wpWTej6mP7sjWFOK7HgB6Ost4IChfFJ3WbMhWEueAfaTYA//nuoOkDxtejmueZ5dfCmwqtluoGAkpfiSE7Uv36SJPadsQFAh+VCl9nGmPPh5dsjT6QJ7MjzxyA58lvtQkd2/111TA7jgEi83YzMmqdcsvylIDskrWTBz59n/grRveNB7TJ9A9DUN1V5Dz5bZtaRF31GHUuh1I/rMmT+sJWqK979Xd60picQ9+Sfw07HME5LZJP3qTqXcvjrZc4wOVA6GvT0+O8L6/HgHIUq8FAl3FO37/V3TUnYjSE5c3fLIlOIRC0hlWkVigvdRyL6ZGT8+FNni/9P7x5nYmEj2Rpxkv0h2RpzkcZF8W+NshEm+L5J7YK9/o2gUW+z0q/tJuTViBDkN4xFiwCfZ7b1VbY8IwW/0bEl85bdFZ8An7iK26qlFUlvwdyjB5KvHxJ+JdxRiedDf/FeAAQBysWqjrerSAwAAAABJRU5ErkJggg=="
      />
    </p>
  </Layout>
);

export default IndexPage;

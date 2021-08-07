import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
// next.js는 mark-up 구조를 건너뛰고 작업을 하기때문에 커스터마이징 하기위해서 필요함.
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
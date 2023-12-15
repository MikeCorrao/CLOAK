import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

import { Component } from "react"
import Head from "./header"

export default class extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="description" content="Cloak is an interdiscplinary publishing project focused on visibility and concealment." />
        </Head>
        <div>Page Content</div>
      </>
    )
  }
}
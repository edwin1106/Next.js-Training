import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import MainHeader from "./main-header";

const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

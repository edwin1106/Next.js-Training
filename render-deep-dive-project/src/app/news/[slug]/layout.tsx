import { ReactNode } from 'react';

interface NewsDetailLayout {
  children: ReactNode;
  modal: ReactNode;
}
const NewsDetailLayout = ({ children, modal }: NewsDetailLayout) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};
export default NewsDetailLayout;

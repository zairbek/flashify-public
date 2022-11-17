import React from 'react';
import {GetServerSidePropsContext, NextPage} from "next";

import {NextPageProps} from "../../index";
import {isMobile} from "../../../libs/uaParser";
import MainLayout from "../../../components/layouts/MainLayout/MainLayout";
import BreadCrumbs from "../../../components/Elements/BreadCrumbs/BreadCrumbs";

import datas from '../../../mocks/HorizontalCardData.json';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import PageHeader from "../../../components/Elements/PageHeader/PageHeader";
import {Section} from "../../../components/shared/Section";
import ProductInfo from "../../../components/features/productPage/productIndex/ProductInfo/ProductInfo";

const ProductIndex: NextPage<NextPageProps> = ({
  isMobile
}) => {
  const data = datas[0]

  return (
    <MainLayout isMobile={isMobile} title={data.title} description={data.description} showBackButton>
      <Section className='my-5 px-2' isMobile={isMobile}>
        <BreadCrumbs/>
        <PageHeader/>
      </Section>


      <Section className='px-2 pb-16' isMobile={isMobile}>
        <ProductInfo isMobile={isMobile} product={data}/>
      </Section>
    </MainLayout>
  );
};


export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      isMobile: isMobile(ctx.req),
    }
  }
}

export default ProductIndex;

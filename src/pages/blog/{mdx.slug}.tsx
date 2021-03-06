import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";

const BlogPost = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.name}>
      <Title>
        <h2>{data.mdx.frontmatter.name}</h2>
        <p>작성된 날짜 : {data.mdx.frontmatter.datePublished}</p>
      </Title>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        author
        datePublished(formatString: "YYYY.MM.DD")
      }
      body
      parent {
        ... on File {
          id
          name
          modifiedTime
        }
      }
    }
  }
`;

export default BlogPost;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

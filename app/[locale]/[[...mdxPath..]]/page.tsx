/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components"

export const generateStaticParams = generateStaticParamsFor(
  "mdxPath",
  "locale",
);



const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: any) {
  const { locale, mdxPath } = await props.params;
  const result = await importPage(mdxPath, locale);
  const { default: MDXContent, toc, metadata, sourceCode } = result;
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={props.params} />
    </Wrapper>
  );
}
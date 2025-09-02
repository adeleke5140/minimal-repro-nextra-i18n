import { Layout } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';
import React from 'react'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap('en');

  return (
    <html lang="en">
      <body>
        <Layout
          pageMap={pageMap}
          i18n={[
            { locale: 'en', name: 'English' },
            { locale: 'ja', name: '日本語' }
          ]}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
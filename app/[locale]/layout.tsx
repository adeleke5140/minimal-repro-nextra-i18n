import { Layout } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';
import React from 'react'
import "../global.css"

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMap = await getPageMap(`/${locale || "en"}`);

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
import nextra from 'nextra'


const withNextra = nextra({
    unstable_shouldAddLocaleToLinks: true
});

export default withNextra({
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en'
  }
});
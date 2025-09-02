## Nextra i18n Minimal Repro

This PR shows that `i18n` doesn't work with the Pages File convention outlined [here](https://the-guild.dev/blog/nextra-4#using-page-file-convention).

There are two branches:
- **Main** branch - pages pattern.
- **Content** branch - catch all pattern

There are also two notable issues

1. Lang attribute error
2. undefined Object

## Lang attribute error

When you call the `pageMap` function in your `layout` without a parameter, you get the following error:
<img width="2088" height="1066" alt="CleanShot 2025-09-02 at 13 18 46@2x" src="https://github.com/user-attachments/assets/c4558de5-2773-4c17-86c7-8a925bca2907" />

```
Runtime TypeError
Server


{(intermediate value)(intermediate value)}[lang] is not a function

app/layout.tsx (10:35) @ RootLayout


   8 |   children: React.ReactNode;
   9 | }) {
> 10 |   const pageMap = await getPageMap();
     |                                   ^
  11 |
  12 |   return (
  13 |     <html lang="en">
```

Adding the locale attribute to the function then leads to the second error:

<img width="2174" height="1150" alt="CleanShot 2025-09-02 at 13 21 10@2x" src="https://github.com/user-attachments/assets/e0cf3fbc-27c8-4195-8aff-8840afef43fb" />

```
Runtime TypeError


Cannot use 'in' operator to search for 'data' in undefined

app/layout.tsx (15:9) @ RootLayout


  13 |     <html lang="en">
  14 |       <body>
> 15 |         <Layout
     |         ^
  16 |           pageMap={pageMap}
  17 |           i18n={[
  18 |             { locale: 'en', name: 'English' },
```

which seems to show that we are trying to access an undefined object at runtime. 

This shows that Nextra 4 isn't fully compatible with the `i18n` setup outline in the docs [here](https://nextra.site/docs/guide/i18n)

The only way to get `i18n` to work is to use the catch-all convention mentioned [here](https://the-guild.dev/blog/nextra-4#using-content-directory-convention) but once your markdown gets to hundreds of pages,
you start to get really slow compile times, fast fresh times and route loading times.


<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sitemap - Progineer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            max-width: 75em;
            margin: 0 auto;
            padding: 2em;
          }
          h1 {
            color: #1a365d;
            font-size: 2em;
            margin-bottom: 1em;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 1em 0;
          }
          th, td {
            padding: 0.75em;
            text-align: left;
            border-bottom: 1px solid #e2e8f0;
          }
          th {
            background-color: #f7fafc;
            font-weight: 600;
          }
          tr:hover {
            background-color: #f8fafc;
          }
          a {
            color: #2b6cb0;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority {
            color: #718096;
          }
          .changefreq {
            color: #4a5568;
          }
          .lastmod {
            color: #718096;
          }
        </style>
      </head>
      <body>
        <h1>Sitemap Progineer</h1>
        <table>
          <tr>
            <th>URL</th>
            <th>Priorité</th>
            <th>Fréquence de changement</th>
            <th>Dernière modification</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <a href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
              <td class="priority">
                <xsl:value-of select="sitemap:priority"/>
              </td>
              <td class="changefreq">
                <xsl:value-of select="sitemap:changefreq"/>
              </td>
              <td class="lastmod">
                <xsl:value-of select="sitemap:lastmod"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

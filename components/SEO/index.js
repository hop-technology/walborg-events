import React from 'react'
import Head from 'next/head'
import metaTags from './socialTags'

const SEO = (props) => {
  const { title, description, image } = props

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={image} />
      {metaTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />
      })}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'schemaType',
            name: title,
            description: description,
            url: metaTags.url,
          }),
        }}
      />
    </Head>
  )
}

export default SEO

import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import settings from '../../settings'
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

SEO.defaultProps = {
  url: '/',
  openGraphType: 'website',
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
  image:
    settings &&
    settings.meta &&
    settings.meta.social &&
    settings.meta.social.graphic,
}

SEO.propTypes = {
  url: PropTypes.string,
  openGraphType: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default SEO

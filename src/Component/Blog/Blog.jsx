import React, { useState } from 'react'
import './Blog'
import BlogItem from '../BlogItem/BlogItem'
import { Container } from 'react-bootstrap'
import { blog } from '../../data.js'
import Title from '../Title/Title'

function Blog() {
  const [blogText, setBlogText] = useState(blog)

  return (
    <section className="blog">
      <Title
        title=" مجله حافظ
  "
      />
      <Container>
        {blogText.map((text) => (
          <BlogItem
            key={text.id}
            disc={text.discription}
            title={text.title}
            src={text.src}
            side={text.side}
          />
        ))}
      </Container>
    </section>
  )
}

export default Blog

---
title: Crossbay
slug: crossbay
author: tevdevelops
tags:
  - Vue JS
  - Gridsome
  - K&P
excerpt: Crossbay was my first project working with Vue JS. I quickly learned Vue and Gridsome to create this WordPress Static Site at King & Partners.
liveSite: https://www.auroraanguilla.com/
featuredImage: portfolio/crossbay/featured.jpg
---

# Crossbay

<video class="portfolio__video" poster="crossbay/crossbay-site-scroll.jpg" muted playsinline loop autoplay>
  <source src="crossbay/crossbay-site-scroll.webm" type="video/mp4">
</video>

Live Site: https://crossbay.thisismark.com/

## Technologies Used
- [Vue JS](https://vuejs.org/)
- [Gridsome](https://gridsome.org/)
- [WordPress](https://wordpress.org/)
- [Elasticsearch](https://www.elastic.co/)
- ElasticPress — *Custom K&P plugin that takes ACF fields data from WordPress and serializies it into Elasticsearch index data to be used for our headless stack*

This is currently how our newest projects are being built at [King & Partners](https://www.kingandpartners.com/work/aurora-anguilla/), and this was my first project that I got to use it from start to end. At this point, I have become a bit of a [Evan You](https://twitter.com/youyuxi) fan boy. I enjoy the simplicity of creating Vue components and how flexible it is. 

Thankfully, our CTO has created a plugin, ElasticPress, that helps deal with the WordPress API side of things. I am able to create ACF fields in JSON, and automatically that data is seriaized into elasticsearch and then passed into props for the nuxt layout template. So bang, I can focus most of my time on the front end.

As a company, we have been battling the problems that come with using *growing* CMS data  with a Static Site Generator. There can be issues with multiple CMS users editing multiple pages/posts at the same time or all of that happening while a production deploy is in progress. So our CTO worked on our own version of incremental builds to handle rebuilding one page at a time to make sure uptime is high as possible. 

## Project Background
Aurora Anguilla is one of [King & Partners'](https://www.kingandpartners.com/work/aurora-anguilla/) newer hospitality clients. 

As the sole developer on this project, I was responsible for fully developing this site in 2 phases. I started with our K&P Nuxt base template that has our WordPress, Vue, Nuxt stack configured out the box. From there, I worked with the designer to understand the site structure, global elements, style guide, and components that was designed.

We were able to build the whole site in 2 months. 
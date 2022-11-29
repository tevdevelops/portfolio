---
title: Crossbay
slug: crossbay
author: tevdevelops
tags:
  - Vue JS
  - Gridsome
  - K&P
excerpt: Crossbay was my first project working with Vue JS. I quickly learned Vue and Gridsome to create this WordPress Static Site at King & Partners.
liveSite: https://crossbay.thisismark.com/
featuredImage: portfolio/crossbay/featured.jpg
---

# Crossbay

<div class="portfolio__video--holder">
  <video class="portfolio__video" poster="/portfolio/crossbay/crossbay-site-scroll.jpg" muted playsinline loop autoplay>
    <source src="/portfolio/crossbay/crossbay-site-scroll.webm" type="video/mp4">
  </video>
</div>

Live Site: https://crossbay.com/

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
The Crossbay project came to K&P as a quick request from a current client working on a larger project. They needed a site for their logistics platform. So this seemed like a perfect fit to build a lean JAMstack build using Vue & Gridsome. 

The designs were relatively straightforward, but I was able to work closely with our designer to work on some clean module fade/slide animations. 

The biggest hurdle of the project was creating a map that would communicate to users the amount of distribution centers that are in their network. I was able to use the Google Map API to customize the map styling and to create hotspot clusters and pins. With a lot of fine-tuning we were able to nail down a smooth user experience.
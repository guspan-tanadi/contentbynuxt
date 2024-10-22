import { eventHandler } from 'h3'
import { useStorage } from '#imports'

export default eventHandler(async () => {
  let dump = await useStorage().getItem('build:content:raw:compressed.sql') || ''

  if (!dump) {
    dump = await $fetch('/compressed.sql').catch((e) => {
      console.error('Failed to fetch compressed dump', e)
      return ''
    })
  }

  return {
    dump,
  }
})

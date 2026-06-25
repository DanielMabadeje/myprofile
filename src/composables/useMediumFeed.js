import { ref } from 'vue'

export function useMediumFeed(
  username = 'mabadejedaniel1',
  count = 6,
  apiKey = import.meta.env.VITE_RSS2JSON_API_KEY
) {
  const posts = ref([])
  const loading = ref(true)
  const error = ref(null)

  async function fetchPosts() {
    loading.value = true
    error.value = null

    try {
      const rssUrl = encodeURIComponent(
        `https://medium.com/feed/@${username}`
      )

      const url =
        `https://api.rss2json.com/v1/api.json` +
        `?rss_url=${rssUrl}` +
        `&count=${count}` +
        `&api_key=${apiKey}`

      const res = await fetch(url)
      const data = await res.json()

      if (data.status !== 'ok' || !data.items?.length) {
        throw new Error(data.message || 'No posts found')
      }

      posts.value = data.items.map((item) => ({
        title: item.title,
        link: item.link,
        date: new Date(item.pubDate).toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        excerpt:
          item.description
            .replace(/<[^>]*>/g, '')
            .slice(0, 160)
            .trim() + '…',
        thumbnail: item.thumbnail || null,
      }))
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  fetchPosts()

  return { posts, loading, error, refetch: fetchPosts }
}
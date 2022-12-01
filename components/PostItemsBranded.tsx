import { PostCard } from '@components/PostCard'
import { GhostPostsOrPages, GhostSettings } from '@lib/ghost'

interface PostItemsProps {
  settings: GhostSettings
  posts: GhostPostsOrPages
  isHome?: boolean
  branded?: boolean
}

export const PostItemsBranded = ({ settings, posts, isHome }: PostItemsProps) => {
  const brandedPosts = posts.filter((post) => {
    return post.tags?.some((tag) => tag.name === 'Branded Content' || tag.name === 'Entretenimiento')
  })

  const isBranded = true

  return (
    <>
      {brandedPosts.map((post, i) => (
        <PostCard key={i} {...{ settings, post, isHome, num: i, isBranded }} />
      ))}
    </>
  )
}

import { useState } from 'react'
import { CardArticles } from './CardArticles'
import articlesData from '../../data/articles.json'
import { Button } from '../ui/Button'
import { ZoomIn } from 'lucide-react';

export const Articles = () => {
  const [visibleCount, setVisibleCount] = useState(10)

  const sortedArticles = [...articlesData].sort((a, b) =>
    new Date(b.published_at).getTime() - new Date(a.published_at).getTime() // 2026-01-08T10:30:00Z -> 2026-01-08 10:30:00
  )

  const displayedArticles = sortedArticles.slice(0, visibleCount)
  const hasMore = visibleCount < sortedArticles.length

  const handleLoadMore = () => {
    setVisibleCount(artc => artc + 10)
  }

  return (
    <div className="grid gap-5">
      <p className='text-slate-50 text-2xl font-bold'>En ce moment sur Galanet</p>
      <div className="grid grid-cols-5 gap-6">
        {displayedArticles.map((article) => (
          <CardArticles
            key={article.id}
            id={article.id}
            title={article.title}
            price={article.price}
            category={article.category}
            subcategory={article.subcategory}
            published_at={article.published_at}
          />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button
            text='Voir plus'
            icon={<ZoomIn/>}
            onClick={handleLoadMore}
            className='cursor-pointer'
          />
        </div>
      )}
    </div>
  )
}

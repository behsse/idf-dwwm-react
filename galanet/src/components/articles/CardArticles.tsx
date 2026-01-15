import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

interface CardArticlesProps {
  id: string
  title: string
  price: number
  category: string
  subcategory: string
  published_at: string
}

export const CardArticles = ({id, title, price, published_at}: CardArticlesProps) => {

  const [isLiked, setIsLiked] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()

    const isToday = date.getDate() === today.getDate() &&
                    date.getMonth() === today.getMonth() &&
                    date.getFullYear() === today.getFullYear()

    const time = date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    })

    if (isToday) {
      return `Publié aujourd'hui à ${time}`
    }

    const formattedDate = date.toLocaleDateString('fr-FR')
    return `Publié le ${formattedDate} à ${time}`
  }

  return (
    <Link to={`/${id}`} className="bg-slate-800 text-slate-50 p-3 rounded-lg grid gap-4">
        <div className="w-full h-64 overflow-hidden">
            <img src={`articles/${id}.png`} alt="" className="w-full h-full object-cover rounded-sm"/>
        </div>
      <div className="grid gap-2">
        <h3 className="text-base">{title}</h3>
        <p className="">{price} crédits</p>
        <div className='flex items-center justify-between'>
          <p className="text-slate-50 text-[0.625rem]">{formatDate(published_at)}</p>
          <div className='p-2 bg-slate-50 rounded-full cursor-pointer' onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsLiked(!isLiked)
          }}>
            <Heart className={`${isLiked ? "fill-red-500 stroke-red-500" : "stroke-slate-800"} w-4 h-4`}/>
          </div>
        </div>
      </div>
    </Link>
  )
}
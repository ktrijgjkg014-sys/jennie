'use client'

import { useState, useEffect } from 'react'
import { Heart, MessageCircle, Reply, Flag, Check, X } from 'lucide-react'
import { Comment, User } from '@/types'
import { Button } from './button'
import { Textarea } from './textarea'
import { Badge } from './badge'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

interface CommentSystemProps {
  articleId: string
  comments: Comment[]
  currentUser?: User
  onAddComment: (content: string, parentId?: string) => void
  onLikeComment: (commentId: string) => void
  onReportComment: (commentId: string, reason: string) => void
}

export function CommentSystem({
  articleId,
  comments,
  currentUser,
  onAddComment,
  onLikeComment,
  onReportComment,
}: CommentSystemProps) {
  const [newComment, setNewComment] = useState('')
  const [replyTo, setReplyTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const [showReportModal, setShowReportModal] = useState<string | null>(null)
  const [reportReason, setReportReason] = useState('')

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment)
      setNewComment('')
    }
  }

  const handleSubmitReply = () => {
    if (replyContent.trim() && replyTo) {
      onAddComment(replyContent, replyTo)
      setReplyContent('')
      setReplyTo(null)
    }
  }

  return (
    <div className="space-y-6">
      {/* Add Comment Form */}
      {currentUser ? (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Deja un comentario</h3>
          <div className="space-y-3">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Comparte tu opinión sobre este artículo..."
              className="min-h-[100px] resize-none"
            />
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {newComment.length}/500 caracteres
              </div>
              <Button 
                onClick={handleSubmitComment}
                disabled={!newComment.trim() || newComment.length > 500}
                className="premium-glow"
              >
                Publicar comentario
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 border rounded-lg">
          <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Inicia sesión para comentar</h3>
          <p className="text-muted-foreground mb-4">
            Únete a la comunidad y comparte tus conocimientos
          </p>
          <Button variant="outline">Iniciar sesión</Button>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Comentarios ({comments.length})
          </h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Más recientes
            </Button>
            <Button variant="ghost" size="sm">
              Más útiles
            </Button>
          </div>
        </div>

        {comments.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h4 className="text-lg font-medium text-muted-foreground mb-2">
              Sé el primero en comentar
            </h4>
            <p className="text-muted-foreground">
              Comparte tu thoughts y ayuda a otros lectores
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                currentUser={currentUser}
                onLike={() => onLikeComment(comment.id)}
                onReply={() => setReplyTo(comment.id)}
                onReport={() => setShowReportModal(comment.id)}
                onSubmitReply={handleSubmitReply}
                replyContent={replyContent}
                setReplyContent={setReplyContent}
                isReplying={replyTo === comment.id}
              />
            ))}
          </div>
        )}
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Reportar comentario</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Razón del reporte
                </label>
                <select
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  className="w-full p-2 border rounded-md bg-background"
                >
                  <option value="">Selecciona una razón</option>
                  <option value="spam">Spam</option>
                  <option value="harassment">Acoso</option>
                  <option value="hate-speech">Discurso de odio</option>
                  <option value="inappropriate">Contenido inapropiado</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    if (reportReason) {
                      onReportComment(showReportModal, reportReason)
                      setShowReportModal(null)
                      setReportReason('')
                    }
                  }}
                  disabled={!reportReason}
                  variant="destructive"
                >
                  Reportar
                </Button>
                <Button
                  onClick={() => {
                    setShowReportModal(null)
                    setReportReason('')
                  }}
                  variant="outline"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

interface CommentItemProps {
  comment: Comment
  currentUser?: User
  onLike: () => void
  onReply: () => void
  onReport: () => void
  onSubmitReply: () => void
  replyContent: string
  setReplyContent: (content: string) => void
  isReplying: boolean
}

function CommentItem({
  comment,
  currentUser,
  onLike,
  onReply,
  onReport,
  onSubmitReply,
  replyContent,
  setReplyContent,
  isReplying,
}: CommentItemProps) {
  const [showReplies, setShowReplies] = useState(false)

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) return 'ahora mismo'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d`
    
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.user.avatar} />
          <AvatarFallback className="text-xs">
            {getInitials(comment.user.name)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{comment.user.name}</span>
            {comment.user.role === 'vip' && (
              <Badge variant="secondary" className="vip-badge text-xs px-1 py-0">
                VIP
              </Badge>
            )}
            {comment.user.role === 'admin' && (
              <Badge variant="destructive" className="text-xs px-1 py-0">
                Admin
              </Badge>
            )}
            <span className="text-xs text-muted-foreground">
              {getTimeAgo(comment.createdAt)}
            </span>
          </div>
          
          <div className="text-sm text-foreground leading-relaxed">
            {comment.content}
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <button
              onClick={onLike}
              className={`flex items-center gap-1 hover:text-foreground transition-colors ${
                comment.isLiked ? 'text-primary' : ''
              }`}
            >
              <Heart className={`h-3 w-3 ${comment.isLiked ? 'fill-current' : ''}`} />
              {comment.likes}
            </button>
            
            <button
              onClick={onReply}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <Reply className="h-3 w-3" />
              Responder
            </button>
            
            <button
              onClick={onReport}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <Flag className="h-3 w-3" />
              Reportar
            </button>
            
            {comment.replies && comment.replies.length > 0 && (
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="hover:text-foreground transition-colors"
              >
                {showReplies ? 'Ocultar' : `Ver ${comment.replies.length} respuestas`}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Reply Form */}
      {isReplying && currentUser && (
        <div className="ml-11 space-y-2">
          <Textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Escribe tu respuesta..."
            className="min-h-[60px] resize-none text-sm"
          />
          <div className="flex gap-2">
            <Button size="sm" onClick={onSubmitReply}>
              Responder
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setReplyContent('')
                setReplyTo(null)
              }}
            >
              Cancelar
            </Button>
          </div>
        </div>
      )}

      {/* Replies */}
      {showReplies && comment.replies && comment.replies.length > 0 && (
        <div className="ml-11 space-y-3 border-l-2 border-muted pl-4">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="flex gap-3">
              <Avatar className="h-6 w-6">
                <AvatarImage src={reply.user.avatar} />
                <AvatarFallback className="text-xs">
                  {getInitials(reply.user.name)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-xs">{reply.user.name}</span>
                  {reply.user.role === 'vip' && (
                    <Badge variant="secondary" className="vip-badge text-xs px-1 py-0">
                      VIP
                    </Badge>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {getTimeAgo(reply.createdAt)}
                  </span>
                </div>
                
                <div className="text-xs text-foreground leading-relaxed">
                  {reply.content}
                </div>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <button
                    onClick={() => onLikeComment?.(reply.id)}
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    <Heart className="h-2 w-2" />
                    {reply.likes}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
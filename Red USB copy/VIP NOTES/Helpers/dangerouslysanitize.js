<div
 className={Comment.escalated ? css.escalated : ''}
 dangerouslySetInnerHTML={{__html:CommentForm.sanitize(comment.message)}}
>

</div>
let commentCont = document.querySelector('.comments-container')

const createInputBox = () => {
    let div = document.createElement('div')
    div.setAttribute('class', 'comment-reply-section')

    div.innerHTML = `<input type="text" class="input" placeholder="Write reply">
    <button class="btn submit">Submit</button>`

    return div
}

const createReply = (text) => {
    let div = document.createElement('div')
    div.setAttribute('class', 'all-comments')

    div.innerHTML = `<div class="card">
        <span class="text">${text}</span>
        <span id="reply" class="reply">Add reply</span>
    </div>`

    return div
}

commentCont.addEventListener('click', event =>{
    let replyBtn = event.target.classList.contains('reply')

    let submitBtn = event.target.classList.contains('submit')

    let closestCard = event.target.closest('.all-comments')

    if(replyBtn)
    {
        //add reply
        // 2. Add reply section to closestCard
        let inputBox = createInputBox()
        closestCard.appendChild(inputBox)
    }
    if(submitBtn)
    {
        //append the reply to comment
        let closestComment = event.target.closest('.comment-reply-section')
        let inputSection = closestComment.children[0]
        let inputText =  inputSection.value

        if (inputText) {
            let replyComment = createReply(inputText)
            closestCard.appendChild(replyComment)
            closestComment.remove()
        }
    }
})
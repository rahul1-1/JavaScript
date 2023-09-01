const topCommentBox = document.querySelector(".comment-box");
const allComments = document.querySelector(".all-comments");
const showBtn = document.querySelector("#show");
const sortSelect = document.querySelector("#sort-select");

function addParentComment(text) {
    const div = document.createElement("div");
    div.classList.add("card");
    const timestamp = new Date().getTime(); // Get current timestamp in milliseconds
    div.setAttribute("data-timestamp", timestamp);
    div.innerHTML = `
        <span class="text">${text}</span>
        <span class="reply">Reply..</span>
        <span class="reply-count">0 Reply</span> <!-- Add reply count element -->

    `;

    return div;
}

function submitReply(parentComment, replyText) {
    const newReply = addReply(replyText);
    parentComment.appendChild(newReply);
    updateReplyCount(parentComment); // Update reply count
    clearReplyInput(parentComment);
}

function clearReplyInput(parentComment) {
    const replyInputBox = parentComment.querySelector(".reply-input");
    if (replyInputBox) {
        replyInputBox.value = "";
        replyInputBox.parentNode.remove();
    }
}

function addReply(text) {
    const div = document.createElement("div");
    div.classList.add("card", "reply-card");
    const timestamp = new Date().getTime(); // Get current timestamp in milliseconds
    div.setAttribute("data-timestamp", timestamp);
    div.innerHTML = `
        <span class="text">${text}</span>
        <span class="reply">Reply..</span>
    `;

    return div;
}

function addReplyBox() {
    const div = document.createElement("div");
    div.classList.add("comment-details");

    div.innerHTML = `
        <input type="text" placeholder="Add reply here" class="input reply-input" />
        <button class="btn reply-submit">Submit</button>
        <button class="btn reply-cancel">❌</button>
    `;

    return div;
}

function showAllComments(status) {
    allComments.style.display = status ? 'flex' : 'none';
    showBtn.innerHTML = status ? 'Hide' : 'Show';
}


function updateReplyCount(parentComment) {
    const replyCountElement = parentComment.querySelector(".reply-count");
    if (replyCountElement) {
        const existingCount = parseInt(replyCountElement.textContent.split(" ")[0]);
        const newCount = existingCount + 1;
        replyCountElement.textContent = `${newCount} ${newCount === 1 ? "Reply" : "Replies"}`;
    }
}

showBtn.addEventListener("click", function () {
    showAllComments(allComments.style.display === "none");
});

topCommentBox.addEventListener("keydown", function (event) {
   
    if (event.keyCode === 13) {
        event.preventDefault();
        const input = topCommentBox.querySelector("input");
        if (input.value) {
            allComments.appendChild(addParentComment(input.value));
            input.value = "";
            showAllComments(true);
        }
    }
});
topCommentBox.addEventListener("click", function (e) {
    if (e.target.className === "post") {
        const input = topCommentBox.querySelector("input");
        if (input.value) {
            allComments.appendChild(addParentComment(input.value));
            input.value = "";
            showAllComments(true);
        }
    }
});
allComments.addEventListener("click", function (e) {
    if (e.target.className === 'reply') {
        const parentComment = e.target.closest(".card");
        if (!parentComment.querySelector(".reply-input")) {
            parentComment.appendChild(addReplyBox());
            const replyInputBox = parentComment.querySelector(".reply-input");
            if (replyInputBox) {
                replyInputBox.focus();

                replyInputBox.addEventListener("keydown", function (event) {
                    if (event.keyCode === 13) {
                        event.preventDefault();
                        const replyText = replyInputBox.value;
                        if (replyText) {
                            submitReply(parentComment, replyText);
                        }
                    }
                });
            }
        }
    }
    if (e.target.classList.contains("reply-cancel")) {
        const parentComment = e.target.closest(".card");
        clearReplyInput(parentComment);
    }
    if (e.target.classList.contains("reply-submit")) {
        const parentComment = e.target.closest(".card");
        const replyInputBox = parentComment.querySelector(".reply-input");
        const replyText = replyInputBox.value;
        if (replyText) {
            submitReply(parentComment, replyText);
        }
    }
});

// Sort comments
sortSelect.addEventListener("change", function () {
    const sortValue = sortSelect.value;
    const commentsArray = Array.from(allComments.children);

    commentsArray.sort((a, b) => {
        const aTimestamp = parseInt(a.getAttribute("data-timestamp"));
        const bTimestamp = parseInt(b.getAttribute("data-timestamp"));
        
        return sortValue === "newest" ? bTimestamp - aTimestamp : aTimestamp - bTimestamp;
    });

    allComments.innerHTML = "";
    commentsArray.forEach(comment => {
        allComments.appendChild(comment);
    });
});




/*

Of course! Let me provide a detailed breakdown of the changes I made to your code and the reasons behind each change:

submitReply Function:

What I did: I modified the submitReply function to take two parameters: parentComment and replyText. This allows the function to know which comment to append the reply to and what the reply text is.
Why: This change enhances the clarity and modularity of the code. By passing in these parameters, the function becomes more self-contained and easier to understand.
clearReplyInput Function:

What I did: I added a new function named clearReplyInput that takes parentComment as a parameter. This function removes the reply input box and clears the input.
Why: This function helps consolidate the logic for removing the reply input box and clearing its content. It makes the code more organized and prevents duplication of code.
showAllComments Function:

What I did: I simplified the showAllComments function to directly set the display property of allComments based on the status argument.
Why: This change simplifies the function and makes it more concise. It also improves the readability of the code by removing unnecessary if statements.
Event Listeners:

What I did: I added a single event listener for the "Show/Hide" button using the showBtn element. I also added a keydown event listener on the topCommentBox for handling comment submission.
Why: Consolidating event listeners helps streamline the code and centralize event handling. Using the keydown event for comment submission allows users to press the Enter key to post comments.
"Reply" Button Handling:

What I did: I added error handling to check if the replyText is not empty before submitting a reply. I also moved the focus logic inside the if statement for adding a reply box.
Why: Checking for non-empty replyText before submitting a reply helps prevent submitting empty replies. Moving the focus logic ensures that the input field gains focus only when adding a new reply box, improving user experience.
"Cancel" Button Handling:

What I did: I added a new event listener for the "Cancel" button and used the clearReplyInput function to remove the reply box and clear the input.
Why: Creating a dedicated event listener for the "Cancel" button helps keep the logic organized and separates it from other actions. Using the clearReplyInput function also avoids duplicating code.
*/ 

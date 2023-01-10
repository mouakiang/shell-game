## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

# HTML

-3 Guess Buttons
Why? To let the user guess and to increase the wins/losses and total count.
How? buttonEl.addEventListener('click', () => {});
-3 Shell images that hide the ball
Why? Show the users correct guess by showing the hidden ball.
How? img.classList.add('ball');
-Wins Total
Why? To show the user the amount of times they won.
How? correctEl.textContent = correctGuesses;
-Losses Total
Why? To show the user the amount of times they lost.
How? lossesEl.textContent = incorrectGuesses;
-Total Games
Why? To show the user the amount of times they have guessed total.
How? totalEl.textContact = totalGuesses;

# STATE

-let winsTotal
-let lossesTotal
-let totalGames

# EVENTS

User clicks on a button to make a guess
What happens when the user clicks on the guess button?
Need more information (Which button did the user click and which one was correct?)
1)Figure out which button the user clicked
2)Come up with a random correct answer
3)Compare the correct answer to whatever the user guessed
4)If they guessed correct then to increment the correct guesses
5)If they guessed incorrectly to increment the incorrect guesses
6)Always increment total guesses
Update STATE
Update DOM with the new STATE
7)Reveal the hiding ball
8)Show the wins, losses and total games

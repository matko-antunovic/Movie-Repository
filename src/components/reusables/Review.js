import React from 'react'

const Review = ({name}) => {
    return (
        <div>
            "This is very much my kind of movie. Straightforward, lots of good action,
             our hero never waivers from his path and no social or emotional nonsense. 
             Those who have watched the movie might wonder why I claim that there is not emotional 
             nonsense since the entire plot is driven by {name} very emotional response to his 
             wife’s death and the subsequent killing of the dog that he received as a last present from her.
              What I mean with “no emotional nonsense” is that {name} is never second guessing himself, 
              the movie never really tries to portray him as an “ordinary” guy having second thoughts about 
              killing the bad guys and he doesn’t go into some silly “oh should I really pull the trigger” 
            trance and drops the gun in the worst possible moments as is done in a lot of movies. Sure, there are emotions in ..." Read More
        </div>
    )
}

export default Review

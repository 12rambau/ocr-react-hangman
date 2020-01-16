import React from 'react'
import PropTypes from 'prop-types'

import './Letter.css'

const HIDDEN_VALUE = "_"
const VALUE_AVAILABLE = "[A-Z]"

const Letter = ({value, feedback}) => (
    <div className="letter">
        {/*feedback*/}
        {feedback === "hidden" ? HIDDEN_VALUE : value}
    </div>
)

Letter.propTypes = {
    value: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired
}

// For Testing display 
export const TEST_LETTERS = [
    {value: "A", feedback: "hidden" },
    {value: "B", feedback: "toto" },
    {value: "C", feedback: "hidden" },
    {value: "D", feedback: "toto" }
]

export default Letter
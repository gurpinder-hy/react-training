import { PropTypes } from 'prop-types';

const About = ({age = 50}) => {

    const addData = (val) => {
        alert("Data added " + val)
    }

    return (
        <>
        <div>My Age = {age}</div>
            <button onClick={() => addData('user 1')}>Add Data</button>
        </>
    );
};

About.prototypes = {
    age: PropTypes.number
}

export default About;
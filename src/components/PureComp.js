import React from 'react'

const PureComp = ({ name }) => {
    console.log('Pure Func Component');
    return (
        <div>
            Pure Func Component {name}
        </div>
    );
}

export default React.memo(PureComp);
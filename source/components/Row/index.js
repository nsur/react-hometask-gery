// Core
import React from 'react';

// Components
import SectionHeader from '../SectionHeader';
import SectionBlock from '../SectionBlock';

// props як вхідний параметер
// прямо в скобках деструктуризував props і дістав із нього data
const RowBottom = ({ data }) => (
    <div className = 'row'>
        {
            data.map((d, index) => (
                <div className = { d.params.className || '' } key = { index }>
                    <SectionHeader
                        sectionName = { d.header.sectionName }
                        sectionNumber = { d.header.sectionNumber }
                    />
                    <SectionBlock
                        items = { d.items }
                        type = { d.params.type }
                    />
                </div>
            ))
        }
    </div>
);

export default RowBottom;

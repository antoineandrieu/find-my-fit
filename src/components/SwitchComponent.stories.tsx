import React from 'react';

import SwitchComponent from './SwitchComponent';

import Center from './StyledComponents/StyledCenter';

export const SwitchComponentStory = () => (
    <Center>
        <div
            style={{
                width: '20vw',
            }}
        >
            <SwitchComponent
                disabled={false}
                firstSelected={true}
                firstOption={'Centimetres'}
                secondOption={'Inches'}
                callback={() => {}}
            />
        </div>
    </Center>
);

export default {
    title: 'SwitchComponent',
    component: SwitchComponent,
};

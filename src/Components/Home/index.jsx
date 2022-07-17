import React, { Component } from 'react';
import Cover from './cover';
import WhyEnglishAdapt from './why_english_adapt';
import WhyEnroll from './why_enroll';

class Home extends React.Component {
    state = {
        whyEnglishAdaptList: ['Practice Speaking Skills', 'Friendly Environment', 'Learn at your own pace', 'Undivided Attention', 'Learn at your preferred time'],
        enroll_list: [
            'You’ve studied English for a long time but you still can’t speak confidently and accurately.',
            'You want to practice speaking regularly.',
            'You are a Businessman who faces problems while dealing with international clients.',
            'You are a housewife who feels hesitant to talk to teachers on your children’s PTM.',
            'You are a student and you still need to go out in a competitive corporate world.',
            'You are a working professional who isn’t taken seriously at the workplace because of unsound communication skills.'

        ]
    }
    render() {
        const { whyEnglishAdaptList, enroll_list } = this.state;
        return <div>
            <Cover />
            <WhyEnglishAdapt whyEnglishAdaptList={whyEnglishAdaptList} />
            <WhyEnroll enroll_list={enroll_list} />
        </div>;
    }
}

export default Home;
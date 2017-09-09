import React from 'react';
import ArticleList from '../ArticleList';

import Renderer from 'react-test-renderer';

describe('ArticleListTests', () =>{

    const testProps ={
        articles:{
            a:{id:'a'},
            b:{id:'b'},
        },
        store:{
            lookUpAuthor: jest.fn(() => ({}))
        }
    };

    it('renders correctly',() =>{
        const tree = Renderer.create(
            <ArticleList
                {...testProps}
            />
        );
        //expect(tree.children.length).toBe(2);
        expect(tree).toMatchSnapshot();
        console.log(tree);
    });
});
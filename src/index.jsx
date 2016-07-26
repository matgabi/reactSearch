// Application entrypoint.

// Load up the application styles
//require("../styles/main.css");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
var data = [
    {
        type: "folder",
        name: "animals",
        path: "/animals",
        children: [
            {
                type: "folder",
                name: "cat",
                path: "/animals/cat",
                children: [
                    {
                        type: "folder",
                        name: "images",
                        path: "/animals/cat/images",
                        children: [
                            {
                                type: "file",
                                name: "cat001.jpg",
                                path: "/animals/cat/images/cat001.jpg"
                            }, {
                                type: "file",
                                name: "cat0231.jpg",
                                path: "/animals/cat/images/cat002.jpg"
                            }
                        ]
                    },
                    {
                        type: "file",
                        name: "cat002.jpg",
                        path: "/animals/cat/images/cat123.jpg"
                    },
                    {
                        type: "file",
                        name: "cat003.jpg",
                        path: "/animals/cat/images/cat003.jpg"
                    }
                ]
            }
        ]
    },
    {
        type: "folder",
        name: "dogs",
        path: "/animals/dog",
        children: [
            {
                type: "folder",
                name: "images",
                path: "/animals/dog/images",
                children: [
                    {
                        type: "file",
                        name: "dog001.jpg",
                        path: "/animals/cat/images/dog001.jpg",
                        children: [
                            {
                                type: "file",
                                name: "dog001.jpg",
                                path: "/animals/cat/images/dog001.jpg"
                            }, {
                                type: "file",
                                name: "cat121.jpg",
                                path: "/animals/dog/images/dog002.jpg"
                            },
                            {
                                type:'folder',
                                name: 'audi.a4'
                            }
                        ]
                    }, {
                        type: "file",
                        name: "tiger001.jpg",
                        path: "/animals/cat/images/tiger002.jpg"
                    },
                    {
                        type: 'folder',
                        name: 'cat00',
                        path: '/mere/eere',
                        children: [
                            {
                                type: "file",
                                name: "badcat1.jpg",
                                path: "/animals/cat/images/tiger002.jpg"
                            },
                            {
                                type: "file",
                                name: "badcat2.jpg",
                                path: "/animals/cat/images/tiger002.jpg"
                            }
                        ]
                    }
                ]
            },
            {
                type: "file",
                name: "tiger002.jpg",
                path: "/animals/a/images/s002.jpg"
            },
            {
                type: "file",
                name: "giraffe003.jpg",
                path: "/animals/cat/images/cat003.jpg"
            }
        ]
    }
];
ReactDOM.render(<App data={data}/>, document.getElementById('container'));

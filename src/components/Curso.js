import React from 'react';

const cursos = [
	{curso: "Java"},
	{curso: "React"},
	{curso: "NodeJS"},
	{curso: "GoLang"}
];

export default class Curso extends React.Component {
	
	constructor() {
		super();		
	}
	
	render() {

		return (
			<h3>Vc está vendo o curso de {cursos[this.props.match.params.id].curso}</h3>
		);

	}

}
import React from 'react'

class CountryDetails extends React.Component {
    state = {
        {this.state.common.name}:'',
        {this.state.status}:'',
        {this.state.currency}:''
    }

    componentDidMount() {
        //Going to get the project id from the URL.
        let countriesId = this.props.match.params.cca3;

        //Going to find the project inside my projets array
        //using the id that comes from the URL
        console.log('id coming from the url', projectId)
        let foundProject = myProjects.find((project) => {
            return project.id === projectId;
        })

        this.setState({
            name: foundProject.name,
            tecnologies: foundProject.technologies,
            year:  foundProject.year,
            description: foundProject.description
        })
    } 


    render() {
        return (
            <div>
            <h3>Project Detail: {this.state.name} </h3>
            <p>Tecnologies: {this.state.tecnologies}</p>
            <p>Year: {this.state.year}</p>
            <p>Description: {this.state.description}</p>
        
            </div>
        )
    }
}

export default CountryDetails


















}























export default CountryDetails;
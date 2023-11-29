import React from 'react'



const NewLocation = (props) => {
    const [formData, setformData] = React.useState(
        { longitude: "", latitude: "", name: "" })

    function handleChange(event) {
        setformData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function addUusObjekt() {

        if (isNaN(formData.longitude) || isNaN(formData.latitude)) {
            return alert("longitude ja latitude peavad olema number väärtused")
        } else {
            props.setLocations([
                ...props.locations,
                formData]
            )
        }
        console.log(formData)
    }

    /* function deleteAsukoht() {
        props.setLocations([
            ...props.locations,
            formData]
        )
        console.log(formData)
    } */

    return (
        <div className="newLOcation">
            <h3>Locations</h3>
            {props.locations.map((location) => (
                <div key={location.name}>
                    <a onClick={() => props.selectLocation(location)}>{location.name}{/*<h5 onClick={() => deleteAsukoht()}>X</h5>*/}</a>
                </div>
            ))}
            <h3>New location</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <input
                    type="text"
                    placeholder='longitude'
                    onChange={handleChange}
                    name="longitude"
                    value={formData.longitude}
                />
                <input
                    type="text"
                    placeholder='latitude'
                    onChange={handleChange}
                    name="latitude"
                    value={formData.latitude}
                />
                <input
                    type="text"
                    placeholder='nimi'
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                <button onClick={addUusObjekt}>Add location</button>




            </div>
        </div>
    )
}

export default NewLocation

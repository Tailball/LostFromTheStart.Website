import React from 'react';

const ShowList = (props) => {
    return (
        <div>
            <table className="shows desktop">
                <tbody>
                    {
                        props.shows.map(show => (
                            <tr key={show.date + show.location}>
                                <td>{show.date}</td>
                                <td>{show.location}</td>
                                <td>{show.title}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="shows mobile">
            {
                props.shows.map(show => (
                    <div className="show" key={show.date + show.location}>
                        <p className="show-date">{show.date}</p>
                        <p className="show-location">{show.location}</p>
                        <p className="show-title">{show.title}</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default ShowList;
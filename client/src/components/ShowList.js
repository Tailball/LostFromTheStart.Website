import React from 'react';

const ShowList = (props) => {
    return (
        <table>
            <tbody>
                {
                    props.shows.map(show => (
                        <tr key={show.date}>
                            <td>{show.date}</td>
                            <td>{show.location}</td>
                            <td>{show.title}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default ShowList;
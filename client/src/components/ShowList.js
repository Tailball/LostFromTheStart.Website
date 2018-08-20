import React from 'react';

const ShowList = (props) => {
    return (
        <div>
            <table class="shows desktop">
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

            <div class="shows mobile">
            {
                props.shows.map(show => (
                    <div class="show" key={show.date + show.location}>
                        <p class="show-date">{show.date}</p>
                        <p class="show-location">{show.location}</p>
                        <p class="show-title">{show.title}</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default ShowList;
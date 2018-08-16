import React from 'react';

import isMobile from '../util/local';

class Shows extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <section id="shows" className={isMobile() ? 'bg-mobile' : 'bg-desktop'}>
                <h1>Shows &amp; tours</h1>
            
                <h2>Upcoming</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>2018.09.12</td>
                            <td>Oostmalle</td>
                            <td>Oostmalle Rocks</td>
                        </tr>
                        <tr>
                            <td>2018.09.13</td>
                            <td>Veurne, De Doze</td>
                            <td>Punk Rock Night 3</td>
                        </tr>
                        <tr>
                            <td>2018.10.10</td>
                            <td>Brighton, UK</td>
                            <td>The Lil' Pub</td>
                        </tr>
                        <tr>
                            <td>2018.10.11</td>
                            <td>London, UK</td>
                            <td>Download Festival</td>
                        </tr>
                        <tr>
                            <td>2018.10.13</td>
                            <td>Sheffield</td>
                            <td>Nanny's Fest</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Previous</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>2018.09.12</td>
                            <td>Oostmalle</td>
                            <td>Oostmalle Rocks</td>
                        </tr>
                        <tr>
                            <td>2018.09.13</td>
                            <td>Veurne, De Doze</td>
                            <td>Punk Rock Night 3</td>
                        </tr>
                        <tr>
                            <td>2018.10.10</td>
                            <td>Brighton, UK</td>
                            <td>The Lil' Pub</td>
                        </tr>
                        <tr>
                            <td>2018.10.11</td>
                            <td>London, UK</td>
                            <td>Download Festival</td>
                        </tr>
                        <tr>
                            <td>2018.10.13</td>
                            <td>Sheffield</td>
                            <td>Nanny's Fest</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}

export default Shows;

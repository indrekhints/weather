


const time = (dateString) => {
    return `${(new Date(dateString)).getHours()}.${(new Date(dateString)).getMinutes()}`;
}



const Tabel = ({ ilm }) => (
    <table className="tabel" cellSpacing={8}>
        <thead className="tabelHead">
            <th>Kuupäev</th>
            <th>Päikesetõus/Päikeselangus</th>
            <th>Temp. min/max</th>
            <th>Sademed</th>
            <th>Max tuul</th>
        </thead>
        <tbody>
            {ilm.daily.time.map((_, i) => (
                < tr >
                    <td>{ilm.daily.time[i]}</td>
                    <td id="time">{time(ilm.daily.sunrise[i])}/{time(ilm.daily.sunset[i])}</td>
                    <td>{ilm.daily.temperature_2m_min[i]}/{ilm.daily.temperature_2m_max[i]}</td>
                    <td>{ilm.daily.precipitation_sum[i]}mm</td>
                    <td>{ilm.daily.wind_speed_10m_max[i]}m/s</td>
                </tr>
            ))}
        </tbody>
    </table >
);

export default Tabel;
import { useEffect, useState } from "react"

const Time = ({ dateTime }: { dateTime: Date}) => {

  const [ctime,setTime] = useState(new Date(dateTime).toLocaleTimeString())
  const UpdateTime=()=>{
    let time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return (
    <span>
      <span>Banjarbaru, </span>
      <span>{ctime}</span>
    </span>
  )
}

export function Clock() {
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch(
          'https://timeapi.io/api/time/current/zone?timeZone=Asia/Singapore',
          {
            headers: {
              'accept': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTime(data);
        setLoading(false);
      } catch (err) {
        setError(String('Error fetching time data: ' + err ));
        setLoading(false);
        console.error("fail to get time", err)
      }
    };

    fetchTime();
  }, []);

  if (loading || error || time === null) return <div>Banjarbaru, -/-/-</div>;

  return <Time dateTime={new Date(time || "")}/>
}
  
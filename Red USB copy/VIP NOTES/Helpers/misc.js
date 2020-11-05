getCurrentMetadata =()=>{
  const { metadataType,metadat} = this.props;
  const  value = metadata[metadataType];
  if(value){
    return this[metadataType].filter(data => data.value === value)[0]
  }
  return this[metadataType][0]
}

addPosition = e => {
  const topGap = 10;
  const elTop = this.ServiceWorkerContainer.current.getBoundingClientRec().top;
  const top = (e.pageY - window.pageYOffset) - elTop;
  const dropdown = (this.ServiceWorkerContainer.current.children)[0].children;
 setTimeout(() => {
   dropdown[1].style.transform = `translate3d(4px,${top - topGap}px, 0px)`;
   dropdown[1].style.opacity = '1'
 }, 0)
}

getPriorityMap = (radars=[]) => {
  const priorityStatus = {};
  radars.forEach(radar => {
    if(radar.priority){
      const status = radar.priority;
      if(!priorityStatus[status]){
        priorityStatus[status] = [];
      }
      priorityStatus[status].push({
        id:radar.id,
        state:radar.state
      })
    }
  })
  return priorityStatus
}

getRadarUrl = items => items.reduce((previous,next) => `${previous}${next}&`,'rdar://').slice(0,-1)

buildItem = items => items.length ? (<a href={this.getRadarUrl(items)} className="radar">{items.length}</a>) : <div>{items.length}</div>

radarsByEvent = (radarsByEvent) => {
  if(radarsByEvent){
    const eventNames = Object.keys(radarsByEvent).sort()
  const base = Object.values(radarsByEvent).reduce((prev,next) => prev.concat(next),[])
  return eventNames.map((name,index) => {
    return (
      <tr key={index}>
        <td>{this.buildItem(pastDue)}</td>
      </tr>
    )
  })
  }
  return (
    <tr>
      <td colSpan = "8">No Events</td>
    </tr>
  )
}

getFullName = (obj) => {
  return `${obj.first || obj.nick} ${obj.lastname} `
}

isCommentModified =()=>{
  const {comment} = this.props;
  if(comment.modifiedAt){
    const modified = moment(comment.modifiedAt);
    const created = moment(comment.createdAt);
    const duration = moment.duration((modified).diff(created));
    return duration.asSeconds() > 2 * 60
  }

  return false
}

 countWords = (message) => {
  if (!message.trim()) {
    return 0;
  }
  return message
    .trim()
    .replace(/\s{2,}/g, " ")
    .split(" ").length;
}

 getClassNameCountWords = (count) =>{
  if (count >= 60) {
    return CSS.danger;
  }
  if (count >= 40) {
    return CSS.warning;
  }
  return CSS.success;
}

parseIds = (str) => {
  if(!str){
    return []
  }
  const titles = /^<rdar.*?\d+>.*?$/gm
  const ids = /\d+/gm
  const matches = (str.match(titles) || []).map(item => /^<.*?(\d+)>.*?/.exec(item)[1])
  return matches.concat(str.replace(titles,'').match(ids) || [])
}

console.log(parseIds("<rdar://problem/33>spelling\n<rdar://problem/34>spelling"))
console.log(parseIds("<rdar://problem/33&34&35"))


function isCurrentWeekDate(radarDate) {
  const currentWeekOfYear = moment().week();
  const radarDateWeekOfYear = moment(radarDate).week();
  return currentWeekOfYear === radarDateWeekOfYear;
}

function isCurrentWeekDate(radarDate) {
  const currentWeekOfYear = moment().week();
  const radarDateWeekOfYear = moment(radarDate).week();
  return currentWeekOfYear === radarDateWeekOfYear;
}

{/* <div className={css.dateInner}>
{ blocker && (<strong className={css.blockerText}>Blocked by: </strong>)}
<RadarDateState settings={settings} report={report} radar={radar} />
{ modifiedDuringCurrentWeek && !createdDuringCurrentWeek && (<sup className={css.updated} title="Updated this week"> upd</sup>) }
{ createdDuringCurrentWeek && (<sup className={css.new} title="Created this week"> new</sup>) }
</div>
</div> */}
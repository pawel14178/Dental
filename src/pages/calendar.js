import React, {Component} from 'react';
import Header from "../components/header/headerPages";
import Footer from "../components/footer/footer";
import moment from 'moment'
import { getEvents } from './gcal'
import "../../node_modules/react-big-calendar/lib/css/react-big-calendar.css"
import Request from "../components/request/request"

import BigCalendar from 'react-big-calendar'




const Localizer = BigCalendar.momentLocalizer(moment)

class Treatment extends Component {
    constructor () {
        super()
        this.state = {
          events: []
        }
      }
      componentDidMount () {
        getEvents((events) => {
          this.setState({events})
        })
      }
      
      render () {
        
        return (
           
        <div>
            <Header name={"calendar"} title={"Kalendarz"}/>
            <BigCalendar
                selectable
                style = {{height: "420px"}}
                localizer={Localizer}
                events={this.state.events}
                startAccessor="start"
                endAccessor="end"
                showMultiDayTimes
                popup
                views={['month','day']}
                onSelectEvent= {() => this.state.events.map(item => (
                    alert(`${item.title} \n \nOd ${item.start} \nDo ${item.end}`) 
                   
                 ) )}
                onSelectSlot={(slotInfo) => alert(
                    `Wolny termin: \n\n ${slotInfo.start.toLocaleString()} `
                  )}
                />
            <Request />
            <Footer />
          </div>
        )
      }      
}
export default Treatment;
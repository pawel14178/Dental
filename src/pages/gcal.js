import request from 'superagent'
import moment from 'moment';

const CALENDAR_ID = '7r84c36lqt5jrqjp0s6j1eaf9k@group.calendar.google.com'
const API_KEY = 'AIzaSyCEIxz6JyJCoEGB-I5_p5-fDwpH48x6rjE'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: moment(event.start.date).toDate() || event.start.dateTime,
            end: moment(event.end.date).toDate() || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}
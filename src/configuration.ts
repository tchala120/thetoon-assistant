import dayjs from 'dayjs'

import isToday from 'dayjs/plugin/isToday'
import isTomorrow from 'dayjs/plugin/isTomorrow'

/**
 * DayJS
 */
dayjs.extend(isToday)
dayjs.extend(isTomorrow)

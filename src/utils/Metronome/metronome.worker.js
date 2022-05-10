/* eslint-disable */

/* eslint-env worker */

const worker = () => {
    const ACTION_START = 'START'
    const ACTION_STOP = 'STOP'
    const ACTION_UPDATE = 'UPDATE'
    const ACTION_TICK = 'TICK'

    const SCHEDULER_INTERVAL = 25
    let timer = null

    self.onmessage = event => {
        const { data: { action } } = event

        switch (action) {
            case ACTION_START:
                timer = setInterval(
                    () => self.postMessage(ACTION_TICK),
                    SCHEDULER_INTERVAL
                )
                break

            case ACTION_STOP:
                clearInterval(timer)
                timer = null
                break

            case ACTION_UPDATE:
                if (timer) {
                    clearInterval(timer)
                    timer = setInterval(
                        () => self.postMessage(ACTION_TICK),
                        SCHEDULER_INTERVAL
                    )
                }
                break

            default:
                throw new Error(
                    `Action must be of type: ${ACTION_START}, ${ACTION_STOP} or ${ACTION_UPDATE
                    } (received ${action}).`
                )
        }
    }
}

let code = worker.toString()
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'))

const blob = new Blob([code], { type: 'application/javascript' })
const workerScript = URL.createObjectURL(blob)

export default workerScript
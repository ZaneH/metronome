export const validBpm = (bpm: number | string) => {
  return Number(bpm) > 0 && Number(bpm) <= 600
}

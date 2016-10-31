import React from 'react'
import { Repeat } from 'immutable'

function hexToRgb(hex) {
  const n = parseInt(hex.substr(1), 16)

  const r = n >> 16
  const g = (n >> 8) & 0xFF
  const b = n & 0xFF
 
  return [r, g, b]
}

function rgbToHex(r, g, b) {
  const n = (r << 16) | (g << 8) | b
  const s = n.toString(16)
  return "#" + "0".repeat(6 - s.length) + s
}

function adjustBrightness(color, delta) {
  const adjust = (c) => Math.max(Math.min(c + delta, 0xFF), 0)

  const [r, g, b] = hexToRgb(color)
  return rgbToHex(adjust(r), adjust(g), adjust(b))
}

export const Block = (props) =>
  <div className="block" 
       style={{"backgroundColor": adjustBrightness(props.color, -12),
               "borderColor": props.color}}
  />


export const Well = (props) =>
  <table className="well">
    <tbody>
      {Repeat(
        <tr>
          {Repeat(
            <td><Block color="#00FF00"/></td>, 
            props.width)}
        </tr>,
        props.height
      )}
    </tbody>
  </table> 


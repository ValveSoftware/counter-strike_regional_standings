### Roster Details<br />
Team Name: Red Feet<br />
Roster: coxa, GdA, Kaiserzy, palenscki, terran<br />
Global Rank: [325](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [81]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  527.3<br />
<br />
Final Rank Value (527.3) = Starting Rank Value (518.5) + Head To Head Adjustments (8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.5
- 400 + ( ( 0.063 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 518.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1094 | 2026-05-20 | VEXA          | L   | 0.889      | -            | -                | -                | -         |   -11.41 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            9 |     1145 | 2026-05-18 | HereWeGoAgain | W   | 0.876      | 0.354        | 0.000 (0.000)    | 0.031 (0.010)    | 0 (0.000) |    11.57 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            8 |     1188 | 2026-05-16 | ex-KRÜ        | L   | 0.862      | -            | -                | -                | -         |    -7.25 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            7 |     1222 | 2026-05-15 | MIBR Academy  | L   | 0.855      | -            | -                | -                | -         |    -4.86 | coxa, Gabrieltudotudo, GdA, palenscki, terran |
|            6 |     1282 | 2026-05-13 | Vasco         | W   | 0.841      | 0.354        | 0.009 (0.003)    | 0.264 (0.079)    | 0 (0.000) |    20.63 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            5 |     4373 | 2026-03-04 | ShindeN       | L   | 0.374      | -            | -                | -                | -         |    -0.54 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            4 |     4379 | 2026-03-04 | Imperial      | L   | 0.374      | -            | -                | -                | -         |    -0.74 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            3 |     6020 | 2026-01-23 | Sharks        | L   | 0.107      | -            | -                | -                | -         |    -0.03 | coxa, GdA, palenscki, spy1337, terran         |
|            2 |     6090 | 2026-01-21 | GameHunters   | L   | 0.096      | -            | -                | -                | -         |    -1.51 | coxa, GdA, palenscki, spy1337, terran         |
|            1 |     6099 | 2026-01-21 | Sharks        | W   | 0.095      | 0.384        | 0.055 (0.002)    | 0.472 (0.017)    | 1 (0.095) |     2.96 | coxa, GdA, palenscki, spy1337, terran         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

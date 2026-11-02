### Roster Details<br />
Team Name: ABT<br />
Roster: BeiranZz, blaze, hK, Ruy2k, ThozoR<br />
Global Rank: [242](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [167]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  651.8<br />
<br />
Final Rank Value (651.8) = Starting Rank Value (619.4) + Head To Head Adjustments (32.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.259[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.4
- 400 + ( ( 0.117 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 619.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1257 | 2026-10-01 | PURE          | L   | 0.986      | -            | -                | -                | -         |    -1.63 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            7 |     1259 | 2026-10-01 | Next Up       | W   | 0.985      | 0.349        | 0.000 (0.000)    | 0.031 (0.011)    | 1 (0.985) |    12.71 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            6 |     1266 | 2026-10-01 | Falcons Force | W   | 0.985      | 0.349        | 0.002 (0.001)    | 0.479 (0.164)    | 1 (0.985) |    25.27 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            5 |     1271 | 2026-10-01 | NAVI Junior   | L   | 0.985      | -            | -                | -                | -         |    -2.81 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            4 |     1276 | 2026-10-01 | aimclub       | L   | 0.984      | -            | -                | -                | -         |    -1.74 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            3 |     3445 | 2026-08-08 | 9INE          | L   | 0.626      | -            | -                | -                | -         |    -1.91 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            2 |     3515 | 2026-08-07 | REM           | W   | 0.619      | 0.818        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.619) |     4.40 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            1 |     3528 | 2026-08-07 | 9INE          | L   | 0.619      | -            | -                | -                | -         |    -1.87 | BeiranZz, blaze, hK, Ruy2k, ThozoR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

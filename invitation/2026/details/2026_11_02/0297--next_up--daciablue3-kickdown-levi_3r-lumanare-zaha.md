### Roster Details<br />
Team Name: Next Up<br />
Roster: DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha<br />
Global Rank: [297](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [199]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  570.3<br />
<br />
Final Rank Value (570.3) = Starting Rank Value (561.8) + Head To Head Adjustments (8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.098[<sup>2</sup>](#table1)

The average of these factors is 0.086<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 561.8
- 400 + ( ( 0.086 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 561.8


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
|            5 |     1256 | 2026-10-01 | Falcons Force | L   | 0.986      | -            | -                | -                | -         |    -4.91 | DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha |
|            4 |     1259 | 2026-10-01 | ABT           | L   | 0.985      | -            | -                | -                | -         |   -12.71 | DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha |
|            3 |     1268 | 2026-10-01 | aimclub       | L   | 0.985      | -            | -                | -                | -         |    -1.67 | DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha |
|            2 |     1272 | 2026-10-01 | PURE          | L   | 0.985      | -            | -                | -                | -         |    -1.12 | DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha |
|            1 |     1275 | 2026-10-01 | NAVI Junior   | W   | 0.984      | 0.349        | 0.011 (0.004)    | 0.596 (0.205)    | 1 (0.984) |    28.91 | DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

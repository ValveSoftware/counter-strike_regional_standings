### Roster Details<br />
Team Name: INFINITE<br />
Roster: adeX, DaciaBlue3, LkS, mhN1, RQBY<br />
Global Rank: [320](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [205]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  538.4<br />
<br />
Final Rank Value (538.4) = Starting Rank Value (526.7) + Head To Head Adjustments (11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.7
- 400 + ( ( 0.067 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 526.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     4718 | 2026-02-25 | Betclic       | L   | 0.328      | -            | -                | -                | -         |    -0.23 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|            9 |     4734 | 2026-02-25 | HEROIC        | L   | 0.326      | -            | -                | -                | -         |    -0.17 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|            8 |     4752 | 2026-02-24 | Mai Tai       | W   | 0.321      | 0.354        | 0.004 (0.000)    | 0.291 (0.033)    | 1 (0.321) |     8.59 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|            7 |     4760 | 2026-02-24 | Hermine       | W   | 0.320      | 0.354        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.320) |     5.03 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|            6 |     4781 | 2026-02-24 | Mai Tai       | L   | 0.319      | -            | -                | -                | -         |    -1.48 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|            5 |     6259 | 2026-01-16 | aimclub       | L   | 0.061      | -            | -                | -                | -         |    -0.20 | adeX, LkS, mhN1, RQBY, welnic     |
|            4 |     6265 | 2026-01-16 | Prestige      | W   | 0.061      | 0.338        | 0.001 (0.000)    | 0.007 (0.000)    | 1 (0.061) |     1.19 | adeX, LkS, mhN1, RQBY, welnic     |
|            3 |     6282 | 2026-01-16 | STATE         | L   | 0.060      | -            | -                | -                | -         |    -0.04 | adeX, LkS, mhN1, RQBY, welnic     |
|            2 |     6289 | 2026-01-16 | Johnny Speeds | L   | 0.060      | -            | -                | -                | -         |    -0.05 | adeX, LkS, mhN1, RQBY, welnic     |
|            1 |     6301 | 2026-01-16 | AaB           | L   | 0.059      | -            | -                | -                | -         |    -0.93 | adeX, LkS, mhN1, RQBY, welnic     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

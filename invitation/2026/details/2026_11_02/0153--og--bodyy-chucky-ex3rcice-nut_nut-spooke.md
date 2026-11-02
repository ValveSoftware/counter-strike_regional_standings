### Roster Details<br />
Team Name: OG<br />
Roster: bodyy, Chucky, Ex3rcice, nut nut, spooke<br />
Global Rank: [153](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [109]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  831.0<br />
<br />
Final Rank Value (831.0) = Starting Rank Value (779.0) + Head To Head Adjustments (52.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.500[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 779.0
- 400 + ( ( 0.202 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 779.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       33 | 2026-10-31 | Iberian Soul    | L   | 1.000      | -            | -                | -                | -         |    -2.20 | bodyy, Chucky, Ex3rcice, nut nut, spooke |
|           10 |       66 | 2026-10-30 | BC.Game         | W   | 1.000      | 0.349        | 0.028 (0.010)    | 0.503 (0.176)    | 1 (1.000) |    30.01 | bodyy, Chucky, Ex3rcice, nut nut, spooke |
|            9 |       73 | 2026-10-30 | SNITKO          | W   | 1.000      | 0.349        | 0.000 (0.000)    | 0.058 (0.020)    | 1 (1.000) |     4.68 | bodyy, Chucky, Ex3rcice, nut nut, spooke |
|            8 |       81 | 2026-10-30 | BC.Game         | L   | 1.000      | -            | -                | -                | -         |    -1.12 | bodyy, Chucky, Ex3rcice, nut nut, spooke |
|            7 |      717 | 2026-10-13 | Nuclear TigeRES | L   | 1.000      | -            | -                | -                | -         |    -2.10 | bodyy, Chucky, Ex3rcice, nut nut, spooke |
|            6 |      936 | 2026-10-08 | Sangal          | L   | 1.000      | -            | -                | -                | -         |    -1.45 | bodyy, Chucky, Ex3rcice, nut nut, spooke |
|            5 |     1008 | 2026-10-07 | G2 Ares         | W   | 1.000      | 0.349        | 0.009 (0.003)    | 0.715 (0.250)    | 1 (1.000) |    22.49 | bodyy, Chucky, Ex3rcice, nut nut, spooke |
|            4 |     1012 | 2026-10-07 | SINQU           | W   | 1.000      | 0.349        | 0.002 (0.001)    | 0.142 (0.050)    | 1 (1.000) |    13.21 | bodyy, Chucky, Ex3rcice, nut nut, spooke |
|            3 |     1018 | 2026-10-07 | Falcons Force   | L   | 1.000      | -            | -                | -                | -         |   -11.29 | bodyy, Chucky, Ex3rcice, nut nut, spooke |
|            2 |     1024 | 2026-10-07 | Orion Wanderers | W   | 1.000      | 0.349        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.20 | bodyy, Chucky, Ex3rcice, nut nut, spooke |
|            1 |     1026 | 2026-10-07 | PURE            | L   | 1.000      | -            | -                | -                | -         |    -3.43 | bodyy, Chucky, Ex3rcice, nut nut, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

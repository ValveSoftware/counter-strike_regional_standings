### Roster Details<br />
Team Name: 777<br />
Roster: Brave, Hagmeister, thomass1, zame, ZapR<br />
Global Rank: [281](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [169]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  531.3<br />
<br />
Final Rank Value (531.3) = Starting Rank Value (546.8) + Head To Head Adjustments (-15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 546.8
- 400 + ( ( 0.078 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 546.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1724 | 2026-01-14 | BASEMENT BOYS | L   | 0.885      | -            | -                | -                | -         |    -7.91 | akez, Hagmeister, macke, zame, ZapR     |
|            9 |     1727 | 2026-01-13 | The Glecs     | W   | 0.881      | 0.384        | 0.000 (0.000)    | 0.035 (0.012)    | 0 (0.000) |    12.71 | Hagmeister, macke, thomass1, zame, ZapR |
|            8 |     1742 | 2026-01-12 | BASEMENT BOYS | L   | 0.874      | -            | -                | -                | -         |    -7.77 | H4RR3, Hagmeister, thomass1, zame, ZapR |
|            7 |     1765 | 2026-01-10 | FUT Academy   | L   | 0.858      | -            | -                | -                | -         |   -13.90 | macke, Tapewaare, thomass1, zame, ZapR  |
|            6 |     1777 | 2026-01-06 | zajezdzacze   | L   | 0.832      | -            | -                | -                | -         |   -12.49 | macke, Tapewaare, thomass1, zame, ZapR  |
|            5 |     2920 | 2025-11-07 | Lilmix        | L   | 0.433      | -            | -                | -                | -         |    -2.85 | Brave, Hagmeister, thomass1, zame, ZapR |
|            4 |     2936 | 2025-11-07 | Sashi         | L   | 0.433      | -            | -                | -                | -         |    -0.39 | Brave, Hagmeister, thomass1, zame, ZapR |
|            3 |     2950 | 2025-11-07 | BetBoom       | L   | 0.432      | -            | -                | -                | -         |    -0.12 | Brave, Hagmeister, thomass1, zame, ZapR |
|            2 |     2964 | 2025-11-07 | Boys N Da HUD | W   | 0.432      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.432) |     3.92 | Brave, Hagmeister, thomass1, zame, ZapR |
|            1 |     2974 | 2025-11-07 | Betclic       | W   | 0.432      | 0.335        | 0.015 (0.002)    | 0.481 (0.070)    | 1 (0.432) |    13.34 | Brave, Hagmeister, thomass1, zame, ZapR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

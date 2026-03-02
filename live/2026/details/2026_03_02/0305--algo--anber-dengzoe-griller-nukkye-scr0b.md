### Roster Details<br />
Team Name: ALGO<br />
Roster: anber, Dengzoe, Griller, nukkye, Scr0b<br />
Global Rank: [305](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [181]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  493.7<br />
<br />
Final Rank Value (493.7) = Starting Rank Value (497.2) + Head To Head Adjustments (-3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.2
- 400 + ( ( 0.051 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 497.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     3081 | 2025-11-03 | Nuclear TigeRES  | L   | 0.407      | -            | -                | -                | -         |    -0.14 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           16 |     3276 | 2025-10-27 | MASONIC          | L   | 0.360      | -            | -                | -                | -         |    -1.37 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           15 |     3314 | 2025-10-26 | NOVAQ            | L   | 0.354      | -            | -                | -                | -         |    -0.37 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           14 |     3375 | 2025-10-25 | ENCE Academy     | L   | 0.347      | -            | -                | -                | -         |    -1.66 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           13 |     3395 | 2025-10-25 | Square Sausages  | W   | 0.346      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.03 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           12 |     3438 | 2025-10-24 | The Glecs        | L   | 0.341      | -            | -                | -                | -         |    -5.22 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           11 |     3566 | 2025-10-19 | The Last Resort  | L   | 0.308      | -            | -                | -                | -         |    -1.40 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           10 |     3594 | 2025-10-18 | m1x              | W   | 0.299      | 0.384        | 0.000 (0.000)    | 0.047 (0.005)    | 0 (0.000) |     5.62 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            9 |     3614 | 2025-10-17 | The Last Resort  | L   | 0.293      | -            | -                | -                | -         |    -1.29 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            8 |     4348 | 2025-09-28 | Mousquetaires    | L   | 0.167      | -            | -                | -                | -         |    -2.59 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            7 |     4405 | 2025-09-27 | THE              | L   | 0.161      | -            | -                | -                | -         |    -2.52 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            6 |     4464 | 2025-09-26 | Mousquetaires    | W   | 0.153      | 0.384        | 0.000 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     2.43 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            5 |     4693 | 2025-09-18 | m1x              | L   | 0.101      | -            | -                | -                | -         |    -1.41 | anber, Damkilde, Dengzoe, Few, Scr0b   |
|            4 |     4753 | 2025-09-17 | Square Sausages  | W   | 0.091      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.05 | anber, Damkilde, Dengzoe, Few, Scr0b   |
|            3 |     4840 | 2025-09-14 | NIP Impact       | W   | 0.072      | 0.384        | 0.047 (0.001)    | 0.113 (0.003)    | 0 (0.000) |     1.93 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|            2 |     4893 | 2025-09-13 | Mousquetaires    | L   | 0.066      | -            | -                | -                | -         |    -0.36 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|            1 |     5153 | 2025-09-07 | ex-Zero Tenacity | L   | 0.027      | -            | -                | -                | -         |    -0.17 | anber, Dengzoe, Few, Scr0b, St0m4k     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

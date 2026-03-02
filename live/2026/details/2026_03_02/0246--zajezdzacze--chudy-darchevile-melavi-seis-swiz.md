### Roster Details<br />
Team Name: zajezdzacze<br />
Roster: chudy, darchevile, Melavi, sEIS, swiz<br />
Global Rank: [246](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [156]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  608.7<br />
<br />
Final Rank Value (608.7) = Starting Rank Value (566.3) + Head To Head Adjustments (42.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 566.3
- 400 + ( ( 0.088 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 566.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      193 | 2026-02-24 | INFINITE           | L   | 1.000      | -            | -                | -                | -         |   -16.44 | chudy, darchevile, Melavi, swiz, tomiko |
|           17 |      211 | 2026-02-24 | ASTRAL             | L   | 1.000      | -            | -                | -                | -         |    -5.25 | chudy, darchevile, Melavi, swiz, tomiko |
|           16 |      215 | 2026-02-24 | INFINITE           | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.111 (0.039)    | 1 (1.000) |    14.39 | chudy, darchevile, Melavi, swiz, tomiko |
|           15 |      645 | 2026-02-15 | Inner Circle       | L   | 1.000      | -            | -                | -                | -         |    -2.08 | chudy, darchevile, Melavi, swiz, tomiko |
|           14 |     1326 | 2026-01-25 | UNiTY              | L   | 0.958      | -            | -                | -                | -         |    -4.79 | chudy, darchevile, Melavi, sEIS, swiz   |
|           13 |     1407 | 2026-01-23 | ex-Fingers Crossed | L   | 0.946      | -            | -                | -                | -         |    -3.53 | chudy, darchevile, Melavi, sEIS, swiz   |
|           12 |     1531 | 2026-01-19 | BC.Game            | W   | 0.918      | 0.371        | 0.008 (0.003)    | 0.139 (0.047)    | 0 (0.000) |    21.01 | chudy, darchevile, Melavi, Nami, swiz   |
|           11 |     1647 | 2026-01-16 | CSDIILIT           | W   | 0.900      | 0.333        | 0.000 (0.000)    | 0.397 (0.119)    | 0 (0.000) |    18.44 | chudy, darchevile, Melavi, sEIS, swiz   |
|           10 |     1722 | 2026-01-14 | FUT Academy        | W   | 0.885      | 0.333        | 0.001 (0.000)    | 0.049 (0.015)    | 0 (0.000) |    12.17 | chudy, darchevile, Melavi, sEIS, swiz   |
|            9 |     1764 | 2026-01-10 | MASONIC            | L   | 0.859      | -            | -                | -                | -         |    -4.53 | chudy, darchevile, Melavi, sEIS, swiz   |
|            8 |     1777 | 2026-01-06 | 777                | W   | 0.832      | 0.333        | 0.000 (0.000)    | 0.067 (0.018)    | 0 (0.000) |    12.49 | chudy, darchevile, Melavi, sEIS, swiz   |
|            7 |     1977 | 2025-12-17 | Nexus              | L   | 0.699      | -            | -                | -                | -         |    -2.53 | AdrieN, chudy, darchevile, Melavi, Nami |
|            6 |     1985 | 2025-12-16 | Lazer Cats         | L   | 0.697      | -            | -                | -                | -         |    -2.77 | AdrieN, chudy, darchevile, Melavi, Nami |
|            5 |     4503 | 2025-09-25 | Nexus              | W   | 0.147      | 0.435        | 0.001 (0.000)    | 0.684 (0.044)    | 0 (0.000) |     4.38 | AdrieN, chudy, darchevile, Melavi, Nami |
|            4 |     4592 | 2025-09-22 | Alliance           | L   | 0.125      | -            | -                | -                | -         |    -0.05 | AdrieN, chudy, darchevile, Melavi, Nami |
|            3 |     4791 | 2025-09-15 | AMKAL              | W   | 0.080      | 0.384        | 0.002 (0.000)    | 0.175 (0.005)    | 0 (0.000) |     1.75 | AdrieN, chudy, darchevile, Melavi, Nami |
|            2 |     4884 | 2025-09-13 | SENZA              | W   | 0.066      | 0.384        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.82 | AdrieN, chudy, darchevile, Melavi, Nami |
|            1 |     4927 | 2025-09-12 | Wildcard Academy   | L   | 0.060      | -            | -                | -                | -         |    -1.08 | chudy, darchevile, Melavi, Nami, yvro   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

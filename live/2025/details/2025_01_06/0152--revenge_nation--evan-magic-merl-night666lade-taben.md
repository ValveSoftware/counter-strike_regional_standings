### Roster Details<br />
Team Name: Revenge Nation<br />
Roster: Evan, MagiC, MERL, NIGHT666LADE, TABEN<br />
Global Rank: [152](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [105]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  717.0<br />
<br />
Final Rank Value (717.0) = Starting Rank Value (698.9) + Head To Head Adjustments (18.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.9
- 400 + ( ( 0.151 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 698.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      564 | 2024-11-23 | NRG              | L   | 0.909      | -            | -                | -                | -         |    -2.12 | Evan, MagiC, MERL, NIGHT666LADE, TABEN      |
|           37 |     1501 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.609      | 0.477        | 0.015 (0.004)    | 0.420 (0.122)    | 0 (0.000) |    14.82 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           36 |     1506 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.609      | 0.477        | 0.015 (0.004)    | 0.420 (0.122)    | 0 (0.000) |    15.37 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           35 |     1536 | 2024-10-08 | Party Astronauts | L   | 0.603      | -            | -                | -                | -         |    -3.87 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           34 |     1541 | 2024-10-08 | Party Astronauts | L   | 0.602      | -            | -                | -                | -         |    -4.00 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           33 |     1571 | 2024-10-07 | E-Xolos LAZER    | L   | 0.596      | -            | -                | -                | -         |    -8.48 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           32 |     1573 | 2024-10-07 | E-Xolos LAZER    | W   | 0.596      | 0.477        | 0.008 (0.002)    | 0.191 (0.054)    | 0 (0.000) |    10.55 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           31 |     1694 | 2024-10-03 | LAG              | W   | 0.569      | 0.477        | 0.004 (0.001)    | 0.101 (0.027)    | 0 (0.000) |     7.18 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           30 |     1698 | 2024-10-03 | LAG              | W   | 0.569      | 0.477        | 0.004 (0.001)    | 0.101 (0.027)    | 0 (0.000) |     7.53 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           29 |     1768 | 2024-10-01 | FLUFFY AIMERS    | L   | 0.556      | -            | -                | -                | -         |    -3.42 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           28 |     1791 | 2024-10-01 | Nouns            | L   | 0.555      | -            | -                | -                | -         |    -1.63 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           27 |     1793 | 2024-10-01 | Nouns            | L   | 0.554      | -            | -                | -                | -         |    -1.66 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           26 |     1819 | 2024-09-30 | M80              | L   | 0.549      | -            | -                | -                | -         |    -0.86 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           25 |     1821 | 2024-09-30 | M80              | L   | 0.549      | -            | -                | -                | -         |    -0.87 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           24 |     2055 | 2024-09-24 | Legacy           | L   | 0.509      | -            | -                | -                | -         |    -2.14 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           23 |     2057 | 2024-09-24 | Legacy           | L   | 0.509      | -            | -                | -                | -         |    -2.19 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           22 |     2095 | 2024-09-23 | InControl        | W   | 0.503      | 0.371        | 0.006 (0.001)    | 0.066 (0.012)    | 0 (0.000) |     6.96 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           21 |     2212 | 2024-09-19 | vagrants         | W   | 0.475      | 0.371        | 0.005 (0.001)    | 0.172 (0.030)    | 0 (0.000) |     8.68 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           20 |     2251 | 2024-09-18 | Wildcard         | L   | 0.468      | -            | -                | -                | -         |    -0.45 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           19 |     2253 | 2024-09-18 | Wildcard         | L   | 0.468      | -            | -                | -                | -         |    -0.45 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           18 |     2362 | 2024-09-14 | Dangerous        | W   | 0.442      | -            | -                | -                | 0 (0.000) |     2.44 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           17 |     2398 | 2024-09-13 | timbermen        | L   | 0.436      | -            | -                | -                | -         |    -3.17 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           16 |     2399 | 2024-09-13 | timbermen        | L   | 0.436      | -            | -                | -                | -         |    -3.25 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           15 |     2426 | 2024-09-12 | jahsdnmasjdm     | L   | 0.429      | -            | -                | -                | -         |    -9.94 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           14 |     2658 | 2024-09-04 | vagrants         | L   | 0.376      | -            | -                | -                | -         |    -5.38 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           13 |     2665 | 2024-09-04 | vagrants         | W   | 0.376      | 0.477        | 0.005 (0.001)    | 0.172 (0.031)    | 0 (0.000) |     6.61 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           12 |     2691 | 2024-09-03 | BOSS             | L   | 0.369      | -            | -                | -                | -         |    -1.24 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           11 |     2694 | 2024-09-03 | BOSS             | L   | 0.369      | -            | -                | -                | -         |    -1.25 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           10 |     3499 | 2024-08-11 | USA              | L   | 0.216      | -            | -                | -                | -         |    -5.17 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|            9 |     3599 | 2024-08-07 | E-Xolos LAZER    | L   | 0.189      | -            | -                | -                | -         |    -2.72 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            8 |     3604 | 2024-08-07 | Mythic           | W   | 0.189      | -            | -                | -                | 0 (0.000) |     1.81 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            7 |     3605 | 2024-08-07 | Mythic           | L   | 0.189      | -            | -                | -                | -         |    -4.18 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            6 |     3656 | 2024-08-06 | NRG              | L   | 0.183      | -            | -                | -                | -         |    -0.33 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            5 |     3661 | 2024-08-06 | NRG              | L   | 0.182      | -            | -                | -                | -         |    -0.33 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            4 |     3859 | 2024-07-31 | Take Flyte       | W   | 0.143      | 0.477        | 0.003 (0.000)    | 0.231 (0.016)    | -         |     2.66 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            3 |     3864 | 2024-07-31 | Take Flyte       | W   | 0.143      | 0.477        | -                | 0.231 (0.016)    | -         |     2.69 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            2 |     3956 | 2024-07-29 | LAG              | W   | 0.130      | 0.371        | 0.004 (0.000)    | -                | -         |     1.87 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            1 |     4021 | 2024-07-27 | Canada           | L   | 0.115      | -            | -                | -                | -         |    -1.96 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,091.90)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

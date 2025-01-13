### Roster Details<br />
Team Name: Revenge Nation<br />
Roster: Evan, MagiC, MERL, NIGHT666LADE, TABEN<br />
Global Rank: [153](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [106]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  714.3<br />
<br />
Final Rank Value (714.3) = Starting Rank Value (696.7) + Head To Head Adjustments (17.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 696.7
- 400 + ( ( 0.150 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 696.7


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
|           38 |      605 | 2024-11-23 | NRG              | L   | 0.863      | -            | -                | -                | -         |    -1.83 | Evan, MagiC, MERL, NIGHT666LADE, TABEN      |
|           37 |     1542 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.563      | 0.477        | 0.016 (0.004)    | 0.408 (0.109)    | 0 (0.000) |    13.86 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           36 |     1547 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.563      | 0.477        | 0.016 (0.004)    | 0.408 (0.109)    | 0 (0.000) |    14.31 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           35 |     1577 | 2024-10-08 | Party Astronauts | L   | 0.556      | -            | -                | -                | -         |    -3.63 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           34 |     1582 | 2024-10-08 | Party Astronauts | L   | 0.556      | -            | -                | -                | -         |    -3.75 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           33 |     1612 | 2024-10-07 | E-Xolos LAZER    | L   | 0.550      | -            | -                | -                | -         |    -7.90 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           32 |     1614 | 2024-10-07 | E-Xolos LAZER    | W   | 0.550      | 0.477        | 0.008 (0.002)    | 0.176 (0.046)    | 0 (0.000) |     9.65 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           31 |     1735 | 2024-10-03 | LAG              | W   | 0.523      | 0.477        | 0.004 (0.001)    | 0.089 (0.022)    | 0 (0.000) |     6.40 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           30 |     1739 | 2024-10-03 | LAG              | W   | 0.523      | 0.477        | 0.004 (0.001)    | 0.089 (0.022)    | 0 (0.000) |     6.69 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           29 |     1809 | 2024-10-01 | FLUFFY AIMERS    | L   | 0.510      | -            | -                | -                | -         |    -3.06 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           28 |     1832 | 2024-10-01 | Nouns            | L   | 0.508      | -            | -                | -                | -         |    -1.48 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           27 |     1834 | 2024-10-01 | Nouns            | L   | 0.508      | -            | -                | -                | -         |    -1.50 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           26 |     1860 | 2024-09-30 | M80              | L   | 0.503      | -            | -                | -                | -         |    -0.82 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           25 |     1862 | 2024-09-30 | M80              | L   | 0.502      | -            | -                | -                | -         |    -0.83 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           24 |     2096 | 2024-09-24 | Legacy           | L   | 0.463      | -            | -                | -                | -         |    -1.86 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           23 |     2098 | 2024-09-24 | Legacy           | L   | 0.463      | -            | -                | -                | -         |    -1.89 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           22 |     2136 | 2024-09-23 | InControl        | W   | 0.457      | 0.371        | 0.007 (0.001)    | 0.059 (0.010)    | 0 (0.000) |     6.34 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           21 |     2253 | 2024-09-19 | vagrants         | W   | 0.429      | 0.371        | 0.005 (0.001)    | 0.167 (0.026)    | 0 (0.000) |     7.79 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           20 |     2292 | 2024-09-18 | Wildcard         | L   | 0.422      | -            | -                | -                | -         |    -0.29 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           19 |     2294 | 2024-09-18 | Wildcard         | L   | 0.422      | -            | -                | -                | -         |    -0.29 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           18 |     2403 | 2024-09-14 | Dangerous        | W   | 0.396      | -            | -                | -                | 0 (0.000) |     2.18 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           17 |     2439 | 2024-09-13 | timbermen        | L   | 0.390      | -            | -                | -                | -         |    -2.89 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           16 |     2440 | 2024-09-13 | timbermen        | L   | 0.390      | -            | -                | -                | -         |    -2.96 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           15 |     2467 | 2024-09-12 | jahsdnmasjdm     | L   | 0.383      | -            | -                | -                | -         |    -8.87 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           14 |     2699 | 2024-09-04 | vagrants         | L   | 0.330      | -            | -                | -                | -         |    -4.72 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           13 |     2706 | 2024-09-04 | vagrants         | W   | 0.330      | 0.477        | 0.005 (0.001)    | 0.167 (0.026)    | 0 (0.000) |     5.78 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           12 |     2732 | 2024-09-03 | BOSS             | L   | 0.323      | -            | -                | -                | -         |    -1.03 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           11 |     2735 | 2024-09-03 | BOSS             | L   | 0.323      | -            | -                | -                | -         |    -1.04 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           10 |     3540 | 2024-08-11 | USA              | L   | 0.170      | -            | -                | -                | -         |    -4.07 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|            9 |     3640 | 2024-08-07 | E-Xolos LAZER    | L   | 0.143      | -            | -                | -                | -         |    -2.07 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            8 |     3645 | 2024-08-07 | Mythic           | W   | 0.143      | -            | -                | -                | 0 (0.000) |     1.37 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            7 |     3646 | 2024-08-07 | Mythic           | L   | 0.142      | -            | -                | -                | -         |    -3.15 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            6 |     3697 | 2024-08-06 | NRG              | L   | 0.136      | -            | -                | -                | -         |    -0.23 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            5 |     3702 | 2024-08-06 | NRG              | L   | 0.136      | -            | -                | -                | -         |    -0.23 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            4 |     3900 | 2024-07-31 | Take Flyte       | W   | 0.097      | 0.477        | 0.003 (0.000)    | 0.229 (0.011)    | -         |     1.80 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            3 |     3905 | 2024-07-31 | Take Flyte       | W   | 0.096      | 0.477        | -                | 0.229 (0.011)    | -         |     1.81 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            2 |     3997 | 2024-07-29 | LAG              | W   | 0.084      | 0.371        | 0.004 (0.000)    | -                | -         |     1.14 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            1 |     4062 | 2024-07-27 | Canada           | L   | 0.069      | -            | -                | -                | -         |    -1.17 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,017.94)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Revenge Nation<br />
Roster: Evan, MagiC, MERL, NIGHT666LADE, TABEN<br />
Global Rank: [151](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [106]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  718.7<br />
<br />
Final Rank Value (718.7) = Starting Rank Value (699.4) + Head To Head Adjustments (19.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.4
- 400 + ( ( 0.154 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 699.4


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
|           38 |      549 | 2024-11-23 | NRG              | L   | 0.961      | -            | -                | -                | -         |    -2.35 | Evan, MagiC, MERL, NIGHT666LADE, TABEN      |
|           37 |     1486 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.662      | 0.477        | 0.014 (0.005)    | 0.447 (0.141)    | 0 (0.000) |    15.90 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           36 |     1491 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.662      | 0.477        | 0.014 (0.005)    | 0.447 (0.141)    | 0 (0.000) |    16.56 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           35 |     1521 | 2024-10-08 | Party Astronauts | L   | 0.655      | -            | -                | -                | -         |    -4.16 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           34 |     1526 | 2024-10-08 | Party Astronauts | L   | 0.655      | -            | -                | -                | -         |    -4.32 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           33 |     1556 | 2024-10-07 | E-Xolos LAZER    | L   | 0.649      | -            | -                | -                | -         |    -9.13 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           32 |     1558 | 2024-10-07 | E-Xolos LAZER    | W   | 0.648      | 0.477        | 0.007 (0.002)    | 0.216 (0.067)    | 0 (0.000) |    11.58 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           31 |     1679 | 2024-10-03 | LAG              | W   | 0.622      | 0.477        | 0.004 (0.001)    | 0.119 (0.035)    | 0 (0.000) |     7.88 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           30 |     1683 | 2024-10-03 | LAG              | W   | 0.622      | 0.477        | 0.004 (0.001)    | 0.119 (0.035)    | 0 (0.000) |     8.31 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           29 |     1753 | 2024-10-01 | FLUFFY AIMERS    | L   | 0.609      | -            | -                | -                | -         |    -3.85 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           28 |     1776 | 2024-10-01 | Nouns            | L   | 0.607      | -            | -                | -                | -         |    -1.80 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           27 |     1778 | 2024-10-01 | Nouns            | L   | 0.607      | -            | -                | -                | -         |    -1.83 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           26 |     1804 | 2024-09-30 | M80              | L   | 0.601      | -            | -                | -                | -         |    -0.86 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           25 |     1806 | 2024-09-30 | M80              | L   | 0.601      | -            | -                | -                | -         |    -0.86 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           24 |     2040 | 2024-09-24 | Legacy           | L   | 0.562      | -            | -                | -                | -         |    -2.21 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           23 |     2042 | 2024-09-24 | Legacy           | L   | 0.562      | -            | -                | -                | -         |    -2.26 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           22 |     2080 | 2024-09-23 | InControl        | W   | 0.556      | 0.371        | 0.006 (0.001)    | 0.076 (0.016)    | 0 (0.000) |     7.63 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           21 |     2197 | 2024-09-19 | vagrants         | W   | 0.528      | 0.371        | 0.004 (0.001)    | 0.187 (0.037)    | 0 (0.000) |     9.70 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           20 |     2236 | 2024-09-18 | Wildcard         | L   | 0.521      | -            | -                | -                | -         |    -0.48 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           19 |     2238 | 2024-09-18 | Wildcard         | L   | 0.521      | -            | -                | -                | -         |    -0.49 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           18 |     2347 | 2024-09-14 | Dangerous        | W   | 0.494      | -            | -                | -                | 0 (0.000) |     2.76 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           17 |     2383 | 2024-09-13 | timbermen        | L   | 0.489      | -            | -                | -                | -         |    -3.44 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           16 |     2384 | 2024-09-13 | timbermen        | L   | 0.488      | -            | -                | -                | -         |    -3.54 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           15 |     2411 | 2024-09-12 | jahsdnmasjdm     | L   | 0.482      | -            | -                | -                | -         |   -11.13 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           14 |     2643 | 2024-09-04 | vagrants         | L   | 0.429      | -            | -                | -                | -         |    -6.12 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           13 |     2650 | 2024-09-04 | vagrants         | W   | 0.428      | 0.477        | 0.004 (0.001)    | 0.187 (0.038)    | 0 (0.000) |     7.55 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           12 |     2676 | 2024-09-03 | BOSS             | L   | 0.422      | -            | -                | -                | -         |    -1.53 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           11 |     2679 | 2024-09-03 | BOSS             | L   | 0.422      | -            | -                | -                | -         |    -1.55 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           10 |     3484 | 2024-08-11 | USA              | L   | 0.269      | -            | -                | -                | -         |    -6.43 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|            9 |     3584 | 2024-08-07 | E-Xolos LAZER    | L   | 0.242      | -            | -                | -                | -         |    -3.45 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            8 |     3589 | 2024-08-07 | Mythic           | W   | 0.241      | -            | -                | -                | 0 (0.000) |     2.37 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            7 |     3590 | 2024-08-07 | Mythic           | L   | 0.241      | -            | -                | -                | -         |    -5.31 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            6 |     3641 | 2024-08-06 | NRG              | L   | 0.235      | -            | -                | -                | -         |    -0.47 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            5 |     3646 | 2024-08-06 | NRG              | L   | 0.235      | -            | -                | -                | -         |    -0.47 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            4 |     3844 | 2024-07-31 | Take Flyte       | W   | 0.195      | 0.477        | 0.003 (0.000)    | 0.242 (0.023)    | -         |     3.61 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            3 |     3849 | 2024-07-31 | Take Flyte       | W   | 0.195      | 0.477        | -                | 0.242 (0.023)    | -         |     3.66 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            2 |     3941 | 2024-07-29 | LAG              | W   | 0.182      | 0.371        | 0.004 (0.000)    | -                | -         |     2.70 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            1 |     4006 | 2024-07-27 | Canada           | L   | 0.168      | -            | -                | -                | -         |    -2.85 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,176.06)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

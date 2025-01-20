### Roster Details<br />
Team Name: Revenge Nation<br />
Roster: Evan, MagiC, MERL, NIGHT666LADE, TABEN<br />
Global Rank: [153](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [106]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  710.6<br />
<br />
Final Rank Value (710.6) = Starting Rank Value (694.0) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 694.0
- 400 + ( ( 0.148 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 694.0


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
|           38 |      609 | 2024-11-23 | NRG              | L   | 0.834      | -            | -                | -                | -         |    -1.77 | Evan, MagiC, MERL, NIGHT666LADE, TABEN      |
|           37 |     1546 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.535      | 0.477        | 0.016 (0.004)    | 0.402 (0.102)    | 0 (0.000) |    13.19 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           36 |     1551 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.534      | 0.477        | 0.016 (0.004)    | 0.402 (0.102)    | 0 (0.000) |    13.60 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           35 |     1581 | 2024-10-08 | Party Astronauts | L   | 0.528      | -            | -                | -                | -         |    -3.51 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           34 |     1586 | 2024-10-08 | Party Astronauts | L   | 0.528      | -            | -                | -                | -         |    -3.63 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           33 |     1616 | 2024-10-07 | E-Xolos LAZER    | L   | 0.521      | -            | -                | -                | -         |    -7.54 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           32 |     1618 | 2024-10-07 | E-Xolos LAZER    | W   | 0.521      | 0.477        | 0.008 (0.002)    | 0.168 (0.042)    | 0 (0.000) |     9.10 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           31 |     1739 | 2024-10-03 | LAG              | W   | 0.495      | 0.477        | 0.004 (0.001)    | 0.083 (0.020)    | 0 (0.000) |     6.12 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           30 |     1743 | 2024-10-03 | LAG              | W   | 0.494      | 0.477        | 0.004 (0.001)    | 0.083 (0.020)    | 0 (0.000) |     6.38 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           29 |     1813 | 2024-10-01 | FLUFFY AIMERS    | L   | 0.482      | -            | -                | -                | -         |    -2.89 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           28 |     1836 | 2024-10-01 | Nouns            | L   | 0.480      | -            | -                | -                | -         |    -1.43 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           27 |     1838 | 2024-10-01 | Nouns            | L   | 0.480      | -            | -                | -                | -         |    -1.45 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           26 |     1864 | 2024-09-30 | M80              | L   | 0.474      | -            | -                | -                | -         |    -0.82 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           25 |     1866 | 2024-09-30 | M80              | L   | 0.474      | -            | -                | -                | -         |    -0.83 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           24 |     2100 | 2024-09-24 | Legacy           | L   | 0.435      | -            | -                | -                | -         |    -1.82 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           23 |     2102 | 2024-09-24 | Legacy           | L   | 0.435      | -            | -                | -                | -         |    -1.85 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           22 |     2140 | 2024-09-23 | InControl        | W   | 0.429      | 0.371        | 0.006 (0.001)    | 0.055 (0.009)    | 0 (0.000) |     5.96 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           21 |     2257 | 2024-09-19 | vagrants         | W   | 0.401      | 0.371        | 0.005 (0.001)    | 0.164 (0.024)    | 0 (0.000) |     7.24 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           20 |     2296 | 2024-09-18 | Wildcard         | L   | 0.394      | -            | -                | -                | -         |    -0.27 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           19 |     2298 | 2024-09-18 | Wildcard         | L   | 0.394      | -            | -                | -                | -         |    -0.27 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           18 |     2407 | 2024-09-14 | Dangerous        | W   | 0.367      | -            | -                | -                | 0 (0.000) |     2.03 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           17 |     2443 | 2024-09-13 | timbermen        | L   | 0.361      | -            | -                | -                | -         |    -2.76 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           16 |     2444 | 2024-09-13 | timbermen        | L   | 0.361      | -            | -                | -                | -         |    -2.82 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           15 |     2471 | 2024-09-12 | jahsdnmasjdm     | L   | 0.354      | -            | -                | -                | -         |    -8.21 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           14 |     2703 | 2024-09-04 | vagrants         | L   | 0.301      | -            | -                | -                | -         |    -4.33 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           13 |     2710 | 2024-09-04 | vagrants         | W   | 0.301      | 0.477        | 0.005 (0.001)    | 0.164 (0.024)    | 0 (0.000) |     5.26 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           12 |     2736 | 2024-09-03 | BOSS             | L   | 0.295      | -            | -                | -                | -         |    -0.93 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           11 |     2739 | 2024-09-03 | BOSS             | L   | 0.294      | -            | -                | -                | -         |    -0.94 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           10 |     3544 | 2024-08-11 | USA              | L   | 0.142      | -            | -                | -                | -         |    -3.38 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|            9 |     3644 | 2024-08-07 | E-Xolos LAZER    | L   | 0.115      | -            | -                | -                | -         |    -1.66 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            8 |     3649 | 2024-08-07 | Mythic           | W   | 0.114      | -            | -                | -                | 0 (0.000) |     1.08 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            7 |     3650 | 2024-08-07 | Mythic           | L   | 0.114      | -            | -                | -                | -         |    -2.53 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            6 |     3701 | 2024-08-06 | NRG              | L   | 0.108      | -            | -                | -                | -         |    -0.18 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            5 |     3706 | 2024-08-06 | NRG              | L   | 0.108      | -            | -                | -                | -         |    -0.18 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            4 |     3904 | 2024-07-31 | Take Flyte       | W   | 0.068      | 0.477        | 0.003 (0.000)    | 0.228 (0.007)    | -         |     1.27 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            3 |     3909 | 2024-07-31 | Take Flyte       | W   | 0.068      | 0.477        | 0.003 (0.000)    | 0.228 (0.007)    | -         |     1.27 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            2 |     4001 | 2024-07-29 | LAG              | W   | 0.055      | -            | -                | -                | -         |     0.75 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            1 |     4066 | 2024-07-27 | Canada           | L   | 0.041      | -            | -                | -                | -         |    -0.69 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($972.39)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

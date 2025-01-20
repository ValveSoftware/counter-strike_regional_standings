### Roster Details<br />
Team Name: Revenge Nation<br />
Roster: Evan, MagiC, MERL, NIGHT666LADE, TABEN<br />
Global Rank: [152](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [105]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  709.2<br />
<br />
Final Rank Value (709.2) = Starting Rank Value (693.0) + Head To Head Adjustments (16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.0
- 400 + ( ( 0.148 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 693.0


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
|           38 |      618 | 2024-11-23 | NRG              | L   | 0.821      | -            | -                | -                | -         |    -1.73 | Evan, MagiC, MERL, NIGHT666LADE, TABEN      |
|           37 |     1555 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.521      | 0.477        | 0.015 (0.004)    | 0.399 (0.099)    | 0 (0.000) |    12.87 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           36 |     1560 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.521      | 0.477        | 0.015 (0.004)    | 0.399 (0.099)    | 0 (0.000) |    13.26 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           35 |     1590 | 2024-10-08 | Party Astronauts | L   | 0.514      | -            | -                | -                | -         |    -3.45 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           34 |     1595 | 2024-10-08 | Party Astronauts | L   | 0.514      | -            | -                | -                | -         |    -3.56 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           33 |     1625 | 2024-10-07 | E-Xolos LAZER    | L   | 0.508      | -            | -                | -                | -         |    -7.36 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           32 |     1627 | 2024-10-07 | E-Xolos LAZER    | W   | 0.508      | 0.477        | 0.008 (0.002)    | 0.164 (0.040)    | 0 (0.000) |     8.84 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           31 |     1748 | 2024-10-03 | LAG              | W   | 0.481      | 0.477        | 0.004 (0.001)    | 0.081 (0.019)    | 0 (0.000) |     5.98 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           30 |     1752 | 2024-10-03 | LAG              | W   | 0.481      | 0.477        | 0.004 (0.001)    | 0.081 (0.019)    | 0 (0.000) |     6.23 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           29 |     1822 | 2024-10-01 | FLUFFY AIMERS    | L   | 0.468      | -            | -                | -                | -         |    -2.81 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           28 |     1845 | 2024-10-01 | Nouns            | L   | 0.466      | -            | -                | -                | -         |    -1.41 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           27 |     1847 | 2024-10-01 | Nouns            | L   | 0.466      | -            | -                | -                | -         |    -1.43 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           26 |     1873 | 2024-09-30 | M80              | L   | 0.461      | -            | -                | -                | -         |    -0.82 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           25 |     1875 | 2024-09-30 | M80              | L   | 0.460      | -            | -                | -                | -         |    -0.82 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           24 |     2109 | 2024-09-24 | Legacy           | L   | 0.421      | -            | -                | -                | -         |    -1.79 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           23 |     2111 | 2024-09-24 | Legacy           | L   | 0.421      | -            | -                | -                | -         |    -1.82 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           22 |     2149 | 2024-09-23 | InControl        | W   | 0.415      | 0.371        | 0.006 (0.001)    | 0.053 (0.008)    | 0 (0.000) |     5.77 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           21 |     2266 | 2024-09-19 | vagrants         | W   | 0.387      | 0.371        | 0.005 (0.001)    | 0.163 (0.023)    | 0 (0.000) |     6.97 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           20 |     2305 | 2024-09-18 | Wildcard         | L   | 0.380      | -            | -                | -                | -         |    -0.26 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           19 |     2307 | 2024-09-18 | Wildcard         | L   | 0.380      | -            | -                | -                | -         |    -0.26 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           18 |     2416 | 2024-09-14 | Dangerous        | W   | 0.354      | -            | -                | -                | 0 (0.000) |     1.96 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           17 |     2452 | 2024-09-13 | timbermen        | L   | 0.348      | -            | -                | -                | -         |    -2.69 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           16 |     2453 | 2024-09-13 | timbermen        | L   | 0.348      | -            | -                | -                | -         |    -2.75 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           15 |     2480 | 2024-09-12 | jahsdnmasjdm     | L   | 0.341      | -            | -                | -                | -         |    -7.89 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           14 |     2712 | 2024-09-04 | vagrants         | L   | 0.288      | -            | -                | -                | -         |    -4.14 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           13 |     2719 | 2024-09-04 | vagrants         | W   | 0.288      | 0.477        | 0.005 (0.001)    | 0.163 (0.022)    | 0 (0.000) |     5.02 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           12 |     2745 | 2024-09-03 | BOSS             | L   | 0.281      | -            | -                | -                | -         |    -0.88 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           11 |     2748 | 2024-09-03 | BOSS             | L   | 0.281      | -            | -                | -                | -         |    -0.89 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           10 |     3553 | 2024-08-11 | USA              | L   | 0.128      | -            | -                | -                | -         |    -3.06 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|            9 |     3653 | 2024-08-07 | E-Xolos LAZER    | L   | 0.101      | -            | -                | -                | -         |    -1.47 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            8 |     3658 | 2024-08-07 | Mythic           | W   | 0.101      | -            | -                | -                | 0 (0.000) |     0.95 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            7 |     3659 | 2024-08-07 | Mythic           | L   | 0.100      | -            | -                | -                | -         |    -2.23 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            6 |     3710 | 2024-08-06 | NRG              | L   | 0.094      | -            | -                | -                | -         |    -0.15 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            5 |     3715 | 2024-08-06 | NRG              | L   | 0.094      | -            | -                | -                | -         |    -0.15 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            4 |     3913 | 2024-07-31 | Take Flyte       | W   | 0.055      | 0.477        | 0.002 (0.000)    | 0.228 (0.006)    | -         |     1.01 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            3 |     3918 | 2024-07-31 | Take Flyte       | W   | 0.054      | 0.477        | 0.002 (0.000)    | 0.228 (0.006)    | -         |     1.01 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            2 |     4010 | 2024-07-29 | LAG              | W   | 0.042      | -            | -                | -                | -         |     0.57 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            1 |     4075 | 2024-07-27 | Canada           | L   | 0.027      | -            | -                | -                | -         |    -0.46 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($950.67)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

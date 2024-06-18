### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, HeavyGod, k1to, MoDo, Nexius<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [40](../standings_global.md)<br />
Regional Rank: [29]( ../standings_europe.md)<br />
Final Rank Value:  1197.0<br />
<br />
Final Rank Value (1197.0) = Starting Rank Value (1188.9) + Head To Head Adjustments (8.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.614[<sup>1</sup>](#table2)
- Bounty Collected: 0.518[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.210[<sup>2</sup>](#table1)

The average of these factors is 0.388<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1188.9
- 400 + ( ( 0.388 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1188.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      685 | 2024-05-30 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -29.32 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           34 |      713 | 2024-05-29 | ATOX              | L   | 1.000      | -            | -                | -                | -         |   -26.12 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           33 |      972 | 2024-05-19 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -5.67 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           32 |      980 | 2024-05-18 | Liquid            | L   | 0.997      | -            | -                | -                | -         |    -3.33 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           31 |     1444 | 2024-05-01 | Insilio           | L   | 0.883      | -            | -                | -                | -         |   -22.63 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           30 |     1473 | 2024-04-30 | Sashi             | L   | 0.875      | -            | -                | -                | -         |   -15.72 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           29 |     1693 | 2024-04-20 | MIBR              | L   | 0.809      | -            | -                | -                | -         |    -3.31 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           28 |     1711 | 2024-04-19 | 9z                | W   | 0.805      | 0.589        | 0.525 (0.249)    | 0.749 (0.355)    | 1 (0.805) |    21.71 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           27 |     1721 | 2024-04-19 | Monte             | W   | 0.803      | 0.589        | 0.189 (0.089)    | 0.674 (0.319)    | 1 (0.803) |    12.17 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           26 |     1766 | 2024-04-18 | MIBR              | L   | 0.797      | -            | -                | -                | -         |    -3.29 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           25 |     1895 | 2024-04-14 | Aurora            | L   | 0.769      | -            | -                | -                | -         |    -3.22 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           24 |     1904 | 2024-04-13 | BetBoom           | W   | 0.763      | 0.684        | 0.414 (0.216)    | 0.798 (0.416)    | 0 (0.000) |    20.19 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           23 |     1913 | 2024-04-13 | BIG               | W   | 0.761      | 0.684        | 0.225 (0.117)    | 0.433 (0.225)    | 0 (0.000) |    17.18 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |     1925 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.755      | 0.684        | 0.315 (0.163)    | 0.497 (0.257)    | 0 (0.000) |    22.25 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |     1996 | 2024-04-10 | ENCE              | W   | 0.742      | 0.684        | 0.229 (0.116)    | 0.424 (0.215)    | 0 (0.000) |    19.47 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |     2076 | 2024-04-08 | Aurora            | L   | 0.729      | -            | -                | -                | -         |    -2.10 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     2698 | 2024-03-10 | SAW               | L   | 0.536      | -            | -                | -                | -         |    -5.04 | F1KU, k1to, Nexius, regali, s0und    |
|           18 |     2724 | 2024-03-09 | HEROIC            | W   | 0.528      | 0.535        | 0.354 (0.100)    | 0.545 (0.154)    | 0 (0.000) |    16.04 | F1KU, HeavyGod, k1to, Nexius, regali |
|           17 |     2763 | 2024-03-07 | Complexity        | W   | 0.517      | 0.535        | 0.426 (0.118)    | 0.442 (0.122)    | 0 (0.000) |    15.74 | F1KU, HeavyGod, k1to, Nexius, regali |
|           16 |     3107 | 2024-02-21 | GamerLegion       | L   | 0.415      | -            | -                | -                | -         |    -8.10 | F1KU, HeavyGod, k1to, Nexius, regali |
|           15 |     3140 | 2024-02-20 | Gaimin Gladiators | L   | 0.407      | -            | -                | -                | -         |    -6.14 | F1KU, HeavyGod, k1to, Nexius, regali |
|           14 |     3158 | 2024-02-19 | ex-Preasy         | W   | 0.402      | 0.143        | 0.038 (0.002)    | -                | 1 (0.402) |     2.35 | F1KU, HeavyGod, k1to, Nexius, regali |
|           13 |     3165 | 2024-02-19 | Apeks             | L   | 0.401      | -            | -                | -                | -         |    -7.50 | F1KU, HeavyGod, k1to, Nexius, regali |
|           12 |     3667 | 2024-01-23 | Falcons           | L   | 0.223      | -            | -                | -                | -         |    -0.62 | F1KU, HeavyGod, k1to, Nexius, regali |
|           11 |     3699 | 2024-01-22 | Vitality          | L   | 0.215      | -            | -                | -                | -         |    -0.08 | F1KU, HeavyGod, k1to, Nexius, regali |
|           10 |     3761 | 2024-01-20 | Nexus             | W   | 0.203      | -            | -                | -                | 0 (0.000) |     1.00 | F1KU, HeavyGod, k1to, Nexius, regali |
|            9 |     3766 | 2024-01-20 | BetBoom           | L   | 0.202      | -            | -                | -                | -         |    -0.40 | F1KU, HeavyGod, k1to, Nexius, regali |
|            8 |     3828 | 2024-01-19 | 3DMAX             | W   | 0.195      | 0.143        | 0.186 (0.005)    | 1.000 (0.028)    | -         |     3.60 | F1KU, HeavyGod, k1to, Nexius, regali |
|            7 |     3868 | 2024-01-18 | JANO              | W   | 0.189      | -            | -                | -                | -         |     0.12 | F1KU, HeavyGod, k1to, Nexius, regali |
|            6 |     3894 | 2024-01-18 | Cloud9            | L   | 0.188      | -            | -                | -                | -         |    -1.94 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     4073 | 2024-01-13 | Gaimin Gladiators | L   | 0.157      | -            | -                | -                | -         |    -2.45 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     4077 | 2024-01-13 | Permitta          | W   | 0.156      | 0.143        | -                | 0.885 (0.020)    | -         |     1.03 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     4079 | 2024-01-13 | ex-Anonymo        | W   | 0.156      | -            | -                | -                | -         |     0.18 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     4083 | 2024-01-13 | Nexus             | W   | 0.155      | -            | -                | -                | -         |     0.71 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     4126 | 2024-01-12 | Passion UA        | W   | 0.150      | -            | -                | -                | -         |     1.43 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,812.44)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      0.889 | $1,000.00      | $889.13         |
| 2024-04-20 |      0.810 | $10,000.00     | $8,104.74       |
| 2024-04-14 |      0.769 | $70,000.00     | $53,830.30      |
| 2024-03-10 |      0.537 | $12,500.00     | $6,708.32       |
| 2024-01-28 |      0.256 | $5,000.00      | $1,279.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, HeavyGod, k1to, MoDo, Nexius<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [43](../standings_global.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
Final Rank Value:  1160.4<br />
<br />
Final Rank Value (1160.4) = Starting Rank Value (1153.4) + Head To Head Adjustments (7.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.599[<sup>1</sup>](#table2)
- Bounty Collected: 0.493[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.179[<sup>2</sup>](#table1)

The average of these factors is 0.357<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1153.4
- 400 + ( ( 0.357 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1153.4


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
|           32 |      819 | 2024-05-30 | Chinggis Warriors | L   | 0.919      | -            | -                | -                | -         |   -26.57 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           31 |      847 | 2024-05-29 | ATOX              | L   | 0.911      | -            | -                | -                | -         |   -22.81 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           30 |     1106 | 2024-05-19 | paiN              | L   | 0.845      | -            | -                | -                | -         |    -3.99 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           29 |     1114 | 2024-05-18 | Liquid            | L   | 0.841      | -            | -                | -                | -         |    -2.63 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           28 |     1578 | 2024-05-01 | Insilio           | L   | 0.727      | -            | -                | -                | -         |   -18.03 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           27 |     1607 | 2024-04-30 | Sashi             | L   | 0.720      | -            | -                | -                | -         |   -11.96 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           26 |     1827 | 2024-04-20 | MIBR              | L   | 0.653      | -            | -                | -                | -         |    -2.31 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           25 |     1845 | 2024-04-19 | 9z                | W   | 0.649      | 0.589        | 0.586 (0.224)    | 0.749 (0.286)    | 1 (0.649) |    18.97 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           24 |     1855 | 2024-04-19 | Monte             | W   | 0.648      | 0.589        | 0.188 (0.071)    | 0.668 (0.255)    | 1 (0.648) |    10.87 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           23 |     1900 | 2024-04-18 | MIBR              | L   | 0.641      | -            | -                | -                | -         |    -2.27 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |     2029 | 2024-04-14 | Aurora            | L   | 0.613      | -            | -                | -                | -         |    -1.69 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |     2038 | 2024-04-13 | BetBoom           | W   | 0.607      | 0.684        | 0.406 (0.168)    | 0.745 (0.310)    | 0 (0.000) |    17.09 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |     2047 | 2024-04-13 | BIG               | W   | 0.606      | 0.684        | 0.215 (0.089)    | 0.405 (0.168)    | 0 (0.000) |    14.28 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     2059 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.599      | 0.684        | 0.340 (0.140)    | 0.512 (0.210)    | 0 (0.000) |    18.15 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           18 |     2130 | 2024-04-10 | ENCE              | W   | 0.586      | 0.684        | 0.216 (0.087)    | 0.399 (0.160)    | 0 (0.000) |    15.53 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           17 |     2210 | 2024-04-08 | Aurora            | L   | 0.573      | -            | -                | -                | -         |    -1.12 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           16 |     2831 | 2024-03-10 | SAW               | L   | 0.380      | -            | -                | -                | -         |    -3.91 | F1KU, k1to, Nexius, regali, s0und    |
|           15 |     2857 | 2024-03-09 | HEROIC            | W   | 0.373      | 0.535        | 0.338 (0.067)    | 0.480 (0.096)    | 0 (0.000) |    11.38 | F1KU, HeavyGod, k1to, Nexius, regali |
|           14 |     2896 | 2024-03-07 | Complexity        | W   | 0.361      | 0.535        | 0.440 (0.085)    | 0.427 (0.083)    | 0 (0.000) |    11.09 | F1KU, HeavyGod, k1to, Nexius, regali |
|           13 |     3240 | 2024-02-21 | GamerLegion       | L   | 0.259      | -            | -                | -                | -         |    -5.89 | F1KU, HeavyGod, k1to, Nexius, regali |
|           12 |     3273 | 2024-02-20 | Gaimin Gladiators | L   | 0.252      | -            | -                | -                | -         |    -4.08 | F1KU, HeavyGod, k1to, Nexius, regali |
|           11 |     3291 | 2024-02-19 | ex-Preasy         | W   | 0.247      | 0.143        | 0.030 (0.001)    | 0.228 (0.008)    | 1 (0.247) |     1.39 | F1KU, HeavyGod, k1to, Nexius, regali |
|           10 |     3298 | 2024-02-19 | Apeks             | L   | 0.245      | -            | -                | -                | -         |    -4.85 | F1KU, HeavyGod, k1to, Nexius, regali |
|            9 |     3800 | 2024-01-23 | Falcons           | L   | 0.068      | -            | -                | -                | -         |    -0.17 | F1KU, HeavyGod, k1to, Nexius, regali |
|            8 |     3832 | 2024-01-22 | Vitality          | L   | 0.060      | -            | -                | -                | -         |    -0.02 | F1KU, HeavyGod, k1to, Nexius, regali |
|            7 |     3894 | 2024-01-20 | Romania           | W   | 0.047      | -            | -                | -                | 0 (0.000) |     0.24 | F1KU, HeavyGod, k1to, Nexius, regali |
|            6 |     3899 | 2024-01-20 | BetBoom           | L   | 0.046      | -            | -                | -                | -         |    -0.08 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     3961 | 2024-01-19 | 3DMAX             | W   | 0.039      | 0.143        | 0.205 (0.001)    | 1.000 (0.006)    | -         |     0.78 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     4001 | 2024-01-18 | JANO              | W   | 0.034      | -            | -                | -                | -         |     0.02 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     4027 | 2024-01-18 | Cloud9            | L   | 0.033      | -            | -                | -                | -         |    -0.40 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     4206 | 2024-01-13 | Gaimin Gladiators | L   | 0.001      | -            | -                | -                | -         |    -0.02 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     4210 | 2024-01-13 | Permitta          | W   | 0.000      | -            | -                | -                | -         |     0.00 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,478.64)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      0.733 | $1,000.00      | $733.46         |
| 2024-04-20 |      0.655 | $10,000.00     | $6,548.01       |
| 2024-04-14 |      0.613 | $70,000.00     | $42,933.19      |
| 2024-03-10 |      0.381 | $12,500.00     | $4,762.40       |
| 2024-01-28 |      0.100 | $5,000.00      | $501.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

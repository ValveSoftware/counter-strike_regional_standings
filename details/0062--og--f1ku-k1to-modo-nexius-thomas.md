### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, k1to, MoDo, Nexius, Thomas<br />
Global Rank: [62](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1012.7<br />
<br />
Final Rank Value (1012.7) = Starting Rank Value (994.8) + Head To Head Adjustments (17.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.536[<sup>1</sup>](#table2)
- Bounty Collected: 0.422[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.118[<sup>2</sup>](#table1)

The average of these factors is 0.289<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 994.8
- 400 + ( ( 0.289 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 994.8


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
|           25 |      270 | 2024-07-30 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -1.40 | F1KU, k1to, MoDo, Nexius, Thomas     |
|           24 |      308 | 2024-07-29 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -0.20 | F1KU, k1to, MoDo, Nexius, Thomas     |
|           23 |     1721 | 2024-05-30 | Chinggis Warriors | L   | 0.745      | -            | -                | -                | -         |   -12.92 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |     1749 | 2024-05-29 | ATOX              | L   | 0.738      | -            | -                | -                | -         |   -16.70 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |     2008 | 2024-05-19 | paiN              | L   | 0.672      | -            | -                | -                | -         |    -2.87 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |     2016 | 2024-05-18 | Liquid            | L   | 0.668      | -            | -                | -                | -         |    -0.98 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     2480 | 2024-05-01 | Insilio           | L   | 0.554      | -            | -                | -                | -         |   -11.56 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           18 |     2509 | 2024-04-30 | Sashi             | L   | 0.546      | -            | -                | -                | -         |    -5.94 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           17 |     2729 | 2024-04-20 | MIBR              | L   | 0.480      | -            | -                | -                | -         |    -1.55 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           16 |     2747 | 2024-04-19 | 9z                | W   | 0.476      | 0.589        | 0.404 (0.113)    | 0.590 (0.165)    | 1 (0.476) |    14.02 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           15 |     2757 | 2024-04-19 | Monte             | W   | 0.474      | 0.589        | 0.057 (0.016)    | 0.149 (0.042)    | 1 (0.474) |     6.38 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           14 |     2802 | 2024-04-18 | MIBR              | L   | 0.468      | -            | -                | -                | -         |    -1.54 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           13 |     2931 | 2024-04-14 | Aurora            | L   | 0.440      | -            | -                | -                | -         |    -0.46 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           12 |     2940 | 2024-04-13 | BetBoom           | W   | 0.434      | 0.684        | 0.248 (0.073)    | 0.513 (0.152)    | 0 (0.000) |    12.10 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           11 |     2949 | 2024-04-13 | BIG               | W   | 0.432      | 0.684        | 0.154 (0.045)    | 0.290 (0.086)    | 0 (0.000) |    11.18 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           10 |     2961 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.426      | 0.684        | 0.253 (0.074)    | 0.531 (0.155)    | 0 (0.000) |    13.05 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            9 |     3032 | 2024-04-10 | ENCE              | W   | 0.413      | 0.684        | 0.173 (0.049)    | 0.422 (0.119)    | 0 (0.000) |    12.01 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            8 |     3112 | 2024-04-08 | Aurora            | L   | 0.400      | -            | -                | -                | -         |    -0.30 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            7 |     3733 | 2024-03-10 | SAW               | L   | 0.207      | -            | -                | -                | -         |    -1.83 | F1KU, k1to, Nexius, regali, s0und    |
|            6 |     3759 | 2024-03-09 | HEROIC            | W   | 0.199      | 0.535        | 0.224 (0.024)    | 0.354 (0.038)    | 0 (0.000) |     6.02 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     3798 | 2024-03-07 | Complexity        | W   | 0.188      | 0.535        | 0.341 (0.034)    | 0.364 (0.036)    | 0 (0.000) |     5.76 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     4142 | 2024-02-21 | GamerLegion       | L   | 0.086      | -            | -                | -                | -         |    -2.11 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     4175 | 2024-02-20 | Gaimin Gladiators | L   | 0.078      | -            | -                | -                | -         |    -1.35 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     4193 | 2024-02-19 | ex-Preasy         | W   | 0.073      | 0.143        | 0.011 (0.000)    | 0.102 (0.001)    | 1 (0.073) |     0.52 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     4200 | 2024-02-19 | Apeks             | L   | 0.072      | -            | -                | -                | -         |    -1.44 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,774.67)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-02 |      0.560 | $1,000.00      | $560.17         |
| 2024-04-20 |      0.482 | $10,000.00     | $4,815.13       |
| 2024-04-14 |      0.440 | $70,000.00     | $30,803.06      |
| 2024-03-10 |      0.208 | $12,500.00     | $2,596.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

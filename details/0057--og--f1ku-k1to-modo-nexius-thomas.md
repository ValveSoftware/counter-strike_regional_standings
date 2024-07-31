### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, k1to, MoDo, Nexius, Thomas<br />
Global Rank: [57](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1023.8<br />
<br />
Final Rank Value (1023.8) = Starting Rank Value (1014.9) + Head To Head Adjustments (8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.543[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.089[<sup>2</sup>](#table1)
- LAN Wins: 0.131[<sup>2</sup>](#table1)

The average of these factors is 0.298<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1014.9
- 400 + ( ( 0.298 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1014.9


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
|           25 |       62 | 2024-07-30 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -1.50 | F1KU, k1to, MoDo, Nexius, Thomas     |
|           24 |      100 | 2024-07-29 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -0.19 | F1KU, k1to, MoDo, Nexius, Thomas     |
|           23 |     1513 | 2024-05-30 | Chinggis Warriors | L   | 0.785      | -            | -                | -                | -         |   -21.56 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |     1541 | 2024-05-29 | ATOX              | L   | 0.777      | -            | -                | -                | -         |   -17.84 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |     1800 | 2024-05-19 | paiN              | L   | 0.711      | -            | -                | -                | -         |    -3.07 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |     1808 | 2024-05-18 | Liquid            | L   | 0.707      | -            | -                | -                | -         |    -2.13 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     2272 | 2024-05-01 | Insilio           | L   | 0.593      | -            | -                | -                | -         |   -12.85 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           18 |     2301 | 2024-04-30 | Sashi             | L   | 0.585      | -            | -                | -                | -         |    -6.75 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           17 |     2521 | 2024-04-20 | MIBR              | L   | 0.519      | -            | -                | -                | -         |    -1.70 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           16 |     2539 | 2024-04-19 | 9z                | W   | 0.515      | 0.589        | 0.412 (0.125)    | 0.625 (0.189)    | 1 (0.515) |    15.16 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           15 |     2549 | 2024-04-19 | Monte             | W   | 0.514      | 0.589        | 0.062 (0.019)    | 0.170 (0.051)    | 1 (0.514) |     6.96 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           14 |     2594 | 2024-04-18 | MIBR              | L   | 0.507      | -            | -                | -                | -         |    -1.70 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           13 |     2723 | 2024-04-14 | Aurora            | L   | 0.479      | -            | -                | -                | -         |    -0.55 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           12 |     2732 | 2024-04-13 | BetBoom           | W   | 0.473      | 0.684        | 0.259 (0.084)    | 0.554 (0.179)    | 0 (0.000) |    13.18 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           11 |     2741 | 2024-04-13 | BIG               | W   | 0.472      | 0.684        | 0.133 (0.043)    | 0.300 (0.097)    | 0 (0.000) |    10.95 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           10 |     2753 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.465      | 0.684        | 0.227 (0.072)    | 0.477 (0.152)    | 0 (0.000) |    14.09 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            9 |     2824 | 2024-04-10 | ENCE              | W   | 0.452      | 0.684        | 0.175 (0.054)    | 0.404 (0.125)    | 0 (0.000) |    13.07 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            8 |     2904 | 2024-04-08 | Aurora            | L   | 0.439      | -            | -                | -                | -         |    -0.35 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            7 |     3525 | 2024-03-10 | SAW               | L   | 0.246      | -            | -                | -                | -         |    -2.13 | F1KU, k1to, Nexius, regali, s0und    |
|            6 |     3551 | 2024-03-09 | HEROIC            | W   | 0.239      | 0.535        | 0.210 (0.027)    | 0.382 (0.049)    | 0 (0.000) |     7.22 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     3590 | 2024-03-07 | Complexity        | W   | 0.227      | 0.535        | 0.319 (0.039)    | 0.367 (0.045)    | 0 (0.000) |     6.94 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     3934 | 2024-02-21 | GamerLegion       | L   | 0.125      | -            | -                | -                | -         |    -3.02 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     3967 | 2024-02-20 | Gaimin Gladiators | L   | 0.117      | -            | -                | -                | -         |    -1.99 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     3985 | 2024-02-19 | ex-Preasy         | W   | 0.113      | 0.143        | 0.014 (0.000)    | 0.124 (0.002)    | 1 (0.113) |     0.80 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     3992 | 2024-02-19 | Apeks             | L   | 0.111      | -            | -                | -                | -         |    -2.18 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,436.55)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-31 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-02 |      0.599 | $1,000.00      | $599.33         |
| 2024-04-20 |      0.521 | $10,000.00     | $5,206.78       |
| 2024-04-14 |      0.479 | $70,000.00     | $33,544.57      |
| 2024-03-10 |      0.247 | $12,500.00     | $3,085.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

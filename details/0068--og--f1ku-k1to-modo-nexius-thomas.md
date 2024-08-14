### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, k1to, MoDo, Nexius, Thomas<br />
Global Rank: [68](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
<br />
Final Rank Value:  964.2<br />
<br />
Final Rank Value (964.2) = Starting Rank Value (943.0) + Head To Head Adjustments (21.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.522[<sup>1</sup>](#table2)
- Bounty Collected: 0.411[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 943.0
- 400 + ( ( 0.275 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 943.0


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
|           25 |      543 | 2024-07-30 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -1.15 | F1KU, k1to, MoDo, Nexius, Thomas     |
|           24 |      581 | 2024-07-29 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -0.22 | F1KU, k1to, MoDo, Nexius, Thomas     |
|           23 |     1994 | 2024-05-30 | Chinggis Warriors | L   | 0.691      | -            | -                | -                | -         |   -11.84 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |     2022 | 2024-05-29 | ATOX              | L   | 0.684      | -            | -                | -                | -         |   -15.27 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |     2281 | 2024-05-19 | paiN              | L   | 0.618      | -            | -                | -                | -         |    -1.05 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |     2289 | 2024-05-18 | Liquid            | L   | 0.614      | -            | -                | -                | -         |    -0.41 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     2753 | 2024-05-01 | Insilio           | L   | 0.500      | -            | -                | -                | -         |    -9.98 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           18 |     2782 | 2024-04-30 | Sashi             | L   | 0.492      | -            | -                | -                | -         |    -5.03 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           17 |     3002 | 2024-04-20 | MIBR              | L   | 0.425      | -            | -                | -                | -         |    -1.15 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           16 |     3020 | 2024-04-19 | 9z                | W   | 0.422      | 0.589        | 0.408 (0.101)    | 0.591 (0.147)    | 1 (0.422) |    12.73 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           15 |     3030 | 2024-04-19 | Monte             | W   | 0.420      | 0.589        | 0.101 (0.025)    | 0.425 (0.105)    | 1 (0.420) |     7.50 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           14 |     3075 | 2024-04-18 | MIBR              | L   | 0.414      | -            | -                | -                | -         |    -1.18 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           13 |     3204 | 2024-04-14 | Aurora            | L   | 0.386      | -            | -                | -                | -         |    -0.47 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           12 |     3213 | 2024-04-13 | BetBoom           | W   | 0.380      | 0.684        | 0.223 (0.058)    | 0.456 (0.118)    | 0 (0.000) |    10.36 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           11 |     3222 | 2024-04-13 | BIG               | W   | 0.378      | 0.684        | 0.155 (0.040)    | 0.275 (0.071)    | 0 (0.000) |    10.16 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           10 |     3234 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.372      | 0.684        | 0.236 (0.060)    | 0.498 (0.127)    | 0 (0.000) |    11.30 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            9 |     3305 | 2024-04-10 | ENCE              | W   | 0.359      | 0.684        | 0.160 (0.039)    | 0.393 (0.096)    | 0 (0.000) |    10.33 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            8 |     3385 | 2024-04-08 | Aurora            | L   | 0.346      | -            | -                | -                | -         |    -0.32 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            7 |     4006 | 2024-03-10 | SAW               | L   | 0.153      | -            | -                | -                | -         |    -0.25 | F1KU, k1to, Nexius, regali, s0und    |
|            6 |     4032 | 2024-03-09 | HEROIC            | W   | 0.145      | 0.535        | 0.220 (0.017)    | 0.353 (0.027)    | 0 (0.000) |     4.37 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     4071 | 2024-03-07 | Complexity        | W   | 0.133      | 0.535        | 0.369 (0.026)    | 0.403 (0.029)    | 0 (0.000) |     4.13 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     4415 | 2024-02-21 | GamerLegion       | L   | 0.032      | -            | -                | -                | -         |    -0.79 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     4448 | 2024-02-20 | Gaimin Gladiators | L   | 0.024      | -            | -                | -                | -         |    -0.43 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     4466 | 2024-02-19 | ex-Preasy         | W   | 0.019      | 0.143        | 0.009 (0.000)    | 0.077 (0.000)    | 1 (0.019) |     0.15 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     4473 | 2024-02-19 | Apeks             | L   | 0.018      | -            | -                | -                | -         |    -0.36 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,718.27)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-02 |      0.506 | $1,000.00      | $506.09         |
| 2024-04-20 |      0.427 | $10,000.00     | $4,274.34       |
| 2024-04-14 |      0.386 | $70,000.00     | $27,017.52      |
| 2024-03-10 |      0.154 | $12,500.00     | $1,920.32       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Arcade<br />
Roster: apocdud, foggers, Kobe, TRIPLUS, void<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [173](../standings_global.md)<br />
Regional Rank: [20]( ../standings_asia.md)<br />
Final Rank Value:  641.7<br />
<br />
Final Rank Value (641.7) = Starting Rank Value (683.2) + Head To Head Adjustments (-41.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.2
- 400 + ( ( 0.134 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 683.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |     1262 | 2024-05-15 | Bad News Kangaroos | L   | 0.818      | -            | -                | -                | -         |    -5.63 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           31 |     1265 | 2024-05-15 | Bad News Kangaroos | L   | 0.818      | -            | -                | -                | -         |    -5.92 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           30 |     1454 | 2024-05-08 | Mindfreak          | L   | 0.771      | -            | -                | -                | -         |    -8.00 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           29 |     1456 | 2024-05-08 | Mindfreak          | L   | 0.771      | -            | -                | -                | -         |    -8.50 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           28 |     1472 | 2024-05-07 | DXA                | L   | 0.765      | -            | -                | -                | -         |   -12.85 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           27 |     1474 | 2024-05-07 | DXA                | W   | 0.765      | 0.333        | 0.004 (0.001)    | 0.156 (0.040)    | 0 (0.000) |    11.39 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           26 |     1964 | 2024-04-17 | Rooster            | L   | 0.632      | -            | -                | -                | -         |    -5.44 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           25 |     1977 | 2024-04-17 | Vantage            | W   | 0.631      | 0.143        | 0.003 (0.000)    | 0.127 (0.011)    | 0 (0.000) |    11.14 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           24 |     2139 | 2024-04-10 | Vantage            | L   | 0.585      | -            | -                | -                | -         |    -8.22 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           23 |     2146 | 2024-04-10 | Vantage            | L   | 0.584      | -            | -                | -                | -         |    -8.65 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           22 |     2374 | 2024-04-03 | FlyQuest           | L   | 0.538      | -            | -                | -                | -         |    -0.43 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           21 |     2378 | 2024-04-03 | FlyQuest           | L   | 0.538      | -            | -                | -                | -         |    -0.43 | apocdud, foggers, Kobe, TRIPLUS, void     |
|           20 |     2500 | 2024-03-27 | Rooster            | L   | 0.491      | -            | -                | -                | -         |    -4.57 | apocdud, foggers, kibstar, Kobe, void     |
|           19 |     2503 | 2024-03-27 | Rooster            | L   | 0.491      | -            | -                | -                | -         |    -4.74 | apocdud, foggers, kibstar, Kobe, void     |
|           18 |     2548 | 2024-03-23 | KZG                | L   | 0.465      | -            | -                | -                | -         |    -7.52 | apocdud, foggers, Kobe, rekonz, void      |
|           17 |     2550 | 2024-03-23 | Bad News Kangaroos | L   | 0.464      | -            | -                | -                | -         |    -4.50 | apocdud, foggers, Kobe, rekonz, void      |
|           16 |     2943 | 2024-03-06 | KZG                | W   | 0.352      | 0.333        | 0.009 (0.001)    | 0.119 (0.014)    | 0 (0.000) |     5.60 | apocdud, foggers, Kobe, void, yourwombat  |
|           15 |     2950 | 2024-03-06 | KZG                | W   | 0.351      | 0.333        | 0.009 (0.001)    | 0.119 (0.014)    | 0 (0.000) |     5.78 | apocdud, foggers, Kobe, void, yourwombat  |
|           14 |     3118 | 2024-02-27 | Canon Event        | W   | 0.298      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.53 | apocdud, damyo, foggers, Kobe, void       |
|           13 |     3120 | 2024-02-27 | Canon Event        | W   | 0.298      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.58 | apocdud, damyo, foggers, Kobe, void       |
|           12 |     3255 | 2024-02-21 | Vantage            | L   | 0.257      | -            | -                | -                | -         |    -4.13 | apocdud, damyo, foggers, Kobe, void       |
|           11 |     3276 | 2024-02-20 | Cringexe           | W   | 0.251      | 0.143        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     2.05 | apocdud, damyo, foggers, Kobe, void       |
|           10 |     3278 | 2024-02-20 | gfg123321          | W   | 0.251      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     1.30 | apocdud, damyo, foggers, Kobe, void       |
|            9 |     3322 | 2024-02-18 | FlyQuest           | L   | 0.238      | -            | -                | -                | -         |    -0.20 | apocdud, damyo, foggers, Kobe, void       |
|            8 |     3323 | 2024-02-18 | KZG                | W   | 0.238      | 0.143        | 0.009 (0.000)    | 0.119 (0.004)    | 0 (0.000) |     4.19 | apocdud, damyo, foggers, Kobe, void       |
|            7 |     3326 | 2024-02-17 | FlyQuest           | L   | 0.236      | -            | -                | -                | -         |    -0.19 | apocdud, damyo, foggers, Kobe, void       |
|            6 |     3349 | 2024-02-16 | LYG                | W   | 0.230      | 0.303        | 0.005 (0.000)    | 0.054 (0.004)    | 0 (0.000) |     4.13 | apocdud, damyo, foggers, Kobe, void       |
|            5 |     3469 | 2024-02-13 | DXA                | L   | 0.205      | -            | -                | -                | -         |    -3.03 | apocdud, damyo, foggers, Kobe, SaVage     |
|            4 |     3471 | 2024-02-13 | disciples          | W   | 0.204      | -            | -                | -                | -         |     1.09 | apocdud, damyo, foggers, Kobe, SaVage     |
|            3 |     4035 | 2024-01-18 | Mindfreak          | L   | 0.031      | -            | -                | -                | -         |    -0.73 | apocdud, damyo, foggers, Kobe, yourwombat |
|            2 |     4037 | 2024-01-18 | sunday school      | W   | 0.030      | 0.143        | -                | 0.002 (0.000)    | -         |     0.23 | apocdud, damyo, foggers, Kobe, yourwombat |
|            1 |     4084 | 2024-01-17 | disciples          | W   | 0.024      | -            | -                | -                | -         |     0.13 | apocdud, damyo, foggers, Kobe, yourwombat |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,192.70)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.984 | $600.00        | $590.53         |
| 2024-03-23 |      0.465 | $662.00        | $307.61         |
| 2024-02-17 |      0.236 | $1,250.00      | $294.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

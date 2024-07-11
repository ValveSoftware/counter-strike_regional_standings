### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [26](../standings_global.md)<br />
Regional Rank: [2]( ../standings_asia.md)<br />
Final Rank Value:  1348.2<br />
<br />
Final Rank Value (1348.2) = Starting Rank Value (1334.8) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.517[<sup>1</sup>](#table2)
- Bounty Collected: 0.477[<sup>2</sup>](#table1)
- Opponent Network: 0.195[<sup>2</sup>](#table1)
- LAN Wins: 0.584[<sup>2</sup>](#table1)

The average of these factors is 0.443<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1334.8
- 400 + ( ( 0.443 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1334.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |      415 | 2024-06-09 | Rooster            | W   | 0.984      | 0.333        | 0.017 (0.006)    | 0.237 (0.078)    | 0 (0.000) |     2.68 | aliStair, dexter, INS, Liazz, Vexite |
|           57 |      471 | 2024-06-08 | Mindfreak          | W   | 0.978      | 0.333        | -                | 0.212 (0.069)    | -         |     1.51 | aliStair, dexter, INS, Liazz, Vexite |
|           56 |      523 | 2024-06-07 | Rooster            | L   | 0.971      | -            | -                | -                | -         |   -28.29 | aliStair, dexter, INS, Liazz, Vexite |
|           55 |      854 | 2024-05-28 | BIG                | L   | 0.908      | -            | -                | -                | -         |   -13.72 | aliStair, dexter, INS, Liazz, Vexite |
|           54 |      876 | 2024-05-27 | Spirit             | L   | 0.901      | -            | -                | -                | -         |    -0.89 | aliStair, dexter, INS, Liazz, Vexite |
|           53 |     1004 | 2024-05-22 | Mindfreak          | W   | 0.864      | 0.333        | -                | 0.212 (0.061)    | -         |     0.93 | aliStair, dexter, INS, Liazz, Vexite |
|           52 |     1008 | 2024-05-22 | Mindfreak          | W   | 0.864      | 0.333        | -                | 0.212 (0.061)    | -         |     0.94 | aliStair, dexter, INS, Liazz, Vexite |
|           51 |     1081 | 2024-05-20 | Canon Event        | W   | 0.852      | -            | -                | -                | -         |     0.16 | aliStair, dexter, INS, Liazz, Vexite |
|           50 |     1083 | 2024-05-20 | Canon Event        | W   | 0.851      | -            | -                | -                | -         |     0.16 | aliStair, dexter, INS, Liazz, Vexite |
|           49 |     1448 | 2024-05-08 | Liquid             | L   | 0.773      | -            | -                | -                | -         |    -5.49 | aliStair, dexter, INS, Liazz, Vexite |
|           48 |     1466 | 2024-05-07 | BetBoom            | W   | 0.766      | 0.889        | 0.406 (0.276)    | 0.745 (0.508)    | 1 (0.766) |    16.95 | aliStair, dexter, INS, Liazz, Vexite |
|           47 |     1510 | 2024-05-05 | Ninjas in Pyjamas  | W   | 0.752      | 0.889        | 0.340 (0.228)    | 0.512 (0.342)    | 1 (0.752) |    20.49 | aliStair, dexter, INS, Liazz, Vexite |
|           46 |     1524 | 2024-05-04 | PERA               | W   | 0.746      | 0.889        | 0.066 (0.044)    | 0.433 (0.287)    | 1 (0.746) |     2.56 | aliStair, dexter, INS, Liazz, Vexite |
|           45 |     1542 | 2024-05-03 | HEROIC             | L   | 0.739      | -            | -                | -                | -         |    -2.26 | aliStair, dexter, INS, Liazz, Vexite |
|           44 |     1570 | 2024-05-02 | BOSS               | W   | 0.732      | 0.889        | 0.021 (0.014)    | 0.349 (0.227)    | 1 (0.732) |     1.41 | aliStair, dexter, INS, Liazz, Vexite |
|           43 |     1593 | 2024-05-01 | Natus Vincere      | L   | 0.725      | -            | -                | -                | -         |    -0.90 | aliStair, dexter, INS, Liazz, Vexite |
|           42 |     1837 | 2024-04-20 | Bad News Kangaroos | W   | 0.652      | 0.143        | 0.029 (0.003)    | -                | -         |     1.28 | aliStair, dexter, INS, Liazz, Vexite |
|           41 |     1883 | 2024-04-19 | Rooster            | W   | 0.645      | -            | -                | -                | -         |     1.25 | aliStair, dexter, INS, Liazz, Vexite |
|           40 |     1890 | 2024-04-19 | Mindfreak          | W   | 0.644      | -            | -                | -                | -         |     0.74 | aliStair, dexter, INS, Liazz, Vexite |
|           39 |     2136 | 2024-04-10 | FaZe               | L   | 0.585      | -            | -                | -                | -         |    -0.79 | aliStair, dexter, INS, Liazz, Vexite |
|           38 |     2150 | 2024-04-10 | Nemiga             | W   | 0.584      | 0.624        | 0.498 (0.182)    | 0.678 (0.247)    | 1 (0.584) |     7.57 | aliStair, dexter, INS, Liazz, Vexite |
|           37 |     2200 | 2024-04-09 | Virtus.pro         | L   | 0.577      | -            | -                | -                | -         |    -1.68 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |     2231 | 2024-04-08 | Cloud9             | W   | 0.570      | 0.624        | 0.124 (0.044)    | 0.197 (0.070)    | 1 (0.570) |     7.93 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |     2374 | 2024-04-03 | Arcade             | W   | 0.538      | -            | -                | -                | -         |     0.43 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |     2378 | 2024-04-03 | Arcade             | W   | 0.538      | -            | -                | -                | -         |     0.43 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |     2499 | 2024-03-27 | KZG                | W   | 0.491      | -            | -                | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |     2505 | 2024-03-27 | KZG                | W   | 0.491      | -            | -                | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |     2770 | 2024-03-13 | Rooster            | W   | 0.398      | -            | -                | -                | -         |     0.73 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |     2778 | 2024-03-13 | Rooster            | W   | 0.398      | -            | -                | -                | -         |     0.74 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |     2946 | 2024-03-06 | DXA                | W   | 0.351      | -            | -                | -                | -         |     0.30 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     2948 | 2024-03-06 | DXA                | W   | 0.351      | -            | -                | -                | -         |     0.30 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     3096 | 2024-02-28 | Lynn Vision        | L   | 0.304      | -            | -                | -                | -         |    -7.22 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     3097 | 2024-02-27 | ATOX               | W   | 0.304      | -            | -                | -                | 1 (0.304) |     0.98 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     3117 | 2024-02-27 | JiJieHao           | W   | 0.298      | -            | -                | -                | 1 (0.298) |     0.06 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     3134 | 2024-02-25 | The MongolZ        | L   | 0.290      | -            | -                | -                | -         |    -0.25 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     3139 | 2024-02-25 | ATOX               | W   | 0.289      | -            | -                | -                | 1 (0.289) |     0.93 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     3199 | 2024-02-23 | Rooster            | W   | 0.271      | -            | -                | -                | -         |     0.47 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     3219 | 2024-02-22 | Rooster            | W   | 0.265      | -            | -                | -                | -         |     0.45 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     3222 | 2024-02-21 | Bad News Kangaroos | W   | 0.264      | -            | -                | -                | -         |     0.50 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     3247 | 2024-02-21 | Bad News Kangaroos | W   | 0.258      | 0.333        | 0.029 (0.002)    | -                | -         |     0.49 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     3251 | 2024-02-21 | Bad News Kangaroos | W   | 0.258      | 0.333        | 0.029 (0.002)    | -                | -         |     0.49 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     3304 | 2024-02-19 | Mindfreak          | W   | 0.244      | -            | -                | -                | -         |     0.24 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     3322 | 2024-02-18 | Arcade             | W   | 0.238      | -            | -                | -                | -         |     0.20 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     3325 | 2024-02-18 | MANTRA             | W   | 0.237      | -            | -                | -                | -         |     0.04 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     3326 | 2024-02-17 | Arcade             | W   | 0.236      | -            | -                | -                | -         |     0.19 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     3348 | 2024-02-16 | GR                 | W   | 0.230      | -            | -                | -                | -         |     0.19 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     3814 | 2024-01-23 | Mindfreak          | W   | 0.065      | -            | -                | -                | -         |     0.02 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     3843 | 2024-01-22 | Mindfreak          | W   | 0.058      | -            | -                | -                | -         |     0.02 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     3845 | 2024-01-22 | Bad News Kangaroos | W   | 0.057      | -            | -                | -                | -         |     0.11 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     3870 | 2024-01-21 | Bad News Kangaroos | W   | 0.051      | -            | -                | -                | -         |     0.10 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     3875 | 2024-01-20 | Rooster            | W   | 0.050      | -            | -                | -                | -         |     0.09 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     3879 | 2024-01-20 | Mindfreak          | W   | 0.050      | -            | -                | -                | -         |     0.01 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     3920 | 2024-01-20 | Vantage            | W   | 0.044      | -            | -                | -                | -         |     0.04 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     3976 | 2024-01-19 | Bad News Kangaroos | L   | 0.037      | -            | -                | -                | -         |    -1.11 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3987 | 2024-01-18 | RKON               | W   | 0.037      | -            | -                | -                | -         |     0.01 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     4134 | 2024-01-16 | sunday school      | W   | 0.018      | -            | -                | -                | -         |     0.00 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     4136 | 2024-01-16 | Mindfreak          | W   | 0.017      | -            | -                | -                | -         |     0.01 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     4166 | 2024-01-15 | disciples          | W   | 0.011      | -            | -                | -                | -         |     0.00 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,077.76)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.984 | $3,250.00      | $3,198.72       |
| 2024-06-02 |      0.941 | $4,000.00      | $3,764.01       |
| 2024-05-12 |      0.800 | $23,500.00     | $18,796.60      |
| 2024-04-14 |      0.612 | $6,000.00      | $3,670.40       |
| 2024-02-17 |      0.236 | $2,750.00      | $648.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

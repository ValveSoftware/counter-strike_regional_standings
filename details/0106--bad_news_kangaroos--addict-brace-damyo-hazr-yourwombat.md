### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, yourwombat<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [106](../standings_global.md)<br />
Regional Rank: [8]( ../standings_asia.md)<br />
Final Rank Value:  856.5<br />
<br />
Final Rank Value (856.5) = Starting Rank Value (844.7) + Head To Head Adjustments (11.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.394[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.155[<sup>2</sup>](#table1)

The average of these factors is 0.211<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 844.7
- 400 + ( ( 0.211 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 844.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      528 | 2024-06-07 | Mindfreak   | L   | 0.971      | -            | -                | -                | -         |   -17.79 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           38 |      597 | 2024-06-06 | Rooster     | L   | 0.964      | -            | -                | -                | -         |   -14.80 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           37 |     1001 | 2024-05-22 | KZG         | W   | 0.864      | 0.333        | 0.009 (0.003)    | 0.119 (0.034)    | 0 (0.000) |     6.38 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           36 |     1006 | 2024-05-22 | KZG         | W   | 0.864      | 0.333        | 0.009 (0.003)    | 0.119 (0.034)    | 0 (0.000) |     6.74 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           35 |     1262 | 2024-05-15 | Arcade      | W   | 0.818      | 0.333        | 0.005 (0.001)    | 0.123 (0.033)    | 0 (0.000) |     5.63 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           34 |     1265 | 2024-05-15 | Arcade      | W   | 0.818      | 0.333        | 0.005 (0.001)    | 0.123 (0.033)    | 0 (0.000) |     5.92 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           33 |     1537 | 2024-05-03 | FURIA       | L   | 0.739      | -            | -                | -                | -         |    -0.44 | ADDICT, BRACE, damyo, hazr, pz         |
|           32 |     1582 | 2024-05-01 | ENCE        | L   | 0.726      | -            | -                | -                | -         |    -1.00 | ADDICT, BRACE, damyo, hazr, pz         |
|           31 |     1615 | 2024-04-30 | MOUZ        | L   | 0.719      | -            | -                | -                | -         |    -0.05 | ADDICT, BRACE, damyo, hazr, pz         |
|           30 |     1837 | 2024-04-20 | FlyQuest    | L   | 0.652      | -            | -                | -                | -         |    -1.28 | ADDICT, BRACE, damyo, hazr, pz         |
|           29 |     1841 | 2024-04-20 | Rooster     | W   | 0.651      | 0.143        | 0.017 (0.002)    | 0.237 (0.022)    | 0 (0.000) |    10.21 | ADDICT, BRACE, damyo, hazr, pz         |
|           28 |     1886 | 2024-04-19 | Mindfreak   | W   | 0.645      | -            | -                | -                | 0 (0.000) |     7.64 | ADDICT, BRACE, damyo, hazr, pz         |
|           27 |     1889 | 2024-04-19 | Rooster     | L   | 0.644      | -            | -                | -                | -         |   -10.13 | ADDICT, BRACE, damyo, hazr, pz         |
|           26 |     2138 | 2024-04-10 | Rooster     | W   | 0.585      | 0.333        | 0.017 (0.003)    | 0.237 (0.046)    | 0 (0.000) |     9.18 | ADDICT, BRACE, damyo, hazr, pz         |
|           25 |     2148 | 2024-04-10 | Rooster     | L   | 0.584      | -            | -                | -                | -         |    -9.43 | ADDICT, BRACE, damyo, hazr, pz         |
|           24 |     2373 | 2024-04-03 | DXA         | W   | 0.538      | 0.333        | 0.004 (0.001)    | 0.156 (0.028)    | -         |     4.65 | ADDICT, BRACE, damyo, hazr, pz         |
|           23 |     2377 | 2024-04-03 | DXA         | W   | 0.538      | 0.333        | 0.004 (0.001)    | 0.156 (0.028)    | -         |     4.83 | ADDICT, BRACE, damyo, hazr, pz         |
|           22 |     2497 | 2024-03-27 | Mindfreak   | L   | 0.491      | -            | -                | -                | -         |   -10.61 | ADDICT, BRACE, damyo, hazr, pz         |
|           21 |     2504 | 2024-03-27 | Mindfreak   | W   | 0.491      | 0.333        | 0.005 (0.001)    | 0.212 (0.035)    | -         |     4.91 | ADDICT, BRACE, damyo, hazr, pz         |
|           20 |     2547 | 2024-03-23 | DXA         | W   | 0.465      | 0.315        | -                | 0.156 (0.023)    | 1 (0.465) |     4.35 | ADDICT, BRACE, damyo, hazr, pz         |
|           19 |     2550 | 2024-03-23 | Arcade      | W   | 0.464      | -            | -                | -                | 1 (0.464) |     4.50 | ADDICT, BRACE, damyo, hazr, pz         |
|           18 |     2608 | 2024-03-20 | Canon Event | W   | 0.444      | -            | -                | -                | -         |     1.84 | ADDICT, BRACE, damyo, hazr, pz         |
|           17 |     2609 | 2024-03-20 | Canon Event | W   | 0.444      | -            | -                | -                | -         |     1.87 | ADDICT, BRACE, damyo, hazr, pz         |
|           16 |     2679 | 2024-03-16 | Gods Reign  | L   | 0.417      | -            | -                | -                | -         |    -6.66 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           15 |     2700 | 2024-03-15 | GRDX        | W   | 0.410      | 0.432        | 0.004 (0.001)    | -                | 1 (0.410) |     2.07 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           14 |     2733 | 2024-03-14 | Aurora      | L   | 0.404      | -            | -                | -                | -         |    -0.14 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           13 |     2945 | 2024-03-06 | Vantage     | W   | 0.352      | -            | -                | -                | -         |     3.08 | ADDICT, BRACE, damyo, hazr, pz         |
|           12 |     2947 | 2024-03-06 | Vantage     | W   | 0.351      | -            | -                | -                | -         |     3.16 | ADDICT, BRACE, damyo, hazr, pz         |
|           11 |     3201 | 2024-02-22 | Rooster     | L   | 0.270      | -            | -                | -                | -         |    -4.49 | ADDICT, BRACE, Hatz, hazr, pz          |
|           10 |     3220 | 2024-02-22 | Vantage     | W   | 0.265      | -            | -                | -                | -         |     2.42 | ADDICT, BRACE, Hatz, hazr, pz          |
|            9 |     3222 | 2024-02-21 | FlyQuest    | L   | 0.264      | -            | -                | -                | -         |    -0.50 | ADDICT, BRACE, Hatz, hazr, pz          |
|            8 |     3247 | 2024-02-21 | FlyQuest    | L   | 0.258      | -            | -                | -                | -         |    -0.49 | ADDICT, BRACE, Hatz, hazr, pz          |
|            7 |     3251 | 2024-02-21 | FlyQuest    | L   | 0.258      | -            | -                | -                | -         |    -0.49 | ADDICT, BRACE, Hatz, hazr, pz          |
|            6 |     3841 | 2024-01-22 | Rooster     | L   | 0.059      | -            | -                | -                | -         |    -0.99 | ADDICT, BRACE, Hatz, hazr, pz          |
|            5 |     3845 | 2024-01-22 | FlyQuest    | L   | 0.057      | -            | -                | -                | -         |    -0.11 | ADDICT, BRACE, Hatz, hazr, pz          |
|            4 |     3870 | 2024-01-21 | FlyQuest    | L   | 0.051      | -            | -                | -                | -         |    -0.10 | ADDICT, BRACE, Hatz, hazr, pz          |
|            3 |     3880 | 2024-01-20 | Rooster     | W   | 0.049      | -            | -                | -                | -         |     0.73 | ADDICT, BRACE, Hatz, hazr, pz          |
|            2 |     3976 | 2024-01-19 | FlyQuest    | W   | 0.037      | -            | -                | -                | -         |     1.11 | ADDICT, BRACE, Hatz, hazr, pz          |
|            1 |     3982 | 2024-01-18 | DXA         | W   | 0.037      | -            | -                | -                | -         |     0.09 | ADDICT, BRACE, Hatz, hazr, pz          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,463.27)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.984 | $1,050.00      | $1,033.43       |
| 2024-05-12 |      0.800 | $3,500.00      | $2,799.49       |
| 2024-03-23 |      0.465 | $3,308.00      | $1,537.10       |
| 2024-03-16 |      0.419 | $5,000.00      | $2,093.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: Altekz, Kristou, refrezh, roeJ, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [99](../standings_global.md)<br />
Regional Rank: [71]( ../standings_europe.md)<br />
Final Rank Value:  872.7<br />
<br />
Final Rank Value (872.7) = Starting Rank Value (812.9) + Head To Head Adjustments (59.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 812.9
- 400 + ( ( 0.204 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 812.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |     2470 | 2024-04-15 | Sashi             | L   | 0.532      | -            | -                | -                | -         |    -3.17 | Altekz, Kristou, refrezh, roeJ, TMB |
|           32 |     2498 | 2024-04-13 | 3DMAX             | L   | 0.519      | -            | -                | -                | -         |    -2.14 | Altekz, Kristou, refrezh, roeJ, TMB |
|           31 |     2650 | 2024-04-09 | kONO              | W   | 0.491      | 0.384        | 0.036 (0.007)    | 0.559 (0.105)    | 0 (0.000) |     6.72 | Altekz, Kristou, refrezh, roeJ, TMB |
|           30 |     2703 | 2024-04-07 | Zero Tenacity     | W   | 0.478      | 0.358        | 0.173 (0.030)    | 1.000 (0.171)    | 0 (0.000) |    11.70 | Altekz, Kristou, refrezh, roeJ, TMB |
|           29 |     3009 | 2024-03-22 | FORZE             | L   | 0.372      | -            | -                | -                | -         |    -4.49 | Altekz, Kristou, refrezh, roeJ, TMB |
|           28 |     3088 | 2024-03-18 | Sampi             | W   | 0.345      | 0.371        | 0.037 (0.005)    | 0.994 (0.127)    | 0 (0.000) |     6.49 | Altekz, Kristou, refrezh, roeJ, TMB |
|           27 |     3128 | 2024-03-16 | Passion UA        | W   | 0.332      | 0.371        | 0.163 (0.020)    | 1.000 (0.123)    | 0 (0.000) |     8.11 | Altekz, Kristou, refrezh, roeJ, TMB |
|           26 |     3184 | 2024-03-14 | Entropiq          | W   | 0.318      | -            | -                | -                | 0 (0.000) |     1.91 | Altekz, Kristou, refrezh, roeJ, TMB |
|           25 |     3255 | 2024-03-11 | Metizport         | L   | 0.301      | -            | -                | -                | -         |    -3.54 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           24 |     3268 | 2024-03-11 | HEROIC            | L   | 0.300      | -            | -                | -                | -         |    -0.13 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           23 |     3271 | 2024-03-11 | Permitta          | W   | 0.299      | 0.371        | 0.032 (0.004)    | 0.790 (0.087)    | 0 (0.000) |     6.11 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           22 |     3321 | 2024-03-09 | Fraud5            | W   | 0.284      | -            | -                | -                | 0 (0.000) |     2.41 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           21 |     3364 | 2024-03-07 | Secret            | W   | 0.271      | -            | -                | -                | 0 (0.000) |     1.39 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           20 |     3457 | 2024-03-03 | Gaimin Gladiators | W   | 0.248      | 0.143        | 0.053 (0.002)    | 0.432 (0.015)    | 0 (0.000) |     5.97 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           19 |     3466 | 2024-03-03 | BetBoom           | W   | 0.247      | 0.143        | 0.333 (0.012)    | 0.642 (0.023)    | -         |     7.59 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           18 |     3473 | 2024-03-03 | kONO              | W   | 0.246      | 0.143        | -                | 0.559 (0.020)    | -         |     3.92 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           17 |     3479 | 2024-03-03 | fnatic            | L   | 0.246      | -            | -                | -                | -         |    -0.11 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           16 |     3482 | 2024-03-03 | MOUZ NXT          | L   | 0.245      | -            | -                | -                | -         |    -1.61 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           15 |     3510 | 2024-03-01 | BetBoom           | L   | 0.234      | -            | -                | -                | -         |    -0.17 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           14 |     3532 | 2024-02-28 | fnatic            | W   | 0.221      | 0.500        | 0.428 (0.047)    | 0.666 (0.074)    | -         |     6.87 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           13 |     3686 | 2024-02-21 | ex-Guild Eagles   | L   | 0.173      | -            | -                | -                | -         |    -2.54 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           12 |     3717 | 2024-02-20 | PERA              | W   | 0.167      | -            | -                | -                | 1 (0.167) |     3.53 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           11 |     3743 | 2024-02-19 | OG                | L   | 0.160      | -            | -                | -                | -         |    -1.11 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           10 |     3746 | 2024-02-19 | HEROIC            | L   | 0.159      | -            | -                | -                | -         |    -0.06 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            9 |     3966 | 2024-02-09 | Gaimin Gladiators | W   | 0.092      | 0.371        | 0.053 (0.002)    | -                | -         |     2.22 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            8 |     3982 | 2024-02-08 | TSM               | W   | 0.085      | -            | -                | -                | -         |     0.89 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            7 |     3988 | 2024-02-07 | Into the Breach   | W   | 0.078      | -            | -                | -                | -         |     0.66 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            6 |     3997 | 2024-02-06 | Sangal            | W   | 0.072      | 0.371        | 0.195 (0.005)    | 0.860 (0.023)    | -         |     1.90 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            5 |     4008 | 2024-02-05 | Gaimin Gladiators | L   | 0.065      | -            | -                | -                | -         |    -0.47 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            4 |     4074 | 2024-02-02 | Metizport         | L   | 0.047      | -            | -                | -                | -         |    -0.52 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            3 |     4092 | 2024-02-02 | SINNERS           | W   | 0.045      | -            | -                | -                | -         |     1.12 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            2 |     4136 | 2024-01-31 | ex-Sprout         | W   | 0.032      | -            | -                | -                | -         |     0.17 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            1 |     4160 | 2024-01-30 | Entropiq          | W   | 0.024      | -            | -                | -                | -         |     0.15 | Altekz, dupreeh, refrezh, roeJ, TMB |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,646.07)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.526 | $1,600.00      | $841.37         |
| 2024-03-18 |      0.345 | $11,000.00     | $3,792.42       |
| 2024-02-09 |      0.092 | $11,000.00     | $1,012.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

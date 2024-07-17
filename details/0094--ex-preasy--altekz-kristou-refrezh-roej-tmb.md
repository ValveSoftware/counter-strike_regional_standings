### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: Altekz, Kristou, refrezh, roeJ, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [94](../standings_global.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
Final Rank Value:  924.3<br />
<br />
Final Rank Value (924.3) = Starting Rank Value (857.3) + Head To Head Adjustments (67.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.088[<sup>2</sup>](#table1)
- LAN Wins: 0.025[<sup>2</sup>](#table1)

The average of these factors is 0.213<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 857.3
- 400 + ( ( 0.213 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 857.3


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
|           37 |     2182 | 2024-04-15 | Sashi             | L   | 0.579      | -            | -                | -                | -         |    -4.34 | Altekz, Kristou, refrezh, roeJ, TMB |
|           36 |     2210 | 2024-04-13 | 3DMAX             | L   | 0.566      | -            | -                | -                | -         |    -2.90 | Altekz, Kristou, refrezh, roeJ, TMB |
|           35 |     2362 | 2024-04-09 | kONO              | W   | 0.538      | 0.384        | 0.042 (0.009)    | 0.595 (0.123)    | 0 (0.000) |     7.03 | Altekz, Kristou, refrezh, roeJ, TMB |
|           34 |     2415 | 2024-04-07 | Zero Tenacity     | W   | 0.525      | 0.358        | 0.154 (0.029)    | 1.000 (0.188)    | 0 (0.000) |    12.04 | Altekz, Kristou, refrezh, roeJ, TMB |
|           33 |     2721 | 2024-03-22 | FORZE             | L   | 0.420      | -            | -                | -                | -         |    -5.09 | Altekz, Kristou, refrezh, roeJ, TMB |
|           32 |     2800 | 2024-03-18 | Sampi             | W   | 0.392      | 0.371        | 0.045 (0.006)    | 0.975 (0.142)    | 0 (0.000) |     7.26 | Altekz, Kristou, refrezh, roeJ, TMB |
|           31 |     2840 | 2024-03-16 | Passion UA        | W   | 0.379      | 0.371        | 0.087 (0.012)    | 0.847 (0.119)    | 0 (0.000) |     7.93 | Altekz, Kristou, refrezh, roeJ, TMB |
|           30 |     2896 | 2024-03-14 | Entropiq          | W   | 0.365      | -            | -                | -                | 0 (0.000) |     1.93 | Altekz, Kristou, refrezh, roeJ, TMB |
|           29 |     2967 | 2024-03-11 | Metizport         | L   | 0.348      | -            | -                | -                | -         |    -4.21 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           28 |     2980 | 2024-03-11 | HEROIC            | L   | 0.347      | -            | -                | -                | -         |    -0.10 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           27 |     2983 | 2024-03-11 | Permitta          | W   | 0.346      | 0.371        | 0.039 (0.005)    | 0.794 (0.102)    | 0 (0.000) |     6.77 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           26 |     3033 | 2024-03-09 | Fraud5            | W   | 0.332      | -            | -                | -                | 0 (0.000) |     2.62 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           25 |     3076 | 2024-03-07 | Secret            | W   | 0.319      | -            | -                | -                | 0 (0.000) |     1.38 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           24 |     3169 | 2024-03-03 | Gaimin Gladiators | W   | 0.295      | 0.143        | 0.067 (0.003)    | -                | 0 (0.000) |     7.32 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           23 |     3178 | 2024-03-03 | BetBoom           | W   | 0.294      | 0.143        | 0.403 (0.017)    | 0.704 (0.030)    | -         |     9.12 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           22 |     3185 | 2024-03-03 | kONO              | W   | 0.294      | -            | -                | -                | -         |     4.54 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           21 |     3191 | 2024-03-03 | fnatic            | L   | 0.293      | -            | -                | -                | -         |    -0.17 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           20 |     3194 | 2024-03-03 | MOUZ NXT          | L   | 0.292      | -            | -                | -                | -         |    -1.95 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           19 |     3222 | 2024-03-01 | BetBoom           | L   | 0.281      | -            | -                | -                | -         |    -0.13 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           18 |     3244 | 2024-02-28 | fnatic            | W   | 0.268      | 0.500        | 0.300 (0.040)    | 0.632 (0.085)    | -         |     8.30 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           17 |     3398 | 2024-02-21 | ex-Guild Eagles   | L   | 0.221      | -            | -                | -                | -         |    -3.21 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           16 |     3429 | 2024-02-20 | PERA              | W   | 0.214      | -            | -                | -                | 1 (0.214) |     4.54 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           15 |     3455 | 2024-02-19 | OG                | L   | 0.207      | -            | -                | -                | -         |    -1.21 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           14 |     3458 | 2024-02-19 | HEROIC            | L   | 0.206      | -            | -                | -                | -         |    -0.04 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           13 |     3678 | 2024-02-09 | Gaimin Gladiators | W   | 0.139      | 0.371        | 0.067 (0.003)    | 0.488 (0.025)    | -         |     3.48 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           12 |     3694 | 2024-02-08 | TSM               | W   | 0.132      | -            | -                | -                | -         |     1.35 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           11 |     3700 | 2024-02-07 | Into the Breach   | W   | 0.125      | -            | -                | -                | -         |     1.02 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           10 |     3709 | 2024-02-06 | Sangal            | W   | 0.119      | 0.371        | 0.232 (0.010)    | 0.893 (0.039)    | -         |     3.19 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            9 |     3720 | 2024-02-05 | Gaimin Gladiators | L   | 0.112      | -            | -                | -                | -         |    -0.71 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            8 |     3786 | 2024-02-02 | Metizport         | L   | 0.094      | -            | -                | -                | -         |    -1.05 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            7 |     3804 | 2024-02-02 | SINNERS           | W   | 0.092      | 0.371        | -                | 0.744 (0.025)    | -         |     2.36 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            6 |     3848 | 2024-01-31 | ex-Sprout         | W   | 0.079      | -            | -                | -                | -         |     0.37 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            5 |     3872 | 2024-01-30 | Entropiq          | W   | 0.072      | -            | -                | -                | -         |     0.40 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            4 |     3924 | 2024-01-26 | ex-Sprout         | L   | 0.045      | -            | -                | -                | -         |    -1.21 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            3 |     4026 | 2024-01-21 | 3DMAX             | W   | 0.013      | -            | -                | -                | -         |     0.37 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            2 |     4050 | 2024-01-20 | MOUZ              | L   | 0.008      | -            | -                | -                | -         |     0.00 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            1 |     4066 | 2024-01-20 | FORZE             | W   | 0.006      | -            | -                | -                | -         |     0.02 | Altekz, dupreeh, refrezh, roeJ, TMB |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,760.58)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.573 | $1,600.00      | $916.93         |
| 2024-03-18 |      0.392 | $11,000.00     | $4,311.89       |
| 2024-02-09 |      0.139 | $11,000.00     | $1,531.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

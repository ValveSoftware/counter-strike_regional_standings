### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: Altekz, Kristou, refrezh, roeJ, TMB<br />
Global Rank: [109](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
<br />
Final Rank Value:  842.9<br />
<br />
Final Rank Value (842.9) = Starting Rank Value (791.0) + Head To Head Adjustments (51.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.014[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 791.0
- 400 + ( ( 0.189 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 791.0


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
|           29 |     2712 | 2024-04-15 | Sashi             | L   | 0.485      | -            | -                | -                | -         |    -2.46 | Altekz, Kristou, refrezh, roeJ, TMB |
|           28 |     2740 | 2024-04-13 | 3DMAX             | L   | 0.472      | -            | -                | -                | -         |    -0.17 | Altekz, Kristou, refrezh, roeJ, TMB |
|           27 |     2892 | 2024-04-09 | kONO              | W   | 0.444      | 0.384        | 0.029 (0.005)    | 0.537 (0.092)    | 0 (0.000) |     6.45 | Altekz, Kristou, refrezh, roeJ, TMB |
|           26 |     2945 | 2024-04-07 | Zero Tenacity     | W   | 0.431      | 0.358        | 0.139 (0.021)    | 1.000 (0.154)    | 0 (0.000) |    11.05 | Altekz, Kristou, refrezh, roeJ, TMB |
|           25 |     3251 | 2024-03-22 | FORZE             | L   | 0.325      | -            | -                | -                | -         |    -3.82 | Altekz, Kristou, refrezh, roeJ, TMB |
|           24 |     3330 | 2024-03-18 | Sampi             | W   | 0.297      | 0.371        | 0.028 (0.003)    | 1.000 (0.110)    | 0 (0.000) |     5.80 | Altekz, Kristou, refrezh, roeJ, TMB |
|           23 |     3370 | 2024-03-16 | Passion UA        | W   | 0.285      | 0.371        | 0.172 (0.018)    | 1.000 (0.106)    | 0 (0.000) |     7.25 | Altekz, Kristou, refrezh, roeJ, TMB |
|           22 |     3426 | 2024-03-14 | Entropiq          | W   | 0.271      | -            | -                | -                | 0 (0.000) |     1.74 | Altekz, Kristou, refrezh, roeJ, TMB |
|           21 |     3497 | 2024-03-11 | Metizport         | L   | 0.254      | -            | -                | -                | -         |    -2.88 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           20 |     3510 | 2024-03-11 | HEROIC            | L   | 0.252      | -            | -                | -                | -         |    -0.11 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           19 |     3513 | 2024-03-11 | Permitta          | W   | 0.251      | 0.371        | 0.025 (0.002)    | 0.799 (0.074)    | 0 (0.000) |     5.32 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           18 |     3563 | 2024-03-09 | Fraud5            | W   | 0.237      | -            | -                | -                | 0 (0.000) |     2.19 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           17 |     3606 | 2024-03-07 | Secret            | W   | 0.224      | -            | -                | -                | 0 (0.000) |     1.28 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           16 |     3699 | 2024-03-03 | Gaimin Gladiators | W   | 0.200      | 0.143        | 0.040 (0.001)    | 0.363 (0.010)    | 0 (0.000) |     4.74 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           15 |     3708 | 2024-03-03 | BetBoom           | W   | 0.199      | 0.143        | 0.259 (0.007)    | 0.554 (0.016)    | -         |     6.11 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           14 |     3715 | 2024-03-03 | kONO              | W   | 0.199      | 0.143        | -                | 0.537 (0.015)    | -         |     3.29 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           13 |     3721 | 2024-03-03 | fnatic            | L   | 0.199      | -            | -                | -                | -         |    -0.08 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           12 |     3724 | 2024-03-03 | MOUZ NXT          | L   | 0.197      | -            | -                | -                | -         |    -1.19 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           11 |     3752 | 2024-03-01 | BetBoom           | L   | 0.187      | -            | -                | -                | -         |    -0.16 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           10 |     3774 | 2024-02-28 | fnatic            | W   | 0.174      | 0.500        | 0.374 (0.032)    | 0.633 (0.055)    | -         |     5.40 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            9 |     3928 | 2024-02-21 | ex-Guild Eagles   | L   | 0.126      | -            | -                | -                | -         |    -1.80 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            8 |     3959 | 2024-02-20 | PERA              | W   | 0.119      | 0.143        | 0.048 (0.001)    | 0.452 (0.008)    | 1 (0.119) |     2.58 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            7 |     3985 | 2024-02-19 | OG                | L   | 0.113      | -            | -                | -                | -         |    -0.80 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            6 |     3988 | 2024-02-19 | HEROIC            | L   | 0.112      | -            | -                | -                | -         |    -0.04 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            5 |     4208 | 2024-02-09 | Gaimin Gladiators | W   | 0.045      | -            | -                | -                | -         |     1.05 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            4 |     4224 | 2024-02-08 | TSM               | W   | 0.037      | -            | -                | -                | -         |     0.41 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            3 |     4230 | 2024-02-07 | Into the Breach   | W   | 0.030      | -            | -                | -                | -         |     0.25 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            2 |     4239 | 2024-02-06 | Sangal            | W   | 0.025      | 0.371        | 0.221 (0.002)    | -                | -         |     0.68 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            1 |     4250 | 2024-02-05 | Gaimin Gladiators | L   | 0.018      | -            | -                | -                | -         |    -0.14 | Altekz, dupreeh, refrezh, roeJ, TMB |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,530.08)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.479 | $1,600.00      | $765.71         |
| 2024-03-18 |      0.297 | $11,000.00     | $3,272.25       |
| 2024-02-09 |      0.045 | $11,000.00     | $492.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

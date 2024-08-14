### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: Altekz, Kristou, refrezh, roeJ, TMB<br />
Global Rank: [127](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [89]( ../standings_europe.md)<br />
<br />
Final Rank Value:  772.3<br />
<br />
Final Rank Value (772.3) = Starting Rank Value (736.9) + Head To Head Adjustments (35.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.003[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 736.9
- 400 + ( ( 0.171 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 736.9


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
|           24 |     3193 | 2024-04-15 | Sashi             | L   | 0.392      | -            | -                | -                | -         |    -1.66 | Altekz, Kristou, refrezh, roeJ, TMB |
|           23 |     3221 | 2024-04-13 | 3DMAX             | L   | 0.378      | -            | -                | -                | -         |    -0.13 | Altekz, Kristou, refrezh, roeJ, TMB |
|           22 |     3373 | 2024-04-09 | kONO              | W   | 0.350      | 0.384        | 0.029 (0.004)    | 0.603 (0.081)    | 0 (0.000) |     6.67 | Altekz, Kristou, refrezh, roeJ, TMB |
|           21 |     3426 | 2024-04-07 | Zero Tenacity     | W   | 0.337      | 0.358        | 0.135 (0.016)    | 1.000 (0.121)    | 0 (0.000) |     8.92 | Altekz, Kristou, refrezh, roeJ, TMB |
|           20 |     3732 | 2024-03-22 | FORZE             | L   | 0.232      | -            | -                | -                | -         |    -2.66 | Altekz, Kristou, refrezh, roeJ, TMB |
|           19 |     3811 | 2024-03-18 | Sampi             | W   | 0.204      | 0.371        | 0.024 (0.002)    | 0.981 (0.074)    | 0 (0.000) |     4.24 | Altekz, Kristou, refrezh, roeJ, TMB |
|           18 |     3851 | 2024-03-16 | Passion UA        | W   | 0.192      | 0.371        | 0.168 (0.012)    | 1.000 (0.071)    | 0 (0.000) |     5.11 | Altekz, Kristou, refrezh, roeJ, TMB |
|           17 |     3907 | 2024-03-14 | Entropiq          | W   | 0.177      | -            | -                | -                | 0 (0.000) |     1.34 | Altekz, Kristou, refrezh, roeJ, TMB |
|           16 |     3978 | 2024-03-11 | Metizport         | L   | 0.160      | -            | -                | -                | -         |    -2.08 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           15 |     3991 | 2024-03-11 | HEROIC            | L   | 0.159      | -            | -                | -                | -         |    -0.08 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           14 |     3994 | 2024-03-11 | Permitta          | W   | 0.158      | 0.371        | 0.036 (0.002)    | 0.957 (0.056)    | 0 (0.000) |     3.80 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           13 |     4044 | 2024-03-09 | Fraud5            | W   | 0.144      | 0.371        | 0.003 (0.000)    | 0.043 (0.002)    | 0 (0.000) |     1.52 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           12 |     4087 | 2024-03-07 | Secret            | W   | 0.131      | -            | -                | -                | 0 (0.000) |     0.94 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           11 |     4180 | 2024-03-03 | Gaimin Gladiators | W   | 0.107      | 0.143        | 0.032 (0.000)    | 0.326 (0.005)    | 0 (0.000) |     2.42 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           10 |     4189 | 2024-03-03 | BetBoom           | W   | 0.106      | 0.143        | 0.223 (0.003)    | 0.456 (0.007)    | -         |     3.21 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            9 |     4196 | 2024-03-03 | kONO              | W   | 0.106      | 0.143        | 0.029 (0.000)    | 0.603 (0.009)    | -         |     2.16 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            8 |     4202 | 2024-03-03 | fnatic            | L   | 0.105      | -            | -                | -                | -         |    -0.06 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            7 |     4205 | 2024-03-03 | MOUZ NXT          | L   | 0.104      | -            | -                | -                | -         |    -0.59 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            6 |     4233 | 2024-03-01 | BetBoom           | L   | 0.093      | -            | -                | -                | -         |    -0.11 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            5 |     4255 | 2024-02-28 | fnatic            | W   | 0.080      | 0.500        | 0.352 (0.014)    | 0.639 (0.026)    | -         |     2.49 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            4 |     4409 | 2024-02-21 | ex-Guild Eagles   | L   | 0.033      | -            | -                | -                | -         |    -0.46 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            3 |     4440 | 2024-02-20 | ex-PERA           | W   | 0.026      | -            | -                | -                | 1 (0.026) |     0.60 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            2 |     4466 | 2024-02-19 | OG                | L   | 0.019      | -            | -                | -                | -         |    -0.15 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            1 |     4469 | 2024-02-19 | HEROIC            | L   | 0.019      | -            | -                | -                | -         |    -0.01 | Altekz, dupreeh, refrezh, roeJ, TMB |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,863.09)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.385 | $1,600.00      | $616.52         |
| 2024-03-18 |      0.204 | $11,000.00     | $2,246.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: Altekz, Kristou, refrezh, roeJ, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [85](../standings_global.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
Final Rank Value:  937.3<br />
<br />
Final Rank Value (937.3) = Starting Rank Value (862.8) + Head To Head Adjustments (74.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.355[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.029[<sup>2</sup>](#table1)

The average of these factors is 0.219<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 862.8
- 400 + ( ( 0.219 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 862.8


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
|           40 |     2018 | 2024-04-15 | Sashi             | L   | 0.619      | -            | -                | -                | -         |    -4.92 | Altekz, Kristou, refrezh, roeJ, TMB |
|           39 |     2046 | 2024-04-13 | 3DMAX             | L   | 0.606      | -            | -                | -                | -         |    -3.32 | Altekz, Kristou, refrezh, roeJ, TMB |
|           38 |     2198 | 2024-04-09 | kONO              | W   | 0.578      | 0.384        | 0.041 (0.009)    | 0.569 (0.126)    | 0 (0.000) |     7.02 | Altekz, Kristou, refrezh, roeJ, TMB |
|           37 |     2251 | 2024-04-07 | Zero Tenacity     | W   | 0.565      | 0.358        | 0.153 (0.031)    | 1.000 (0.202)    | 0 (0.000) |    12.68 | Altekz, Kristou, refrezh, roeJ, TMB |
|           36 |     2557 | 2024-03-22 | FORZE             | L   | 0.459      | -            | -                | -                | -         |    -5.71 | Altekz, Kristou, refrezh, roeJ, TMB |
|           35 |     2636 | 2024-03-18 | Slovakia          | W   | 0.432      | 0.371        | 0.045 (0.007)    | 0.891 (0.142)    | 0 (0.000) |     7.56 | Altekz, Kristou, refrezh, roeJ, TMB |
|           34 |     2676 | 2024-03-16 | Passion UA        | W   | 0.419      | 0.371        | 0.087 (0.014)    | 0.821 (0.127)    | 0 (0.000) |     8.42 | Altekz, Kristou, refrezh, roeJ, TMB |
|           33 |     2732 | 2024-03-14 | Entropiq          | W   | 0.405      | -            | -                | -                | 0 (0.000) |     2.08 | Altekz, Kristou, refrezh, roeJ, TMB |
|           32 |     2803 | 2024-03-11 | Metizport         | L   | 0.388      | -            | -                | -                | -         |    -4.85 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           31 |     2816 | 2024-03-11 | HEROIC            | L   | 0.386      | -            | -                | -                | -         |    -0.11 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           30 |     2819 | 2024-03-11 | Permitta          | W   | 0.385      | 0.371        | 0.038 (0.005)    | 0.837 (0.120)    | 0 (0.000) |     7.28 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           29 |     2869 | 2024-03-09 | Fraud5            | W   | 0.371      | -            | -                | -                | 0 (0.000) |     2.77 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           28 |     2912 | 2024-03-07 | Secret            | W   | 0.358      | -            | -                | -                | 0 (0.000) |     1.47 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           27 |     3005 | 2024-03-03 | Gaimin Gladiators | W   | 0.334      | 0.143        | 0.069 (0.003)    | -                | 0 (0.000) |     8.53 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           26 |     3014 | 2024-03-03 | BetBoom           | W   | 0.333      | 0.143        | 0.406 (0.019)    | 0.745 (0.036)    | -         |    10.34 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           25 |     3021 | 2024-03-03 | kONO              | W   | 0.333      | -            | -                | -                | -         |     4.89 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           24 |     3027 | 2024-03-03 | fnatic            | L   | 0.333      | -            | -                | -                | -         |    -0.20 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           23 |     3030 | 2024-03-03 | MOUZ NXT          | L   | 0.331      | -            | -                | -                | -         |    -2.33 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           22 |     3058 | 2024-03-01 | BetBoom           | L   | 0.321      | -            | -                | -                | -         |    -0.15 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           21 |     3080 | 2024-02-28 | fnatic            | W   | 0.308      | 0.500        | 0.298 (0.046)    | 0.623 (0.096)    | -         |     9.52 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           20 |     3234 | 2024-02-21 | ex-Guild Eagles   | L   | 0.260      | -            | -                | -                | -         |    -3.83 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           19 |     3265 | 2024-02-20 | PERA              | W   | 0.254      | -            | -                | -                | 1 (0.254) |     5.22 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           18 |     3291 | 2024-02-19 | OG                | L   | 0.247      | -            | -                | -                | -         |    -1.39 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           17 |     3294 | 2024-02-19 | HEROIC            | L   | 0.246      | -            | -                | -                | -         |    -0.05 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           16 |     3514 | 2024-02-09 | Gaimin Gladiators | W   | 0.179      | 0.371        | 0.069 (0.005)    | 0.528 (0.035)    | -         |     4.59 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           15 |     3530 | 2024-02-08 | TSM               | W   | 0.171      | -            | -                | -                | -         |     1.74 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           14 |     3536 | 2024-02-07 | Into the Breach   | W   | 0.165      | -            | -                | -                | -         |     1.39 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           13 |     3545 | 2024-02-06 | Sangal            | W   | 0.159      | 0.371        | 0.231 (0.014)    | 0.853 (0.050)    | -         |     4.23 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           12 |     3556 | 2024-02-05 | Gaimin Gladiators | L   | 0.152      | -            | -                | -                | -         |    -0.86 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           11 |     3622 | 2024-02-02 | Metizport         | L   | 0.134      | -            | -                | -                | -         |    -1.55 | Altekz, dupreeh, refrezh, roeJ, TMB |
|           10 |     3640 | 2024-02-02 | SINNERS           | W   | 0.131      | 0.371        | -                | 0.767 (0.037)    | -         |     3.34 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            9 |     3684 | 2024-01-31 | ex-Sprout         | W   | 0.119      | -            | -                | -                | -         |     0.56 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            8 |     3708 | 2024-01-30 | Entropiq          | W   | 0.111      | -            | -                | -                | -         |     0.60 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            7 |     3760 | 2024-01-26 | ex-Sprout         | L   | 0.085      | -            | -                | -                | -         |    -2.28 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            6 |     3862 | 2024-01-21 | 3DMAX             | W   | 0.053      | -            | -                | -                | -         |     1.49 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            5 |     3886 | 2024-01-20 | MOUZ              | L   | 0.048      | -            | -                | -                | -         |    -0.00 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            4 |     3902 | 2024-01-20 | FORZE             | W   | 0.046      | -            | -                | -                | -         |     0.18 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            3 |     3955 | 2024-01-19 | Spirit            | L   | 0.039      | -            | -                | -                | -         |    -0.00 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            2 |     4013 | 2024-01-18 | Astralis          | L   | 0.033      | -            | -                | -                | -         |    -0.00 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            1 |     4018 | 2024-01-18 | Entropiq          | W   | 0.033      | -            | -                | -                | -         |     0.18 | Altekz, dupreeh, refrezh, roeJ, TMB |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,695.38)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.613 | $1,600.00      | $980.31         |
| 2024-03-18 |      0.432 | $11,000.00     | $4,747.61       |
| 2024-02-09 |      0.179 | $11,000.00     | $1,967.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

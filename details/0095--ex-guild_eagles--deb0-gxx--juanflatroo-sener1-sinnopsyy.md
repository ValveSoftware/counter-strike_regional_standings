### Roster Details<br />
Team Name: ex-Guild Eagles<br />
Roster: deb0, gxx-, juanflatroo, SENER1, sinnopsyy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [95](../standings_global.md)<br />
Regional Rank: [68]( ../standings_europe.md)<br />
Final Rank Value:  924.0<br />
<br />
Final Rank Value (924.0) = Starting Rank Value (895.0) + Head To Head Adjustments (28.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.077[<sup>2</sup>](#table1)

The average of these factors is 0.231<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 895.0
- 400 + ( ( 0.231 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 895.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      483 | 2024-06-11 | SINNERS           | L   | 0.959      | -            | -                | -                | -         |   -11.18 | deb0, gxx-, juanflatroo, SENER1, sinnopsyy  |
|           44 |     1080 | 2024-05-25 | Zero Tenacity     | L   | 0.847      | -            | -                | -                | -         |    -7.02 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           43 |     1091 | 2024-05-25 | Kosovo            | W   | 0.846      | 0.143        | -                | 0.203 (0.025)    | 0 (0.000) |    10.94 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           42 |     1098 | 2024-05-24 | Zero Tenacity     | W   | 0.841      | 0.273        | 0.154 (0.035)    | 1.000 (0.229)    | 0 (0.000) |    19.88 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           41 |     1103 | 2024-05-24 | Serbia            | W   | 0.839      | 0.273        | 0.019 (0.004)    | 0.262 (0.060)    | 0 (0.000) |    10.20 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           40 |     1335 | 2024-05-17 | Sashi             | L   | 0.792      | -            | -                | -                | -         |    -3.32 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           39 |     1677 | 2024-05-05 | 1WIN              | L   | 0.712      | -            | -                | -                | -         |    -9.00 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           38 |     1789 | 2024-04-29 | EYEBALLERS        | L   | 0.674      | -            | -                | -                | -         |   -10.24 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           37 |     1830 | 2024-04-27 | Insilio           | L   | 0.661      | -            | -                | -                | -         |    -8.53 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           36 |     1858 | 2024-04-26 | BLEED             | L   | 0.654      | -            | -                | -                | -         |    -4.29 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           35 |     1890 | 2024-04-25 | PARIVISION        | L   | 0.647      | -            | -                | -                | -         |    -9.22 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           34 |     1916 | 2024-04-24 | Zero Tenacity     | W   | 0.639      | 0.435        | 0.154 (0.043)    | 1.000 (0.278)    | 0 (0.000) |    13.73 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           33 |     1942 | 2024-04-22 | 3DMAX             | L   | 0.627      | -            | -                | -                | -         |    -3.16 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           32 |     1954 | 2024-04-22 | Sangal            | W   | 0.625      | 0.435        | 0.232 (0.063)    | 0.893 (0.243)    | 0 (0.000) |    15.27 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           31 |     2067 | 2024-04-18 | Sashi             | L   | 0.601      | -            | -                | -                | -         |    -4.48 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           30 |     2076 | 2024-04-18 | KOI               | W   | 0.600      | 0.143        | 0.091 (0.008)    | 0.448 (0.038)    | 0 (0.000) |    15.51 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           29 |     2086 | 2024-04-18 | FRAGMATIC         | W   | 0.600      | -            | -                | -                | 0 (0.000) |     1.04 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           28 |     2092 | 2024-04-18 | AMKAL             | L   | 0.599      | -            | -                | -                | -         |    -4.21 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           27 |     2160 | 2024-04-16 | Sashi             | W   | 0.586      | 0.384        | 0.215 (0.048)    | 1.000 (0.225)    | -         |    14.52 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           26 |     2354 | 2024-04-09 | Metizport         | W   | 0.540      | 0.384        | 0.064 (0.013)    | 0.478 (0.099)    | -         |    11.62 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           25 |     2520 | 2024-04-03 | AMKAL             | L   | 0.500      | -            | -                | -                | -         |    -3.62 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           24 |     2552 | 2024-04-02 | Insilio           | L   | 0.494      | -            | -                | -                | -         |    -6.11 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           23 |     2564 | 2024-04-02 | AMKAL             | W   | 0.493      | 0.143        | 0.134 (0.009)    | 0.523 (0.037)    | -         |    11.96 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           22 |     2570 | 2024-04-02 | 500               | L   | 0.492      | -            | -                | -                | -         |   -10.20 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           21 |     2576 | 2024-04-01 | 500               | W   | 0.488      | 0.384        | -                | 0.169 (0.032)    | -         |     5.30 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           20 |     2655 | 2024-03-27 | ALTERNATE aTTaX   | L   | 0.454      | -            | -                | -                | -         |    -4.28 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           19 |     2724 | 2024-03-22 | VP.Prodigy        | L   | 0.419      | -            | -                | -                | -         |    -6.35 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           18 |     3264 | 2024-02-27 | Croatia           | L   | 0.261      | -            | -                | -                | -         |    -7.43 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           17 |     3273 | 2024-02-27 | Metizport         | W   | 0.260      | 0.143        | 0.064 (0.002)    | -                | -         |     4.90 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           16 |     3354 | 2024-02-24 | GamerLegion       | L   | 0.239      | -            | -                | -                | -         |    -3.33 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           15 |     3361 | 2024-02-23 | BetBoom           | W   | 0.233      | 0.143        | 0.403 (0.013)    | -                | 1 (0.233) |     7.21 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           14 |     3379 | 2024-02-22 | Gaimin Gladiators | L   | 0.226      | -            | -                | -                | -         |    -1.72 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           13 |     3398 | 2024-02-21 | ex-Preasy         | W   | 0.221      | -            | -                | -                | 1 (0.221) |     3.21 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           12 |     3432 | 2024-02-20 | Nexus             | W   | 0.213      | -            | -                | -                | 1 (0.213) |     3.13 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           11 |     3456 | 2024-02-19 | ENCE              | L   | 0.207      | -            | -                | -                | -         |    -0.26 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           10 |     3465 | 2024-02-19 | MOUZ              | L   | 0.205      | -            | -                | -                | -         |    -0.01 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            9 |     3685 | 2024-02-08 | Insilio           | L   | 0.135      | -            | -                | -                | -         |    -1.77 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            8 |     3688 | 2024-02-08 | RUBY              | L   | 0.133      | -            | -                | -                | -         |    -1.46 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            7 |     3931 | 2024-01-25 | PERA              | L   | 0.041      | -            | -                | -                | -         |    -0.46 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            6 |     3946 | 2024-01-24 | ALTERNATE aTTaX   | W   | 0.034      | -            | -                | -                | -         |     0.78 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            5 |     3967 | 2024-01-23 | Sampi             | W   | 0.027      | -            | -                | -                | -         |     0.49 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            4 |     3970 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.027      | -            | -                | -                | -         |     0.61 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            3 |     3991 | 2024-01-22 | PERA              | L   | 0.021      | -            | -                | -                | -         |    -0.23 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            2 |     3993 | 2024-01-22 | Viperio           | W   | 0.020      | -            | -                | -                | -         |     0.06 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            1 |     3998 | 2024-01-22 | Rebels            | W   | 0.020      | -            | -                | -                | -         |     0.45 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,615.50)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-24 |      0.841 | $2,158.00      | $1,814.80       |
| 2024-05-18 |      0.801 | $1,000.00      | $800.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

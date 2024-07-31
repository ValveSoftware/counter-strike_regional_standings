### Roster Details<br />
Team Name: ex-Guild Eagles<br />
Roster: deb0, gxx-, juanflatroo, SENER1, sinnopsyy<br />
Global Rank: [96](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [69]( ../standings_europe.md)<br />
<br />
Final Rank Value:  868.4<br />
<br />
Final Rank Value (868.4) = Starting Rank Value (826.4) + Head To Head Adjustments (42.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.044[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 826.4
- 400 + ( ( 0.207 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 826.4


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
|           38 |     1013 | 2024-06-11 | SINNERS           | L   | 0.865      | -            | -                | -                | -         |    -9.37 | deb0, gxx-, juanflatroo, SENER1, sinnopsyy  |
|           37 |     1610 | 2024-05-25 | Zero Tenacity     | L   | 0.753      | -            | -                | -                | -         |    -5.13 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           36 |     1621 | 2024-05-25 | Kosovo            | W   | 0.751      | 0.143        | -                | 0.185 (0.020)    | 0 (0.000) |    10.00 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           35 |     1628 | 2024-05-24 | Zero Tenacity     | W   | 0.746      | 0.273        | 0.139 (0.028)    | 1.000 (0.204)    | 0 (0.000) |    18.82 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           34 |     1633 | 2024-05-24 | Serbia            | W   | 0.745      | 0.273        | 0.013 (0.003)    | 0.226 (0.046)    | 0 (0.000) |     9.41 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           33 |     1865 | 2024-05-17 | Sashi             | L   | 0.697      | -            | -                | -                | -         |    -2.51 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           32 |     2207 | 2024-05-05 | 1WIN              | L   | 0.618      | -            | -                | -                | -         |    -7.90 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           31 |     2319 | 2024-04-29 | EYEBALLERS        | L   | 0.579      | -            | -                | -                | -         |    -8.13 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           30 |     2360 | 2024-04-27 | Insilio           | L   | 0.566      | -            | -                | -                | -         |    -7.24 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           29 |     2388 | 2024-04-26 | BLEED             | L   | 0.559      | -            | -                | -                | -         |    -4.21 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           28 |     2420 | 2024-04-25 | PARIVISION        | L   | 0.552      | -            | -                | -                | -         |    -4.71 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           27 |     2446 | 2024-04-24 | Zero Tenacity     | W   | 0.544      | 0.435        | 0.139 (0.033)    | 1.000 (0.237)    | 0 (0.000) |    12.92 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           26 |     2472 | 2024-04-22 | 3DMAX             | L   | 0.533      | -            | -                | -                | -         |    -0.23 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           25 |     2484 | 2024-04-22 | Sangal            | W   | 0.530      | 0.435        | 0.221 (0.051)    | 0.824 (0.190)    | 0 (0.000) |    13.75 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           24 |     2597 | 2024-04-18 | Sashi             | L   | 0.506      | -            | -                | -                | -         |    -2.80 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           23 |     2606 | 2024-04-18 | KOI               | W   | 0.506      | 0.143        | 0.060 (0.004)    | 0.382 (0.028)    | 0 (0.000) |    12.86 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           22 |     2616 | 2024-04-18 | FRAGMATIC         | W   | 0.505      | -            | -                | -                | 0 (0.000) |     1.23 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           21 |     2622 | 2024-04-18 | AMKAL             | L   | 0.505      | -            | -                | -                | -         |    -2.42 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           20 |     2690 | 2024-04-16 | Sashi             | W   | 0.492      | 0.384        | 0.187 (0.035)    | 0.973 (0.184)    | -         |    13.10 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           19 |     2884 | 2024-04-09 | Metizport         | W   | 0.445      | 0.384        | 0.039 (0.007)    | 0.427 (0.073)    | -         |     9.50 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           18 |     3050 | 2024-04-03 | AMKAL             | L   | 0.406      | -            | -                | -                | -         |    -1.90 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           17 |     3082 | 2024-04-02 | Insilio           | L   | 0.400      | -            | -                | -                | -         |    -4.79 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           16 |     3094 | 2024-04-02 | AMKAL             | W   | 0.398      | 0.143        | 0.132 (0.008)    | 0.484 (0.028)    | -         |    10.71 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           15 |     3100 | 2024-04-02 | 500               | L   | 0.397      | -            | -                | -                | -         |    -7.88 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           14 |     3106 | 2024-04-01 | 500               | W   | 0.393      | 0.384        | -                | 0.106 (0.016)    | -         |     4.66 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           13 |     3185 | 2024-03-27 | ALTERNATE aTTaX   | L   | 0.359      | -            | -                | -                | -         |    -3.22 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           12 |     3254 | 2024-03-22 | VP.Prodigy        | L   | 0.324      | -            | -                | -                | -         |    -4.46 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           11 |     3794 | 2024-02-27 | Croatia           | L   | 0.167      | -            | -                | -                | -         |    -4.57 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           10 |     3803 | 2024-02-27 | Metizport         | W   | 0.166      | 0.143        | 0.039 (0.001)    | -                | -         |     3.19 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            9 |     3884 | 2024-02-24 | GamerLegion       | L   | 0.144      | -            | -                | -                | -         |    -2.44 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            8 |     3891 | 2024-02-23 | BetBoom           | W   | 0.138      | 0.143        | 0.259 (0.005)    | -                | 1 (0.138) |     4.22 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            7 |     3909 | 2024-02-22 | Gaimin Gladiators | L   | 0.132      | -            | -                | -                | -         |    -1.22 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            6 |     3928 | 2024-02-21 | ex-Preasy         | W   | 0.126      | -            | -                | -                | 1 (0.126) |     1.80 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            5 |     3962 | 2024-02-20 | Nexus             | W   | 0.119      | -            | -                | -                | 1 (0.119) |     1.96 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            4 |     3986 | 2024-02-19 | ENCE              | L   | 0.112      | -            | -                | -                | -         |    -0.08 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            3 |     3995 | 2024-02-19 | MOUZ              | L   | 0.111      | -            | -                | -                | -         |    -0.01 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            2 |     4215 | 2024-02-08 | Insilio           | L   | 0.040      | -            | -                | -                | -         |    -0.51 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            1 |     4218 | 2024-02-08 | RUBY              | L   | 0.039      | -            | -                | -                | -         |    -0.42 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,317.03)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-24 |      0.746 | $2,158.00      | $1,610.84       |
| 2024-05-18 |      0.706 | $1,000.00      | $706.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: ex-Guild Eagles<br />
Roster: deb0, gxx-, juanflatroo, SENER1, sinnopsyy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [96](../standings_global.md)<br />
Regional Rank: [69]( ../standings_europe.md)<br />
Final Rank Value:  879.8<br />
<br />
Final Rank Value (879.8) = Starting Rank Value (845.4) + Head To Head Adjustments (34.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.115[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 845.4
- 400 + ( ( 0.220 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 845.4


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
|           38 |      771 | 2024-06-11 | SINNERS           | L   | 0.912      | -            | -                | -                | -         |   -10.49 | deb0, gxx-, juanflatroo, SENER1, sinnopsyy  |
|           37 |     1368 | 2024-05-25 | Zero Tenacity     | L   | 0.800      | -            | -                | -                | -         |    -6.07 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           36 |     1379 | 2024-05-25 | Kosovo            | W   | 0.798      | 0.143        | -                | 0.199 (0.023)    | 0 (0.000) |    10.55 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           35 |     1386 | 2024-05-24 | Zero Tenacity     | W   | 0.794      | 0.273        | 0.173 (0.038)    | 1.000 (0.217)    | 0 (0.000) |    19.36 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           34 |     1391 | 2024-05-24 | Serbia            | W   | 0.792      | 0.273        | 0.016 (0.003)    | 0.249 (0.054)    | 0 (0.000) |     9.91 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           33 |     1623 | 2024-05-17 | Sashi             | L   | 0.745      | -            | -                | -                | -         |    -2.81 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           32 |     1965 | 2024-05-05 | 1WIN              | L   | 0.665      | -            | -                | -                | -         |    -8.51 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           31 |     2077 | 2024-04-29 | EYEBALLERS        | L   | 0.627      | -            | -                | -                | -         |    -9.29 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           30 |     2118 | 2024-04-27 | Insilio           | L   | 0.613      | -            | -                | -                | -         |    -7.82 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           29 |     2146 | 2024-04-26 | BLEED             | L   | 0.607      | -            | -                | -                | -         |    -4.35 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           28 |     2178 | 2024-04-25 | PARIVISION        | L   | 0.599      | -            | -                | -                | -         |    -6.43 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           27 |     2204 | 2024-04-24 | Zero Tenacity     | W   | 0.592      | 0.435        | 0.173 (0.045)    | 1.000 (0.257)    | 0 (0.000) |    13.53 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           26 |     2230 | 2024-04-22 | 3DMAX             | L   | 0.580      | -            | -                | -                | -         |    -2.42 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           25 |     2242 | 2024-04-22 | Sangal            | W   | 0.578      | 0.435        | 0.195 (0.049)    | 0.860 (0.216)    | 0 (0.000) |    14.12 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           24 |     2355 | 2024-04-18 | Sashi             | L   | 0.554      | -            | -                | -                | -         |    -3.37 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           23 |     2364 | 2024-04-18 | KOI               | W   | 0.553      | 0.143        | 0.076 (0.006)    | 0.404 (0.032)    | 0 (0.000) |    13.94 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           22 |     2374 | 2024-04-18 | FRAGMATIC         | W   | 0.553      | -            | -                | -                | 0 (0.000) |     1.24 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           21 |     2380 | 2024-04-18 | AMKAL             | L   | 0.552      | -            | -                | -                | -         |    -3.51 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           20 |     2448 | 2024-04-16 | Sashi             | W   | 0.539      | 0.384        | 0.234 (0.048)    | 1.000 (0.207)    | -         |    14.08 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           19 |     2642 | 2024-04-09 | Metizport         | W   | 0.492      | 0.384        | 0.051 (0.010)    | 0.460 (0.087)    | -         |    10.62 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           18 |     2808 | 2024-04-03 | AMKAL             | L   | 0.453      | -            | -                | -                | -         |    -2.89 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           17 |     2840 | 2024-04-02 | Insilio           | L   | 0.447      | -            | -                | -                | -         |    -5.39 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           16 |     2852 | 2024-04-02 | AMKAL             | W   | 0.446      | 0.143        | 0.111 (0.007)    | 0.515 (0.033)    | -         |    11.20 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           15 |     2858 | 2024-04-02 | 500               | L   | 0.445      | -            | -                | -                | -         |    -8.91 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           14 |     2864 | 2024-04-01 | 500               | W   | 0.440      | 0.384        | -                | 0.140 (0.024)    | -         |     5.12 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           13 |     2943 | 2024-03-27 | ALTERNATE aTTaX   | L   | 0.407      | -            | -                | -                | -         |    -3.73 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           12 |     3012 | 2024-03-22 | VP.Prodigy        | L   | 0.372      | -            | -                | -                | -         |    -5.55 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           11 |     3552 | 2024-02-27 | Croatia           | L   | 0.214      | -            | -                | -                | -         |    -5.93 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           10 |     3561 | 2024-02-27 | Metizport         | W   | 0.213      | 0.143        | 0.051 (0.002)    | -                | -         |     4.10 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            9 |     3642 | 2024-02-24 | GamerLegion       | L   | 0.192      | -            | -                | -                | -         |    -2.98 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            8 |     3649 | 2024-02-23 | BetBoom           | W   | 0.186      | 0.143        | 0.333 (0.009)    | -                | 1 (0.186) |     5.70 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            7 |     3667 | 2024-02-22 | Gaimin Gladiators | L   | 0.179      | -            | -                | -                | -         |    -1.51 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            6 |     3686 | 2024-02-21 | ex-Preasy         | W   | 0.173      | -            | -                | -                | 1 (0.173) |     2.54 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            5 |     3720 | 2024-02-20 | Nexus             | W   | 0.166      | -            | -                | -                | 1 (0.166) |     2.70 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            4 |     3744 | 2024-02-19 | ENCE              | L   | 0.160      | -            | -                | -                | -         |    -0.20 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            3 |     3753 | 2024-02-19 | MOUZ              | L   | 0.158      | -            | -                | -                | -         |    -0.01 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            2 |     3973 | 2024-02-08 | Insilio           | L   | 0.087      | -            | -                | -                | -         |    -1.12 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            1 |     3976 | 2024-02-08 | RUBY              | L   | 0.086      | -            | -                | -                | -         |    -0.94 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,466.36)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-24 |      0.794 | $2,158.00      | $1,712.89       |
| 2024-05-18 |      0.753 | $1,000.00      | $753.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

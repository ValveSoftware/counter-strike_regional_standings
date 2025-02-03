### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, felps, HEN1, nyezin, venomzera<br />
Global Rank: [58](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_03.md)<br />
Regional Rank: [16]( ../../standings_americas_2025_02_03.md)<br />
<br />
Final Rank Value:  1003.5<br />
<br />
Final Rank Value (1003.5) = Starting Rank Value (1047.6) + Head To Head Adjustments (-44.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.402[<sup>2</sup>](#table1)
- Opponent Network: 0.151[<sup>2</sup>](#table1)
- LAN Wins: 0.324[<sup>2</sup>](#table1)

The average of these factors is 0.334<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1047.6
- 400 + ( ( 0.334 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1047.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       41 | 2025-01-29 | ODDIK       | W   | 1.000      | 0.450        | 0.072 (0.032)    | 0.416 (0.187)    | 0 (0.000) |    11.29 | coldzera, felps, HEN1, nyezin, venomzera    |
|           46 |       42 | 2025-01-29 | ODDIK       | W   | 1.000      | 0.450        | 0.072 (0.032)    | 0.416 (0.187)    | 0 (0.000) |    12.27 | coldzera, felps, HEN1, nyezin, venomzera    |
|           45 |       70 | 2025-01-28 | Yawara      | W   | 1.000      | 0.450        | -                | 0.399 (0.180)    | 0 (0.000) |     6.51 | coldzera, felps, HEN1, nyezin, venomzera    |
|           44 |       75 | 2025-01-28 | Yawara      | W   | 1.000      | 0.450        | -                | 0.399 (0.180)    | 0 (0.000) |     6.91 | coldzera, felps, HEN1, nyezin, venomzera    |
|           43 |      205 | 2025-01-23 | Elevate     | W   | 1.000      | 0.450        | -                | 0.366 (0.165)    | -         |     9.28 | coldzera, felps, HEN1, nyezin, venomzera    |
|           42 |      211 | 2025-01-23 | Elevate     | L   | 1.000      | -            | -                | -                | -         |   -22.73 | coldzera, felps, HEN1, nyezin, venomzera    |
|           41 |      296 | 2025-01-21 | UNO MILLE   | L   | 1.000      | -            | -                | -                | -         |   -22.88 | coldzera, felps, HEN1, nyezin, venomzera    |
|           40 |      301 | 2025-01-21 | UNO MILLE   | L   | 1.000      | -            | -                | -                | -         |   -24.44 | coldzera, felps, HEN1, nyezin, venomzera    |
|           39 |     1135 | 2024-11-15 | Imperial    | L   | 0.664      | -            | -                | -                | -         |    -8.30 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           38 |     1174 | 2024-11-14 | Legacy      | W   | 0.658      | 0.143        | 0.079 (0.007)    | -                | 1 (0.658) |    10.46 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           37 |     1202 | 2024-11-13 | Case        | W   | 0.651      | -            | -                | -                | 1 (0.651) |     3.34 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           36 |     1226 | 2024-11-12 | M80         | L   | 0.645      | -            | -                | -                | -         |    -7.88 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           35 |     1243 | 2024-11-11 | 9z          | L   | 0.644      | -            | -                | -                | -         |   -13.59 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           34 |     1706 | 2024-10-18 | BESTIA      | L   | 0.482      | -            | -                | -                | -         |    -6.93 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           33 |     1733 | 2024-10-17 | Imperial    | W   | 0.475      | 0.450        | 0.158 (0.034)    | 0.395 (0.085)    | -         |     8.86 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           32 |     1763 | 2024-10-16 | MIBR        | L   | 0.469      | -            | -                | -                | -         |    -1.52 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           31 |     1792 | 2024-10-15 | BESTIA      | W   | 0.462      | 0.450        | 0.160 (0.033)    | 0.887 (0.184)    | -         |     8.09 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           30 |     1883 | 2024-10-09 | MIBR        | L   | 0.422      | -            | -                | -                | -         |    -1.33 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           29 |     1887 | 2024-10-09 | MIBR        | L   | 0.421      | -            | -                | -                | -         |    -1.35 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           28 |     1922 | 2024-10-08 | Dusty Roots | W   | 0.415      | -            | -                | -                | -         |     3.07 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           27 |     1926 | 2024-10-08 | Dusty Roots | W   | 0.414      | -            | -                | -                | -         |     3.15 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           26 |     1930 | 2024-10-08 | Solid       | L   | 0.414      | -            | -                | -                | -         |    -8.10 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           25 |     1932 | 2024-10-08 | Solid       | L   | 0.414      | -            | -                | -                | -         |    -8.38 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           24 |     1951 | 2024-10-07 | BESTIA      | L   | 0.408      | -            | -                | -                | -         |    -6.13 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           23 |     1952 | 2024-10-07 | BESTIA      | L   | 0.408      | -            | -                | -                | -         |    -6.35 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           22 |     2006 | 2024-10-05 | BESTIA      | W   | 0.394      | 0.389        | 0.160 (0.024)    | 0.887 (0.136)    | 1 (0.394) |     6.42 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           21 |     2039 | 2024-10-04 | Imperial    | W   | 0.388      | 0.389        | 0.158 (0.024)    | -                | 1 (0.388) |     6.98 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           20 |     2117 | 2024-10-02 | paiN        | L   | 0.374      | -            | -                | -                | -         |    -1.05 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           19 |     2122 | 2024-10-02 | paiN        | W   | 0.374      | 0.450        | 0.328 (0.055)    | 0.799 (0.134)    | -         |    10.81 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           18 |     2246 | 2024-09-28 | paiN        | L   | 0.349      | -            | -                | -                | -         |    -0.89 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           17 |     2250 | 2024-09-28 | Fluxo       | L   | 0.348      | -            | -                | -                | -         |    -5.33 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           16 |     2387 | 2024-09-25 | Fluxo       | L   | 0.328      | -            | -                | -                | -         |    -5.26 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           15 |     2391 | 2024-09-25 | Fluxo       | L   | 0.328      | -            | -                | -                | -         |    -5.42 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           14 |     2716 | 2024-09-15 | FURIA       | L   | 0.259      | -            | -                | -                | -         |    -0.43 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           13 |     2756 | 2024-09-14 | Falcons     | W   | 0.252      | 0.889        | 0.059 (0.013)    | -                | 1 (0.252) |     2.33 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           12 |     2790 | 2024-09-13 | FURIA       | L   | 0.245      | -            | -                | -                | -         |    -0.40 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           11 |     2814 | 2024-09-12 | ENCE        | W   | 0.240      | 0.889        | 0.328 (0.070)    | 0.324 (0.069)    | 1 (0.240) |     4.44 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           10 |     2872 | 2024-09-10 | Virtus.pro  | L   | 0.227      | -            | -                | -                | -         |    -0.48 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            9 |     3236 | 2024-08-28 | Fluxo       | W   | 0.142      | -            | -                | -                | -         |     2.30 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            8 |     3249 | 2024-08-28 | ODDIK       | W   | 0.140      | -            | -                | -                | -         |     1.30 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            7 |     3298 | 2024-08-27 | Solid       | W   | 0.134      | -            | -                | -                | -         |     1.37 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            6 |     3353 | 2024-08-26 | Intense     | W   | 0.128      | -            | -                | -                | -         |     0.37 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            5 |     3395 | 2024-08-26 | Case        | L   | 0.126      | -            | -                | -                | -         |    -3.44 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            4 |     3730 | 2024-08-15 | KRÜ         | L   | 0.055      | -            | -                | -                | -         |    -1.40 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            3 |     3734 | 2024-08-15 | KRÜ         | W   | 0.055      | -            | -                | -                | -         |     0.33 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            2 |     3982 | 2024-08-07 | Case        | W   | 0.001      | -            | -                | -                | -         |     0.01 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            1 |     3984 | 2024-08-07 | Case        | W   | 0.001      | -            | -                | -                | -         |     0.01 | coldzera, dav1deuS, HEN1, nython, venomzera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,466.77)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.495 | $5,000.00      | $2,472.53       |
| 2024-10-05 |      0.394 | $16,000.00     | $6,306.75       |
| 2024-09-22 |      0.307 | $12,000.00     | $3,687.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

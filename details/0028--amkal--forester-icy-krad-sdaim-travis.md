### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, ICY, Krad, Sdaim, TRAVIS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [28](../standings_global.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
Final Rank Value:  1326.7<br />
<br />
Final Rank Value (1326.7) = Starting Rank Value (1183.8) + Head To Head Adjustments (142.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.538[<sup>1</sup>](#table2)
- Bounty Collected: 0.533[<sup>2</sup>](#table1)
- Opponent Network: 0.354[<sup>2</sup>](#table1)
- LAN Wins: 0.119[<sup>2</sup>](#table1)

The average of these factors is 0.386<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1183.8
- 400 + ( ( 0.386 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1183.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      232 | 2024-06-09 | Monte             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.54 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           54 |      255 | 2024-06-09 | B8                | W   | 1.000      | 0.143        | 0.229 (0.033)    | -                | 0 (0.000) |    11.24 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           53 |      325 | 2024-06-08 | Monte             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.42 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           52 |      328 | 2024-06-08 | 1WIN              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.05 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           51 |      626 | 2024-06-01 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -21.82 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           50 |      644 | 2024-05-31 | Permitta          | W   | 1.000      | 0.435        | -                | 0.885 (0.385)    | 0 (0.000) |     3.63 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           49 |      891 | 2024-05-21 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -14.96 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           48 |      962 | 2024-05-19 | paiN              | W   | 1.000      | 0.769        | 0.492 (0.378)    | 0.775 (0.596)    | 0 (0.000) |    24.18 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           47 |      966 | 2024-05-19 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -3.89 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           46 |      986 | 2024-05-18 | paiN              | W   | 0.996      | 0.769        | 0.492 (0.376)    | 0.775 (0.593)    | 0 (0.000) |    25.26 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           45 |     1384 | 2024-05-04 | BetBoom           | W   | 0.902      | 0.435        | 0.414 (0.162)    | 0.798 (0.313)    | -         |    23.20 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           44 |     1394 | 2024-05-04 | Metizport         | W   | 0.901      | 0.435        | 0.073 (0.029)    | 0.587 (0.230)    | -         |     7.76 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           43 |     1399 | 2024-05-03 | Gaimin Gladiators | W   | 0.896      | 0.435        | 0.076 (0.030)    | 0.632 (0.246)    | -         |    12.02 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           42 |     1420 | 2024-05-02 | BLEED             | W   | 0.890      | 0.435        | 0.347 (0.134)    | 0.946 (0.366)    | -         |    18.87 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           41 |     1447 | 2024-05-01 | fnatic            | L   | 0.882      | -            | -                | -                | -         |    -5.24 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           40 |     1470 | 2024-04-30 | Gaimin Gladiators | W   | 0.876      | 0.384        | -                | 0.632 (0.213)    | -         |    12.81 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           39 |     1493 | 2024-04-29 | Permitta          | W   | 0.869      | 0.384        | -                | 0.885 (0.296)    | -         |     6.47 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           38 |     1616 | 2024-04-24 | Nexus             | W   | 0.834      | -            | -                | -                | -         |     4.08 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           37 |     1665 | 2024-04-21 | Gaimin Gladiators | L   | 0.815      | -            | -                | -                | -         |   -10.29 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           36 |     1744 | 2024-04-19 | ENCE              | W   | 0.802      | 0.384        | 0.229 (0.070)    | -                | -         |    20.97 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           35 |     1786 | 2024-04-18 | Apeks             | L   | 0.795      | -            | -                | -                | -         |   -14.54 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           34 |     1794 | 2024-04-18 | ex-Guild Eagles   | W   | 0.795      | -            | -                | -                | -         |     5.19 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           33 |     1868 | 2024-04-16 | B8                | W   | 0.781      | 0.384        | 0.229 (0.069)    | 1.000 (0.300)    | -         |     8.99 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           32 |     1920 | 2024-04-12 | Aurora            | L   | 0.756      | -            | -                | -                | -         |    -2.14 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           31 |     1956 | 2024-04-11 | BetBoom           | W   | 0.748      | 0.143        | 0.414 (0.044)    | -                | -         |    21.48 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           30 |     1989 | 2024-04-10 | Apeks             | W   | 0.743      | -            | -                | -                | -         |    11.04 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           29 |     2003 | 2024-04-10 | Enterprise        | L   | 0.741      | -            | -                | -                | -         |   -16.37 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           28 |     2213 | 2024-04-03 | Insilio           | W   | 0.696      | -            | -                | -                | -         |     5.89 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           27 |     2222 | 2024-04-03 | ex-Guild Eagles   | W   | 0.695      | -            | -                | -                | -         |     4.65 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           26 |     2232 | 2024-04-03 | Alliance          | W   | 0.695      | -            | -                | -                | -         |     4.47 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           25 |     2261 | 2024-04-02 | PARIVISION        | W   | 0.689      | -            | -                | -                | -         |     7.14 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           24 |     2266 | 2024-04-02 | ex-Guild Eagles   | L   | 0.688      | -            | -                | -                | -         |   -17.04 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           23 |     2274 | 2024-04-02 | ALTERNATE aTTaX   | W   | 0.687      | -            | -                | -                | -         |     6.10 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           22 |     2497 | 2024-03-18 | The MongolZ       | L   | 0.589      | -            | -                | -                | -         |    -0.28 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           21 |     2518 | 2024-03-17 | Apeks             | L   | 0.583      | -            | -                | -                | -         |    -9.93 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           20 |     2525 | 2024-03-17 | GamerLegion       | L   | 0.582      | -            | -                | -                | -         |   -10.79 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           19 |     2832 | 2024-03-05 | FORZE             | L   | 0.503      | -            | -                | -                | -         |   -10.96 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           18 |     2838 | 2024-03-05 | Zero Tenacity     | W   | 0.502      | -            | -                | -                | -         |     5.89 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           17 |     2933 | 2024-03-01 | BIG               | L   | 0.474      | -            | -                | -                | -         |    -3.02 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           16 |     2951 | 2024-02-28 | Young Ninjas      | L   | 0.462      | -            | -                | -                | -         |   -13.47 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           15 |     3212 | 2024-02-17 | 9 Pandas          | W   | 0.388      | -            | -                | -                | 1 (0.388) |     5.52 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           14 |     3242 | 2024-02-16 | Falcons           | W   | 0.381      | -            | -                | -                | 1 (0.381) |    11.04 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           13 |     3266 | 2024-02-15 | fnatic            | L   | 0.374      | -            | -                | -                | -         |    -1.23 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           12 |     3299 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.369      | -            | -                | -                | 1 (0.369) |     0.93 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           11 |     3304 | 2024-02-14 | Enterprise        | L   | 0.368      | -            | -                | -                | -         |    -8.34 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           10 |     3359 | 2024-02-10 | Sashi             | L   | 0.343      | -            | -                | -                | -         |    -6.18 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            9 |     3372 | 2024-02-09 | Nemiga            | L   | 0.336      | -            | -                | -                | -         |    -3.85 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            8 |     3389 | 2024-02-08 | RUBY              | W   | 0.330      | -            | -                | -                | -         |     2.41 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            7 |     3394 | 2024-02-08 | Insilio           | W   | 0.328      | -            | -                | -                | -         |     2.11 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            6 |     3815 | 2024-01-19 | Astralis          | W   | 0.196      | -            | -                | -                | -         |     6.08 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            5 |     3877 | 2024-01-18 | KOI               | W   | 0.189      | -            | -                | -                | -         |     2.95 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            4 |     3896 | 2024-01-18 | ex-sYnck          | W   | 0.188      | -            | -                | -                | -         |     0.14 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            3 |     3899 | 2024-01-18 | Insilio           | W   | 0.188      | -            | -                | -                | -         |     1.22 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            2 |     3918 | 2024-01-17 | FreeESPI          | W   | 0.184      | -            | -                | -                | -         |     0.07 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            1 |     3927 | 2024-01-17 | RUBY              | W   | 0.183      | -            | -                | -                | -         |     1.38 | Forester, ICY, Krad, NickelBack, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,709.09)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-04 |      0.902 | $22,000.00     | $19,849.22      |
| 2024-05-02 |      0.889 | $1,500.00      | $1,333.69       |
| 2024-03-20 |      0.603 | $10,000.00     | $6,026.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

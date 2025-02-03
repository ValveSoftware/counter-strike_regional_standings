### Roster Details<br />
Team Name: Sashi<br />
Roster: Altekz, Cabbi, IceBerg, Lucky, Zyphon<br />
Global Rank: [60](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [41]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  987.5<br />
<br />
Final Rank Value (987.5) = Starting Rank Value (980.4) + Head To Head Adjustments (7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.403[<sup>2</sup>](#table1)
- Opponent Network: 0.202[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

The average of these factors is 0.299<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 980.4
- 400 + ( ( 0.299 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 980.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |       14 | 2025-02-02 | B8           | L   | 1.000      | -            | -                | -                | -         |   -10.07 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|           56 |      173 | 2025-01-24 | Fire Flux    | L   | 1.000      | -            | -                | -                | -         |   -19.61 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|           55 |      216 | 2025-01-23 | 500          | W   | 1.000      | 0.500        | 0.062 (0.031)    | 0.949 (0.475)    | 0 (0.000) |    16.36 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|           54 |      521 | 2024-12-15 | Chimera      | L   | 0.865      | -            | -                | -                | -         |   -14.76 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           53 |      544 | 2024-12-14 | 9INE         | W   | 0.858      | 0.371        | 0.081 (0.026)    | 0.697 (0.222)    | 0 (0.000) |    11.52 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           52 |      565 | 2024-12-13 | NAVI Junior  | L   | 0.852      | -            | -                | -                | -         |   -10.56 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           51 |      594 | 2024-12-11 | Chimera      | W   | 0.839      | 0.371        | -                | 0.806 (0.251)    | 0 (0.000) |    11.04 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           50 |      599 | 2024-12-10 | GUN5         | L   | 0.834      | -            | -                | -                | -         |   -11.15 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           49 |      610 | 2024-12-09 | Aurora       | L   | 0.827      | -            | -                | -                | -         |   -16.02 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           48 |      665 | 2024-12-07 | Alliance     | W   | 0.812      | 0.371        | -                | 0.404 (0.122)    | 0 (0.000) |     8.48 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           47 |      767 | 2024-12-03 | 9INE         | W   | 0.785      | 0.371        | 0.081 (0.024)    | 0.697 (0.203)    | 0 (0.000) |     8.93 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           46 |      934 | 2024-11-24 | Spirit       | L   | 0.724      | -            | -                | -                | -         |    -0.13 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           45 |      964 | 2024-11-22 | Virtus.pro   | L   | 0.717      | -            | -                | -                | -         |    -1.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           44 |      993 | 2024-11-21 | Eternal Fire | W   | 0.710      | 0.143        | 0.714 (0.072)    | -                | 1 (0.710) |    21.82 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           43 |     1006 | 2024-11-21 | Astralis     | W   | 0.705      | 0.143        | 0.311 (0.031)    | -                | 1 (0.705) |    20.71 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           42 |     1015 | 2024-11-21 | BIG          | L   | 0.704      | -            | -                | -                | -         |    -2.27 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           41 |     1306 | 2024-11-09 | ECLOT        | L   | 0.625      | -            | -                | -                | -         |    -4.78 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           40 |     1324 | 2024-11-08 | 500          | L   | 0.618      | -            | -                | -                | -         |    -9.74 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           39 |     1333 | 2024-11-07 | Endpoint     | W   | 0.613      | 0.384        | -                | 0.463 (0.109)    | 0 (0.000) |     5.23 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           38 |     1337 | 2024-11-07 | OG           | W   | 0.612      | 0.384        | 0.166 (0.039)    | -                | 0 (0.000) |     9.10 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           37 |     1372 | 2024-11-05 | Rebels       | W   | 0.599      | 0.384        | -                | 0.382 (0.088)    | 0 (0.000) |     6.32 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           36 |     1433 | 2024-11-02 | moneyF       | L   | 0.579      | -            | -                | -                | -         |   -10.90 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           35 |     1448 | 2024-11-01 | Insilio      | L   | 0.574      | -            | -                | -                | -         |   -15.41 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           34 |     1459 | 2024-11-01 | los kogutos  | W   | 0.572      | 0.426        | 0.070 (0.017)    | 0.779 (0.190)    | -         |     9.95 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           33 |     1524 | 2024-10-29 | GUN5         | L   | 0.551      | -            | -                | -                | -         |    -6.88 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           32 |     1611 | 2024-10-24 | ECLOT        | W   | 0.520      | 0.384        | 0.288 (0.058)    | 0.978 (0.195)    | -         |    12.39 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           31 |     1697 | 2024-10-19 | SovvyKiNG    | W   | 0.485      | -            | -                | -                | -         |     1.43 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           30 |     1737 | 2024-10-17 | 3DMAX        | L   | 0.474      | -            | -                | -                | -         |    -0.92 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           29 |     1767 | 2024-10-16 | PARIVISION   | W   | 0.467      | -            | -                | -                | -         |     5.06 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           28 |     1799 | 2024-10-15 | HEROIC       | L   | 0.460      | -            | -                | -                | -         |    -2.93 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           27 |     1840 | 2024-10-12 | Fire Flux    | W   | 0.439      | 0.384        | -                | 0.972 (0.164)    | -         |     5.04 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           26 |     2609 | 2024-09-19 | Monte        | L   | 0.285      | -            | -                | -                | -         |    -4.14 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           25 |     2651 | 2024-09-18 | UNPAID       | W   | 0.278      | -            | -                | -                | -         |     4.24 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           24 |     2665 | 2024-09-17 | UNPAID       | L   | 0.274      | -            | -                | -                | -         |    -4.52 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           23 |     2670 | 2024-09-17 | moneyF       | L   | 0.273      | -            | -                | -                | -         |    -5.84 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           22 |     2679 | 2024-09-17 | UNPAID       | W   | 0.272      | 0.443        | 0.136 (0.016)    | -                | -         |     4.00 | Altekz, Cabbi, IceBerg, Lucky, MistR  |
|           21 |     2741 | 2024-09-14 | Rebels       | L   | 0.254      | -            | -                | -                | -         |    -5.43 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           20 |     2751 | 2024-09-14 | OG           | W   | 0.253      | 0.384        | 0.166 (0.016)    | -                | -         |     3.35 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           19 |     2818 | 2024-09-12 | TSM          | W   | 0.239      | -            | -                | -                | -         |     2.37 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           18 |     2884 | 2024-09-10 | GamerLegion  | W   | 0.225      | -            | -                | -                | -         |     1.79 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           17 |     3094 | 2024-09-03 | Nemiga       | L   | 0.179      | -            | -                | -                | -         |    -1.17 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           16 |     3165 | 2024-08-30 | Aurora       | L   | 0.152      | -            | -                | -                | -         |    -2.96 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           15 |     3195 | 2024-08-29 | GUN5         | L   | 0.147      | -            | -                | -                | -         |    -1.91 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           14 |     3203 | 2024-08-29 | Monte        | W   | 0.146      | -            | -                | -                | -         |     2.50 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           13 |     3367 | 2024-08-26 | Sampi        | L   | 0.127      | -            | -                | -                | -         |    -2.25 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           12 |     3483 | 2024-08-23 | OG           | W   | 0.106      | -            | -                | -                | -         |     1.41 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           11 |     3497 | 2024-08-23 | ARCRED       | W   | 0.105      | -            | -                | -                | -         |     0.83 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           10 |     3532 | 2024-08-22 | Nemiga       | L   | 0.098      | -            | -                | -                | -         |    -0.63 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            9 |     3552 | 2024-08-21 | AMKAL        | W   | 0.093      | -            | -                | -                | -         |     0.84 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            8 |     3587 | 2024-08-21 | Qiang        | L   | 0.092      | -            | -                | -                | -         |    -2.71 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            7 |     3644 | 2024-08-19 | B8           | L   | 0.080      | -            | -                | -                | -         |    -0.82 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            6 |     3648 | 2024-08-19 | Metizport    | W   | 0.080      | -            | -                | -                | -         |     2.14 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            5 |     3655 | 2024-08-19 | Aurora       | W   | 0.079      | -            | -                | -                | -         |     0.96 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            4 |     3859 | 2024-08-12 | SAW          | L   | 0.033      | -            | -                | -                | -         |    -0.23 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            3 |     3909 | 2024-08-10 | Endpoint     | L   | 0.019      | -            | -                | -                | -         |    -0.43 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            2 |     3943 | 2024-08-09 | Qiang        | W   | 0.011      | -            | -                | -                | -         |     0.02 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            1 |     3991 | 2024-08-07 | 1WIN         | W   | 0.000      | -            | -                | -                | -         |     0.00 | Cabbi, IceBerg, kwezz, Lucky, MistR   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,308.20)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.878 | $1,000.00      | $878.27         |
| 2024-11-10 |      0.634 | $2,500.00      | $1,584.33       |
| 2024-10-20 |      0.493 | $7,000.00      | $3,449.69       |
| 2024-09-14 |      0.254 | $5,000.00      | $1,267.94       |
| 2024-08-11 |      0.026 | $5,000.00      | $127.97         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

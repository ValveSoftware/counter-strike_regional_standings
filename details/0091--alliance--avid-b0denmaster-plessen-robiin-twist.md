### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, b0denmaster, PlesseN, robiin, twist<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [91](../standings_global.md)<br />
Regional Rank: [65]( ../standings_europe.md)<br />
Final Rank Value:  912.0<br />
<br />
Final Rank Value (912.0) = Starting Rank Value (906.9) + Head To Head Adjustments (5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.364[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.154[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 906.9
- 400 + ( ( 0.249 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 906.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |       86 | 2024-06-14 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -0.97 | avid, b0denmaster, PlesseN, robiin, twist |
|           54 |      106 | 2024-06-14 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -0.34 | avid, b0denmaster, PlesseN, robiin, twist |
|           53 |      239 | 2024-06-09 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -4.96 | avid, b0denmaster, PlesseN, robiin, twist |
|           52 |      263 | 2024-06-09 | Lilmix            | W   | 1.000      | 0.347        | 0.030 (0.010)    | -                | 1 (1.000) |    14.06 | avid, b0denmaster, PlesseN, robiin, twist |
|           51 |      664 | 2024-05-31 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -13.57 | avid, b0denmaster, PlesseN, robiin, twist |
|           50 |      801 | 2024-05-24 | B8                | L   | 1.000      | -            | -                | -                | -         |    -4.56 | avid, b0denmaster, PlesseN, robiin, twist |
|           49 |     1174 | 2024-05-14 | kONO              | L   | 0.968      | -            | -                | -                | -         |   -15.78 | avid, b0denmaster, PlesseN, robiin, twist |
|           48 |     1480 | 2024-04-30 | B8                | L   | 0.874      | -            | -                | -                | -         |    -9.07 | avid, b0denmaster, PlesseN, robiin, twist |
|           47 |     1505 | 2024-04-29 | Endpoint          | W   | 0.867      | 0.384        | 0.016 (0.005)    | 0.490 (0.163)    | 0 (0.000) |    13.29 | avid, b0denmaster, PlesseN, robiin, twist |
|           46 |     1517 | 2024-04-28 | DMS               | W   | 0.862      | 0.500        | -                | 0.473 (0.204)    | 0 (0.000) |    11.91 | avid, b0denmaster, PlesseN, robiin, twist |
|           45 |     1557 | 2024-04-26 | B8                | L   | 0.850      | -            | -                | -                | -         |    -7.95 | avid, b0denmaster, PlesseN, robiin, twist |
|           44 |     1631 | 2024-04-23 | Metizport         | L   | 0.828      | -            | -                | -                | -         |    -8.80 | avid, b0denmaster, PlesseN, robiin, twist |
|           43 |     1648 | 2024-04-22 | B8                | W   | 0.821      | 0.384        | 0.229 (0.072)    | 1.000 (0.316)    | 0 (0.000) |    18.20 | avid, b0denmaster, PlesseN, robiin, twist |
|           42 |     1671 | 2024-04-21 | Sangal            | L   | 0.814      | -            | -                | -                | -         |    -6.11 | avid, b0denmaster, PlesseN, robiin, twist |
|           41 |     1751 | 2024-04-19 | 9 Pandas          | W   | 0.801      | 0.500        | 0.114 (0.046)    | 0.663 (0.265)    | 0 (0.000) |    18.74 | avid, b0denmaster, PlesseN, robiin, twist |
|           40 |     1825 | 2024-04-17 | Nemiga            | L   | 0.789      | -            | -                | -                | -         |    -2.86 | avid, b0denmaster, PlesseN, robiin, twist |
|           39 |     1832 | 2024-04-17 | ECLOT             | L   | 0.787      | -            | -                | -                | -         |    -5.17 | avid, b0denmaster, PlesseN, robiin, twist |
|           38 |     1883 | 2024-04-15 | HAVU              | W   | 0.775      | 0.384        | -                | 0.222 (0.066)    | 0 (0.000) |     6.95 | avid, b0denmaster, PlesseN, robiin, twist |
|           37 |     1887 | 2024-04-15 | MOUZ NXT          | L   | 0.774      | -            | -                | -                | -         |    -6.45 | avid, b0denmaster, PlesseN, robiin, twist |
|           36 |     1915 | 2024-04-13 | ALTERNATE aTTaX   | L   | 0.761      | -            | -                | -                | -         |    -9.64 | avid, b0denmaster, PlesseN, robiin, twist |
|           35 |     1957 | 2024-04-11 | Zero Tenacity     | W   | 0.748      | 0.384        | 0.153 (0.044)    | 1.000 (0.287)    | 0 (0.000) |    16.07 | avid, b0denmaster, PlesseN, robiin, twist |
|           34 |     2047 | 2024-04-09 | BLEED             | L   | 0.736      | -            | -                | -                | -         |    -1.75 | avid, b0denmaster, PlesseN, robiin, twist |
|           33 |     2062 | 2024-04-09 | Astralis Talent   | W   | 0.734      | 0.371        | 0.009 (0.002)    | -                | 0 (0.000) |     7.74 | avid, b0denmaster, PlesseN, robiin, twist |
|           32 |     2110 | 2024-04-07 | Johnny Speeds     | L   | 0.722      | -            | -                | -                | -         |    -2.77 | avid, b0denmaster, PlesseN, robiin, twist |
|           31 |     2113 | 2024-04-07 | EYEBALLERS        | L   | 0.722      | -            | -                | -                | -         |   -10.80 | avid, b0denmaster, PlesseN, robiin, twist |
|           30 |     2122 | 2024-04-06 | Lilmix            | W   | 0.717      | 0.330        | 0.030 (0.007)    | -                | 0 (0.000) |    10.55 | avid, b0denmaster, PlesseN, robiin, twist |
|           29 |     2127 | 2024-04-06 | BetBoom           | L   | 0.715      | -            | -                | -                | -         |    -0.52 | avid, b0denmaster, PlesseN, robiin, twist |
|           28 |     2144 | 2024-04-05 | BLEED             | L   | 0.708      | -            | -                | -                | -         |    -1.64 | avid, b0denmaster, PlesseN, robiin, twist |
|           27 |     2179 | 2024-04-04 | BetBoom           | L   | 0.703      | -            | -                | -                | -         |    -0.53 | avid, b0denmaster, PlesseN, robiin, twist |
|           26 |     2189 | 2024-04-04 | Benched Heroes    | W   | 0.701      | -            | -                | -                | 0 (0.000) |     1.21 | avid, b0denmaster, PlesseN, robiin, twist |
|           25 |     2232 | 2024-04-03 | AMKAL             | L   | 0.695      | -            | -                | -                | -         |    -4.47 | avid, b0denmaster, PlesseN, robiin, twist |
|           24 |     2631 | 2024-03-13 | MOUZ NXT          | L   | 0.555      | -            | -                | -                | -         |    -4.71 | avid, b0denmaster, PlesseN, robiin, twist |
|           23 |     2663 | 2024-03-12 | Passion UA        | L   | 0.548      | -            | -                | -                | -         |    -6.42 | avid, b0denmaster, PlesseN, robiin, twist |
|           22 |     2703 | 2024-03-10 | EYEBALLERS        | W   | 0.535      | 0.143        | -                | 0.653 (0.050)    | -         |     8.96 | avid, b0denmaster, PlesseN, robiin, twist |
|           21 |     2718 | 2024-03-09 | BLUDS             | W   | 0.529      | -            | -                | -                | -         |     0.94 | avid, b0denmaster, PlesseN, robiin, twist |
|           20 |     2729 | 2024-03-09 | Johnny Speeds     | W   | 0.528      | 0.143        | 0.118 (0.009)    | 0.507 (0.038)    | -         |    14.87 | avid, b0denmaster, PlesseN, robiin, twist |
|           19 |     2734 | 2024-03-09 | Entropiq          | W   | 0.527      | -            | -                | -                | -         |     3.11 | avid, b0denmaster, PlesseN, robiin, twist |
|           18 |     2777 | 2024-03-07 | ex-Sprout         | W   | 0.515      | -            | -                | -                | -         |     2.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           17 |     2809 | 2024-03-06 | Sashi             | L   | 0.507      | -            | -                | -                | -         |    -3.97 | avid, b0denmaster, PlesseN, robiin, twist |
|           16 |     2852 | 2024-03-05 | Viperio           | W   | 0.500      | -            | -                | -                | -         |     1.71 | avid, b0denmaster, PlesseN, robiin, twist |
|           15 |     2932 | 2024-03-01 | 9INE              | L   | 0.475      | -            | -                | -                | -         |   -13.36 | avid, b0denmaster, PlesseN, robiin, twist |
|           14 |     2959 | 2024-02-28 | Sangal            | W   | 0.461      | 0.143        | 0.216 (0.014)    | 0.884 (0.058)    | -         |    11.61 | avid, b0denmaster, PlesseN, robiin, twist |
|           13 |     3014 | 2024-02-25 | ALTERNATE aTTaX   | W   | 0.442      | 0.358        | 0.046 (0.007)    | 0.573 (0.091)    | -         |     9.46 | avid, b0denmaster, PlesseN, robiin, twist |
|           12 |     3184 | 2024-02-18 | esmagaB           | W   | 0.395      | -            | -                | -                | -         |     4.09 | avid, b0denmaster, PlesseN, robiin, twist |
|           11 |     3413 | 2024-02-06 | 9INE              | W   | 0.314      | -            | -                | -                | -         |     1.20 | avid, b0denmaster, PlesseN, robiin, twist |
|           10 |     3438 | 2024-02-04 | Secret            | L   | 0.302      | -            | -                | -                | -         |    -8.16 | avid, b0denmaster, PlesseN, robiin, twist |
|            9 |     3576 | 2024-01-29 | Passion UA        | L   | 0.262      | -            | -                | -                | -         |    -2.50 | avid, b0denmaster, PlesseN, robiin, twist |
|            8 |     3590 | 2024-01-28 | Spirit Academy    | L   | 0.254      | -            | -                | -                | -         |    -6.30 | avid, b0denmaster, PlesseN, robiin, twist |
|            7 |     3658 | 2024-01-24 | Gaimin Gladiators | L   | 0.227      | -            | -                | -                | -         |    -1.14 | avid, b0denmaster, PlesseN, robiin, twist |
|            6 |     3987 | 2024-01-16 | Nexus             | L   | 0.176      | -            | -                | -                | -         |    -3.00 | avid, b0denmaster, PlesseN, robiin, twist |
|            5 |     4174 | 2024-01-11 | Betera            | L   | 0.141      | -            | -                | -                | -         |    -3.29 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     4257 | 2023-12-30 | The Witchers      | L   | 0.061      | -            | -                | -                | -         |    -1.54 | avid, b0denmaster, PlesseN, robiin, twist |
|            3 |     4262 | 2023-12-29 | brazylijski luz   | W   | 0.054      | -            | -                | -                | -         |     0.59 | avid, b0denmaster, PlesseN, robiin, twist |
|            2 |     4264 | 2023-12-28 | Rhyno             | W   | 0.048      | -            | -                | -                | -         |     1.00 | avid, b0denmaster, PlesseN, robiin, twist |
|            1 |     4269 | 2023-12-26 | VP.Prodigy        | L   | 0.035      | -            | -                | -                | -         |    -0.56 | avid, b0denmaster, PlesseN, robiin, twist |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,386.99)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-09 |      1.000 | $2,889.00      | $2,889.00       |
| 2024-05-18 |      0.996 | $500.00        | $497.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

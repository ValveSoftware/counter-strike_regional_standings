### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: Golden, HEAP, JW, Peppzor, poiii<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [123](../standings_global.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
Final Rank Value:  799.3<br />
<br />
Final Rank Value (799.3) = Starting Rank Value (902.2) + Head To Head Adjustments (-102.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.403[<sup>2</sup>](#table1)
- Opponent Network: 0.271[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 902.2
- 400 + ( ( 0.248 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 902.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |       54 | 2024-07-23 | TNL               | L   | 1.000      | -            | -                | -                | -         |   -27.00 | Golden, HEAP, JW, Peppzor, poiii  |
|           60 |      216 | 2024-07-18 | Insilio           | L   | 1.000      | -            | -                | -                | -         |    -9.33 | Golden, HEAP, JW, Peppzor, poiii  |
|           59 |      235 | 2024-07-18 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -14.80 | Golden, HEAP, JW, Peppzor, poiii  |
|           58 |      354 | 2024-07-16 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -6.85 | Golden, HEAP, JW, Peppzor, poiii  |
|           57 |      397 | 2024-07-15 | DASH              | L   | 1.000      | -            | -                | -                | -         |   -27.67 | Golden, HEAP, JW, Peppzor, poiii  |
|           56 |      603 | 2024-06-16 | System5           | W   | 0.947      | -            | -                | -                | 0 (0.000) |     7.99 | flusha, Golden, HEAP, JW, Peppzor |
|           55 |      636 | 2024-06-15 | ARCRED            | L   | 0.940      | -            | -                | -                | -         |   -11.84 | flusha, Golden, HEAP, JW, Peppzor |
|           54 |      669 | 2024-06-14 | 9INE              | W   | 0.934      | -            | -                | -                | 0 (0.000) |     4.13 | flusha, Golden, HEAP, JW, Peppzor |
|           53 |      772 | 2024-06-11 | Zero Tenacity     | L   | 0.912      | -            | -                | -                | -         |    -7.35 | flusha, Golden, HEAP, JW, Peppzor |
|           52 |      785 | 2024-06-10 | 3DMAX             | L   | 0.907      | -            | -                | -                | -         |    -5.13 | flusha, Golden, HEAP, JW, Peppzor |
|           51 |      797 | 2024-06-10 | GUN5              | L   | 0.905      | -            | -                | -                | -         |   -10.24 | flusha, Golden, HEAP, JW, Peppzor |
|           50 |      833 | 2024-06-09 | CYBERSHOKE        | L   | 0.899      | -            | -                | -                | -         |   -17.46 | flusha, Golden, HEAP, JW, Peppzor |
|           49 |      858 | 2024-06-09 | Nexus             | W   | 0.898      | 0.450        | -                | 0.480 (0.194)    | 0 (0.000) |     8.06 | flusha, Golden, HEAP, JW, Peppzor |
|           48 |      900 | 2024-06-08 | Gaimin Gladiators | L   | 0.893      | -            | -                | -                | -         |   -10.04 | flusha, Golden, HEAP, JW, Peppzor |
|           47 |      917 | 2024-06-08 | VP.Prodigy        | W   | 0.892      | 0.435        | 0.033 (0.013)    | 0.462 (0.179)    | 0 (0.000) |    14.07 | flusha, Golden, HEAP, JW, Peppzor |
|           46 |      956 | 2024-06-07 | Zero Tenacity     | W   | 0.886      | 0.500        | 0.173 (0.077)    | 1.000 (0.443)    | 0 (0.000) |    20.82 | flusha, Golden, HEAP, JW, Peppzor |
|           45 |      970 | 2024-06-07 | Illuminar         | L   | 0.885      | -            | -                | -                | -         |   -16.25 | flusha, Golden, HEAP, JW, Peppzor |
|           44 |     1029 | 2024-06-06 | 9INE              | W   | 0.879      | 0.450        | -                | 0.480 (0.190)    | 0 (0.000) |    11.79 | flusha, Golden, HEAP, JW, Peppzor |
|           43 |     1081 | 2024-06-05 | SINNERS           | W   | 0.873      | 0.435        | 0.048 (0.018)    | 0.769 (0.292)    | 0 (0.000) |    17.70 | flusha, Golden, HEAP, JW, Peppzor |
|           42 |     1099 | 2024-06-05 | Passion UA        | W   | 0.871      | 0.500        | 0.163 (0.071)    | 1.000 (0.436)    | 0 (0.000) |    20.56 | flusha, Golden, HEAP, JW, Peppzor |
|           41 |     1154 | 2024-06-03 | Space             | L   | 0.860      | -            | -                | -                | -         |   -12.45 | flusha, Golden, HEAP, JW, Peppzor |
|           40 |     1484 | 2024-05-21 | PERA              | L   | 0.774      | -            | -                | -                | -         |    -9.33 | Golden, HEAP, JW, Peppzor, Sapec  |
|           39 |     1487 | 2024-05-21 | DMS               | L   | 0.773      | -            | -                | -                | -         |   -11.82 | Golden, HEAP, JW, Peppzor, Sapec  |
|           38 |     1526 | 2024-05-20 | B8                | L   | 0.766      | -            | -                | -                | -         |    -4.73 | Golden, HEAP, JW, Peppzor, Sapec  |
|           37 |     1610 | 2024-05-17 | ALTERNATE aTTaX   | W   | 0.747      | 0.435        | 0.041 (0.013)    | 0.638 (0.207)    | 0 (0.000) |    14.03 | Golden, HEAP, JW, Peppzor, Sapec  |
|           36 |     1659 | 2024-05-16 | MASONIC           | L   | 0.738      | -            | -                | -                | -         |   -14.56 | Golden, HEAP, JW, Peppzor, Sapec  |
|           35 |     1690 | 2024-05-15 | Permitta          | W   | 0.734      | 0.435        | -                | 0.790 (0.252)    | 0 (0.000) |    11.87 | Golden, HEAP, JW, Peppzor, Sapec  |
|           34 |     1703 | 2024-05-15 | 9INE              | W   | 0.732      | -            | -                | -                | -         |     2.62 | Golden, HEAP, JW, Peppzor, Sapec  |
|           33 |     1707 | 2024-05-15 | Rhyno             | L   | 0.731      | -            | -                | -                | -         |    -7.89 | Golden, HEAP, JW, Peppzor, Sapec  |
|           32 |     1748 | 2024-05-14 | Space             | L   | 0.727      | -            | -                | -                | -         |   -12.98 | Golden, HEAP, JW, Peppzor, Sapec  |
|           31 |     1782 | 2024-05-13 | Zero Tenacity     | L   | 0.719      | -            | -                | -                | -         |    -7.16 | Golden, HEAP, JW, Peppzor, Sapec  |
|           30 |     1855 | 2024-05-10 | Metizport         | L   | 0.700      | -            | -                | -                | -         |    -8.89 | Golden, HEAP, JW, Peppzor, Sapec  |
|           29 |     1984 | 2024-05-03 | Zero Tenacity     | W   | 0.654      | 0.435        | 0.173 (0.049)    | 1.000 (0.284)    | -         |    14.07 | Golden, HEAP, JW, Peppzor, Sapec  |
|           28 |     2017 | 2024-05-02 | RUSH B            | W   | 0.646      | -            | -                | -                | -         |     8.94 | Golden, HEAP, JW, Peppzor, Sapec  |
|           27 |     2038 | 2024-05-01 | BetBoom           | L   | 0.639      | -            | -                | -                | -         |    -0.87 | Golden, HEAP, JW, Peppzor, Sapec  |
|           26 |     2055 | 2024-04-30 | Enterprise        | W   | 0.633      | 0.435        | 0.050 (0.014)    | -                | -         |    10.05 | Golden, HEAP, JW, Peppzor, Sapec  |
|           25 |     2063 | 2024-04-30 | HAVU              | L   | 0.632      | -            | -                | -                | -         |   -14.49 | Golden, HEAP, JW, Peppzor, Sapec  |
|           24 |     2077 | 2024-04-29 | ex-Guild Eagles   | W   | 0.627      | -            | -                | -                | -         |     9.29 | Golden, HEAP, JW, Peppzor, Sapec  |
|           23 |     2135 | 2024-04-27 | Illuminar         | W   | 0.611      | -            | -                | -                | -         |     2.71 | Golden, HEAP, JW, Peppzor, Sapec  |
|           22 |     2175 | 2024-04-25 | HAVU              | W   | 0.600      | -            | -                | -                | -         |     5.02 | Golden, HEAP, JW, Peppzor, Sapec  |
|           21 |     2182 | 2024-04-25 | Zero Tenacity     | W   | 0.598      | 0.384        | 0.173 (0.040)    | 1.000 (0.230)    | -         |    13.63 | Golden, HEAP, JW, Peppzor, Sapec  |
|           20 |     2212 | 2024-04-23 | Insilio           | L   | 0.587      | -            | -                | -                | -         |    -8.03 | Golden, HEAP, JW, Peppzor, Sapec  |
|           19 |     2232 | 2024-04-22 | MOUZ NXT          | L   | 0.579      | -            | -                | -                | -         |    -5.04 | Golden, HEAP, JW, Peppzor, Sapec  |
|           18 |     2271 | 2024-04-20 | PERA              | W   | 0.567      | 0.500        | 0.061 (0.017)    | -                | -         |    10.15 | Golden, HEAP, JW, Peppzor, Sapec  |
|           17 |     2368 | 2024-04-18 | DMS               | L   | 0.553      | -            | -                | -                | -         |    -9.24 | Golden, HEAP, JW, Peppzor, Sapec  |
|           16 |     2432 | 2024-04-17 | Endpoint          | L   | 0.544      | -            | -                | -                | -         |    -8.57 | Golden, HEAP, JW, Peppzor, Sapec  |
|           15 |     2594 | 2024-04-10 | Permitta          | L   | 0.498      | -            | -                | -                | -         |    -6.63 | Golden, HEAP, JW, Peppzor, Sapec  |
|           14 |     2695 | 2024-04-07 | Metizport         | L   | 0.480      | -            | -                | -                | -         |    -5.87 | Golden, HEAP, JW, Peppzor, Sapec  |
|           13 |     2699 | 2024-04-07 | Alliance          | W   | 0.479      | -            | -                | -                | -         |     6.94 | Golden, HEAP, JW, Peppzor, Sapec  |
|           12 |     2711 | 2024-04-06 | Onliners5         | W   | 0.473      | -            | -                | -                | -         |     0.87 | Golden, HEAP, JW, Peppzor, Sapec  |
|           11 |     2763 | 2024-04-04 | Sangal            | L   | 0.460      | -            | -                | -                | -         |    -3.93 | Golden, HEAP, JW, Peppzor, Sapec  |
|           10 |     2807 | 2024-04-03 | 9 Pandas          | L   | 0.453      | -            | -                | -                | -         |    -4.33 | Golden, HEAP, JW, Peppzor, Sapec  |
|            9 |     2817 | 2024-04-03 | BIG               | L   | 0.452      | -            | -                | -                | -         |    -1.50 | Golden, HEAP, JW, Peppzor, Sapec  |
|            8 |     2907 | 2024-03-28 | KOI               | W   | 0.413      | 0.500        | 0.076 (0.016)    | -                | -         |     9.94 | Golden, HEAP, JW, Peppzor, Sapec  |
|            7 |     3169 | 2024-03-14 | TSM               | L   | 0.321      | -            | -                | -                | -         |    -7.72 | flusha, HEAP, JW, Peppzor, Sapec  |
|            6 |     3288 | 2024-03-10 | Alliance          | L   | 0.293      | -            | -                | -                | -         |    -4.98 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            5 |     3311 | 2024-03-09 | Metizport         | W   | 0.286      | -            | -                | -                | -         |     4.96 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            4 |     3315 | 2024-03-09 | Onliners5         | W   | 0.285      | -            | -                | -                | -         |     0.51 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            3 |     3378 | 2024-03-06 | 9INE              | W   | 0.267      | -            | -                | -                | -         |     0.92 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            2 |     4072 | 2024-02-02 | Metizport         | L   | 0.047      | -            | -                | -                | -         |    -0.70 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            1 |     4077 | 2024-02-02 | Sashi             | W   | 0.047      | -            | -                | -                | -         |     1.20 | HEAP, JW, Peppzor, Sapec, SHiNE   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,028.25)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $1,000.00      | $900.38         |
| 2024-04-07 |      0.480 | $2,350.00      | $1,127.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

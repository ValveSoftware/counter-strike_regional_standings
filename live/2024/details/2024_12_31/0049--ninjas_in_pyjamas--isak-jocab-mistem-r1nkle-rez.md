### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [49](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [36]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1130.9<br />
<br />
Final Rank Value (1130.9) = Starting Rank Value (1139.6) + Head To Head Adjustments (-8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.473[<sup>1</sup>](#table2)
- Bounty Collected: 0.440[<sup>2</sup>](#table1)
- Opponent Network: 0.116[<sup>2</sup>](#table1)
- LAN Wins: 0.489[<sup>2</sup>](#table1)

The average of these factors is 0.380<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1139.6
- 400 + ( ( 0.380 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1139.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      539 | 2024-11-24 | Spirit        | L   | 0.965      | -            | -                | -                | -         |    -0.41 | isak, jocab, MisteM, r1nkle, REZ |
|           32 |      546 | 2024-11-23 | 9 Pandas      | W   | 0.963      | 0.143        | 0.103 (0.014)    | 0.811 (0.111)    | 1 (0.963) |    19.09 | isak, jocab, MisteM, r1nkle, REZ |
|           31 |      572 | 2024-11-23 | TSM           | W   | 0.957      | 0.143        | 0.037 (0.005)    | 0.519 (0.071)    | 1 (0.957) |     8.07 | isak, jocab, MisteM, r1nkle, REZ |
|           30 |      604 | 2024-11-21 | HEROIC        | L   | 0.950      | -            | -                | -                | -         |    -1.25 | isak, jocab, MisteM, r1nkle, REZ |
|           29 |      620 | 2024-11-21 | PARIVISION    | W   | 0.944      | 0.143        | 0.025 (0.003)    | 0.321 (0.043)    | 1 (0.944) |    10.08 | isak, jocab, MisteM, r1nkle, REZ |
|           28 |      632 | 2024-11-20 | G2            | L   | 0.943      | -            | -                | -                | -         |    -0.19 | isak, jocab, MisteM, r1nkle, REZ |
|           27 |      832 | 2024-11-12 | BetBoom       | L   | 0.885      | -            | -                | -                | -         |   -12.66 | isak, jocab, MisteM, r1nkle, REZ |
|           26 |      863 | 2024-11-11 | Zero Tenacity | W   | 0.880      | 0.384        | 0.080 (0.027)    | 0.650 (0.220)    | 0 (0.000) |    12.99 | isak, jocab, MisteM, r1nkle, REZ |
|           25 |      903 | 2024-11-09 | Metizport     | L   | 0.867      | -            | -                | -                | -         |    -7.92 | isak, jocab, MisteM, r1nkle, REZ |
|           24 |      924 | 2024-11-08 | Alliance      | W   | 0.860      | 0.432        | 0.033 (0.012)    | 0.421 (0.157)    | 1 (0.860) |     6.94 | isak, jocab, MisteM, r1nkle, REZ |
|           23 |     1203 | 2024-10-25 | Imperial      | L   | 0.766      | -            | -                | -                | -         |    -9.44 | isak, jocab, MisteM, r1nkle, REZ |
|           22 |     1231 | 2024-10-23 | HEROIC        | L   | 0.754      | -            | -                | -                | -         |    -0.85 | isak, jocab, MisteM, r1nkle, REZ |
|           21 |     1233 | 2024-10-23 | Imperial      | W   | 0.753      | 0.477        | 0.151 (0.054)    | 0.492 (0.176)    | 0 (0.000) |    14.44 | isak, jocab, MisteM, r1nkle, REZ |
|           20 |     1378 | 2024-10-16 | JANO          | L   | 0.707      | -            | -                | -                | -         |   -18.05 | isak, jocab, MisteM, r1nkle, REZ |
|           19 |     1391 | 2024-10-16 | B8            | L   | 0.705      | -            | -                | -                | -         |    -8.97 | isak, jocab, MisteM, r1nkle, REZ |
|           18 |     1671 | 2024-10-04 | ECSTATIC      | L   | 0.624      | -            | -                | -                | -         |   -13.03 | isak, jocab, MisteM, r1nkle, REZ |
|           17 |     2558 | 2024-09-07 | HEROIC        | L   | 0.446      | -            | -                | -                | -         |    -0.58 | alex, isak, maxster, r1nkle, REZ |
|           16 |     2609 | 2024-09-05 | FaZe          | L   | 0.434      | -            | -                | -                | -         |    -0.24 | alex, isak, maxster, r1nkle, REZ |
|           15 |     2658 | 2024-09-04 | Natus Vincere | L   | 0.427      | -            | -                | -                | -         |    -0.34 | alex, isak, maxster, r1nkle, REZ |
|           14 |     2692 | 2024-09-03 | HEROIC        | W   | 0.419      | 0.889        | 0.776 (0.289)    | 0.632 (0.236)    | 1 (0.419) |    12.76 | alex, isak, maxster, r1nkle, REZ |
|           13 |     2799 | 2024-08-29 | Monte         | L   | 0.387      | -            | -                | -                | -         |    -7.61 | alex, isak, maxster, r1nkle, REZ |
|           12 |     2810 | 2024-08-29 | GUN5          | L   | 0.386      | -            | -                | -                | -         |    -7.34 | alex, isak, maxster, r1nkle, REZ |
|           11 |     3155 | 2024-08-21 | AMKAL         | L   | 0.334      | -            | -                | -                | -         |    -8.75 | alex, isak, maxster, r1nkle, REZ |
|           10 |     3255 | 2024-08-19 | Cloud9        | L   | 0.320      | -            | -                | -                | -         |    -6.28 | alex, isak, maxster, r1nkle, REZ |
|            9 |     3262 | 2024-08-19 | PARIVISION    | W   | 0.319      | -            | -                | -                | 0 (0.000) |     2.48 | alex, isak, maxster, r1nkle, REZ |
|            8 |     3725 | 2024-08-04 | Astralis      | L   | 0.219      | -            | -                | -                | -         |    -1.73 | alex, isak, maxster, r1nkle, REZ |
|            7 |     3749 | 2024-08-03 | G2            | L   | 0.213      | -            | -                | -                | -         |    -0.06 | alex, isak, maxster, r1nkle, REZ |
|            6 |     3787 | 2024-08-02 | FaZe          | W   | 0.206      | 0.581        | 0.853 (0.102)    | 0.513 (0.061)    | 1 (0.206) |     6.39 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3831 | 2024-08-01 | Cloud9        | W   | 0.199      | 0.581        | 0.073 (0.008)    | 0.396 (0.046)    | 1 (0.199) |     2.38 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3883 | 2024-07-31 | G2            | L   | 0.192      | -            | -                | -                | -         |    -0.05 | alex, isak, maxster, r1nkle, REZ |
|            3 |     4237 | 2024-07-20 | Passion UA    | L   | 0.119      | -            | -                | -                | -         |    -1.48 | alex, isak, maxster, r1nkle, REZ |
|            2 |     4311 | 2024-07-18 | MOUZ NXT      | W   | 0.107      | -            | -                | -                | -         |     0.30 | alex, isak, maxster, r1nkle, REZ |
|            1 |     4443 | 2024-07-16 | Nexus         | W   | 0.093      | 0.500        | 0.350 (0.016)    | 0.807 (0.038)    | -         |     2.55 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,010.99)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.886 | $1,500.00      | $1,329.09       |
| 2024-11-09 |      0.867 | $11,635.00     | $10,083.30      |
| 2024-10-20 |      0.733 | $5,000.00      | $3,666.76       |
| 2024-09-22 |      0.547 | $7,000.00      | $3,829.21       |
| 2024-08-25 |      0.360 | $5,000.00      | $1,801.13       |
| 2024-08-04 |      0.219 | $10,500.00     | $2,301.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

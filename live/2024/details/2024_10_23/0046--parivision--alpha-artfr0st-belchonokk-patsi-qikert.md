### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [46](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [31]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  1096.9<br />
<br />
Final Rank Value (1096.9) = Starting Rank Value (1101.4) + Head To Head Adjustments (-4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.444[<sup>1</sup>](#table2)
- Bounty Collected: 0.466[<sup>2</sup>](#table1)
- Opponent Network: 0.279[<sup>2</sup>](#table1)
- LAN Wins: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.358<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1101.4
- 400 + ( ( 0.358 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1101.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       97 | 2024-10-18 | UNPAID            | L   | 1.000      | -            | -                | -                | -         |   -14.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           61 |      117 | 2024-10-17 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -9.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           60 |      145 | 2024-10-16 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -19.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           59 |      152 | 2024-10-16 | Solid             | W   | 1.000      | 0.624        | -                | 0.663 (0.414)    | 1 (1.000) |    10.48 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           58 |      176 | 2024-10-15 | Aurora            | W   | 1.000      | 0.500        | 0.185 (0.093)    | 0.496 (0.248)    | 0 (0.000) |    16.95 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           57 |      404 | 2024-10-05 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -4.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           56 |      477 | 2024-10-03 | Spirit Academy    | W   | 1.000      | 0.435        | 0.114 (0.049)    | 0.801 (0.348)    | 0 (0.000) |    13.66 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           55 |      882 | 2024-09-23 | Monte             | L   | 0.998      | -            | -                | -                | -         |   -17.97 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           54 |     1188 | 2024-09-12 | GUN5              | L   | 0.926      | -            | -                | -                | -         |   -16.76 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           53 |     1236 | 2024-09-11 | 9INE              | W   | 0.918      | 0.384        | 0.106 (0.038)    | 0.714 (0.252)    | 0 (0.000) |     9.44 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           52 |     1438 | 2024-09-04 | Monte             | W   | 0.871      | 0.384        | -                | 0.810 (0.271)    | 0 (0.000) |    10.39 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           51 |     1590 | 2024-08-29 | AMKAL             | W   | 0.832      | -            | -                | -                | 0 (0.000) |     8.05 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           50 |     1704 | 2024-08-27 | Gaimin Gladiators | L   | 0.818      | -            | -                | -                | -         |   -20.66 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           49 |     1809 | 2024-08-25 | Monte Gen         | L   | 0.807      | -            | -                | -                | -         |   -20.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           48 |     1868 | 2024-08-23 | GamerLegion       | W   | 0.792      | 0.143        | 0.267 (0.030)    | -                | 0 (0.000) |    11.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           47 |     1904 | 2024-08-22 | B8                | W   | 0.784      | 0.143        | 0.236 (0.026)    | -                | 0 (0.000) |    13.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           46 |     1936 | 2024-08-21 | SINNERS           | L   | 0.779      | -            | -                | -                | -         |   -10.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |     1959 | 2024-08-21 | ex-Enterprise     | W   | 0.778      | -            | -                | -                | -         |     4.92 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |     1999 | 2024-08-20 | 9 Pandas          | W   | 0.772      | 0.500        | 0.076 (0.029)    | 0.690 (0.266)    | -         |    11.52 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     2030 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.766      | -            | -                | -                | -         |    -7.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     2126 | 2024-08-15 | OG                | L   | 0.739      | -            | -                | -                | -         |   -18.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     2134 | 2024-08-15 | 9INE              | W   | 0.739      | -            | -                | -                | -         |     7.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     2142 | 2024-08-15 | Metizport         | W   | 0.738      | -            | -                | -                | -         |     6.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     2180 | 2024-08-13 | RUSH B            | W   | 0.727      | -            | -                | -                | -         |     4.53 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     2225 | 2024-08-12 | Monte             | W   | 0.720      | 0.500        | -                | 0.810 (0.292)    | -         |     7.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     2310 | 2024-08-09 | 3DMAX             | L   | 0.699      | -            | -                | -                | -         |    -2.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     2391 | 2024-08-07 | SINNERS           | W   | 0.685      | -            | -                | -                | -         |    11.37 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     2423 | 2024-08-06 | Sangal            | L   | 0.680      | -            | -                | -                | -         |    -2.42 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2437 | 2024-08-06 | Aurora Young Blud | W   | 0.678      | -            | -                | -                | -         |     6.00 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2455 | 2024-08-05 | ENCE              | W   | 0.672      | 0.435        | 0.442 (0.129)    | -                | -         |    18.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2478 | 2024-08-04 | Betera            | L   | 0.667      | -            | -                | -                | -         |   -19.70 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2519 | 2024-08-03 | GUN5              | L   | 0.659      | -            | -                | -                | -         |   -15.67 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2536 | 2024-08-03 | CYBERSHOKE        | W   | 0.658      | -            | -                | -                | -         |     6.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2546 | 2024-08-02 | TSM               | W   | 0.653      | 0.500        | 0.081 (0.026)    | 0.768 (0.251)    | -         |     6.62 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     2587 | 2024-08-01 | 9 Pandas          | W   | 0.647      | 0.500        | 0.076 (0.025)    | 0.690 (0.223)    | -         |     8.40 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     2700 | 2024-07-30 | Permitta          | W   | 0.631      | -            | -                | -                | -         |     5.88 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     2802 | 2024-07-26 | UNPAID            | L   | 0.606      | -            | -                | -                | -         |    -3.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     2817 | 2024-07-26 | True Rippers      | W   | 0.604      | -            | -                | -                | 1 (0.604) |     1.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     2848 | 2024-07-25 | ENCE              | L   | 0.598      | -            | -                | -                | -         |    -2.45 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     2886 | 2024-07-24 | The MongolZ       | W   | 0.591      | 0.650        | 0.696 (0.267)    | 0.597 (0.230)    | 1 (0.591) |    18.17 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     2892 | 2024-07-24 | Aurora            | L   | 0.590      | -            | -                | -                | -         |    -5.91 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3566 | 2024-06-14 | Permitta          | L   | 0.325      | -            | -                | -                | -         |    -7.15 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3668 | 2024-06-10 | RUSH B            | W   | 0.298      | -            | -                | -                | -         |     1.89 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3673 | 2024-06-10 | 3DMAX             | L   | 0.298      | -            | -                | -                | -         |    -0.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3679 | 2024-06-10 | SINNERS           | L   | 0.297      | -            | -                | -                | -         |    -3.19 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3713 | 2024-06-09 | Aurora            | L   | 0.292      | -            | -                | -                | -         |    -3.36 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3720 | 2024-06-09 | 9 Pandas          | W   | 0.292      | -            | -                | -                | -         |     4.05 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3729 | 2024-06-09 | Monte             | W   | 0.291      | -            | -                | -                | -         |     1.41 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3734 | 2024-06-09 | SAW               | L   | 0.291      | -            | -                | -                | -         |    -1.21 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3944 | 2024-06-05 | Aurora            | L   | 0.267      | -            | -                | -                | -         |    -2.95 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3994 | 2024-06-04 | Monte             | W   | 0.260      | -            | -                | -                | -         |     1.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     4401 | 2024-05-20 | Sangal            | L   | 0.158      | -            | -                | -                | -         |    -0.54 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           10 |     4479 | 2024-05-17 | Zero Tenacity     | W   | 0.140      | -            | -                | -                | -         |     1.98 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            9 |     4510 | 2024-05-16 | Aurora            | L   | 0.134      | -            | -                | -                | -         |    -1.47 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            8 |     4528 | 2024-05-16 | Eternal Fire      | L   | 0.132      | -            | -                | -                | -         |    -0.04 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            7 |     4568 | 2024-05-15 | B8                | W   | 0.126      | -            | -                | -                | -         |     2.45 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            6 |     4751 | 2024-05-09 | Endpoint          | L   | 0.086      | -            | -                | -                | -         |    -1.87 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            5 |     4910 | 2024-05-01 | Passion UA        | L   | 0.032      | -            | -                | -                | -         |    -0.53 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            4 |     4924 | 2024-05-01 | fnatic            | L   | 0.031      | -            | -                | -                | -         |    -0.20 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            3 |     4949 | 2024-04-29 | 3DMAX             | L   | 0.020      | -            | -                | -                | -         |    -0.04 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            2 |     4959 | 2024-04-29 | Zero Tenacity     | W   | 0.018      | -            | -                | -                | -         |     0.26 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            1 |     4996 | 2024-04-27 | Sangal            | W   | 0.006      | -            | -                | -                | -         |     0.16 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,221.66)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-10-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-26 |      1.000 | $500.00        | $500.00         |
| 2024-08-06 |      0.680 | $10,000.00     | $6,795.05       |
| 2024-06-09 |      0.293 | $6,500.00      | $1,906.81       |
| 2024-05-02 |      0.040 | $500.00        | $19.80          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, BELCHONOKK, Jame, nota, Qikert<br />
Global Rank: [93](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [64]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  871.4<br />
<br />
Final Rank Value (871.4) = Starting Rank Value (842.0) + Head To Head Adjustments (29.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.116[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.226<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 842.0
- 400 + ( ( 0.226 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 842.0


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
|           42 |      103 | 2025-01-23 | CPH Wolves        | W   | 1.000      | 0.500        | 0.016 (0.008)    | 0.393 (0.197)    | 0 (0.000) |    13.60 | alpha, BELCHONOKK, Jame, nota, Qikert      |
|           41 |      189 | 2025-01-21 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -9.45 | alpha, BELCHONOKK, Jame, nota, Qikert      |
|           40 |      872 | 2024-11-22 | TSM               | L   | 0.757      | -            | -                | -                | -         |   -12.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |      892 | 2024-11-21 | Ninjas in Pyjamas | L   | 0.751      | -            | -                | -                | -         |    -6.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |      900 | 2024-11-20 | Falcons           | L   | 0.750      | -            | -                | -                | -         |    -0.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     1225 | 2024-11-07 | Nemiga            | L   | 0.658      | -            | -                | -                | -         |    -2.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     1231 | 2024-11-06 | SINNERS           | W   | 0.654      | 0.426        | 0.095 (0.026)    | 0.718 (0.200)    | 0 (0.000) |    14.62 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     1601 | 2024-10-18 | UNPAID            | L   | 0.526      | -            | -                | -                | -         |    -6.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     1621 | 2024-10-17 | fnatic            | L   | 0.520      | -            | -                | -                | -         |    -3.59 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     1649 | 2024-10-16 | Sashi             | L   | 0.514      | -            | -                | -                | -         |    -5.58 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     1656 | 2024-10-16 | Solid             | W   | 0.513      | 0.624        | 0.047 (0.015)    | 0.679 (0.218)    | 1 (0.513) |     9.28 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     1680 | 2024-10-15 | Aurora            | W   | 0.507      | 0.500        | 0.057 (0.014)    | 0.425 (0.108)    | 0 (0.000) |     9.69 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     1908 | 2024-10-05 | 3DMAX             | L   | 0.438      | -            | -                | -                | -         |    -0.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     1981 | 2024-10-03 | Spirit Academy    | W   | 0.425      | 0.435        | 0.169 (0.031)    | 1.000 (0.185)    | 0 (0.000) |     9.58 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     2386 | 2024-09-23 | Monte             | L   | 0.358      | -            | -                | -                | -         |    -3.29 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     2692 | 2024-09-12 | GUN5              | L   | 0.287      | -            | -                | -                | -         |    -2.15 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     2740 | 2024-09-11 | 9INE              | W   | 0.279      | 0.384        | 0.125 (0.013)    | 1.000 (0.107)    | 0 (0.000) |     5.76 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     2942 | 2024-09-04 | Monte             | W   | 0.232      | 0.384        | 0.077 (0.007)    | 0.600 (0.053)    | 0 (0.000) |     5.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3094 | 2024-08-29 | AMKAL             | W   | 0.192      | 0.384        | -                | 0.276 (0.020)    | 0 (0.000) |     2.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3208 | 2024-08-27 | Gaimin Gladiators | L   | 0.178      | -            | -                | -                | -         |    -2.31 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3313 | 2024-08-25 | Monte Gen         | L   | 0.167      | -            | -                | -                | -         |    -3.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3372 | 2024-08-23 | GamerLegion       | W   | 0.152      | -            | -                | -                | 0 (0.000) |     1.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3408 | 2024-08-22 | B8                | W   | 0.145      | 0.143        | 0.154 (0.003)    | -                | 0 (0.000) |     3.74 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3440 | 2024-08-21 | SINNERS           | L   | 0.140      | -            | -                | -                | -         |    -1.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3463 | 2024-08-21 | ex-Enterprise     | W   | 0.139      | -            | -                | -                | -         |     2.15 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3503 | 2024-08-20 | 9 Pandas          | W   | 0.133      | 0.500        | 0.163 (0.011)    | 0.864 (0.057)    | -         |     3.39 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3534 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.126      | -            | -                | -                | -         |    -0.92 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3630 | 2024-08-15 | OG                | L   | 0.100      | -            | -                | -                | -         |    -1.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3638 | 2024-08-15 | 9INE              | W   | 0.100      | 0.143        | -                | 1.000 (0.014)    | -         |     2.10 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3646 | 2024-08-15 | Metizport         | W   | 0.098      | -            | -                | -                | -         |     2.92 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3684 | 2024-08-13 | RUSH B            | W   | 0.087      | -            | -                | -                | -         |     1.54 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3729 | 2024-08-12 | Monte             | W   | 0.081      | -            | -                | -                | -         |     0.41 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3814 | 2024-08-09 | 3DMAX             | L   | 0.060      | -            | -                | -                | -         |    -0.09 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     3895 | 2024-08-07 | SINNERS           | W   | 0.045      | -            | -                | -                | -         |     1.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     3927 | 2024-08-06 | HEROIC            | L   | 0.040      | -            | -                | -                | -         |    -0.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     3941 | 2024-08-06 | Chimera           | W   | 0.038      | -            | -                | -                | -         |     0.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     3959 | 2024-08-05 | ENCE              | W   | 0.032      | 0.435        | 0.331 (0.005)    | -                | -         |     0.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     3982 | 2024-08-04 | Betera            | L   | 0.027      | -            | -                | -                | -         |    -0.52 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     4023 | 2024-08-03 | GUN5              | L   | 0.020      | -            | -                | -                | -         |    -0.14 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     4040 | 2024-08-03 | CYBERSHOKE        | W   | 0.018      | -            | -                | -                | -         |     0.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     4050 | 2024-08-02 | TSM               | W   | 0.014      | -            | -                | -                | -         |     0.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     4091 | 2024-08-01 | 9 Pandas          | W   | 0.007      | -            | -                | -                | -         |     0.07 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,183.61)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.540 | $5,000.00      | $2,697.89       |
| 2024-10-06 |      0.447 | $2,000.00      | $894.98         |
| 2024-09-26 |      0.380 | $500.00        | $190.00         |
| 2024-08-06 |      0.040 | $10,000.00     | $400.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

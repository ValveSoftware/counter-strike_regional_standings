### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, Nodios, Patti, Queenix, salazar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [66](../standings_global.md)<br />
Regional Rank: [46]( ../standings_europe.md)<br />
Final Rank Value:  984.1<br />
<br />
Final Rank Value (984.1) = Starting Rank Value (1027.8) + Head To Head Adjustments (-43.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.440[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.154[<sup>2</sup>](#table1)
- LAN Wins: 0.226[<sup>2</sup>](#table1)

The average of these factors is 0.310<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1027.8
- 400 + ( ( 0.310 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1027.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |      675 | 2024-06-14 | GUN5             | L   | 0.933      | -            | -                | -                | -         |   -14.58 | kraghen, Nodios, Patti, Queenix, salazar |
|           55 |      802 | 2024-06-10 | Enterprise       | L   | 0.905      | -            | -                | -                | -         |   -17.69 | kraghen, Nodios, Patti, Queenix, salazar |
|           54 |      857 | 2024-06-09 | 5W               | L   | 0.898      | -            | -                | -                | -         |   -16.47 | kraghen, Nodios, Patti, Queenix, salazar |
|           53 |      900 | 2024-06-08 | EYEBALLERS       | W   | 0.893      | 0.450        | -                | 0.571 (0.230)    | 0 (0.000) |    10.04 | kraghen, Nodios, Patti, Queenix, salazar |
|           52 |      957 | 2024-06-07 | 3DMAX            | L   | 0.886      | -            | -                | -                | -         |    -8.15 | kraghen, Nodios, Patti, Queenix, salazar |
|           51 |     1021 | 2024-06-06 | Astralis Talent  | W   | 0.880      | 0.450        | -                | 0.180 (0.071)    | 0 (0.000) |     5.78 | kraghen, Nodios, Patti, Queenix, salazar |
|           50 |     1274 | 2024-05-30 | Lynn Vision      | L   | 0.831      | -            | -                | -                | -         |   -13.35 | kraghen, Nodios, Patti, Queenix, salazar |
|           49 |     1318 | 2024-05-28 | The MongolZ      | L   | 0.818      | -            | -                | -                | -         |    -0.27 | kraghen, Nodios, Patti, Queenix, salazar |
|           48 |     1603 | 2024-05-17 | ENCE             | L   | 0.748      | -            | -                | -                | -         |    -3.96 | kraghen, Nodios, Patti, Queenix, salazar |
|           47 |     1609 | 2024-05-17 | GamerLegion      | L   | 0.747      | -            | -                | -                | -         |    -7.39 | kraghen, Nodios, Patti, Queenix, salazar |
|           46 |     1619 | 2024-05-17 | Rebels           | L   | 0.745      | -            | -                | -                | -         |   -12.37 | kraghen, Nodios, Patti, Queenix, salazar |
|           45 |     1702 | 2024-05-15 | BLEED            | W   | 0.732      | 0.384        | 0.162 (0.046)    | 0.439 (0.124)    | 0 (0.000) |    17.87 | kraghen, Nodios, Patti, Queenix, salazar |
|           44 |     1927 | 2024-05-07 | Grannys Knockers | L   | 0.678      | -            | -                | -                | -         |   -17.27 | kraghen, Nodios, Patti, Queenix, salazar |
|           43 |     1937 | 2024-05-06 | 500              | W   | 0.673      | -            | -                | -                | -         |     0.54 | kraghen, Nodios, Patti, Queenix, salazar |
|           42 |     1949 | 2024-05-05 | Sashi            | W   | 0.667      | 0.143        | 0.234 (0.022)    | 1.000 (0.095)    | -         |    15.17 | kraghen, Nodios, Patti, Queenix, salazar |
|           41 |     1955 | 2024-05-05 | Kronjyllands     | W   | 0.666      | -            | -                | -                | -         |     0.54 | kraghen, Nodios, Patti, Queenix, salazar |
|           40 |     1985 | 2024-05-03 | AMKAL            | L   | 0.653      | -            | -                | -                | -         |    -8.01 | kraghen, Nodios, Patti, Queenix, salazar |
|           39 |     2014 | 2024-05-02 | HAVU             | W   | 0.646      | -            | -                | -                | -         |     2.85 | kraghen, Nodios, Patti, Queenix, salazar |
|           38 |     2021 | 2024-05-02 | SINNERS          | W   | 0.645      | 0.435        | 0.048 (0.014)    | 0.769 (0.216)    | -         |     9.12 | kraghen, Nodios, Patti, Queenix, salazar |
|           37 |     2056 | 2024-04-30 | AMKAL            | L   | 0.633      | -            | -                | -                | -         |    -8.10 | kraghen, Nodios, Patti, Queenix, salazar |
|           36 |     2083 | 2024-04-29 | kONO             | L   | 0.626      | -            | -                | -                | -         |   -15.41 | kraghen, Nodios, Patti, Queenix, salazar |
|           35 |     2108 | 2024-04-28 | 9 Pandas         | L   | 0.618      | -            | -                | -                | -         |   -11.64 | kraghen, Nodios, Patti, Queenix, salazar |
|           34 |     2157 | 2024-04-26 | ALTERNATE aTTaX  | L   | 0.605      | -            | -                | -                | -         |   -12.77 | kraghen, Nodios, Patti, Queenix, salazar |
|           33 |     2218 | 2024-04-23 | Sashi            | L   | 0.586      | -            | -                | -                | -         |    -7.18 | kraghen, Nodios, Patti, Queenix, salazar |
|           32 |     2233 | 2024-04-22 | BLEED            | L   | 0.579      | -            | -                | -                | -         |    -9.58 | kraghen, Nodios, Patti, Queenix, salazar |
|           31 |     2251 | 2024-04-21 | AMKAL            | W   | 0.573      | 0.384        | 0.111 (0.024)    | 0.515 (0.113)    | -         |     9.27 | kraghen, Nodios, Patti, Queenix, salazar |
|           30 |     2288 | 2024-04-20 | Nemiga           | W   | 0.565      | 0.384        | 0.415 (0.090)    | 0.707 (0.154)    | -         |    11.54 | kraghen, Nodios, Patti, Queenix, salazar |
|           29 |     2423 | 2024-04-17 | SINNERS          | W   | 0.545      | 0.384        | -                | 0.769 (0.161)    | -         |     8.83 | kraghen, Nodios, Patti, Queenix, salazar |
|           28 |     2451 | 2024-04-16 | Permitta         | W   | 0.539      | 0.384        | -                | 0.790 (0.164)    | -         |     6.03 | kraghen, Nodios, Patti, Queenix, salazar |
|           27 |     2779 | 2024-04-04 | JANO             | W   | 0.458      | -            | -                | -                | -         |     1.49 | kraghen, Nodios, Patti, Queenix, salazar |
|           26 |     2994 | 2024-03-23 | G2               | L   | 0.380      | -            | -                | -                | -         |    -0.07 | kraghen, Nodios, Patti, Queenix, salazar |
|           25 |     3003 | 2024-03-22 | FURIA            | W   | 0.374      | 1.000        | 0.355 (0.133)    | 0.563 (0.210)    | 1 (0.374) |    11.57 | kraghen, Nodios, Patti, Queenix, salazar |
|           24 |     3024 | 2024-03-21 | Cloud9           | L   | 0.367      | -            | -                | -                | -         |    -4.63 | kraghen, Nodios, Patti, Queenix, salazar |
|           23 |     3039 | 2024-03-21 | MOUZ             | L   | 0.365      | -            | -                | -                | -         |    -0.09 | kraghen, Nodios, Patti, Queenix, salazar |
|           22 |     3070 | 2024-03-19 | Imperial         | W   | 0.354      | 0.143        | 0.317 (0.016)    | -                | 1 (0.354) |     9.45 | kraghen, Nodios, Patti, Queenix, salazar |
|           21 |     3084 | 2024-03-18 | Lynn Vision      | W   | 0.345      | -            | -                | -                | 1 (0.345) |     5.43 | kraghen, Nodios, Patti, Queenix, salazar |
|           20 |     3105 | 2024-03-17 | The MongolZ      | W   | 0.340      | 0.143        | 1.000 (0.049)    | -                | 1 (0.340) |    10.63 | kraghen, Nodios, Patti, Queenix, salazar |
|           19 |     3116 | 2024-03-17 | Cloud9           | L   | 0.338      | -            | -                | -                | -         |    -4.19 | kraghen, Nodios, Patti, Queenix, salazar |
|           18 |     3451 | 2024-03-04 | BetBoom          | L   | 0.251      | -            | -                | -                | -         |    -0.58 | kraghen, Nodios, Patti, Queenix, salazar |
|           17 |     3457 | 2024-03-03 | ex-Preasy        | L   | 0.248      | -            | -                | -                | -         |    -5.97 | kraghen, Nodios, Patti, Queenix, salazar |
|           16 |     3463 | 2024-03-03 | fnatic           | W   | 0.247      | 0.143        | 0.428 (0.015)    | -                | -         |     7.42 | kraghen, Nodios, Patti, Queenix, salazar |
|           15 |     3475 | 2024-03-03 | SINNERS          | W   | 0.246      | -            | -                | -                | -         |     4.02 | kraghen, Nodios, Patti, Queenix, salazar |
|           14 |     3480 | 2024-03-03 | Monte            | W   | 0.245      | 0.500        | 0.083 (0.010)    | -                | -         |     4.15 | kraghen, Nodios, Patti, Queenix, salazar |
|           13 |     3497 | 2024-03-02 | PARIVISION       | W   | 0.239      | -            | -                | -                | -         |     3.87 | kraghen, Nodios, Patti, Queenix, salazar |
|           12 |     3522 | 2024-02-29 | 3DMAX            | L   | 0.227      | -            | -                | -                | -         |    -1.76 | kraghen, Nodios, Patti, Queenix, salazar |
|           11 |     3667 | 2024-02-22 | ex-Guild Eagles  | W   | 0.179      | -            | -                | -                | 1 (0.179) |     1.51 | kraghen, Nodios, Patti, Queenix, salazar |
|           10 |     3694 | 2024-02-21 | Apeks            | L   | 0.172      | -            | -                | -                | -         |    -3.20 | kraghen, Nodios, Patti, Queenix, salazar |
|            9 |     3725 | 2024-02-20 | OG               | W   | 0.165      | -            | -                | -                | 1 (0.165) |     2.71 | kraghen, Nodios, Patti, Queenix, salazar |
|            8 |     3740 | 2024-02-19 | MOUZ             | L   | 0.160      | -            | -                | -                | -         |    -0.04 | kraghen, Nodios, Patti, Queenix, salazar |
|            7 |     3751 | 2024-02-19 | Monte            | W   | 0.158      | -            | -                | -                | 1 (0.158) |     2.76 | kraghen, Nodios, Patti, Queenix, salazar |
|            6 |     3966 | 2024-02-09 | ex-Preasy        | L   | 0.092      | -            | -                | -                | -         |    -2.22 | kraghen, Nodios, Patti, Queenix, salazar |
|            5 |     3986 | 2024-02-07 | TSM              | W   | 0.078      | -            | -                | -                | -         |     0.33 | kraghen, Nodios, Patti, Queenix, salazar |
|            4 |     4008 | 2024-02-05 | ex-Preasy        | W   | 0.065      | -            | -                | -                | -         |     0.47 | kraghen, Nodios, Patti, Queenix, salazar |
|            3 |     4046 | 2024-02-03 | Sashi            | L   | 0.053      | -            | -                | -                | -         |    -0.53 | kraghen, Nodios, Patti, Queenix, salazar |
|            2 |     4090 | 2024-02-02 | Into the Breach  | W   | 0.045      | -            | -                | -                | -         |     0.14 | kraghen, Nodios, Patti, Queenix, salazar |
|            1 |     4173 | 2024-01-28 | Sangal           | W   | 0.012      | -            | -                | -                | -         |     0.23 | kraghen, Nodios, Patti, Queenix, salazar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,749.51)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.753 | $1,000.00      | $753.47         |
| 2024-05-04 |      0.660 | $2,000.00      | $1,319.46       |
| 2024-05-02 |      0.647 | $1,000.00      | $646.62         |
| 2024-04-22 |      0.579 | $5,000.00      | $2,893.77       |
| 2024-03-31 |      0.434 | $20,000.00     | $8,676.06       |
| 2024-02-09 |      0.092 | $5,000.00      | $460.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
